import { committeeMembers } from "@/helpers/constants";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const OurTeam = () => {
  const allYears = Object.keys(committeeMembers).map(Number);
  const latestYear = Math.max(...allYears);
  const latestMembers = committeeMembers[latestYear];
  return (
    <Box
      pt="24"
      pb="16"
      bg="gray.200"
      w="full"
      px={["4", "16"]}
      position="relative"
    >
      <Flex alignItems={"center"}>
        <Text
          fontSize={["xl", "2xl"]}
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
        fontSize={["4xl", "5xl"]}
      >
        Committee Members
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
      <Flex
        gap="5"
        overflowX="auto"
        w="full"
        overflow={"auto"}
        flexFlow="nowrap"
        className="hide-scrollbar"
        flexDir={["column", "row"]}
      >
        {/* {Object.keys(Object.keys(committeeMembers)[0]).map((i, idx) => (
         
          <Box
            flexShrink={0}
            bg="white"
            w={"300px"}
            key={idx + committeeMembers[i].name}
          >
            <Image
              h={"350px"}
              w={["full", "300px"]}
              src={committeeMembers[i].image ?? "/logo.jpg"}
            />
            <Box py="3" px="2">
              <Text color="gray">{committeeMembers[i].role}</Text>
              <Text fontSize={"2xl"}>{committeeMembers[i].name}</Text>
            </Box>
          </Box>
        ))} */}
        {latestMembers.map((member, idx) => (
          <Box
            flexShrink={0}
            bg="white"
            w={["full", "300px"]}
            key={idx + member.name}
          >
            <Image
              h={"350px"}
              w={["full", "300px"]}
              src={member.image || "/Portrait_Placeholder.png"}
            />
            <Box py="3" px="2">
              <Text color="gray">{member.role}</Text>
              <Text fontSize={"2xl"}>{member.name}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default OurTeam;
