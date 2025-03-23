"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { darkPrimeColor } from "@/helpers/constants";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box>
      <Navbar />
      <Box bg={"black"} pos="relative" h="450px" w="full">
        <Image src="Swinburne-Library.jpg" opacity={0.3} h="inherit" w="full" />
        <Center
          flexDir={"column"}
          alignItems={"start"}
          color={"white"}
          pos="absolute"
          top="43%"
          w="full"
          px="32"
        >
          <Text fontFamily={"mono"} opacity={0.8}>
            WHO WE ARE
          </Text>
          <Text fontSize={"5xl"}>Strategic Financiers & Visionary Leaders</Text>
        </Center>
      </Box>
      <Center mt="20" px="32" mb="32" flexDir={"column"}>
        <Text fontSize={"2xl"} textAlign={"left"} color={darkPrimeColor}>
          Driven by a cohort of ambitious Swinburne University students,
          specializing in finance and business, we provide expert analysis and
          collaborative strategies, shaping the future of financial innovation.
        </Text>
        <Flex gap="10" mt="10">
          {[
            "Empowered by the intellectual rigor of Swinburne University's finance and business programs, our collective is driven to transcend conventional financial paradigms. We synthesize cutting-edge academic theory with pragmatic market insights, delivering expert analysis and strategic frameworks that enable our partners to navigate the complexities of modern financial landscapes.",
            `Central to our ethos is the cultivation of visionary leadership,
            honed through rigorous academic inquiry and practical application.
            We champion a proactive approach to financial strategy, anticipating
            market shifts and leveraging emerging technologies to drive
            transformative outcomes.`,
          ].map((i) => (
            <Text flex="1" fontSize={"sm"} opacity="0.8">
              {i}
            </Text>
          ))}
        </Flex>
        <Text
          mt="12"
          fontSize={"2xl"}
          w="full"
          textAlign={"left"}
          color={darkPrimeColor}
        >
          OUR TEAM
        </Text>

        <Flex justify={"center"} gap="5" flexFlow={"wrap"} w="full" mt="16">
          {[
            {
              img: "logo.jpg",
              name: "Farhan Ehmud",
              title: "President",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eius laborum earum harum suscipit. Modi natus eveniet sed alias earum?",
            },
          ].map(({ img, name, description, title }) => (
            <Flex
              mt="5"
              w="35vh"
              key={Math.random()}
              overflow={"clip"}
              flexDir={"column"}
              flex="4"
            >
              <Avatar.Root
                variant={"solid"}
                size={"full"}
                w="max-content"
                h="30vh"
                key={12}
              >
                <Avatar.Fallback>lala land</Avatar.Fallback>
                <Avatar.Image src={img} />
              </Avatar.Root>
              <Text mt="5" fontSize={"3xl"} color={darkPrimeColor}>
                {name}
              </Text>
              <Text pb="3" opacity="0.6">
                {title}
              </Text>

              <Text w="35vh" mt="2">
                {description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Center>
      <Footer />
    </Box>
  );
};

export default AboutUs;
