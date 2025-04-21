import { AllEvents, EventInterface } from "@/helpers/constants";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState, useRef, useEffect, DOMElement } from "react";

export default function Events() {
  const carouselRef = useRef(null);

  return (
    <Box py="16" bg="gray.200" w="full" px={["4", "16"]} position="relative">
      <Flex alignItems={"center"}>
        <Text
          fontSize={["lg", "2xl"]}
          fontWeight="light"
          fontFamily={"mono-serif"}
          opacity={0.6}
        >
          WHAT WE DO
        </Text>
        <Box h="2px" ml="4" w="50px" bg="gray.400" />
      </Flex>
      <Heading
        pt="6"
        pb="12"
        fontWeight={"bolder"}
        // font="message-box"
        fontSize={["4xl", "5xl"]}
      >
        Our Past Events
      </Heading>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      {/* <Flex justifyContent="center" gap={4} marginBottom={4}></Flex> */}
      <Flex
        alignItems={"start"}
        w="full"
        gap="5"
        overflowX="auto"
        overflow={"auto"}
        flexFlow="nowrap"
        className="hide-scrollbar"
        // pos="relative"
        ref={carouselRef}
      >
        {/* {eventTabs.length > 3 && (
          <>
            <Button
              rounded="full"
              pos="absolute"
              disabled={activeTab === 0}
              left="10"
              //   top="50%"
              zIndex={999}
              bg="gray"
              outline={"black"}
              onClick={handleBackward}
            >
              Backward
            </Button>
            <Button
              outline={"black"}
              bg="gray"
              rounded="full"
              pos="absolute"
              disabled={activeTab === eventTabs.length - 1}
              right="10"
              zIndex={999}
              onClick={handleForward}
            >
              Forward
            </Button>
          </>
        )} */}
        {AllEvents.map((i, idx) => (
          <Event i={i} key={i.title + i.link} />
        ))}
      </Flex>
    </Box>
  );
}

const Event = ({ i }: { i: EventInterface }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Box
      // key={i.link + Math.random()}
      // onClick={() => {
      //   setActiveTab(idx);
      // }}
      flexShrink={0}
      // transform={`scale(${getScale(idx)})`}
      w={["280px", "350px"]}
      // opacity={getOpacity(idx)}
      // transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
    >
      <Image
        h={["280px", "320px"]}
        //   h={activeTab === idx ? "320px" : "280px"}
        w="inherit"
        src={i.image}
        objectFit="cover"
      />
      <Box p="6" bg="white">
        <Heading fontSize="2xl">{i.title}</Heading>
        <Text lineClamp={showMore ? Infinity : 3} pt="5" opacity="0.8">
          {i.description}
        </Text>
        <Text
          textDecor={"underline"}
          _hover={{ cursor: "pointer" }}
          onClick={() => setShowMore(!showMore)}
        >
          Read {showMore ? "Less" : "More"}
        </Text>
        <Link href={i.link}>
          <Image
            mt="3"
            width="12"
            height="10"
            src="https://img.icons8.com/ios/100/right--v1.png"
            alt="right--v1"
          />
        </Link>
      </Box>
    </Box>
  );
};
