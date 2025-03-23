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
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef(null);
  const eventTabs = [
    {
      img: "https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=612x612&w=0&k=20&c=aWW3omXKHjxBkd58NouVo8GsapvA2KXO9RwuokHhvFk=",
      title: "Networking Night",
      description:
        "A networking night to discuss about nepotism, sexual fantasies and how to get adopted by an investment banker etc",
    },
    {
      img: "https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=612x612&w=0&k=20&c=aWW3omXKHjxBkd58NouVo8GsapvA2KXO9RwuokHhvFk=",
      title: "Networking Night",
      description:
        "A networking night to discuss about nepotism, sexual fantasies and how to get adopted by an investment banker etc",
    },
    {
      img: "https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=612x612&w=0&k=20&c=aWW3omXKHjxBkd58NouVo8GsapvA2KXO9RwuokHhvFk=",
      title: "Networking Night",
      description:
        "A networking night to discuss about nepotism, sexual fantasies and how to get adopted by an investment banker etc",
    },
    {
      img: "https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=612x612&w=0&k=20&c=aWW3omXKHjxBkd58NouVo8GsapvA2KXO9RwuokHhvFk=",
      title: "Networking Night",
      description:
        "A networking night to discuss about nepotism, sexual fantasies and how to get adopted by an investment banker etc",
    },
    {
      img: "https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=612x612&w=0&k=20&c=aWW3omXKHjxBkd58NouVo8GsapvA2KXO9RwuokHhvFk=",
      title: "Networking Night",
      description:
        "A networking night to discuss about nepotism, sexual fantasies and how to get adopted by an investment banker etc",
    },
  ];

  const handleForward = () => {
    setActiveTab((prevTab) => {
      const newTab = (prevTab + 1) % eventTabs.length;
      return newTab;
    });
    if (carouselRef.current) {
      // @ts-ignore
      carouselRef.current.scrollTo({
        left: 380,
        behavior: "smooth",
      });
    }
  };

  const handleBackward = () => {
    setActiveTab((prevTab) => {
      const newTab = (prevTab - 1 + eventTabs.length) % eventTabs.length;
      return newTab;
    });
  };
  // @ts-ignore
  const getOpacity = (index) => {
    const distance = Math.abs(index - activeTab);
    if (distance === 0) return 1;
    if (distance === 1) return 0.7;
    if (distance === 2) return 0.4;
    return 0.2;
  };

  // @ts-ignore
  const getScale = (index) => {
    const distance = Math.abs(index - activeTab);
    if (distance === 0) return 1;
    if (distance === 1) return 0.95;
    if (distance === 2) return 0.9;
    return 0.85;
  };
  // @ts-ignore
  const scrollToTab = (index) => {
    if (carouselRef.current) {
      // @ts-ignore
      const tabElement = carouselRef.current.children[index];
      if (tabElement) {
        const tabRect = tabElement.getBoundingClientRect();
        // @ts-ignore
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const scrollLeft = Math.round(
          tabRect.left -
            carouselRect.left -
            (carouselRect.width - tabRect.width) / 2
        );
        // @ts-ignore
        carouselRef.current.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <Box py="16" bg="gray.200" w="full" px="16" position="relative">
      <Flex alignItems={"center"}>
        <Text
          fontSize="2xl"
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
        fontSize="5xl"
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
        alignItems={"center"}
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
        {eventTabs.map((i, idx) => (
          <Box
            key={i.title + Math.random()}
            onClick={() => {
              setActiveTab(idx);
            }}
            flexShrink={0}
            // transform={`scale(${getScale(idx)})`}
            w={"380px"}
            // opacity={getOpacity(idx)}
            // transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
          >
            <Image
              h={"320px"}
              //   h={activeTab === idx ? "320px" : "280px"}
              w="inherit"
              src={i.img}
              objectFit="cover"
            />
            <Box p="6" bg="white">
              <Heading fontSize="2xl">{i.title}</Heading>
              <Text pt="5" opacity="0.8">
                {i.description}
              </Text>
              <Link href="./pitin">
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
        ))}
      </Flex>
    </Box>
  );
}
