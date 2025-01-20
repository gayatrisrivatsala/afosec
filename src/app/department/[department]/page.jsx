"use client";

import { useParams } from "next/navigation";
import {
  Box,
  Container,
  Text,
  Stack,
  Image as ChakraImage,
} from "@chakra-ui/react";
import ContactSection from "@/components/contact-section";

// Events for each department
const departmentEvents = {
  "AI & DS": [
    {
      id: 1,
      image: "/ai.jpg",
      name: "AI Seminar",
      description: "Dive into the world of AI with industry experts.",
    },
    {
      id: 2,
      image: "/ai.jpg",
      name: "Deep Learning Workshop",
      description: "Hands-on workshop on neural networks.",
    },
    {
      id: 3,
      image: "/ai.jpg",
      name: "AI Hackathon",
      description: "Solve real-world problems using AI.",
    },
    {
      id: 4,
      image: "/ai.jpg",
      name: "Data Science Summit",
      description: "Networking and talks on data science.",
    },
    {
      id: 5,
      image: "/ai.jpg",
      name: "NLP Conference",
      description: "Explore trends in NLP.",
    },
    {
      id: 6,
      image: "/ai.jpg",
      name: "AI Ethics Debate",
      description: "Discuss ethical concerns in AI.",
    },
  ],
  CIVIL: [
    {
      id: 1,
      image: "/civil.jpg",
      name: "Bridge Design Contest",
      description: "Showcase your bridge-building skills.",
    },
    {
      id: 2,
      image: "/civil.jpg",
      name: "Urban Planning Meetup",
      description: "Learn about sustainable urban planning.",
    },
    {
      id: 3,
      image: "/civil.jpg",
      name: "Geotechnical Workshop",
      description: "Hands-on workshop on soil mechanics.",
    },
    {
      id: 4,
      image: "/civil.jpg",
      name: "Environmental Seminar",
      description: "Talks on environmental challenges.",
    },
    {
      id: 5,
      image: "/civil.jpg",
      name: "Concrete Technology",
      description: "Explore advancements in concrete tech.",
    },
    {
      id: 6,
      image: "/civil.jpg",
      name: "Structural Engineering",
      description: "Interactive workshop on structures.",
    },
  ],
  CSE: [
    {
      id: 1,
      image: "/cse.png",
      name: "Hackathon",
      description: "Code and innovate to win exciting prizes.",
    },
    {
      id: 2,
      image: "/cse.png",
      name: "AI & ML Workshop",
      description: "Hands-on AI and ML coding sessions.",
    },
    {
      id: 3,
      image: "/cse.png",
      name: "Cybersecurity Bootcamp",
      description: "Learn to protect against cyber threats.",
    },
    {
      id: 4,
      image: "/cse.png",
      name: "Web Development",
      description: "Explore the latest in web technologies.",
    },
    {
      id: 5,
      image: "/cse.png",
      name: "Blockchain Talk",
      description: "Seminar on blockchain technology.",
    },
    {
      id: 6,
      image: "/cse.png",
      name: "Data Structures Contest",
      description: "Compete in coding challenges.",
    },
  ],
  ECE: [
    {
      id: 1,
      image: "/ece.jpg",
      name: "IoT Workshop",
      description: "Learn about IoT and its applications.",
    },
    {
      id: 2,
      image: "/ece.jpg",
      name: "Antenna Design",
      description: "Hands-on session on antenna design.",
    },
    {
      id: 3,
      image: "/ece.jpg",
      name: "Embedded Systems",
      description: "Workshop on embedded systems.",
    },
    {
      id: 4,
      image: "/ece.jpg",
      name: "VLSI Seminar",
      description: "Explore VLSI and its applications.",
    },
    {
      id: 5,
      image: "/ece.jpg",
      name: "Robotics Meetup",
      description: "Innovative talks on robotics.",
    },
    {
      id: 6,
      image: "/ece.jpg",
      name: "Signal Processing",
      description: "Interactive workshop on signals.",
    },
  ],
  EEE: [
    {
      id: 1,
      image: "/eee.jpg",
      name: "Power Systems",
      description: "Insights into modern power systems.",
    },
    {
      id: 2,
      image: "/eee.jpg",
      name: "Circuit Design",
      description: "Workshop on circuit design techniques.",
    },
    {
      id: 3,
      image: "/eee.jpg",
      name: "Smart Grids",
      description: "Seminar on smart grid technologies.",
    },
    {
      id: 4,
      image: "/eee.jpg",
      name: "Energy Management",
      description: "Talks on energy-efficient systems.",
    },
    {
      id: 5,
      image: "/eee.jpg",
      name: "IoT for EEE",
      description: "Explore IoT in electrical systems.",
    },
    {
      id: 6,
      image: "/eee.jpg",
      name: "Control Systems",
      description: "Workshop on modern control systems.",
    },
  ],
  IT: [
    {
      id: 1,
      image: "/it.png",
      name: "Cloud Computing",
      description: "Workshop on cloud platforms and tools.",
    },
    {
      id: 2,
      image: "/it.png",
      name: "Cybersecurity",
      description: "Learn to secure online systems.",
    },
    {
      id: 3,
      image: "/it.png",
      name: "DevOps",
      description: "Explore CI/CD pipelines and DevOps practices.",
    },
    {
      id: 4,
      image: "/it.png",
      name: "App Development",
      description: "Create mobile applications from scratch.",
    },
    {
      id: 5,
      image: "/it.png",
      name: "UI/UX Design",
      description: "Workshop on user experience design.",
    },
    {
      id: 6,
      image: "/it.png",
      name: "Database Management",
      description: "Learn about modern databases.",
    },
  ],
  MECH: [
    {
      id: 1,
      image: "/mech.png",
      name: "Robotics",
      description: "Interactive sessions on robotics.",
    },
    {
      id: 2,
      image: "/mech.png",
      name: "CAD Workshop",
      description: "Hands-on with computer-aided design.",
    },
    {
      id: 3,
      image: "/mech.png",
      name: "Thermodynamics Talk",
      description: "Learn about thermodynamic systems.",
    },
    {
      id: 4,
      image: "/mech.png",
      name: "Automobile Design",
      description: "Innovative ideas in automobile design.",
    },
    {
      id: 5,
      image: "/mech.png",
      name: "3D Printing",
      description: "Introduction to 3D printing technologies.",
    },
    {
      id: 6,
      image: "/mech.png",
      name: "Hydraulics Workshop",
      description: "Learn about hydraulic systems.",
    },
  ],
  MBA: [
    {
      id: 1,
      image: "/mba.png",
      name: "Startup Pitch",
      description: "Pitch your startup ideas to investors.",
    },
    {
      id: 2,
      image: "/mba.png",
      name: "Business Strategy",
      description: "Workshops on strategic management.",
    },
    {
      id: 3,
      image: "/mba.png",
      name: "Finance Talk",
      description: "Learn modern financial strategies.",
    },
    {
      id: 4,
      image: "/mba.png",
      name: "Leadership Skills",
      description: "Develop leadership qualities.",
    },
    {
      id: 5,
      image: "/mba.png",
      name: "Marketing Trends",
      description: "Latest trends in marketing.",
    },
    {
      id: 6,
      image: "/mba.png",
      name: "HR Innovation",
      description: "Workshops on HR technologies.",
    },
  ],
  MCA: [
    {
      id: 1,
      image: "/mca.png",
      name: "Web Technologies",
      description: "Workshop on modern web frameworks.",
    },
    {
      id: 2,
      image: "/mca.png",
      name: "Software Development",
      description: "Learn advanced software design.",
    },
    {
      id: 3,
      image: "/mca.png",
      name: "Data Science",
      description: "Explore data science applications.",
    },
    {
      id: 4,
      image: "/mca.png",
      name: "Game Development",
      description: "Design and develop engaging games.",
    },
    {
      id: 5,
      image: "/mca.png",
      name: "Cloud Applications",
      description: "Develop applications for the cloud.",
    },
    {
      id: 6,
      image: "/mca.png",
      name: "AI Tools",
      description: "Learn to integrate AI into applications.",
    },
  ],
};

