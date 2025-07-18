"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { committeeMembers, darkPrimeColor } from "@/helpers/constants";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { motion } from "framer-motion";

import { useMemo, useState } from "react";

const Alumni = () => {
  const allYears = Object.keys(committeeMembers)
    .map(Number)
    .sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(allYears[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const allMembers = useMemo(() => {
    return Object.values(committeeMembers).flat();
  }, []);

  const filteredMembers = useMemo(() => {
    if (!searchQuery.trim()) {
      return committeeMembers[selectedYear] || [];
    }

    const query = searchQuery.toLowerCase();
    return allMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query)
    );
  }, [searchQuery, selectedYear, allMembers]);

  return (
    <>
      <Navbar />

      <Box bg={"black"} pos="relative" h={["320px", "420px"]} w="full">
        <Image src="./alumni-hero.jpeg" opacity={0.3} h="inherit" w="full" />
        <Center
          flexDir={"column"}
          alignItems={"start"}
          color={"white"}
          pos="absolute"
          top={["30%", "43%"]}
          w="full"
          px={["5", "32"]}
        >
          <Text fontFamily={"mono"} opacity={0.8}>
            Connect with previous alumni members
          </Text>
          <Text fontSize={["4xl", "5xl"]}>Alumni</Text>
        </Center>
      </Box>
      <Flex
        flexDir={["column-reverse", "row"]}
        px={["4", "32"]}
        mt="14"
        justify={"space-between"}
        alignItems={["start", "center"]}
      >
        <Box w={["160px", "200px"]} mt={[10, 0]} mb={[-10, 0]}>
          <Select
            variant={"subtle"}
            options={allYears.map((year) => ({
              label: year.toString(),
              value: year,
            }))}
            onChange={(selected) =>
              setSelectedYear(selected?.value || allYears[0])
            }
            defaultValue={{ label: allYears[0].toString(), value: allYears[0] }}
            isDisabled={!!searchQuery.trim()}
          />
        </Box>
        <Flex gap="2" w={["full", "48vh"]}>
          <Input
            size="lg"
            w={["full", "32vh"]}
            type="text"
            variant={"flushed"}
            placeholder={"Search Members"}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            onClick={() => {
              if (searchQuery.trim()) {
                setSearchQuery("");
              }
            }}
          >
            {searchQuery.trim() ? "Clear" : "Search"}
          </Button>
        </Flex>
      </Flex>
      <Center px={["5", "32"]} mb="32" flexDir={"column"}>
        <Flex justify={"center"} gap="5" flexFlow={"wrap"} w="full" mt="16">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member, idx) => (
              <AlumniTab
                searchQuery={searchQuery}
                key={`${member.name}-${idx}-${member.role}`}
                member={member}
              />
            ))
          ) : (
            <Text fontSize="xl" color="gray.500">
              No members found matching your search
            </Text>
          )}
        </Flex>
      </Center>
      <Footer />
    </>
  );
};

const AlumniTab = ({
  searchQuery,
  member,
}: {
  member: (typeof committeeMembers)[number][number];
  searchQuery: String;
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Flex
      mt="5"
      border="1px solid"
      borderColor={"gray.200"}
      alignItems={"center"}
      flexShrink={0}
      pb="5"
      w={["full", "40vh"]}
      minW={["full", "40vh"]}
      key={member.name + member.year + member.year}
      overflow={"hidden"}
      flexDir={"column"}
    >
      <Box pos="relative">
        <Image
          w={["50vh", "40vh"]}
          objectFit={"cover"}
          //   pos="absolute"
          h={["50vh", "40vh"]}
          src={member.image || "./Portrait_Placeholder.png"}
        />
        <Flex
          flexDir={"column"}
          alignItems={"end"}
          right="2"
          gap="2"
          pos="absolute"
          top="2"
        >
          {member.socialMedia?.map((social) => (
            <Box
              as={Link}
              display={social.link ? "block" : "none"}
              // @ts-ignore
              href={social.link}
              // @ts-ignore
              _target={"_blank"}
              zIndex={999}
              key={social.username + social.platform}
              overflow="hidden"
              textDecoration="none"
            >
              <motion.div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  position: "relative",
                  width: "auto",
                  borderRadius: "7vh",
                }}
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={{
                  rest: {
                    width: "40px",
                    backgroundColor: "white",
                  },
                  hover: {
                    width: `${100 + social.platform.length * 5}px`,
                    backgroundColor: "white",
                  },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <Box
                  as={motion.div}
                  left="0"
                  overflow={"clip"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  padding={"10px"}
                  color={darkPrimeColor}
                  textDecoration="none"
                  fontWeight="bold"
                  fontSize="sm"
                  height={"40px"}
                  textAlign={"left"}
                  // @ts-ignore
                  variants={{
                    rest: { opacity: 0, width: "40px" },
                    hover: { opacity: 1, width: "100px" },
                  }}
                >
                  {social.platform}
                </Box>

                <Image
                  as={motion.img}
                  src={`./${social.platform.toLowerCase()}.png`}
                  borderRadius={"full"}
                  boxSize={"40px"}
                  zIndex="2"
                  transitionDelay={"0.3"}
                />
              </motion.div>
            </Box>
          ))}
        </Flex>
      </Box>
      <Text
        mt="5"
        fontSize={"3xl"}
        w="full"
        textAlign="center"
        color={darkPrimeColor}
      >
        {member.name} {searchQuery.length ? `(${member.year})` : ""}
      </Text>
      <Text pb="3" opacity="0.6">
        {member.role}
      </Text>

      {member.description ? (
        <>
          <Text
            w="35vh"
            lineClamp={showMore ? Infinity : 4}
            textAlign={"center"}
            mt="2"
            dangerouslySetInnerHTML={{ __html: `${member.description}` }}
          ></Text>
          <Text
            onClick={() => {
              setShowMore(!showMore);
            }}
            as="span"
            opacity={0.7}
            _hover={{ cursor: "pointer" }}
            textDecor={"underline"}
          >
            {" "}
            {showMore ? "Show Less" : "Show More"}
          </Text>
        </>
      ) : (
        <Text opacity={0.5}></Text>
      )}
    </Flex>
  );
};

export default Alumni;
