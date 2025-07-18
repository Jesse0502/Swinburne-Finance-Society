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
            Next Generation of Corporate Leadership
          </Text>
        </Center>
      </Box>
      <Center mt={["10", "20"]} px={["5", "32"]} mb="32" flexDir={"column"}>
        <Text
          fontSize={["xl", "2xl"]}
          textAlign={"left"}
          color={darkPrimeColor}
        >
          Led by a team of driven and ambitious finance students, Swinburne
          Finance Society exists to prepare our members for successful careers
          in the highly competitive fields of finance, accounting, and business
          analytics – industries that will continue to shape the global economy
          for decades to come.
        </Text>
        <Flex flexDir={["column", "row"]} gap="10" mt="10">
          {[
            "As a member, you will take your university experience beyond the classroom, and gain access to exclusive events hosted in collaboration with our industry partners and Swinburne’s School of Business, Law, and Entrepreneurship faculty to build the professional networks you need to succeed in your career. Beyond our events, we are in the process of establishing further exciting initiatives, on schedule to be announced throughout semester two of 2025.",
            `Follow our social media for updates on these initiatives, our semester two networking events, and to stay across our frequent market updates - analysis of economic and financial market news. All Swinburne students, regardless of your major and year level, are welcome to apply for membership. We are here to build the next generation of corporate leadership, and we would love for you to be a part of it.`,
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
