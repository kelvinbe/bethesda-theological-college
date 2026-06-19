"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box
      minH={{ base: "auto", md: "90vh" }}
      bg="brand.500"
      color="white"
      display="flex"
      alignItems="center"
      py={{ base: 16, md: 0 }}
    >
      <Container maxW="7xl">
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: 10, md: 16 }}
          align="center"
        >

          {/* LEFT CONTENT */}
          <Stack flex="1" gap={6} maxW="2xl">

            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              lineHeight="1.2"
            >
              Rooted in the Word, Ready for the World
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.200"
              lineHeight="1.6"
            >
              Bethesda Training College equips leaders with biblical knowledge,
              practical competencies, and Christ-centered formation for service.
            </Text>

            <Stack direction={{ base: "column", md: "row" }} gap={4}>
              <Button
                bg="gold.500"
                color="black"
                size="lg"
                w={{ base: "full", md: "auto" }}
              >
                Apply Now
              </Button>

              <Button
                border="1px solid"
                borderColor="gold.500"
                color="gold.500"
                size="lg"
                w={{ base: "full", md: "auto" }}
              >
                Partner With Us
              </Button>
            </Stack>

          </Stack>

          {/* RIGHT IMAGE */}
          <Box flex="1" display="flex" justifyContent="center">
            <Image
              src="/beth.png"
              alt="Bethesda Campus"
              borderRadius="lg"
              maxW={{ base: "100%", md: "500px" }}
              objectFit="cover"
              boxShadow="lg"
            />
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}