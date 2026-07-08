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
<Box bg="white" py={24}>
  <Container maxW="7xl">
    <Stack gap={10}>

      {/* Images */}
      <HStack
        gap={8}
        align="start"
        flexDir={{ base: "column", md: "row" }}
      >
        <Image
          src="/pray.jpeg"
          alt="Prayer"
          flex={1}
          h={{ base: "320px", lg: "668px" }}
          objectFit="cover"
          borderRadius="2xl"
          boxShadow="xl"
          mt={{ md: 10 }}
        />

        <Image
          src="/disern.jpg"
          alt="Library"
          flex={1}
          h={{ base: "380px", lg: "620px" }}
          objectFit="cover"
          borderRadius="2xl"
          boxShadow="xl"
        />
      </HStack>

      {/* Content */}
   <HStack
  align="start"
  gap={{ base: 10, lg: 16 }}
  flexDir={{ base: "column", md: "row" }}
>
  {/* Left */}
  <Stack
    flex={1}
    gap={6}
    maxW="540px"
  >
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
      fontSize={{ base: "3xl", md: "5xl" }}
      lineHeight="1.1"
      fontWeight="bold"
    >
      Discern Your Call to Ministry
    </Heading>

    <Text
      color="gray.600"
      fontSize={{ base: "md", md: "lg" }}
      lineHeight="2"
    >
      Ministry is more than a profession it is a calling from God. We
      walk alongside students through spiritual formation, rigorous
      theological study, and practical ministry preparation so they can
      faithfully serve Christ and His Church with wisdom, conviction,
      and humility.
    </Text>
  </Stack>

  {/* Right */}
  <Stack
    flex={1}
    gap={5}
    maxW="520px"
  >
    <Button
      variant="outline"
      justifyContent="flex-start"
      borderColor="brand.500"
      color="brand.500"
      py={4}
      px={4}
      h="auto"
      whiteSpace="normal"
      width='357px'
      textAlign="left"
      fontWeight="medium"
      _hover={{
        bg: "brand.500",
        color: "white",
      }}
    >
      What does it mean to be called to ministry?
    </Button>

    <Button
      variant="outline"
      justifyContent="flex-start"
      borderColor="brand.500"
      color="brand.500"
      py={4}
      px={4}
      width='377px'
      h="auto"
      whiteSpace="normal"
      textAlign="left"
      fontWeight="medium"
      _hover={{
        bg: "brand.500",
        color: "white",
      }}
    >
      How can you tell for certain you are called?
    </Button>

    <Button
      alignSelf="start"
      mt={3}
      size="lg"
      px={3}
      bg="gold.500"
      color="earth.500"
      _hover={{
        bg: "clay.500",
        color: "white",
      }}
    >
      Apply Now
    </Button>
  </Stack>
</HStack>

    </Stack>
  </Container>
</Box>
  );
}