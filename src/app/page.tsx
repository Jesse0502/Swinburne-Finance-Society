"use client";
import BackgroundSlider from "@/components/BackgroundSlider";
import Footer from "@/components/Footer";
import Events from "@/components/Home/Events";
import OurTeam from "@/components/Home/OurTeam";
import Resources from "@/components/Home/Resources";
import Navbar from "@/components/Navbar";
import Parralax from "@/components/Parralax";
import ScrollVelocity from "@/components/ScrollVelocity";
import AnimateOnVisible from "@/helpers/AnimateOnVisible";
import { darkPrimeColor, whitePrimeColor } from "@/helpers/constants";
import {
  Box,
  Center,
  Flex,
  Text,
  Image,
  Button,
  Link,
  Heading,
  AspectRatio,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Home() {
  const socialMediaIcons = [
    {
      src: "./instagram.png",
      label: "swin.finance",
      link: "https://www.instagram.com/swin.finance/",
    },
    {
      src: "./linkedin.png",
      label: "Linkedin",
      link: "https://www.linkedin.com/company/swinburne-finance-club/",
    },
    { src: "./discord.png", label: "Discord", link: "" },
  ];
  return (
    <Center
      flexDir={"column"}
      // fontFamily={"mono-serif"}
      pos="relative"
      overflowX={"clip"}
      w="full"
    >
      <Navbar />

      <Box
        w="100%"
        // h="110vh"
        pos="relative"
        // bg={darkPrimeColor}
        // color="white"
      >
        <Box mb="10vh" zIndex={99999}>
          <Flex
            flexDir={"column"}
            pos="absolute"
            pr={["5vh", "10vh"]}
            mt="-36"
            // display={["none", "flex"]}
            alignItems={"end"}
            top="44"
            overflow={"clip"}
            right="1"
            gap="5"
          >
            {socialMediaIcons.map(({ src, label, link }) => (
              <Box
                as={Link}
                // @ts-ignore
                href={link}
                // @ts-ignore
                _target={"_blank"}
                zIndex={999}
                position="relative"
                key={label}
                overflow="hidden"
                textDecoration="none"
              >
                <motion.div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    position: "relative",
                    width: "auto",
                    borderRadius: "7vh",
                  }}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={{
                    rest: {
                      width: "40px",
                      backgroundColor: "white",
                    },
                    hover: {
                      width: `${100 + label.length * 5}px`,
                      backgroundColor: "white",
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <Box
                    as={motion.div}
                    left="0"
                    overflow={"clip"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    padding={"10px"}
                    color={darkPrimeColor}
                    textDecoration="none"
                    fontWeight="bold"
                    fontSize="sm"
                    height={"40px"}
                    textAlign={"left"}
                    // @ts-ignore
                    variants={{
                      rest: { opacity: 0, width: "40px" },
                      hover: { opacity: 1, width: "100px" },
                    }}
                  >
                    {label}
                  </Box>

                  <Image
                    as={motion.img}
                    src={src}
                    borderRadius={"full"}
                    boxSize={"40px"}
                    zIndex="2"
                    transitionDelay={"0.3"}
                  />
                </motion.div>
              </Box>
            ))}
          </Flex>

          <Flex
            position="relative"
            width="100%"
            height={["max", "85vh"]}
            flexDir={["column", "row"]}
            overflow="hidden"
          >
            <Box display={["none", "block"]} w={"full"}>
              <video
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src="./bg-vid.mp4"
                autoPlay
                loop
                muted
              />
            </Box>
            <Box display={["block", "none"]} w="full">
              <video
                style={{
                  position: "relative",
                  width: "100%",
                  height: "50%",
                  objectFit: "cover",
                }}
                src="./bg-vid.mp4"
                muted
              />
            </Box>
            <Flex
              position={["relative", "absolute"]}
              top="0"
              left="0"
              width="100%"
              height="100%"
              flexDir="column"
              alignItems="start"
              color="white"
              pl={["0", "10"]}
              pt={["0%", "8%"]}
              bg={["black", "none"]}
            >
              <Text
                fontSize={["4vh", "7vh"]}
                fontWeight="bold"
                w={["100%", "70%"]}
                p={["3", "0"]}
                pr={["0", "10"]}
              >
                Fostering leadership while bridging academic and industry gaps
              </Text>
              <Text
                px={["4", ""]}
                py={["2", "5"]}
                fontSize={["md", "xl"]}
                w={["100%", "65%"]}
                opacity={"0.8"}
              >
                Explore the dynamic world of finance with fellow Swinburne
                students. From market trends and investment strategies to
                industry insights and career opportunities, connect with experts
                and build your financial future.
              </Text>
              <Button
                animation="auto"
                animationDelay="moderate"
                border={`1px solid ${darkPrimeColor}`}
                py="7"
                px="8"
                mt={["3", "6"]}
                mb={[5, 0]}
                ml={[3, 0]}
                rounded="none"
                color={darkPrimeColor}
                _hover={{
                  bg: darkPrimeColor,
                  color: "white",
                  border: `1px solid ${darkPrimeColor}`,
                }}
                bg="white"
                fontSize="lg"
              >
                Join Now
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box
        bg="white"
        h={["max", "80vh"]}
        color={darkPrimeColor}
        textAlign={"center"}
      >
        <Center flexDir={"column"}>
          <Text textAlign={"center"} w="15vh" h="2px" bg={darkPrimeColor} />
        </Center>
        <Text
          fontWeight={"bold"}
          fontSize={"4xl"}
          color={darkPrimeColor}
          py="7"
        >
          Our Mission
        </Text>
        <Center
          gap={["7", "4"]}
          px={["12", "24"]}
          py="10"
          mt="0"
          flexDir={["column", "row"]}
          alignItems={"center"}
        >
          {[
            {
              image: "./group-icon.svg",
              heading: "Leadership",
              text: "Take on leadership roles within the club to develop your management and decision-making skills.",
            },
            {
              image: "./career-growth.svg",
              heading: "Career Growth",
              text: "Connect with industry professionals and potential employers at our events and workshops.",
            },
            {
              image: "./partnership.svg",
              heading: "Partnerships and Exposure",
              text: "Showcase your projects and achievements on our club's social media platforms, gaining valuable exposure.",
            },
            {
              image: "./peer-growth.svg",
              heading: "Peer Support and Community",
              text: "Find a group of peers who understand your entrepreneurial journey and offer encouragement and motivation.",
            },
          ].map((i) => (
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              justify={"center"}
              key={i.text}
              textAlign={"center"}
            >
              <Image
                w={["10", "20"]}
                h={["10", "20"]}
                objectFit={"contain"}
                src={i.image}
              />
              <Box>
                <Text py="2" fontWeight={"bold"} textAlign={"center"}>
                  {i.heading}
                </Text>
                <Text textAlign={"center"} color={"black"}>
                  {i.text}
                </Text>
              </Box>
            </Flex>
          ))}
        </Center>
      </Box>
      <Events />
      <Resources />
      <OurTeam />
      <Footer />
    </Center>
  );
}

function HeroImageSlideshow() {
  const images = ["club_of_the_year.jpg", "bg1.jpg"];
  const [imageSrc, setImageSrc] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImageSrc((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      h="85vh"
      w="50vh"
      background={"gray.200"}
      overflow="hidden"
      flex="1"
      position="relative"
    >
      <Image
        objectFit="cover"
        h="100%"
        w="100%"
        src={images[imageSrc]}
        transition="opacity 0.4s ease-in"
        opacity={fade ? 1 : 0.1}
      />
    </Box>
  );
}
