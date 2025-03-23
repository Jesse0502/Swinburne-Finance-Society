import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const BackgroundSlider: React.FC<{
  images: string[];
  duration?: number;
  transition?: number;
  children: React.ReactNode;
}> = ({ images, duration = 10, transition = 2, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, (duration + transition) * 1000);

    return () => clearInterval(interval);
  }, [images, duration, transition]);

  return (
    <Box position="relative" width="100vw" height="100vh" overflow="hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <Box
          key={index}
          position="absolute"
          top="0"
          left="0"
          overflow={"clip"}
          width="full"
          height="100vh"
          backgroundImage={`url(${image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundBlendMode={"darken"}
          transition={`opacity ${transition}s ease-in-out`}
          opacity={currentIndex === index ? 1 : 0}
          zIndex={-1}
        />
      ))}

      <Box position="relative" zIndex="1" width="100%" height="100%">
        {children}
      </Box>
    </Box>
  );
};

export default BackgroundSlider;