export default function EventsPage() {
  const params = useParams();
  const { department } = params;
  const decodedDepartment = decodeURIComponent(department);
  const events = departmentEvents[decodedDepartment] || [];

  return (
    <>
      <Container maxW="container.lg" py={8}>
        <Text fontSize="3xl" fontWeight="bold" mb={8} textAlign="center">
          {decodedDepartment} Events
        </Text>

        {events.length > 0 ? (
          <Stack spacing={6} width="100%">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={8}
              justify="center"
              align="center"
              width="100%"
              flexWrap="wrap"
            >
              {events.map((event) => (
                <Box
                  key={event.id}
                  textAlign="center"
                  position="relative"
                  width={{ base: "90%", md: "30%" }}
                  borderRadius="20px"
                  overflow="hidden"
                  cursor="pointer"
                  boxShadow="md"
                  _hover={{
                    ".image": { opacity: 0 },
                    ".details": { transform: "translateY(0)" },
                  }}
                >
                  <ChakraImage
                    className="image"
                    src={event.image}
                    alt={`Event: ${event.name}`}
                    objectFit="cover"
                    width="100%"
                    height="250px"
                    transition="opacity 0.6s ease-in-out"
                  />
                  <Box
                    className="details"
                    position="absolute"
                    bottom="0"
                    left="0"
                    width="100%"
                    height="100%"
                    bg="rgba(48, 63, 159, 0.9)"
                    color="#fff"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="20px"
                    transform="translateY(100%)"
                    transition="transform 0.6s ease-in-out"
                    padding="16px"
                  >
                    <Box fontSize="1.5rem" fontWeight="bold">
                      {event.name}
                    </Box>
                    <Box
                      fontSize="1rem"
                      marginTop="8px"
                      textAlign="center"
                      padding="8px"
                    >
                      {event.description}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Stack>
        ) : (
          <Text>No events found for {decodedDepartment}</Text>
        )}
      </Container>
      <ContactSection/>
    </>
  );
}
