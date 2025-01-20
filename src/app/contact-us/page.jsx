"use client";

import React, { useState } from "react";
import { Box, Container, Text, Image as ChakraImage } from "@chakra-ui/react";

const coordinators = [
  {
    id: 1,
    image: "/coordinator.png",
    name: "John Doe",
    mobile: "123-456-7890",
    email: "john@example.com",
    position: "Event Coordinator",
  },
  {
    id: 2,
    image: "/coordinator.png",
    name: "Jane Smith",
    mobile: "234-567-8901",
    email: "jane@example.com",
    position: "Volunteer Coordinator",
  },
  {
    id: 3,
    image: "/coordinator.png",
    name: "Michael Johnson",
    mobile: "345-678-9012",
    email: "michael@example.com",
    position: "Logistics Coordinator",
  },
  {
    id: 4,
    image: "/coordinator.png",
    name: "Emily Davis",
    mobile: "456-789-0123",
    email: "emily@example.com",
    position: "Technical Coordinator",
  },
  {
    id: 5,
    image: "/coordinator.png",
    name: "David Lee",
    mobile: "567-890-1234",
    email: "david@example.com",
    position: "Safety Coordinator",
  },
  {
    id: 6,
    image: "/coordinator.png",
    name: "Sarah Brown",
    mobile: "678-901-2345",
    email: "sarah@example.com",
    position: "Community Coordinator",
  },
];

export default function CoordinatorCards() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Text fontSize="3xl" fontWeight="bold" mb={8} textAlign="center">
        Coordinators
      </Text>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={6}
      >
        {coordinators.map((coordinator, index) => (
          <Box
            key={coordinator.id}
            position="relative"
            width="100%"
            height="350px"
            borderRadius="15px"
            boxShadow="md"
            overflow="hidden"
            cursor="pointer"
            onClick={() => handleCardClick(index)}
            transform={flippedIndex === index ? "rotateY(180deg)" : ""}
            transition="transform 0.6s ease-in-out"
          >
            {/* Front of the card: Image with transparent black strip at the bottom */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              display={flippedIndex === index ? "none" : "flex"}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <ChakraImage
                src={coordinator.image}
                alt={coordinator.name}
                objectFit="cover"
                width="100%"
                height="100%"
              />

              {/* Transparent black strip at the bottom */}
              <Box
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                padding="8px"
                backgroundColor="rgba(0, 0, 0, 0.5)"
                color="white"
                textAlign="center"
              >
                <Text fontSize="lg" fontWeight="bold">
                  {coordinator.position}
                </Text>
              </Box>
            </Box>

            {/* Back of the card: Coordinator's details */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              backgroundColor="rgba(48, 63, 159, 0.9)"
              color="white"
              display={flippedIndex === index ? "flex" : "none"}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding="16px"
              borderRadius="15px"
              transform="rotateY(180deg)"
            >
              <Text fontSize="xl" fontWeight="bold">
                {coordinator.name}
              </Text>
              <Text fontSize="md" marginTop="8px">
                Mobile: {coordinator.mobile}
              </Text>
              <Text fontSize="md" marginTop="8px">
                Email: {coordinator.email}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
