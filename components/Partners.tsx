"use client";

import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

const partners = [
  {
    name: "Crossway",
    logo: "/cross.png",
  },
  {
    name: "Intentional Discipling Africa (IDA)",
    logo: "/ida.png",
  },
  {
    name: "Injili Ministries",
    logo: "/logo.svg",
  },
  {
    name: "Ligonier",
    logo: "/ligonair.png",
  },
  {
    name: "Christianbook",
    logo: "/cb.png",
  },
];

export default function Partners() {
  return (
    <Box
      position="relative"
      py={{ base: 20, md: 28 }}
      overflow="hidden"
    >
      {/* Background */}
      <Box
        position="absolute"
        inset={0}
        // bgImage="url('/pattern.png')"
        bgSize="400px"
        backgroundPosition="center"
        bgRepeat="repeat"
      />

      {/* Dark Overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(112, 117, 111, 0.93)"
      />

      {/* Content */}
      <Container maxW="8xl" position="relative" zIndex={1}>
        <Stack gap={14}>
          <Heading
            textAlign="center"
            color="brand.700"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            Our Partners
          </Heading>

          <SimpleGrid
            columns={{ base: 2, md: 3, lg: 5 }}
            gap={{ base: 8, md: 12 }}
            alignItems="center"
          >
            {partners.map((partner) => (
              <Box
                key={partner.name}
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="120px"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  maxH="120px"
                  maxW="190px"
                  objectFit="contain"
                  filter="grayscale(100%)"
                  transition="all 0.3s ease"
                  _hover={{
                    filter: "grayscale(0%)",
                    transform: "scale(1.08)",
                  }}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}