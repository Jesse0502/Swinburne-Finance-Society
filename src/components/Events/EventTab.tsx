import { Badge, Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

const EventTab = ({ price = 0 }: { price?: Number }) => {
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
          src="https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=612x612&w=0&k=20&c=aWW3omXKHjxBkd58NouVo8GsapvA2KXO9RwuokHhvFk="
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
            <Badge p="3">Event</Badge>
            <Text
              fontSize={["3xl", "4xl"]}
              textOverflow={"ellipsis"}
              //   h="63px"
              pt="4"
              w="inherit"
              lineClamp={2} // Chakra UI's prop for multi-line ellipsis
              overflow={"clip"}
            >
              Networking night
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
              A networking night to discuss about nepotism, sexual fantasies and
              how to get adopted by an investment banker etc
              {/* Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Suscipit, voluptatum nam
              blanditiis ab quaerat eaque accusamus odit aliquam recusandae sunt
              dicta enim. Dignissimos explicabo eum ad, rerum dolor eveniet hic
              amet animi minima odit ut at quidem consequatur soluta distinctio? */}
            </Text>
            <Flex mt={["5", "10"]} justify={"space-between"} w="90%">
              <Text opacity="0.7">Location</Text>
              <Text>AGSE Building</Text>
            </Flex>
            <Flex w="90%" justify={"space-between"}>
              <Text opacity="0.7">Time</Text>
              <Text fontSize={"xs"}>Wed, 4th April 2025 at 7pm-8pm</Text>
            </Flex>
          </Box>
          <Flex
            my={["4", "0"]}
            w={["full", "100px"]}
            flexDir={"column"}
            mx="10"
            alignItems={"center"}
          >
            <Button size={"lg"} w={["full", "20vh"]} disabled={!price}>
              {price ? "Buy a ticket" : "Free"}
            </Button>
            <Link mt="3">See Details</Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default EventTab;
