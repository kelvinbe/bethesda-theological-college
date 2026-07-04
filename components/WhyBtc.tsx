"use client";

import {
Box,
Container,
Heading,
SimpleGrid,
Stack,
Text,
} from "@chakra-ui/react";

export default function WhyBTC() {
return ( <Box py={24} bg="white"> <Container maxW="7xl"> <Stack gap={8}>
<Heading
color="gold.500"
textAlign="center"
fontSize={{ base: "2xl", md: "4xl" }}
>
Why BTC? </Heading>


      <Text
        fontSize="lg"
        color="brand.500"
        textAlign="center"
        maxW="4xl"
        mx="auto"
      >
       Across Africa, there is a vibrant and growing call to ministry, 
       but a severe lack of resources to equip those who are called. 
       Currently, 70% of African pastors lack formal training, and 85% cannot afford the tuition of existing Bible colleges.
      This critical gap leaves a staggering ratio of just one trained leader for every 600 congregants. 
Furthermore, traditional educational models often teach theology in isolation, 
leaving grassroots leaders without the practical, 
market-relevant skills needed to sustain their ministries or uplift their local economies.

      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={8}
        mt={10}
      >
        <Box
          p={8}
          borderRadius="xl"
          borderTop="6px solid"
          borderColor="gold.500"
          shadow="md"
        >
          <Heading
            size="lg"
            color="gold.500"
            mb={4}
          >
            Holistic Equipping
          </Heading>

          <Text color="brand.500">
           We integrate deep biblical knowledge with hands-on vocational training and ethical leadership formation.
          </Text>
        </Box>

        <Box
          p={8}
          borderRadius="xl"
          borderTop="6px solid"
          borderColor="gold.500"
          shadow="md"
        >
          <Heading
            size="lg"
            color="gold.500"
            mb={4}
          >
            Sustainable Impact
          </Heading>

          <Text color="brand.500">
            Our graduates do not leave dependent on ongoing financial aid; 
            they graduate with actionable, 
            TVET-accredited skills to serve both the Church and the marketplace
          </Text>
        </Box>

        <Box
          p={8}
          borderRadius="xl"
          borderTop="6px solid"
          borderColor="gold.500"
          shadow="md"
        >
          <Heading
            size="lg"
            color="gold.500"
            mb={4}
          >
            Accessible Learning
          </Heading>

          <Text color="brand.500">
            Through a blended delivery mode of online, informal, and in-person classes, we minimize costs and meet students exactly where they are.
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  </Container>
</Box>


);
}
