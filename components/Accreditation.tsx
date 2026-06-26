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
];

export default function Accreditation() {
return ( <Box bg="earth.500" py={24}> <Container maxW="7xl"> <Stack gap={12}>
<Heading
textAlign="center"
color="gold.500"
fontSize={{ base: "2xl", md: "4xl" }}
>
Accreditation & Recognition </Heading>


      <Text
        textAlign="center"
        color="whiteAlpha.800"
        maxW="3xl"
        mx="auto"
      >
        Bethesda Training College operates within recognized
        academic and ministry accreditation frameworks.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
        {accreditations.map((item) => (
          <Box
            key={item.name}
            bg="white"
            p={8}
            borderRadius="2xl"
            textAlign="center"
            borderTop="4px solid"
            borderColor="gold.500"
            _hover={{ transform: "translateY(-4px)" }}
            transition="0.2s"
          >
            <Image
              src={item.img}
              alt={item.name}
              h="80px"
              mx="auto"
            />

            <Heading mt={6} size="md" color="earth.500">
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
