"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function MinistryCall() {
  return (
    <Box bg="white" py={{ base: 16, lg: 24 }}>
      <Container maxW="7xl">
        <HStack
          align="start"
          gap={{ base: 14, lg: 12 }}
          flexDir={{ base: "column", lg: "row" }}
        >
          {/* LEFT COLUMN */}
          <Stack flex={1} gap={8} w="full">
            <Image
              src="/pray.jpeg"
              alt="Prayer"
              w="100%"
              h={{
                base: "420px",
                sm: "480px",
                md: "560px",
                lg: "650px",
              }}
              objectFit="cover"
              objectPosition={{ base: "top center", lg: "center" }}
              borderRadius="2xl"
              boxShadow="xl"
            />

            <Stack gap={6}>
              <Text
                color="gold.500"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="0.15em"
                fontSize="sm"
              >
                Discover Your Calling
              </Text>

              <Heading
                color="earth.500"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                lineHeight="1.1"
                fontWeight="bold"
              >
                Discern Your Call to Ministry
              </Heading>

              <Text
                color="gray.600"
                fontSize={{ base: "md", lg: "lg" }}
                lineHeight="2"
              >
                Ministry is more than a profession—it is a calling from God.
                We walk alongside students through spiritual formation,
                rigorous theological study, and practical ministry preparation
                so they can faithfully serve Christ and His Church with wisdom,
                conviction, and humility.
              </Text>
            </Stack>
          </Stack>

          {/* RIGHT COLUMN */}
          <Stack flex={1} gap={8} w="full">
            <Image
              src="/disern.jpg"
              alt="Library"
              w="100%"
              h={{
                base: "420px",
                sm: "480px",
                md: "560px",
                lg: "620px",
              }}
              objectFit="cover"
              objectPosition={{ base: "top center", lg: "center" }}
              borderRadius="2xl"
              boxShadow="xl"
            />

            <Stack gap={5} w="full">
              <Button
                size="lg"
                bg="gold.500"
                color="earth.500"
                w="full"
                maxW={{ lg: "430px" }}
                py={7}
                whiteSpace="normal"
                textAlign="center"
                _hover={{
                  color: "white",
                  opacity: 0.9,
                }}
              >
                What does it mean to be called to ministry?
              </Button>

              <Button
                size="lg"
                bg="gold.500"
                color="earth.500"
                w="full"
                maxW={{ lg: "430px" }}
                py={7}
                whiteSpace="normal"
                textAlign="center"
                _hover={{
                  color: "white",
                  opacity: 0.9,
                }}
              >
                How can you tell for certain you are called?
              </Button>

              <Button
                alignSelf="start"
                mt={3}
                size="lg"
                px={10}
                bg="gold.500"
                color="earth.500"
                _hover={{
                  color: "white",
                }}
              >
                Apply Now
              </Button>
            </Stack>
          </Stack>
        </HStack>
      </Container>
    </Box>
  );
}