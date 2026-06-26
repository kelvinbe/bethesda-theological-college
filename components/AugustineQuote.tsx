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
return ( <Box
     bgImage="url('/agustine.jpg')"
  bgSize="cover"
  backgroundPosition="center"
  position="relative"
  py={32}
 > <Box
     position="absolute"
     inset="0"
     bg="blackAlpha.700"
   />


  <Container
    maxW="5xl"
    position="relative"
    zIndex={1}
  >
    <Stack gap={8}>
      <Heading
        color="gold.500"
        textAlign="center"
      >
        Augustine of Hippo
      </Heading>

      <Text
        color="white"
        fontSize={{ base: "lg", md: "2xl" }}
        fontStyle="italic"
        textAlign="center"
      >
      "It is the duty, then, of the interpreter and teacher of Holy Scripture, 
      the defender of the true faith and the opponent of error, 
      both to teach what is right and to refute what is wrong, and in the performance of this task to conciliate the hostile, 
      to rouse the careless, and to tell the ignorant both what is occurring and what is probable."
      </Text>

      <Text
        color="white"
        textAlign="center"
      >
        We believe transformational leadership
        begins with deep theological knowledge.
      </Text>

      <Heading
        color="gold.500"
        textAlign="center"
      >
        Rooted in the Word,
        Ready for the World
      </Heading>

      <Button
        alignSelf="center"
        bg="gold.500"
        color="earth.500"
      >
        Read our Doctrinal Statement
      </Button>
    </Stack>
  </Container>
</Box>


);
}
