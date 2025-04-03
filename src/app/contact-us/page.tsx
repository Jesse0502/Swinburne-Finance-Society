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
import { useState } from "react";

const ContactUs = () => {
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // @ts-ignore
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
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
    } catch (error) {
      console.error("Form submission error:", error); // Debugging
      toaster.create({
        title: "Error!",
        description: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        <Image
          flex="1"
          src="swin-hero-2.jpg"
          //   src="pexels-wildlittlethingsphoto-1015568.jpg"
          h={"70vh"}
          w={["full", "20vh"]}
        />
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
            w={["100%", "100%"]}
            h="full"
            gap="8"
            pr={["4", "32"]}
            overflow={"clip"}
          >
            <Flex
              flex="2"
              w={["10vh", "full"]}
              justify={"space-between"}
              h="50vh"
              flexDir={"column"}
            >
              <form onSubmit={handleSubmit}>
                <Input
                  name="fullName" // Correct name attribute
                  size={"2xl"}
                  placeholder="Full Name"
                  variant="flushed"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <Text color="red.500" fontSize="sm" mt={1}>
                    {errors.fullName}
                  </Text>
                )}
                <Input
                  name="email" // Correct name attribute
                  type="email"
                  size={"2xl"}
                  my="3"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="flushed"
                />
                {errors.email && (
                  <Text color="red.500" fontSize="sm" mt={1}>
                    {errors.email}
                  </Text>
                )}
                <Textarea
                  name="message" // Correct name attribute
                  placeholder="Message"
                  _placeholder={{ fontSize: "lg", pt: "2" }}
                  variant="flushed"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <Text color="red.500" fontSize="sm" mt={1}>
                    {errors.message}
                  </Text>
                )}
                <Button disabled={isSubmitting} h="12" type="submit">
                  Contact Us
                </Button>
              </form>
            </Flex>
            <Flex
              flex="1"
              w="10vh"
              //   justify={"space-between"}
              h="50vh"
              fontSize={"sm"}
              gap="6"
              mt="5"
              flexDir={"column"}
            >
              <Flex gap="3">
                <Image h="5" src="email-icon.png" />
                <Text opacity="0.7" w={["10vh", "max"]} textWrap={"pretty"}>
                  {" "}
                  swinurnefinance@gmail.com
                </Text>
              </Flex>
              <Flex gap="3">
                <Image h="5" src="location-icon.png" />
                <Text opacity="0.7" w={["10vh", "max"]} textWrap={"pretty"}>
                  Melbourne, Victoria
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
