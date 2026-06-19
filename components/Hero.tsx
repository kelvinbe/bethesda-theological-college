"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box
      minH="90vh"
      bg="brand.500"
      color="white"
      display="flex"
      alignItems="center"
    >
      <Container maxW="7xl">
        <Stack gap={6}>
          <Heading fontSize="4xl">
            Rooted in the Word,
            Ready for the World
          </Heading>

          <Text fontSize="lg" color="gray.200">
            Bethesda Training College equips leaders with
            biblical knowledge, practical skills, and
            Christ-centered formation for service in the Church,
            society, and the marketplace.
          </Text>

          <Stack direction="row" gap={4}>
            <Button bg="gold.500" color="black">
              Apply Now
            </Button>

            <Button
              border="1px solid"
              borderColor="gold.500"
              color="gold.500"
              variant="outline"
            >
              Partner With Us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}