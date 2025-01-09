"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  IconButton,
  Card,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function ContactSection() {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const subTextColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Box as="section" w="full" bg="white" borderTopWidth="1px" minH="100vh">
      <Box maxW="container.lg" mx="auto" px={0} py={0}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap="0"
          w="100%"
          h="100%"
        >
          {/* Get In Touch Column */}
          <Box flex="1" spacing="8" minH="100vh" w="50%">
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="bold"
              borderBottomWidth="2px"
              borderBottomColor={borderColor}
              pb="2"
              display="inline-block"
            >
              Get In Touch
            </Heading>

            {/* AFOSEC Logo */}
            <Box w="64">
              <Image
                src="/afosec-logo.png"
                alt="AFOSEC"
                width={240}
                height={80}
                className="h-auto w-full"
              />
            </Box>

            {/* Social Media Links */}
            <Flex gap="8" alignItems="center" mt="4">
              <ChakraLink
                href="https://instagram.com/afosec"
                isExternal
                aria-label="Follow us on Instagram"
              >
                <IconButton
                  icon={<Instagram size={24} />}
                  rounded="full"
                  border="2px"
                  borderColor={borderColor}
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.1)" }}
                />
              </ChakraLink>

              <ChakraLink
                href="https://x.com/afosec"
                isExternal
                aria-label="Follow us on X (formerly Twitter)"
              >
                <IconButton
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="24"
                      height="24"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  }
                  rounded="full"
                  border="2px"
                  borderColor={borderColor}
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.1)" }}
                />
              </ChakraLink>

              <ChakraLink
                href="https://facebook.com/afosec"
                isExternal
                aria-label="Follow us on Facebook"
              >
                <IconButton
                  icon={<Facebook size={24} />}
                  rounded="full"
                  border="2px"
                  borderColor={borderColor}
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.1)" }}
                />
              </ChakraLink>

              <ChakraLink
                href="https://youtube.com/afosec"
                isExternal
                aria-label="Subscribe to our YouTube channel"
              >
                <IconButton
                  icon={<Youtube size={24} />}
                  rounded="full"
                  border="2px"
                  borderColor={borderColor}
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.1)" }}
                />
              </ChakraLink>
            </Flex>

            {/* Email Contact */}
            <Box mt="6">
              <Text fontSize="sm" color={subTextColor}>
                Email Id:
              </Text>
              <ChakraLink
                href="mailto:afosec2025@vrsiddhartha.ac.in"
                fontSize="lg"
                color={textColor}
                _hover={{ color: "blue.500" }}
              >
                afosec2025@vrsiddhartha.ac.in
              </ChakraLink>
            </Box>
          </Box>

          {/* Locate Us Column */}
          <Box flex="1" minH="100vh" w="50%">
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="bold"
              borderBottomWidth="2px"
              borderBottomColor={borderColor}
              pb="2"
              display="inline-block"
            >
              Locate Us
            </Heading>

            <Box mt="6">
              <Text fontSize="sm" color={subTextColor}>
                Address:
              </Text>
              <Text fontSize="lg" color={textColor}>
                Velagapudi Ramakrishna Siddhartha
                <br />
                Engineering College, Chalasani Nagar,
                <br />
                Kanuru, Vijayawada, Andhra Pradesh
              </Text>
            </Box>

            {/* Map Card */}
            <Card mt="6" borderWidth="2px" overflow="hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1477.6294860031514!2d80.69012039591398!3d16.48256458853254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb11a7825b09%3A0x9991a13a52e668e9!2sVRSEC%20Entrance%20Rd%2C%20TCR%20Colony%2C%20Chalasani%20Nagar%2C%20Kanuru%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520007!5e0!3m2!1sen!2sin!4v1736397978111!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Siddhartha Academy of Higher Education"
              ></iframe>
            </Card>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
