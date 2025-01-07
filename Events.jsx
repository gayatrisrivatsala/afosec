"use client";
import { Stack, Box, Fade } from "@chakra-ui/react";
import React, { useState } from "react";

const Events = ({ type }) => {
  const [showDescriptionIndex, setShowDescriptionIndex] = useState(null);

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

  const handleClick = (index) => {
    setShowDescriptionIndex(index === showDescriptionIndex ? null : index); // Toggle visibility
  };

  return (
    <Stack spacing={6}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={8}
        justify="center"
        align="center"
        mb={0}
      >
        {events.map((event, index) => (
          <Box
            key={event.id}
            textAlign="center"
            p={0}
            m={0}
            onClick={() => handleClick(index)} // Add click handler
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "40px",
            }}
          >
            {/* Image */}
            <img
              src={event.image}
              alt={`Event: ${event.name}`}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "40px",
                visibility:
                  showDescriptionIndex === index ? "hidden" : "visible", // Hide image when description is visible
                transition: "visibility 0s, opacity 0.5s ease-in-out", // Smooth transition for visibility change
              }}
            />

            {/* Event Name and Description */}
            <Fade
              in={showDescriptionIndex === index}
              unmountOnExit
              delay={0} // No delay for the name and description
              transition={{
                enter: { duration: 0.5, easing: "ease-out" }, // Faster and smoother transition
                exit: { duration: 0.5, easing: "ease-in" },
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  paddingTop: "2px",
                  backgroundColor: "rgba(48, 63, 159, 0.8)", // Vibrant blue background for name
                  color: "#fff",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  borderRadius: "40px",
                  transition: "all 0.5s ease-out", // Smooth transition for the whole element
                }}
              >
                <div>
                  <div>{event.name}</div>
                  <div
                    style={{
                      fontSize: "1rem", // Adjusted font size for description
                      marginTop: "10px",
                      textAlign: "center",
                      fontWeight: "normal",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    {event.description}
                  </div>
                </div>
              </div>
            </Fade>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Events;
