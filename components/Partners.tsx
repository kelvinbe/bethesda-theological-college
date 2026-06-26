"use client";

import {
  Box,
  Container,
  Heading,
  Image,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const partners = [
  "cba.png",
  "ida.png",
  "logo.svg",
  "ligonair.png",
  "cb.png",
];

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

export default function Partners() {
  return (
    <Box position="relative" py={32} overflow="hidden">

      {/* Background image layer */}
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/partners-bg.jpg')"   // dark main image
        bgSize="cover"
        bgPosition="center"
        zIndex={0}
      />

      {/* Pattern overlay layer */}
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/pattern.png')"
        bgRepeat="repeat"
        opacity={0.15}
        zIndex={1}
      />

      {/* Dark overlay for readability */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6))"
        zIndex={2}
      />

      {/* Content */}
      <Container maxW="7xl" position="relative" zIndex={3}>
        <Stack gap={12}>
          <Heading
            textAlign="center"
            color="gold.500"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            Our Partners
          </Heading>

          <Box overflow="hidden" position="relative">
            <HStack
              gap={8}
              w="max-content"
              animation={`${scroll} 20s linear infinite`}
            >
              {[...partners, ...partners].map((logo, i) => (
                <Box
                  key={i}
                  minW="220px"
                  bg="white"
                  p={6}
                  borderRadius="xl"
                  boxShadow="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="all .3s"
                  _hover={{
                    transform: "translateY(-6px)",
                    boxShadow: "xl",
                  }}
                >
                  <Image
                    src={logo}
                    alt="Partner logo"
                    maxH="60px"
                    objectFit="contain"
                  />
                </Box>
              ))}
            </HStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}