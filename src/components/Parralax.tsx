// Photos from https://citizenofnowhe.re/lines-of-the-city
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Text, Image, Box, Center } from "@chakra-ui/react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageTab({ src, index }: { src: string; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Box h="100vh">
      <Box ref={ref}>
        <Image src={src} alt="A London skyscraper" />
      </Box>
      <motion.h2 style={{ y }}>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          {`#00${index + 1}`} Club of the Year
        </Text>
      </motion.h2>
    </Box>
  );
}

export default function Parralax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Center flexDir={"column"} alignItems={"center"} pt="32">
      {[
        // "bg1.jpg",
        // "swin-hero-2.jpg",
        "club_of_the_year.jpg",
        // "bg2.jpg",
        "bg3.jpg",
      ].map((image, index) => (
        <ImageTab src={image} index={index} key={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </Center>
  );
}
