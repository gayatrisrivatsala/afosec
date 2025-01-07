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

// export default function Home() {
//   return (
//     <ChakraProvider>
//       {/* Set the background color for the whole page */}
//       <main className="bg-whitesmoke" style={{ backgroundColor: "whitesmoke" }}>
//         <Stack direction="column">
//           <Box p={0}>
//             <VideoBackground />
//           </Box>

//           {/* Box with centered image */}
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//             height="97px"
//             mb={4}
//             p={4} // Optional: add padding if necessary
//           >
//             <Image
//               src="/about.png"
//               alt="image description"
//               objectFit="cover"
//               width="452px"
//               height="97px"
//             />
//           </Box>

//           {/* Text Below the Image */}
//           <Box m={5} mt="2px" p={4}>
//             <Text
//               sx={{
//                 fontFamily: "Acme",
//                 fontSize: "32px",
//                 fontWeight: "400",
//                 lineHeight: "36px",
//                 textAlign: "center",
//                 textUnderlinePosition: "from-font",
//                 textDecorationSkipInk: "none",
//               }}
//             >
//               AFOSEC, the Annual Festival of Siddhartha Engineering College, is
//               scheduled for 21/02/2025 - 22/02/2025, organized by the ECE
//               department. This grand event celebrates innovation, talent, and
//               collaboration, bringing together students, faculty, and industry
//               experts. With exciting competitions, workshops, seminars, and
//               cultural programs, AFOSEC fosters creativity and holistic
//               development.
//             </Text>
//           </Box>

//           {/* Slider Box */}
//           <Box m={1} p={4}>
//             <Slider />
//           </Box>

//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//             height="97px"
//             mb={4}
//             p={4} // Optional: add padding if necessary
//           >
//             <Image
//               src="/events.png"
//               alt="image description"
//               objectFit="cover"
//               width="452px"
//               height="97px"
//             />
//           </Box>

//           {/* Tabs for Technical and Non-Technical Events */}
//           <Box
//             m="auto"
//             p={4}
//             w="1091px"
//             h="470px"
//             display="flex"
//             justifyContent="center"
//             gap="5px"
//             borderRadius="40px "
//             border="5px solid "
//             opacity={1}
//           >
//             <Tabs position="relative" variant="unstyled" isFitted w="100%">
//               <TabList>
//                 <Tab>Technical Events</Tab>
//                 <Tab>Non Technical Events</Tab>
//               </TabList>
//               <TabIndicator
//                 mt="-1.5px"
//                 height="2px"
//                 bg="blue.500"
//                 borderRadius="1px"
//               />
//               <TabPanels>
//                 <TabPanel>
//                   <Events type={"tech"} />
//                 </TabPanel>
//                 <TabPanel>
//                   <Events type={"nontech"} />
//                 </TabPanel>
//               </TabPanels>
//             </Tabs>
//           </Box>

//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//             height="97px"
//             m={7}
//             mb={4}
//             p={4} // Optional: add padding if necessary
//           >
//             <Image
//               src="/explore.png"
//               alt="image description"
//               objectFit="cover"
//               width="452px"
//               height="97px"
//             />
//           </Box>
//           <Box>
//             <Text>here the department explore page can be seen</Text>
//           </Box>
//           <Box m={5}>
//             <Sponsors />
//           </Box>

//           <Box w="full">
//             <ContactSection />
//           </Box>
//         </Stack>
//       </main>
//     </ChakraProvider>
//   );
// }

export default function Home() {
  return (
    <ChakraProvider>
      <main className="bg-whitesmoke" style={{ backgroundColor: "whitesmoke", width: "100%" }}>
        <Stack direction="column" w="full">
          <Box p={0} w="full">
            <VideoBackground />
          </Box>

          {/* Box with centered image */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="97px"
            mb={4}
            p={4}
          >
            <Image
              src="/about.png"
              alt="image description"
              objectFit="cover"
              width="452px"
              height="97px"
            />
          </Box>

          {/* Text Below the Image */}
          <Box m={5} mt="2px" p={4} w="full">
            <Text
              sx={{
                fontFamily: "Acme",
                fontSize: "32px",
                fontWeight: "400",
                lineHeight: "36px",
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

          {/* Slider Box */}
          <Box m={1} p={4} w="full">
            <Slider />
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="97px"
            mb={4}
            p={4}
          >
            <Image
              src="/events.png"
              alt="image description"
              objectFit="cover"
              width="452px"
              height="97px"
            />
          </Box>

          {/* Tabs for Technical and Non-Technical Events */}
          <Box
            m="auto"
            p={4}
            w="full"  // Ensure the width is full here
            maxWidth="1091px"  // Optional: Set a max width for better responsiveness
            h="470px"
            display="flex"
            justifyContent="center"
            gap="5px"
            borderRadius="40px "
            border="5px solid "
            opacity={1}
          >
            <Tabs position="relative" variant="unstyled" isFitted w="100%">
              <TabList>
                <Tab>Technical Events</Tab>
                <Tab>Non Technical Events</Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <Events type={"tech"} />
                </TabPanel>
                <TabPanel>
                  <Events type={"nontech"} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="97px"
            m={7}
            mb={4}
            p={4}
          >
            <Image
              src="/explore.png"
              alt="image description"
              objectFit="cover"
              width="452px"
              height="97px"
            />
          </Box>
          <Box>
            <Text>here the department explore page can be seen</Text>
          </Box>
          <Box m={5}>
            <Sponsors />
          </Box>

          <Box w="full">
            <ContactSection />
          </Box>
        </Stack>
      </main>
    </ChakraProvider>
  );
}

