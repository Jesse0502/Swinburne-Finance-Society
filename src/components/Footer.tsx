import { darkPrimeColor } from "@/helpers/constants";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  StepsSeparator,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg={darkPrimeColor} pt="16" color="white" w="full">
      <Flex
        flexDir={["column", "row"]}
        alignItems={"center"}
        justify={"space-between"}
        px="0"
      >
        <Center h="full" w="full" flex="1">
          <Image src="logo.jpg" h="260px" />
        </Center>
        <Flex
          alignItems={"center"}
          flex="1"
          w="full"
          flexDir={["column", "row"]}
        >
          <Box
            h="300px"
            mr={"24"}
            w="2px"
            display={["none", "block"]}
            bg="white"
          />
          <Flex gap="32">
            <Flex flexDir={"column"} gap="2">
              <Heading mb="5" textDecor={"underline"}>
                Quick Links
              </Heading>
              {[
                { name: "Events", link: "/our-events" },
                { name: "Contact Us", link: "/contact-us" },
                { name: "About Us", link: "/about-us" },
                {
                  name: "Instagram",
                  link: "https://www.instagram.com/swin.finance/",
                },
                {
                  name: "Linkedin",
                  link: "https://www.linkedin.com/company/swinburne-finance-club/",
                },
              ].map((t) => (
                <Link href={t.link}>
                  <Text
                    textAlign={["center", "left"]}
                    key={t.link}
                    color={"white"}
                    opacity="0.7"
                    _hover={{
                      textDecor: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {t.name}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Center
        w={["100%", "90%"]}
        ml={["0px", "60px"]}
        mt={["5", 0]}
        h="2px"
        bg="white"
      />
      <Text textAlign={"center"} opacity={"0.7"} py="10">
        © {`${new Date().getFullYear()}`} Swinburne Finance Society
      </Text>
    </Box>
  );
};

export default Footer;
