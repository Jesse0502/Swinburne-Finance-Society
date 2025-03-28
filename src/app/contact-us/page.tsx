"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box h="full">
      <Navbar />
      <Center
        flexDir={["column", "row"]}
        pl={["0", "20"]}
        gap="16"
        mt="5"
        justifyContent={"space-between"}
      >
        <Image
          flex="1"
          src="swin-hero-2.jpg"
          //   src="pexels-wildlittlethingsphoto-1015568.jpg"
          h={"70vh"}
          w={["full", "20vh"]}
        />
        <Flex flexDir={"column"} h={"81.7vh"} flex="1">
          <Text
            fontSize={["4xl", "6xl"]}
            pr={["36", "32"]}
            w="full"
            textAlign={"center"}
            mb="5"
          >
            Contact Us
          </Text>
          <Flex
            borderTop="2px solid black"
            borderLeft={"2px solid black"}
            px={["4", "10"]}
            py="5"
            w={["100%", "100%"]}
            h="full"
            gap="8"
            pr={["4", "32"]}
            overflow={"clip"}
          >
            <Flex
              flex="2"
              w={["10vh", "full"]}
              justify={"space-between"}
              h="50vh"
              flexDir={"column"}
            >
              <Box>
                <Input size={"2xl"} placeholder="Full Name" variant="flushed" />
                <Input
                  size={"2xl"}
                  my="3"
                  placeholder="Email"
                  variant="flushed"
                />
                <Textarea
                  placeholder="Message"
                  _placeholder={{ fontSize: "lg", pt: "2" }}
                  variant="flushed"
                />
              </Box>
              <Button h="12">Contact Us</Button>
            </Flex>
            <Flex
              flex="1"
              w="10vh"
              //   justify={"space-between"}
              h="50vh"
              fontSize={"sm"}
              gap="6"
              mt="5"
              flexDir={"column"}
            >
              <Flex gap="3">
                <Image h="5" src="email-icon.png" />
                <Text opacity="0.7" w={["10vh", ""]} textWrap={"pretty"}>
                  {" "}
                  swinurnefinance@gmail.com
                </Text>
              </Flex>
              <Flex gap="3">
                <Image h="5" src="location-icon.png" />
                <Text opacity="0.7" w={["10vh", ""]} textWrap={"pretty"}>
                  Melbourne, Victoria
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Center>
      <Footer />
    </Box>
  );
};

export default ContactUs;
