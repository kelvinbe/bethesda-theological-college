"use client";

import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const accreditations = [
  { name: "TVETA", img: "tiveta.png" },
  { name: "EAK", img: "eak.png" },
  { name: "ISO Certification", img: "iso.png" },
  { name: "KCPA", img: "kpca.png" },
];

export default function Accreditation() {
  return (
    <Box bg="brand.50" py={24}>
      <Container maxW="7xl">
        <Stack gap={12}>
          {/* Heading */}
          <Heading
            textAlign="center"
            color="brand.500"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            Accreditation & Recognition
          </Heading>

          {/* Description */}
          <Text
            textAlign="center"
            color="gray.700"
            maxW="3xl"
            mx="auto"
            lineHeight="1.9"
          >
            Bethesda Training College operates within recognized academic and
            ministry accreditation frameworks, ensuring quality theological and
            professional training.
          </Text>

          {/* Logos */}
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            gap={{ base: 8, md: 12 }}
            alignItems="center"
          >
            {accreditations.map((item) => (
              <Stack
                key={item.name}
                align="center"
                gap={4}
                transition="all 0.25s ease"
                _hover={{
                  transform: "translateY(-4px)",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  h={{ base: "60px", md: "80px" }}
                  objectFit="contain"
                  filter="grayscale(100%) opacity(0.6)"
                  transition="all 0.25s ease"
                  _hover={{
                    filter: "grayscale(0%) opacity(1)",
                    transform: "scale(1.05)",
                  }}
                />

                <Heading
                  size="sm"
                  color="brand.500"
                  textAlign="center"
                >
                  {/* {item.name} */}
                </Heading>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}