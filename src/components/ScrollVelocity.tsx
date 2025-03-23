import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Text, Box } from "@chakra-ui/react";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <Box overflow="hidden" w="100%" whiteSpace="nowrap" position="relative">
      <motion.div style={{ x, display: "flex", alignItems: "center" }}>
        {Array.from({ length: 18 }).map((i, idx) => (
          <Text fontSize="5xl" fontWeight="bold" key={idx} mx={4}>
            {children}
          </Text>
        ))}
      </motion.div>
    </Box>
  );
}

export default function ScrollVelocity() {
  return (
    <Box as="section" w="full" bg="gray.100" py={8}>
      <ParallaxText baseVelocity={-5}>New Club Of The Year!!!</ParallaxText>
      <ParallaxText baseVelocity={5}>2024</ParallaxText>
    </Box>
  );
}
