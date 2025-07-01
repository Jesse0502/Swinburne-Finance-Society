import { EventInterface } from "@/helpers/constants";
import { Badge, Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { formatEventDate } from "@/helpers/helpingFunctions";
const EventTab = ({ i }: { i?: EventInterface }) => {
  return (
    <Box
      w="full"
      mt="9"
      //   h="330px"
      border="1px solid"
      p="2"
      borderColor={"gray.200"}
      rounded="md"
    >
      <Flex flexDir={["column", "row"]} alignItems="center" gap="5">
        <Image
          objectFit={"contain"}
          src={i?.image}
          minW="70vh"
          h={["35vh", "50vh"]}
          rounded="md"
        />
        <Flex
          flexDir={["column", "row"]}
          px={["2", 0]}
          h={["max", "50vh"]}
          alignItems={"center"}
        >
          <Box w={["", "400px"]}>
            <Badge p="3">{i?.type}</Badge>
            <Text
              fontSize={["3xl", "4xl"]}
              textOverflow={"ellipsis"}
              //   h="63px"
              pt="4"
              w="inherit"
              lineClamp={1} // Chakra UI's prop for multi-line ellipsis
              overflow={"clip"}
            >
              {i?.title}
            </Text>
            <Text
              lineClamp={3} // Chakra UI's prop for multi-line ellipsis
              //   overflow="hidden"
              //   textOverflow="ellipsis"
              fontSize="lg"
              // h="56px"
              mt="3"
              w="inherit"
              opacity="0.7"
            >
              {i?.description}
            </Text>
            <Flex mt={["5", "10"]} justify={"space-between"} w="90%">
              <Text opacity="0.7">Location</Text>
              <Text>{i?.location}</Text>
            </Flex>
            <Flex w="90%" justify={"space-between"}>
              <Text opacity="0.7">Time</Text>
              <Text fontSize={"xs"}>
                {/* @ts-ignore */}
                {formatEventDate(new Date(i?.dateTime))}
              </Text>
            </Flex>
          </Box>
          <Flex
            my={["4", "0"]}
            w={["full", "100px"]}
            flexDir={"column"}
            mx="10"
            alignItems={"center"}
          >
            <Button size={"lg"} w={["full", "20vh"]} disabled={!i?.ticketLink}>
              {i?.ticketLink ? "Buy a ticket" : "Free"}
            </Button>
            <Link mt="3" href={i?.link}>
              See Details
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default EventTab;
