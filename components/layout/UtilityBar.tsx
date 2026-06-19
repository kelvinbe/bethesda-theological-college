"use client";

import { Box, Button, Container, HStack, Link } from "@chakra-ui/react";

export default function UtilityBar() {
  return (
    <Box bg="brand.500" color="white" py={2}>
      <Container maxW="7xl">
        <HStack justify="flex-end" gap={6}>
          <Link href="/portal">Student Portal</Link>
          <Link href="/contact">Contact</Link>

          <Button size="sm" bg="gold.500" color="black">
            Give / Donate
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}