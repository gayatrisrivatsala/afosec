"use client";

import { motion } from "framer-motion";
import { Box, Text, VStack, HStack, Container } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const departments = [
  { name: "AI & DS" },
  { name: "CIVIL" },
  { name: "CSE" },
  { name: "ECE" },
  { name: "EEE" },
  { name: "EIE" },
  { name: "IT" },
  { name: "MECH" },
  { name: "MBA" },
  { name: "MCA" },
];

const Department = ({ name, backgroundImage }) => {
  const router = useRouter();

  const handleClick = () => {
    const encodedName = encodeURIComponent(name); // Encode department name
    router.push(`/department/${encodedName}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Box
        position="relative"
        overflow="hidden"
        rounded="full"
        shadow="lg"
        width="140px"
        height="140px"
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        {/* Department Name */}
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize="sm"
          fontWeight="bold"
          color="white"
          textAlign="center"
        >
          {name}
        </Text>
      </Box>
    </motion.div>
  );
};

export default function DepartmentGrid() {
  const backgroundImage = "/department-bg.png";

  return (
    <Container
      maxW="full"
      h="100vh"
      display="flex"
      flexDirection="column"
      py={8}
    >
      <VStack spacing={8}>
        {/* First row of departments */}
        <HStack
          justifyContent="space-evenly"
          w="full"
          spacing={{ base: 4, md: 8 }} // Adjust spacing for mobile and desktop
          wrap="wrap" // Ensures that items wrap on small screens
        >
          {departments.slice(0, 3).map((dept, index) => (
            <Department
              key={index}
              name={dept.name}
              backgroundImage={backgroundImage}
            />
          ))}
        </HStack>

        {/* Second row of departments */}
        <HStack
          justifyContent="space-around"
          w="75%"
          spacing={{ base: 4, md: 8 }} // Adjust spacing for mobile and desktop
          wrap="wrap"
        >
          {departments.slice(3, 5).map((dept, index) => (
            <Department
              key={index}
              name={dept.name}
              backgroundImage={backgroundImage}
            />
          ))}
        </HStack>

        {/* Third row of departments */}
        <HStack
          justifyContent="space-evenly"
          w="full"
          spacing={{ base: 4, md: 8 }} // Adjust spacing for mobile and desktop
          wrap="wrap"
        >
          {departments.slice(5, 8).map((dept, index) => (
            <Department
              key={index}
              name={dept.name}
              backgroundImage={backgroundImage}
            />
          ))}
        </HStack>

        {/* Fourth row of departments */}
        <HStack
          justifyContent="space-around"
          w="75%"
          spacing={{ base: 4, md: 8 }} // Adjust spacing for mobile and desktop
          wrap="wrap"
        >
          {departments.slice(8, 10).map((dept, index) => (
            <Department
              key={index}
              name={dept.name}
              backgroundImage={backgroundImage}
            />
          ))}
        </HStack>
      </VStack>
    </Container>
  );
}
