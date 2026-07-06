"use client";

import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://facebook.com",
    description: "Updates, events, and announcements",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com",
    description: "Campus life and ministry moments",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    href: "https://x.com",
    description: "News, insights, and theological reflections",
  },
];

export default function QuickLinks() {
  return (
    <Box bg="white" py={{ base: 16, md: 24 }}>
      <Container maxW="7xl">
        <Stack gap={10} textAlign="center">
          {/* Section Label */}
          <Text
            color="gold.500"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="0.2em"
          >
            Stay Connected
          </Text>

          {/* Heading */}
          <Heading color="brand.500" fontSize={{ base: "2xl", md: "4xl" }}>
            Quick Links
          </Heading>

          <Text color="gray.700" maxW="2xl" mx="auto" lineHeight="1.9">
            Follow Bethesda Theological College across our platforms for updates,
            insights, and ministry highlights.
          </Text>

          {/* Cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} pt={4}>
            {links.map((link) => (
              <Link
                as={NextLink}
                key={link.name}
                href={link.href}
                _hover={{ textDecoration: "none" }}
              >
                <Box
                  position="relative"
                  bg="white"
                  borderRadius="2xl"
                  p={10}
                  border="1px solid"
                  borderColor="brand.100"
                  overflow="hidden"
                  transition="all 0.35s ease"
                  _hover={{
                    transform: "translateY(-10px)",
                    borderColor: "gold.500",
                    boxShadow: "0 20px 40px rgba(11, 46, 20, 0.15)",
                  }}
                >
                  {/* subtle top glow bar */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    height="4px"
                    bg="linear-gradient(90deg, #D4AF37, #0B2E14)"
                    opacity={0.9}
                  />

                  <VStack gap={4}>
                    {/* Icon */}
                    <Box
                      color="gold.500"
                      transition="all 0.3s ease"
                      _hover={{
                        transform: "scale(1.15)",
                        color: "brand.500",
                      }}
                    >
                      <link.icon size="38px" />
                    </Box>

                    {/* Title */}
                    <Heading size="md" color="brand.500">
                      {link.name}
                    </Heading>

                    {/* Description */}
                    <Text
                      color="gray.600"
                      fontSize="sm"
                      lineHeight="1.7"
                      textAlign="center"
                    >
                      {link.description}
                    </Text>
                  </VStack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}