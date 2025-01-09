"use client";
import { Stack, Box, Image as ChakraImage } from "@chakra-ui/react";
import React from "react";

const Events = ({ type }) => {
  const tech = [
    {
      id: 1,
      image: "/tevent.jpeg",
      name: "Code Sprint",
      description:
        "An intense coding competition where developers race against time.",
    },
    {
      id: 2,
      image: "/tevent.jpeg",
      name: "Hackathon",
      description:
        "A hackathon bringing together innovative minds to solve real-world problems.",
    },
    {
      id: 3,
      image: "/tevent.jpeg",
      name: "AI Workshops",
      description:
        "Workshops focused on the latest AI technologies and hands-on projects.",
    },
  ];

  const nontech = [
    {
      id: 1,
      image: "/ntevent.png",
      name: "Photography Contest",
      description:
        "Capture moments and showcase creativity in the photography contest.",
    },
    {
      id: 2,
      image: "/ntevent.png",
      name: "Treasure Hunt",
      description:
        "A fun and challenging treasure hunt that tests your wit and teamwork.",
    },
    {
      id: 3,
      image: "/ntevent.png",
      name: "Debate Competition",
      description:
        "Engage in a stimulating debate competition on various contemporary issues.",
    },
  ];

  const events = type === "tech" ? tech : nontech;

  return (
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
            {/* Image */}
            <ChakraImage
              className="image"
              src={event.image}
              alt={`Event: ${event.name}`}
              objectFit="cover"
              width="100%"
              height="250px"
              transition="opacity 0.6s ease-in-out"
            />

            {/* Event Name and Description */}
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
                fontWeight="normal"
                padding="8px"
              >
                {event.description}
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Events;
