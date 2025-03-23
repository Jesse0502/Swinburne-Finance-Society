"use client";

import { useEffect, useState, useRef } from "react";
import { darkPrimeColor } from "@/helpers/constants";
import { Button, Flex, Image, Link } from "@chakra-ui/react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <Flex
      zIndex={1000}
      px="12"
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
      <Flex alignItems="center">
        <Link href="/">
          <Image alt="Logo" width="65px" src="logo.jpg" />
        </Link>
      </Flex>
      <Flex alignItems="center" gap="4">
        {[
          { name: "Our Goal", link: "/our-goal" },
          { name: "Events", link: "/our-events" },
          { name: "Contact", link: "/contact-us" },
          { name: "About Us", link: "/about-us" },
        ].map((item) => (
          <Link key={item.name} color="inherit" fontSize="lg" href={item.link}>
            {item.name}
          </Link>
        ))}
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
      </Flex>
    </Flex>
  );
};

export default Navbar;
