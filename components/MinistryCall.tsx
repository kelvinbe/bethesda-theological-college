"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function MinistryCall() {
  return (
    <Box bg="white" py={24}>
      <Container maxW="7xl">
        <Stack
          direction={{ base: "column", lg: "row" }}
          gap={16}
          align="center"
        >
          <Box flex="1">
            <Image
              src="pray.jpeg"
              alt="Ministry Call"
              borderRadius="2xl"
              border="2px solid"
              borderColor="gold.500"
              boxShadow="lg"
            />
          </Box>

          <Stack flex="1" gap={6}>
            <Heading color="earth.500" fontSize={{ base: "2xl", md: "4xl" }}>
              Discern Your Call to Ministry
            </Heading>

            {/* Converted to buttons */}
            <Button
              variant="outline"
              borderColor="brand.500"
              color="brand.500"
              justifyContent="flex-start"
              size="lg"
              _hover={{
                bg: "brand.500",
                color: "white",
              }}
              whiteSpace="normal"
              textAlign="left"
            >
              What does it mean to be called to ministry?
            </Button>

            <Button
              variant="outline"
              borderColor="brand.500"
              color="brand.500"
              justifyContent="flex-start"
              size="lg"
              _hover={{
                bg: "brand.500",
                color: "white",
              }}
              whiteSpace="normal"
              textAlign="left"
            >
              How can you tell for certain you are called?
            </Button>

            <Text color="brand.500">
              We walk with students through spiritual formation, academic
              grounding, and practical ministry preparation.
            </Text>

            <Button
              alignSelf="start"
              size="lg"
              bg="gold.500"
              color="earth.500"
              _hover={{ bg: "clay.500", color: "white" }}
            >
              Apply Now
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}