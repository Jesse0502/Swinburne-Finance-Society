import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const OurTeam = () => {
  return (
    <Box pt="24" pb="16" bg="gray.200" w="full" px="16" position="relative">
      <Flex alignItems={"center"}>
        <Text
          fontSize="2xl"
          fontWeight="light"
          fontFamily={"mono-serif"}
          opacity={0.6}
        >
          OUR TEAM
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
        Committee Members
      </Heading>
      <Flex>
        {[{ title: "President", name: "Farhan Ehmud", img: "logo.jpg" }].map(
          ({ title, name, img }, idx) => (
            <Box bg="white" key={idx + name}>
              <Image h="350px" w="300px" src={img} />
              <Box py="3" px="2">
                <Text color="gray">{title}</Text>
                <Text fontSize={"2xl"}>{name}</Text>
              </Box>
            </Box>
          )
        )}
      </Flex>
    </Box>
  );
};

export default OurTeam;
