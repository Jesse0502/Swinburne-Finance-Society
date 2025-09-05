"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  Input,
  Button,
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import { toaster, Toaster } from "@/components/ui/toaster";
import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORM || "xdklppge"
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // Handle successful submission
  useEffect(() => {
    if (state.succeeded) {
      toaster.create({
        title: "Success!",
        description: "Your message has been sent successfully",
        type: "success",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });

      // Clear any existing errors
      setErrors({
        fullName: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  // Handle form errors from Formspree
  useEffect(() => {
    // @ts-ignore
    if (state.errors && state.errors.length > 0) {
      toaster.create({
        title: "Error!",
        description: "Failed to send message. Please try again.",
        type: "error",
      });
    }
  }, [state.errors]);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fullName: "",
      email: "",
      message: "",
    };

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    // Create FormData object for Formspree
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("fullName", formData.fullName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("message", formData.message);

    // Submit using Formspree's handleSubmit
    await handleSubmit(formDataToSubmit);
  };

  return (
    <Box h="full">
      <Navbar />
      <Center
        flexDir={["column", "row"]}
        pl={["0", "20"]}
        gap="16"
        mt="5"
        justifyContent={"space-between"}
      >
        <Image flex="1" src="swin-hero-2.jpg" h={"70vh"} w={["full", "20vh"]} />
        <Flex flexDir={"column"} h={"81.7vh"} flex="1">
          <Text
            fontSize={["4xl", "6xl"]}
            pr={["36", "32"]}
            w="full"
            textAlign={"center"}
            mb="5"
          >
            Contact Us
          </Text>
          <Flex
            borderTop="2px solid black"
            borderLeft={"2px solid black"}
            px={["4", "10"]}
            py="5"
            flexDir={["column", "row"]}
            w={"100%"}
            h="full"
            gap="8"
            pr={["4", "32"]}
            overflow={"clip"}
          >
            <Flex
              flex="2"
              w={["48vh", "full"]}
              justify={"space-between"}
              h="50vh"
              flexDir={"column"}
            >
              <form onSubmit={onSubmit}>
                <Input
                  name="fullName"
                  size={"2xl"}
                  placeholder="Full Name"
                  variant="flushed"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={state.submitting}
                />
                {errors.fullName && (
                  <Text color="red.500" fontSize="sm" mt={1}>
                    {errors.fullName}
                  </Text>
                )}

                <Input
                  name="email"
                  type="email"
                  size={"2xl"}
                  my="3"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="flushed"
                  disabled={state.submitting}
                />
                {errors.email && (
                  <Text color="red.500" fontSize="sm" mt={1}>
                    {errors.email}
                  </Text>
                )}

                <Textarea
                  name="message"
                  placeholder="Message"
                  _placeholder={{ fontSize: "lg", pt: "2" }}
                  variant="flushed"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={state.submitting}
                />
                {errors.message && (
                  <Text color="red.500" fontSize="sm" mt={1}>
                    {errors.message}
                  </Text>
                )}

                <Button
                  mt="5"
                  disabled={state.submitting}
                  h="12"
                  type="submit"
                  // @ts-ignore
                  loadingText="Sending..."
                >
                  {state.submitting ? (
                    <>
                      <Spinner size="sm" mr={2} />
                      Sending...
                    </>
                  ) : (
                    "Contact Us"
                  )}
                </Button>
              </form>
            </Flex>

            <Flex
              flex="1"
              w="10vh"
              h="50vh"
              fontSize={"sm"}
              gap="6"
              mt={["2", "5"]}
              pb={["2vh", ""]}
              flexDir={["column"]}
            >
              <Flex gap="3">
                <Image h="5" src="email-icon.png" />
                <Text opacity="0.7" w={["max", "max"]} textWrap={"pretty"}>
                  swinburnefinance@gmail.com
                </Text>
              </Flex>
              <Flex gap="3">
                <Image h="5" src="location-icon.png" />
                <Text opacity="0.7" w={"full"} textWrap={["nowrap", "wrap"]}>
                  Swinburne University: Hawthorn, Victoria
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Center>
      <Toaster />
      <Footer />
    </Box>
  );
};

export default ContactUs;
