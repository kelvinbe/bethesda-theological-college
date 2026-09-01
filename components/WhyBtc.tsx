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
      bgSize="1000px"
      bgRepeat="repeat"
      position="relative"
    >
      {/* Background Overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(252, 250, 245, 0.94)"
        zIndex={0}
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack gap={8}>
          
          {/* Section Heading */}
          <Heading
            textAlign="center"
            fontWeight="900"
            color="brand.500"
            lineHeight={0.9}
            letterSpacing="-0.04em"
            fontSize={{
              base: "4xl",
              md: "4xl",
              lg: "4xl",
            }}
          >
            Why BTC?
          </Heading>

          {/* Main Text */}
          <Stack
            maxW="2000px"
            mx="auto"
            textAlign="center"
            color="brand.500"
            gap={6}
            fontSize="16px"
            lineHeight="1.8"
            fontWeight="500"
          >
            <Text fontSize="19px">
              Across Africa, there is a vibrant and growing call to ministry,
              but a severe lack of resources to equip those who are called.
            </Text>

            <Text fontSize="19px">
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

            <Text fontSize="19px">
              This critical gap leaves a staggering ratio of just one trained
              leader for every 600 congregants.
            </Text>

            <Text fontSize="19px">
              Furthermore, traditional educational models often teach theology
              in isolation, leaving grassroots leaders without the practical,
              market-relevant skills needed to sustain their ministries or
              uplift their local economies.
            </Text>

            {/* Closing Statement */}
            <Text
              color="gold.500"
              fontWeight="800"
              fontSize="18px"
              lineHeight="1.6"
            >
              Bethesda Training College exists to rewrite this narrative.
            </Text>
          </Stack>

          {/* Cards */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={8}
            mt={10}
          >
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
                  aspectRatio={4 / 3}
                  objectFit="cover"
                />

                <Box
                  p={8}
                  display="flex"
                  flexDirection="column"
                  flex="1"
                >
                  {/* Card Heading */}
                  <Heading
                    fontSize="18px"
                    fontWeight="700"
                    color="gold.500"
                    mb={4}
                  >
                    {card.title}
                  </Heading>

                  {/* Card Body */}
                  <Text
                    color="brand.500"
                    fontSize="16px"
                    lineHeight="1.7"
                    flex="1"
                  >
                    {card.description}
                  </Text>

                  {/* Button */}
                  <Button
                    mt={6}
                    alignSelf="flex-start"
                    bg="gold.500"
                    color="earth.500"
                    fontSize="16px"
                    size="md"
                    _hover={{
                      color: "white",
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