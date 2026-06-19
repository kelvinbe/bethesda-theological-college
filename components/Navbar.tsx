"use client";

import {
  Box,
  Flex,
  Container,
  Link,
  HStack,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Container maxW="7xl">
        <Flex
          py={5}
          align="center"
          justify="space-between"
        >
          <Box
            fontSize="2xl"
            fontWeight="bold"
          >
            Bethesda
          </Box>

          <HStack gap={8}>
            <Link href="/">Home</Link>
            <Link href="/about">
              About
            </Link>
            <Link href="/academics">
              Academics
            </Link>
            <Link href="/admissions">
              Admissions
            </Link>
            <Link href="/partnerships">
              Partnerships
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}