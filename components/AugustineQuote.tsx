"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function AugustineQuote() {
  return (
    <Box
      bgImage="url('/agustine.jpg')"
      bgSize="cover"
      bgPosition="center"
      position="relative"
      py={{ base: 16, md: 20 }}
    >
      <Box
        position="absolute"
        inset="0"
        bg="blackAlpha.700"
      />

      <Container
        maxW="3xl"
        position="relative"
        zIndex={1}
      >
        <Stack gap={6}>
          <Heading
            color="gold.500"
            textAlign="center"
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            Augustine of Hippo
          </Heading>

          <Text
            color="white"
            fontSize={{ base: "md", md: "xl" }}
            fontStyle="italic"
            textAlign="center"
          >
            "It is the duty, then, of the interpreter and teacher of Holy
            Scripture, the defender of the true faith and the opponent of
            error, both to teach what is right and to refute what is wrong,
            and in the performance of this task to conciliate the hostile, to
            rouse the careless, and to tell the ignorant both what is occurring
            and what is probable."
          </Text>

          <Text
            color="white"
            textAlign="center"
            fontSize={{ base: "sm", md: "md" }}
          >
            We believe transformational leadership begins with deep theological
            knowledge.
          </Text>

          <Heading
            color="gold.500"
            textAlign="center"
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Rooted in the Word,
            <br />
            Ready for the World
          </Heading>

          <Button
            alignSelf="center"
            bg="gold.500"
            color="earth.500"
            size="md"
          >
            Read our Doctrinal Statement
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}