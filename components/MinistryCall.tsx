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
          gap={{ base: 12, lg: 16 }}
          flexDir={{ base: "column", lg: "row" }}
        >
          {/* LEFT SIDE */}
          <Stack flex={1} w="full" gap={8}>
         

            <Stack gap={5}>
              <Text
                color="gold.500"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="0.15em"
                fontSize="lg"
              >
                Discover Your Calling
              </Text>

              <Heading
                color="earth.500"
                fontSize={{ base: "4xl", lg: "5xl" }}
                lineHeight="1.15"
                fontWeight="bold"
              >
                Discern Your Call to Ministry
              </Heading>

           
            </Stack>

            <Image
              src="/pray.jpeg"
              alt="Prayer"
              w="full"
              h={{ base: "400px", lg: "520px" }}
              objectFit="cover"
              borderRadius="2xl"
              boxShadow="xl"
            />
     <Button
              size="md"
              bg="gold.500"
              color="earth.500"
              w="full"
              maxW={{ lg: "430px" }}
              py={8}
              fontSize="md"
              whiteSpace="normal"
              textAlign="center"
              _hover={{
                color: "white",
                opacity: 0.9,
              }}
            >
              How can you tell for certain you are called?
            </Button>
   
          </Stack>

          {/* RIGHT SIDE */}
          <Stack flex={1} w="full" gap={8}>
            <Image
              src="/disern.jpg"
              alt="Library"
              w="full"
              h={{ base: "400px", lg: "520px" }}
              objectFit="cover"
              borderRadius="2xl"
              boxShadow="xl"
            />

            <Button
              size="lg"
              bg="gold.500"
              color="earth.500"
              w="full"
              py={8}
              fontSize="md"
              maxW={{ lg: "430px" }}

              whiteSpace="normal"
              textAlign="center"
              _hover={{
                color: "white",
                opacity: 0.9,
              }}
            >
              What does it mean to be called to ministry?
            </Button>

   

            {/* White space/content block from sketch */}
            <Box
              minH={{ lg: "260px" }}
              display="flex"
              alignItems="center"
            >
              <Text
                fontSize="md"
                lineHeight="2"
                color="gray.600"
              >
                Ministry is more than a profession, it is a calling from God.
                We walk alongside students through spiritual formation,
                rigorous theological study, and practical ministry preparation
                so they can faithfully serve Christ and His Church with wisdom,
                conviction, and humility.
                Explore your calling through prayer, theological education,
                and faithful service. Our programs are designed to equip
                future ministry leaders with biblical knowledge and practical
                experience.
              </Text>
            </Box>

            <Button
              size="lg"
              bg="gold.500"
              color="earth.500"
              w="full"
              maxW={{ lg: "430px" }}

              py={7}
              fontSize="md"
              _hover={{
                color: "white",
                opacity: 0.9,
              }}
            >
              Apply Now
            </Button>
          </Stack>
        </HStack>
      </Container>
    </Box>
  );
}