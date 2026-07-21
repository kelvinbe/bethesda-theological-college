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
    image: "sus1.jpg",
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
 <Box
  py={{ base: 20, lg: 24 }}
  bgImage="url('/green.png')"
  bgSize="220px"
  bgRepeat={'repeat'}
  bgPosition="center"
  position="relative"
  
>
  <Box
    position="absolute"
    inset={0}
    bg="rgba(252,250,245,0.92)"
    zIndex={0}
  />
      <Container maxW="7xl">
        <Stack gap={8}>
          <Heading
  textAlign="center"
  fontWeight="900"
  color="brand.500"
  lineHeight={0.9}
  letterSpacing="-0.04em"
  fontSize={{
    base: "4xl",
    md: "6xl",
    lg: "8xl",
  }}
>
  Why
  BTC?
</Heading>

          <Stack
  maxW="700px"
  mx="auto"
  textAlign="center"
  color="brand.500"
  gap={6}
  fontSize={{
    base: "md",
    md: "xl",
  }}
  lineHeight="1.8"
  fontWeight="500"
>
  <Text>
    Across Africa, there is a vibrant and growing call to ministry, but a
    severe lack of resources to equip those who are called.
  </Text>

  <Text>
    Currently,{" "}
    <Text as="span" color="gold.500" fontWeight="700">
      70%
    </Text>{" "}
    of African pastors lack formal training, and{" "}
    <Text as="span" color="gold.500" fontWeight="700">
      85%
    </Text>{" "}
    cannot afford the tuition of existing Bible colleges.
  </Text>

  <Text>
    This critical gap leaves a staggering ratio of just one trained leader
    for every 600 congregants.
  </Text>

  <Text>
    Furthermore, traditional educational models often teach theology in
    isolation, leaving grassroots leaders without the practical,
    market-relevant skills needed to sustain their ministries or uplift their
    local economies.
  </Text>

  <Text
    color="gold.500"
    fontWeight="800"
    fontSize={{
      base: "xl",
      md: "2xl",
    }}
  >
    Bethesda Training College exists to rewrite this narrative.
  </Text>
</Stack>

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
                fontSize={'md'}
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
                  // h="220px"
                  aspectRatio={4 / 3}
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
                      color="earth.500"
                    size="md"
                    _hover={{
                      color: 'white',
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