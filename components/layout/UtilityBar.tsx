"use client";

import { Box, Button, Container, HStack, Link } from "@chakra-ui/react";

export default function UtilityBar() {
  return (
    <Box bg="brand.500" color="white" py={2}>
      <Container maxW="7xl">
        <HStack
          justify="flex-end"
          gap={4}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          fontSize={{ base: "sm", md: "md" }}
        >
          <Link href="/portal">Student Portal</Link>
          <Link href="/contact">Contact</Link>

          <Button
            size="sm"
            bg="gold.500"
            color="black"
            w={{ base: "full", md: "auto" }}
          >
            Give / Donate
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}