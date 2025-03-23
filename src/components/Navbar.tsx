"use client";

import { useLayoutEffect, useState, useRef } from "react";
import { darkPrimeColor } from "@/helpers/constants";
import { Button, Flex, Image, Link } from "@chakra-ui/react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollY = document.documentElement.scrollTop;

      if (currentScrollY < 100) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else if (lastScrollY.current - currentScrollY > 20) {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      zIndex={99999999}
      px="12"
      pos="sticky"
      top="0"
      w="100%"
      py="4"
      shadow={lastScrollY.current === 0 ? "none" : "sm"}
      color={darkPrimeColor}
      bg={lastScrollY.current === 0 ? "transparent" : "white"}
      alignItems="center"
      justify="space-between"
      style={{ transition: "transform 0.3s ease-in-out" }}
      transform={showNavbar ? "translateY(0)" : "translateY(-100%)"}
    >
      <Flex alignItems={"center"}>
        <Link href="/">
          <Image alt="Logo" width="65px" src="logo.jpg" />
        </Link>
      </Flex>
      <Flex alignItems={"center"} gap="4">
        {[
          { name: "Our Goal", link: "our-goal" },
          { name: "Events", link: "our-events" },
          { name: "Contact", link: "contact-us" },
          { name: "About Us", link: "about-us" },
        ].map((i) => (
          <Link key={i.name} color={"inherit"} fontSize={"lg"} href={i.link}>
            {i.name}
          </Link>
        ))}
        <Button
          border="1px solid white"
          py="7"
          rounded="none"
          color="white"
          _hover={{
            bg: "white",
            color: darkPrimeColor,
            border: `1px solid ${darkPrimeColor}`,
          }}
          bg={darkPrimeColor}
          fontSize="lg"
        >
          Become a Member
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
