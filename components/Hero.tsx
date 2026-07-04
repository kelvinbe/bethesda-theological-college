"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function HeroVideo() {
  return (
    <Box
      position="relative"
      minH={{ base: "80vh", md: "100vh" }}
      overflow="hidden"
      color="white"
    >
      {/* Background Video */}
      <Box
        as="video"
        autoPlay
        muted
        loop
        playsInline
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        objectFit="cover"
      >
        <source src="/vid.mp4" type="video/mp4" />
      </Box>

      {/* Dark Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="blackAlpha.700"
        zIndex={1}
      />

      {/* Hero Content */}
      <Container
        maxW="7xl"
        h="100%"
        position="relative"
        zIndex={2}
        display="flex"
        alignItems="center"
        minH={{ base: "80vh", md: "100vh" }}
      >
        <Stack
          maxW="700px"
          gap={6}
          align="flex-start"
        >
          <Text
            color="gold.500"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="2px"
          >
            Bethesda Training College
          </Text>

          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="1.1"
          >
            Rooted in the Word,
            <br />
            Ready for the World
          </Heading>

          <Text
            fontSize={{ base: "md", md: "xl" }}
            color="whiteAlpha.900"
            maxW="600px"
          >
            Bethesda Training College equips leaders with
            biblical knowledge, practical competencies,
            and Christ-centered formation for service.
          </Text>

          <Stack
            direction={{ base: "column", md: "row" }}
            gap={4}
          >
            <Button
              size="lg"
              bg="gold.500"
              color="earth.500"
              _hover={{ opacity: 0.9 }}
            >
              Apply Now
            </Button>

            <Button
              size="lg"
              variant="outline"
              borderColor="gold.500"
              color="gold.500"
              _hover={{
                bg: "gold.500",
                color: "earth.500",
              }}
            >
              Partner With Us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}