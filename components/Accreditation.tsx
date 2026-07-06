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
  { name: "ISO Certification", img: "iso.jpeg" },
  { name: "Kenya Counseling and Psychological Association", img: "kpca.jpeg" },
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
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={10}>
            {accreditations.map((item) => (
              <Box
                key={item.name}
                bg="white"
                p={8}
                borderRadius="2xl"
                textAlign="center"
                border="1px solid"
                borderColor="brand.100"
                transition="all 0.25s ease"
                filter="grayscale(100%) opacity(0.6)"
                _hover={{
                  transform: "translateY(-6px)",
                  filter: "grayscale(0%) opacity(1)",
                  borderColor: "gold.500",
                  boxShadow: "lg",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  h="80px"
                  mx="auto"
                  objectFit="contain"
                />

                <Heading
                  mt={6}
                  size="sm"
                  color="brand.500"
                >
                  {item.name}
                </Heading>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}