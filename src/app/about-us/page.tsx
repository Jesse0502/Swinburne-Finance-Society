"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  CommitteeMember,
  committeeMembers,
  darkPrimeColor,
} from "@/helpers/constants";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const AboutUs = () => {
  const allYears = Object.keys(committeeMembers).map(Number);
  const latestYear = Math.max(...allYears);
  const latestMembers = committeeMembers[latestYear];
  return (
    <Box>
      <Navbar />
      <Box bg={"black"} pos="relative" h={["320px", "420px"]} w="full">
        <Image src="Swinburne-Library.jpg" opacity={0.3} h="inherit" w="full" />
        <Center
          flexDir={"column"}
          alignItems={"start"}
          color={"white"}
          pos="absolute"
          top={["30%", "43%"]}
          w="full"
          px={["5", "32"]}
        >
          <Text fontFamily={"mono"} opacity={0.8}>
            WHO WE ARE
          </Text>
          <Text fontSize={["4xl", "5xl"]}>
            Strategic Financiers & Visionary Leaders
          </Text>
        </Center>
      </Box>
      <Center mt={["10", "20"]} px={["5", "32"]} mb="32" flexDir={"column"}>
        <Text
          fontSize={["xl", "2xl"]}
          textAlign={"left"}
          color={darkPrimeColor}
        >
          Driven by a cohort of ambitious Swinburne finance and business
          students, we team up to share smart ideas and strategies, all while
          helping to shape what's next in finance.
        </Text>
        <Flex flexDir={["column", "row"]} gap="10" mt="10">
          {[
            "Fuelled by the awesome finance and business smarts from Swinburne University, our club is all about exploring new ideas beyond just textbooks. We mix what we learn in lectures with real-world insights, sharing cool analyses and strategies to help each other understand how the financial world really works.",
            `At our core, we're building future leaders who are ready to tackle anything. We do this by digging deep into what we study and getting hands-on experience. We love staying ahead of the curve in financial strategy, spotting new trends, and using emerging tech to make a real impact.`,
          ].map((i) => (
            <Text key={i} flex="1" fontSize={"sm"} opacity="0.8">
              {i}
            </Text>
          ))}
        </Flex>
        <Text
          mt="12"
          fontSize={"2xl"}
          w="full"
          textAlign={["center", "left"]}
          color={darkPrimeColor}
        >
          OUR TEAM
        </Text>

        <Flex
          justify={"center"}
          gap="5"
          breakInside={"auto"}
          flexFlow={"wrap"}
          w="full"
          mt="16"
        >
          {latestMembers.map((i, idx) => (
            <AlumniTab key={`${i.name}-${idx}-${i.role}`} i={i} idx={idx} />
          ))}
        </Flex>
      </Center>
      <Footer />
    </Box>
  );
};

const AlumniTab = ({ i, idx }: { i: CommitteeMember; idx: number }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Flex
      mt="5"
      alignItems={"center"}
      w={["25vh", "35vh"]}
      key={Math.random()}
      overflow={"clip"}
      flexDir={"column"}
      flex="4"
    >
      <Avatar.Root variant={"solid"} size={"full"} w="30vh" h={"30vh"} key={12}>
        <Avatar.Fallback>{i.name}</Avatar.Fallback>
        <Avatar.Image src={i?.image || "Portrait_Placeholder.png"} />
      </Avatar.Root>
      <Text mt="5" fontSize={"3xl"} color={darkPrimeColor}>
        {i.name}
      </Text>
      <Text pb="3" opacity="0.6">
        {i.role}
      </Text>
      {i.description ? (
        <>
          <Text
            w="35vh"
            lineClamp={showMore ? Infinity : 4}
            textAlign={"center"}
            mt="2"
            dangerouslySetInnerHTML={{ __html: `${i.description}` }}
          >
            {/* {i.description}{" "} */}
          </Text>
          <Text
            onClick={() => {
              setShowMore(!showMore);
            }}
            as="span"
            opacity={0.7}
            _hover={{ cursor: "pointer" }}
            textDecor={"underline"}
          >
            {" "}
            {showMore ? "Show Less" : "Show More"}
          </Text>
        </>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default AboutUs;
