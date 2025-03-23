import { darkPrimeColor } from "@/helpers/constants";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const Resources = () => {
  return (
    <Box pt="24" pb="16" w="full" px="16" position="relative">
      <Flex alignItems={"center"}>
        <Text
          fontSize="2xl"
          fontWeight="light"
          fontFamily={"mono-serif"}
          opacity={0.6}
        >
          KNOWLEDGE
        </Text>
        <Box h="2px" ml="4" w="50px" bg="gray.400" />
      </Flex>
      <Heading pt="6" pb="12" fontWeight={"bolder"} fontSize="5xl">
        Financial Resources
      </Heading>
      <Flex gap="20" mt="16" justify="space-between" alignItems={"start"}>
        <Text flex="1" fontSize={"2xl"}>
          Varsity is an extensive and in-depth collection of stock market and
          financial lessons created by Karthik Rangappa at Zerodha
        </Text>
        <Flex flex="1" alignItems={"center"} gap="9">
          <Image
            transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
            _hover={{ scale: 1.01 }}
            shadow="lg"
            flexShrink={0}
            h="400px"
            src="zerodha.jpg"
          />
          <Box>
            <Text>
              Introduction to Stock Market by Zerodha Varsity | Goodreads
            </Text>
            <Text
              mt="2"
              //   textDecor={'underline'}
              as={Link}
              color={darkPrimeColor}
              // @ts-ignore
              href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodreads.com%2Fbook%2Fshow%2F34461995-introduction-to-stock-markets&psig=AOvVaw3dMyLFYHP9IQz1ph-9n818&ust=1742727604098000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCOCRuLfEnYwDFQAAAAAdAAAAABAE"
            >
              Read It -&gt;
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex gap="20" mt="32" justify="space-between" alignItems={"start"}>
        <Flex flex="1" alignItems={"center"} gap="9">
          <Image
            transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
            _hover={{ scale: 1.01 }}
            shadow="lg"
            flexShrink={0}
            h="400px"
            src="think-and-grow-rich.jpg"
          />
          <Box textAlign={"left"}>
            <Text>Think And Grow Rich By Napolean Hill | Goodreads</Text>
            <Text
              mt="2"
              //   textDecor={'underline'}
              as={Link}
              color={darkPrimeColor}
              // @ts-ignore
              href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodreads.com%2Fbook%2Fshow%2F34461995-introduction-to-stock-markets&psig=AOvVaw3dMyLFYHP9IQz1ph-9n818&ust=1742727604098000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCOCRuLfEnYwDFQAAAAAdAAAAABAE"
            >
              Read It -&gt;
            </Text>
          </Box>
        </Flex>
        <Text flex="1" fontSize={"2xl"} textAlign={"right "}>
          One of the most popular personal development and self-improvement
          books of all time, Think and Grow Rich has sold over 100M copies
          worldwide!
        </Text>
      </Flex>
    </Box>
  );
};

export default Resources;
