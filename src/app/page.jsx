"use client";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import styles from "./page.module.css";
import {
  Box,
  Text,
  Image,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Slider from "@/components/Slider";
import Events from "@/components/Events";
import Sponsors from "@/components/sponsors";
import ContactSection from "@/components/contact-section";
import DepartmentGrid from "@/components/departments"; // Make sure to import the DepartmentGrid

export default function Home() {
  return (
    <ChakraProvider>
      <main
        className="bg-whitesmoke"
        style={{ backgroundColor: "white", width: "100%" }}
      >
        <Stack direction="column" spacing={10} w="full">
          {/* Video Background */}
          <Box w="full">
            <VideoBackground />
          </Box>

          {/* Centered Image */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="full"
            mb={4}
            p={4}
          >
            <Image
              src="/about.png"
              alt="About Image"
              objectFit="cover"
              maxWidth="100%"
              height="auto"
            />
          </Box>

          {/* Text Description */}
          <Box px={5} py={2} w="full">
            <Text
              sx={{
                fontFamily: "Acme",
                fontSize: { base: "18px", md: "32px" },
                fontWeight: "400",
                lineHeight: "1.5",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              AFOSEC, the Annual Festival of Siddhartha Engineering College, is
              scheduled for 21/02/2025 - 22/02/2025, organized by the ECE
              department. This grand event celebrates innovation, talent, and
              collaboration, bringing together students, faculty, and industry
              experts. With exciting competitions, workshops, seminars, and
              cultural programs, AFOSEC fosters creativity and holistic
              development.
            </Text>
          </Box>

          {/* Slider */}
          <Box px={5} py={2} w="full">
            <Slider />
          </Box>

          {/* Central Events */}
          <Box
            id="central-events"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            mb={4}
            p={4}
          >
            <Image
              src="/events.png"
              alt="Events Image"
              objectFit="cover"
              maxWidth="100%"
              height="auto"
            />
          </Box>

          {/* Tabs for Events */}
          <Box
            mx={{ base: "4", md: "auto" }} // Symmetric margin on mobile and auto-center on larger screens
            my={{ base: 4, md: 6 }} // Vertical margin
            w="full"
            maxWidth={{ base: "95%", md: "70%" }} // 95% on mobile, 70% on larger screens
            display="flex"
            justifyContent="center"
            borderRadius="20px"
            border="5px solid"
            overflow="hidden" // Ensure no content spills outside the box
          >
            <Tabs
              position="relative"
              variant="unstyled"
              isFitted
              w="100%"
              h="auto" // Dynamic height to accommodate content
            >
              <TabList>
                <Tab>Technical Events</Tab>
                <Tab>Non-Technical Events</Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <Events type="tech" />
                </TabPanel>
                <TabPanel>
                  <Events type="nontech" />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          {/* Department Events */}
          <Box
            id="department-events"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            mb={4}
            p={4}
          >
            <Image
              src="/explore.png"
              alt="Explore Events"
              objectFit="cover"
              maxWidth="100%"
              height="auto"
            />
          </Box>

          {/* Department Grid Section */}
          <Box
            px={5}
            mb={8}
            flex="1 0 auto"
            maxHeight={{ base: "auto", md: "auto" }} // Adjust max height for different screen sizes
            overflowY="auto"
          >
            <DepartmentGrid />
          </Box>

          {/* Sponsors Section */}
          <Box
            id="sponsors"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            mb={4}
            p={4}
          >
            <Image
              src="/sponsers.png"
              alt="Sponsors Image"
              objectFit="cover"
              maxWidth="100%"
              height="auto"
            />
          </Box>
          <Box px={5}>
            <Sponsors />
          </Box>

          {/* Contact Section */}
          <Box w="full" id="contact" px={5}>
            <ContactSection />
          </Box>
        </Stack>
      </main>
    </ChakraProvider>
  );
}
