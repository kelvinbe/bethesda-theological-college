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
  {
    name: "Crossway",
    logo: "crossway.jpeg",
  },
  {
    name: "Intentional Discipling Africa (IDA)",
    logo: "ida.png",
  },
  {
    name: "Injili Ministries",
    logo: "logo.svg",
  },
  {
    name: "Ligonier",
    logo: "ligonair.png",
  },
  {
    name: "Christianbook",
    logo: "cb.png",
  },
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
        bgImage="url('/pattern.png')"
        bgSize="cover"
        bgPosition="center"
        zIndex={0}
      />

      {/* Overlay pattern */}
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/pattern.png')"
        bgRepeat="repeat"
        opacity={0.12}
        zIndex={1}
      />

      {/* Dark overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(to bottom, rgba(11,46,20,0.92), rgba(11,46,20,0.85))"
        zIndex={2}
      />

      {/* Content */}
      <Container maxW="7xl" position="relative" zIndex={3}>
        <Stack gap={12}>
          {/* Heading */}
          <Heading
            textAlign="center"
            color="gold.500"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            Our Partners
          </Heading>

          {/* Slider */}
          <Box overflow="hidden" position="relative">
            <HStack
              gap={8}
              w="max-content"
              animation={`${scroll} 25s linear infinite`}
            >
              {[...partners, ...partners].map((partner, i) => (
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
                  transition="all 0.35s ease"
                  filter="grayscale(100%) opacity(0.65)"
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow: "xl",
                    filter: "grayscale(0%) opacity(1)",
                    borderColor: "gold.500",
                  }}
                  border="1px solid"
                  borderColor="transparent"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
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