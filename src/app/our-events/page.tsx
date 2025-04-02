"use client";
import EventTab from "@/components/Events/EventTab";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AllEvents } from "@/helpers/constants";
import { Badge, Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const EVENTS_PER_PAGE = 5;

const OurEvents = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsRange = ["All Events", "Upcoming Events", "Past Events"];
  const now = new Date();
  const filteredEvents = AllEvents.filter((event) => {
    switch (activeTab) {
      case 1: // Upcoming Events
        return event.dateTime > now;
      case 2: // Past Events
        return event.dateTime < now;
      default: // All Events
        return true;
    }
    // @ts-ignore
  }).sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());

  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const paginatedEvents = filteredEvents.slice(
    startIndex,
    startIndex + EVENTS_PER_PAGE
  );

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  // Sort events by date (newest first)
  const sortedEvents = [...filteredEvents].sort(
    // @ts-ignore
    (a, b) => b.dateTime.getTime() - a.dateTime.getTime()
  );

  return (
    <Box>
      <Box
        w="full"
        // bgRepeat={"no-repeat"}
        bgPos={["center", "left"]}
        // bgSize={""}
        bgImg={["url(./white-bg-design-2.avif)", "url(./white-bg-design.svg)"]}
        // bg={"url(./white-bg-design.svg)"}
        h={["65vh", "78vh"]}
      >
        {/* @ts-ignore */}
        <Navbar eventsPage={true} />
        <Flex
          alignItems={"center"}
          flexDir={"column"}
          mt={["14", "20"]}
          h="full"
          px={["4", "48"]}
          w="full"
        >
          <Text fontSize={["4xl", "6xl"]} textAlign={"center"}>
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
        px={["4", "32"]}
      >
        <Flex gap="3" w="full">
          {eventsRange.map((i, idx) => (
            <Badge
              key={i}
              cursor="pointer"
              onClick={() => handleTabChange(idx)}
              p={["1.4vh", "3"]}
              rounded="full"
              _hover={{ shadow: "md" }}
              shadow={idx === activeTab ? "lg" : "none"}
              bg={idx === activeTab ? "black" : "gray.200"}
              color={idx === activeTab ? "white" : "black"}
              size={["sm", "lg"]}
            >
              {i}
            </Badge>
          ))}
        </Flex>
        {paginatedEvents.length > 0 ? (
          <>
            {paginatedEvents.map((event) => (
              <EventTab key={`${event.title}-${event.dateTime}`} i={event} />
            ))}

            {/* Pagination controls */}
            {totalPages > 1 && (
              <Flex mt="8" gap="2" alignItems="center">
                <Button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                <Text>
                  Page {currentPage} of {totalPages}
                </Text>

                <Button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </Flex>
            )}
          </>
        ) : (
          <Text mt="8" fontSize="lg" color="gray.500">
            No {eventsRange[activeTab].toLowerCase()} found
          </Text>
        )}
      </Center>
      <Footer />
    </Box>
  );
};

export default OurEvents;
