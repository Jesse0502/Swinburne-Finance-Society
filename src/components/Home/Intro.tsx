import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Center,
  Text,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";
import {
  FiDollarSign,
  FiBarChart2,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";
import { darkPrimeColor } from "@/helpers/constants";

const animationStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  .float { animation: float 3s ease-in-out infinite; }
  .spin { animation: spin 8s linear infinite; }
  .pulse { animation: pulse 2s ease-in-out infinite; }
  
  .fade-in {
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .scale-in {
    opacity: 0;
    animation: scaleIn 0.5s forwards;
  }
  
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .slide-in {
    opacity: 0;
    animation: slideIn 0.5s forwards;
  }
  
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const WebsiteRevealCountdown = ({
  onComplete,
  startCountdown,
}: {
  onComplete: () => {};
  startCountdown: boolean;
}) => {
  const [count, setCount] = useState(10);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const audioRef = useRef(null);

  const financeImages = ["/bg1.jpg", "/logo.jpg", "/swinburne-Library.jpg"];

  useEffect(() => {
    if (startCountdown && !isCountingDown) {
      setIsCountingDown(true);
    }
    if (isCountingDown && count > 0) {
      setAnimationStep((prevStep) => (prevStep + 1) % 5);

      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (isCountingDown && count === 0) {
      // 222222222222222222222222222222222222222
      new Audio("/dj-airhorn-sound-39405.mp3").play();
      setTimeout(() => {
        setShowWebsite(true);
        if (onComplete) {
          const a = new Audio("/crowd-cheering-310544.mp3");
          a.volume = 0.4;
          a.play();
          new Audio("/club-music-loop-74178.mp3").play();
          onComplete();
        }
      }, 500);
    }
  }, [count, isCountingDown, startCountdown, onComplete]);

  // 1111111111111111111111
  const handleStartCountdown = () => {
    new Audio("/countdown-122700.mp3").play().then(() => {
      setIsCountingDown(true);
    });
  };

  // Dynamic background color based on count
  const getBgGradient = () => {
    const intensity = Math.floor((count / 10) * 100);
    return `linear(to-b, blue.${900 - intensity}, gray.${900 - intensity})`;
  };

  // Generate animated finance icons
  const renderFinanceIcons = () => {
    const icons = [FiDollarSign, FiBarChart2, FiTrendingUp, FiArrowUpRight];
    const iconElements = [];

    for (let i = 0; i < 15; i++) {
      const Icon = icons[i % icons.length];
      const size = 20 + Math.random() * 40;
      const delay = Math.random() * 5;
      const duration = 3 + Math.random() * 7;
      const animClass = i % 3 === 0 ? "float" : i % 3 === 1 ? "spin" : "pulse";

      iconElements.push(
        <Box
          key={i}
          position="absolute"
          className={animClass}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            opacity: 0.2,
          }}
        >
          <Icon size={size} color={i % 2 === 0 ? "#63B3ED" : "#48BB78"} />
        </Box>
      );
    }

    return iconElements;
  };

  if (showWebsite) {
    return <></>;
  }

  return (
    <>
      <style>{animationStyles}</style>

      <Box
        width="100%"
        height="100vh"
        bg={darkPrimeColor}
        bgGradient={getBgGradient()}
        position="relative"
        overflow="hidden"
        transition="all 0.5s ease"
      >
        {/* Animated background elements */}
        {renderFinanceIcons()}

        {/* Countdown display */}
        <Center height="100%" width="100%" flexDirection="column">
          {!isCountingDown ? (
            <Box className="slide-in">
              <Button
                onClick={handleStartCountdown}
                size="lg"
                colorScheme="blue"
                fontSize="xl"
                px={8}
                py={6}
                _hover={{ transform: "scale(1.05)" }}
              >
                Reveal Our Website
              </Button>
            </Box>
          ) : (
            <>
              <Box
                className="pulse"
                fontSize={count === 0 ? "180px" : "150px"}
                fontWeight="bold"
                color="white"
                textShadow="0px 0px 20px rgba(99, 179, 237, 0.7)"
                transition="all 0.3s ease"
              >
                {count === 0 ? <Text color="blue.400">GO!</Text> : count}
              </Box>

              {/* Show a different finance image for each count */}
              <Flex mt={8} justify="center" gap={4}>
                {financeImages.map((img, index) => (
                  <Box
                    key={index}
                    opacity={index === count % 3 ? 1 : 0.3}
                    transform={index === count % 3 ? "scale(1.1)" : "scale(1)"}
                    transition="all 0.5s ease"
                  >
                    <Image
                      src={img}
                      w="40vh"
                      h="30vh"
                      alt={`Finance theme ${index}`}
                      borderRadius="md"
                      boxShadow="xl"
                      border="2px solid"
                      borderColor={
                        index === count % 3 ? "blue.400" : "transparent"
                      }
                    />
                  </Box>
                ))}
              </Flex>

              {/* Dynamic message based on count */}
              <Box className="fade-in" key={count}>
                <Text
                  mt={8}
                  fontSize="xl"
                  color="blue.100"
                  textAlign="center"
                  maxW="600px"
                >
                  {count > 7
                    ? "Preparing to reveal our new finance platform..."
                    : count > 4
                    ? "Get ready for a new way to manage finances!"
                    : count > 1
                    ? "The future of finance is almost here..."
                    : count === 1
                    ? "One moment away from excellence!"
                    : "Welcome to the future!"}
                </Text>
              </Box>
            </>
          )}
        </Center>
      </Box>
    </>
  );
};

export default WebsiteRevealCountdown;
