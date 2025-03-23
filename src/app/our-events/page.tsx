"use client";
import EventTab from "@/components/Events/EventTab";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge, Box, Center, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const OurEvents = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Box>
      <Box
        w="full"
        bgRepeat={"no-repeat"}
        // bg={"url(./white-bg-design-2.avif)"}
        bg={"url(./white-bg-design.svg)"}
        h="78vh"
      >
        <Navbar eventsPage={true} />
        <Flex
          alignItems={"center"}
          flexDir={"column"}
          mt="20"
          h="full"
          px="48"
          w="full"
        >
          <Text fontSize={"6xl"} textAlign={"center"}>
            Grow Your Network & Skills with Our Events
          </Text>
          <Badge p="3" rounded="md" variant={"surface"} mt="2" size="lg">
            Events
          </Badge>
        </Flex>
      </Box>
      <Center
        mb="9"
        w="full"
        mt="9"
        flexDir={"column"}
        justifyContent={"start"}
        px="32"
      >
        <Flex gap="3" w="full">
          {["All Events", "Upcoming Events", "Past Events"].map((i, idx) => (
            <Badge
            key={i}
              p="3"
              rounded="full"
              bg={idx === activeTab ? "black" : "gray.200"}
              color={idx === activeTab ? "white" : "black"}
              size="lg"
            >
              {i}
            </Badge>
          ))}
        </Flex>
        <EventTab price={1} />
        <EventTab />
      </Center>
      <Footer />
    </Box>
  );
};

export default OurEvents;
