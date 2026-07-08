"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const cards = [
  {
    title: "Holistic Equipping",
    image: "holistic.jpg",
    description:
      "We integrate deep biblical knowledge with hands-on vocational training and ethical leadership formation.",
  },
  {
    title: "Sustainable Impact",
    image: "sustain2.jpg",
    description:
      "Our graduates do not leave dependent on ongoing financial aid; they graduate with actionable, TVET-accredited skills to serve both the Church and the marketplace.",
  },
  {
    title: "Accessible Learning",
    image: "access.jpg",
    description:
      "Through a blended delivery mode of online, informal, and in-person classes, we minimize costs and meet students exactly where they are.",
  },
];

export default function WhyBTC() {
  return (
    <Box py={24} bg="white">
      <Container maxW="7xl">
        <Stack gap={8}>
          <Heading
            color="gold.500"
            textAlign="center"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            Why BTC?
          </Heading>

          <Text
            fontSize="xl"
            color="brand.500"
            textAlign="center"
            maxW="6xl"
            mx="auto"
            lineHeight="tall"
          >
            Across Africa, there is a vibrant and growing call to ministry,
            but a severe lack of resources to equip those who are called.
            Currently, 70% of African pastors lack formal training, and 85%
            cannot afford the tuition of existing Bible colleges. 
            <Text>
            This critical gap leaves a staggering ratio of just one trained leader for every
            600 congregants. Furthermore, traditional educational models often
            teach theology in isolation, leaving grassroots leaders without the
            practical, market-relevant skills needed to sustain their ministries
            or uplift their local economies. Bethesda Training College exists
            to rewrite this narrative.
            </Text>
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mt={10}>
            {cards.map((card) => (
              <Box
                key={card.title}
                borderRadius="xl"
                overflow="hidden"
                borderTop="6px solid"
                borderColor="gold.500"
                shadow="lg"
                bg="white"
                display="flex"
                flexDirection="column"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-6px)",
                  shadow: "xl",
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  w="100%"
                  h="220px"
                  objectFit="cover"
                />

                <Box
                  p={8}
                  display="flex"
                  flexDirection="column"
                  flex="1"
                >
                  <Heading
                    size="lg"
                    color="gold.500"
                    mb={4}
                  >
                    {card.title}
                  </Heading>

                  <Text
                    color="brand.500"
                    lineHeight="tall"
                    flex="1"
                  >
                    {card.description}
                  </Text>

                  <Button
                    mt={6}
                    alignSelf="flex-start"
                    bg="gold.500"
                    color="white"
                    size="md"
                    _hover={{
                      bg: "gold.600",
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}