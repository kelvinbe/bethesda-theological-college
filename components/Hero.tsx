"use client";

import {
Box,
Button,
Container,
Heading,
Stack,
Text,
} from "@chakra-ui/react";

export default function HeroVideo() {
return ( <Box
   bg="earth.500"
   color="white"
   overflow="hidden"
 >
<Container maxW="7xl" py={{ base: 20, md: 28 }}>
<Stack
direction={{ base: "column", lg: "row" }}
gap={{ base: 10, md: 16 }}
align="center"
> <Stack flex="1" gap={6}> <Text
           color="gold.500"
           fontWeight="bold"
           textTransform="uppercase"
           letterSpacing="2px"
         >
Bethesda Training College </Text>

        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          lineHeight="1.1"
          color="white"
        >
          Rooted in the Word,
          <br />
          Ready for the World
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="whiteAlpha.900"
          maxW="600px"
        >
          Bethesda Training College equips leaders with
          biblical knowledge, practical competencies,
          and Christ-centered formation for service.
        </Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <Button
            size="lg"
            bg="gold.500"
            color="earth.500"
            _hover={{
              opacity: 0.9,
            }}
          >
            Apply Now
          </Button>

          <Button
            size="lg"
            variant="outline"
            borderColor="gold.500"
            color="gold.500"
            _hover={{
              bg: "gold.500",
              color: "earth.500",
            }}
          >
            Partner With Us
          </Button>
        </Stack>
      </Stack>

      <Box
        flex="1"
        overflow="hidden"
        borderRadius="2xl"
        boxShadow="2xl"
        border="2px solid"
        borderColor="brand.500"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src="vid.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
    </Stack>
  </Container>
</Box>


);
}
