
"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Box bg="brand.500" color="white">
      <Box
        minH="100vh"
        bgImage="url('/bible.jpeg')"
        bgSize="cover"
        backgroundPosition="center"
        position="relative"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.700" />
        <Container maxW="6xl" h="100%" position="relative">
          <Flex h="100vh" align="center">
            <Box maxW="650px">
              <Heading fontWeight="light" fontSize={{ base: "5xl", md: "6xl" }}>
                Forming Leaders.<br />Shaping the Church.
              </Heading>
              <Text mt={6} fontSize="xl">
                Rooted in Scripture. Forming leaders. Transforming the world.
              </Text>
              <Button mt={10} colorScheme="yellow">Explore Bethesda</Button>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box py={28}>
        <Container maxW="7xl">
          <Text textAlign="center" mb={16} textTransform="uppercase" letterSpacing="4px">
            Vision & Mission
          </Text>
          <SimpleGrid columns={{base:1,md:2}} spacing={16}>
            <Stack align="center">
              <Image src="\vision.jpeg" boxSize="320px" borderRadius="full" objectFit="cover"/>
              <Heading fontWeight="light">Our Vision</Heading>
              <Text textAlign="center">
                We envision a biblically-grounded African church led by faithful pastors
                who teach God's Word and disciple communities with wisdom.
              </Text>
            </Stack>
            <Stack align="center">
              <Image src="\mission.jpeg" boxSize="320px" borderRadius="full" objectFit="cover"/>
              <Heading fontWeight="light">Our Mission</Heading>
              <Text textAlign="center">
                To strengthen the African church through Gospel-centered theological
                education, leadership formation, and accessible biblical resources.
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Box bgImage="/images/values-bg.jpg" bgSize="cover" bgPos="center" position="relative" py={32}>
        <Box position="absolute" inset={0} bg="blackAlpha.700"/>
        <Container maxW="7xl" position="relative">
          <Grid templateColumns={{base:"1fr",lg:"repeat(3,1fr)"}}>
            <GridItem p={10}><Heading fontWeight="light" fontSize="5xl">Our Values</Heading></GridItem>
            {[
              ["Biblical Truth","Scripture is our final authority."],
              ["Leadership","Developing servant leaders."],
              ["Excellence","Academic and spiritual excellence."],
              ["Mission","Equipping churches across Africa."]
            ].map(([t,d])=>(
              <GridItem key={t} border="1px solid" borderColor="whiteAlpha.300" p={10}>
                <Heading size="md" mb={4}>{t}</Heading>
                <Text>{d}</Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box py={32}>
        <Container maxW="7xl">
          <SimpleGrid columns={{base:1,lg:2}} spacing={20} alignItems="center">
            <Box>
              <Heading fontWeight="light" fontSize={{base:"4xl",md:"6xl"}} mb={8}>
                Our Journey at Bethesda...
              </Heading>
              <Text lineHeight="2">
                Bethesda Theological College exists to prepare Christ-centered leaders
                through rigorous theological education, spiritual formation, and practical ministry.
              </Text>
            </Box>
            <Box position="relative">
              <Image src="/history.jpeg" borderRadius="xl"/>
              <Image src="/people3.jpg" position="absolute" w="220px" left="-20px" bottom="-30px" borderRadius="xl"/>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Box bg="brand.900" py={28}>
        <Container maxW="5xl">
          <Heading fontWeight="light" fontSize="5xl" mb={8}>Message from the President</Heading>
          <Text lineHeight="2" fontSize="lg">
            Welcome to Bethesda Theological College. Our commitment is to equip faithful
            servants of Christ through biblical truth, academic excellence, and a heart for mission.
          </Text>
        </Container>
      </Box>

      <Box py={28} textAlign="center">
        <Container maxW="3xl">
          <Heading fontWeight="light" fontSize="5xl" mb={6}>Partner With Us</Heading>
          <Text mb={10}>
            Join us in building a generation of Christ-centered leaders across Africa.
          </Text>
          <Button colorScheme="yellow" size="lg">Admissions & Partnerships</Button>
        </Container>
      </Box>
    </Box>
  );
}
