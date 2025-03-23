import { darkPrimeColor } from "@/helpers/constants";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  StepsSeparator,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg={darkPrimeColor} pt="16" color="white" w="full">
      <Flex alignItems={"center"} justify={"space-between"} px="0">
        <Center h="full" w="full" flex="1">
          <Image src="logo.jpg" h="260px" />
        </Center>
        <Flex alignItems={"center"} flex="1" w="full">
          <Box h="300px" mr="24" w="2px" bg="white" />
          <Flex gap="32">
            <Flex flexDir={"column"} gap="2">
              <Heading mb="5" textDecor={"underline"}>
                Quick Links
              </Heading>
              {[
                "Events",
                "Contact Us",
                "About Us",
                "Instagram",
                "Linkedin",
              ].map((t) => (
                <Text
                  key={t}
                  opacity="0.7"
                  _hover={{
                    textDecor: "underline",
                    cursor: "pointer",
                  }}
                >
                  {t}
                </Text>
              ))}
            </Flex>
            {/* <Flex flexDir={"column"} gap="2">
              <Text>list</Text>
              <Text>list</Text>
              <Text>list</Text>
              <Text>list</Text>
              <Text>list</Text>
            </Flex> */}
          </Flex>
        </Flex>
      </Flex>
      <Center w="90%" ml="60px" h="2px" bg="white" />
      <Text textAlign={"center"} opacity={"0.7"} py="10">
        © 2025 Swinburne Finance Club
      </Text>
    </Box>
  );
};

export default Footer;
