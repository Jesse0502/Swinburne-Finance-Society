"use client";

import { useEffect, useState, useRef } from "react";
import { darkPrimeColor } from "@/helpers/constants";
import {
  Box,
  Button,
  Drawer,
  Flex,
  Image,
  Link,
  Portal,
  Text,
} from "@chakra-ui/react";
import { CloseButton } from "./ui/close-button";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // ✅ Ensure this runs only on the client
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 0);

      if (currentScrollY < 100) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else if (lastScrollY.current - currentScrollY > 20) {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const pageRoutes = [
    { name: "Our Goal", link: "/our-goal" },
    { name: "Events", link: "/our-events" },
    { name: "Contact", link: "/contact-us" },
    { name: "About Us", link: "/about-us" },
  ];
  return (
    <Flex
      zIndex={1000}
      px={["3", "12"]}
      pos="sticky"
      top="0"
      w="100%"
      py="4"
      shadow={isScrolled ? "sm" : "none"}
      bg={isScrolled ? "white" : "transparent"}
      color={darkPrimeColor}
      alignItems="center"
      justify="space-between"
      transition="transform 0.3s ease-in-out, background 0.3s ease-in-out"
      transform={showNavbar ? "translateY(0)" : "translateY(-100%)"}
    >
      <Flex alignItems="center" ml={["2", "0"]}>
        <Link href="/">
          <Image alt="Logo" width="65px" src="logo.jpg" />
        </Link>
      </Flex>
      <Flex display={["none", "flex"]} alignItems="center" gap="4">
        {pageRoutes.map((item) => (
          <Link
            key={item.name}
            color="inherit"
            // variant="underline"
            _hover={{ textDecor: "underline" }}
            fontSize="lg"
            href={item.link}
          >
            {item.name}
          </Link>
        ))}
        <BecomeAMemberBtn />
      </Flex>
      <Box display={["block", "none"]}>
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Drawer.Trigger asChild>
            <Image src="menu.png" w="50px" mr="2" />
            {/* <Button variant="outline" size="sm">
            Open Drawer
          </Button> */}
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content zIndex={99999}>
                <Drawer.Header>
                  {/* <Drawer.Title>Drawer Title</Drawer.Title> */}
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Header>
                <Drawer.Body mt="12">
                  <Flex flexDir={"column"} gap="6">
                    {pageRoutes.map((i) => (
                      <Link
                        // fontWeight={"bold"}
                        href={i.link}
                        key={i.link + i.name}
                        _hover={{ textDecor: "underline" }}
                        // variant="underline"
                        fontSize={"2xl"}
                        color="black"
                      >
                        {i.name}
                      </Link>
                    ))}
                    <BecomeAMemberBtn />
                  </Flex>
                </Drawer.Body>
                <Drawer.Footer>
                  <Text
                    alignItems={"center"}
                    opacity="0.7"
                    textAlign={"center"}
                    w="full"
                  >
                    {" "}
                    © 2025 Swinburne Finance Club
                  </Text>
                  {/* <Button variant="outline">Cancel</Button>
                <Button>Save</Button> */}
                </Drawer.Footer>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Box>
    </Flex>
  );
};

const BecomeAMemberBtn = () => {
  return (
    <Button
      border="1px solid white"
      py="7"
      rounded="none"
      color="white"
      bg={darkPrimeColor}
      _hover={{
        bg: "white",
        color: darkPrimeColor,
        border: `1px solid ${darkPrimeColor}`,
      }}
      fontSize="lg"
    >
      Become a Member
    </Button>
  );
};

export default Navbar;
