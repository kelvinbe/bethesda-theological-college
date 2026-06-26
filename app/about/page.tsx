"use client";

import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Box bg="earth.500" color="white">

      {/* HERO */}
      <Box
        minH="90vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={6}
      >
        <Stack spacing={6}>
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="light"
            color="gold.500"
          >
            About Bethesda Theological College
          </Heading>

          <Text maxW="2xl" color="whiteAlpha.900" fontSize="lg">
            Rooted in the Word. Forming leaders. Transforming the world.
          </Text>

        </Stack>
      </Box>

      {/* VISION + MISSION (LIKE YOUR IMAGE) */}
      <Box py={24} bg="brand.900">
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>

            {/* VISION */}
            <Box>
              <Heading
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="light"
                mb={6}
              >
                Our Vision
              </Heading>

              <Text fontSize="lg" color="whiteAlpha.900" lineHeight="1.9">
                We envision a biblically-grounded African church, where the Gospel
                is deeply rooted in every community, led by pastors who faithfully
                teach the Word of God and disciple their congregations to navigate
                cultural challenges with Biblical wisdom.
              </Text>
            </Box>

            {/* MISSION */}
            <Box>
              <Heading
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="light"
                mb={6}
              >
                Our Mission
              </Heading>

              <Text fontSize="lg" color="whiteAlpha.900" lineHeight="1.9">
                To strengthen the African church by producing and distributing
                accessible, Gospel-centered media and theological training in local
                languages.
              </Text>
            </Box>

          </SimpleGrid>
        </Container>
      </Box>

      {/* CORE IDENTITY (LESS BOXY) */}
      <Box py={28}>
        <Container maxW="5xl">
          <Stack spacing={16}>

            <Box>
              <Heading fontSize="3xl" mb={4} fontWeight="light">
                Who We Are
              </Heading>
              <Text fontSize="lg" color="whiteAlpha.900" lineHeight="1.9">
                Bethesda Theological College is a Christ-centered institution committed
                to biblical truth, leadership formation, and theological excellence.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="3xl" mb={4} fontWeight="light">
                Institutional Philosophy
              </Heading>
              <Text fontSize="lg" color="whiteAlpha.900" lineHeight="1.9">
                We believe theological education must integrate Scripture, character
                formation, and practical ministry.
              </Text>
            </Box>

          </Stack>
        </Container>
      </Box>

      {/* STORY SECTION */}
      <Box py={28} bg="brand.900">
        <Container maxW="4xl">
          <Stack spacing={16} textAlign="center">

            <Box>
              <Heading fontSize="3xl" mb={4} fontWeight="light">
                Message from the President
              </Heading>
              <Text fontSize="lg" color="whiteAlpha.900" lineHeight="1.9">
                A vision of raising leaders rooted in Scripture and prepared for global impact.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="3xl" mb={4} fontWeight="light">
                History
              </Heading>
              <Text fontSize="lg" color="whiteAlpha.900" lineHeight="1.9">
                Founded to strengthen theological education and ministry training across regions.
              </Text>
            </Box>

          </Stack>
        </Container>
      </Box>

      {/* FINAL CTA */}
      <Box py={32} textAlign="center">
        <Container maxW="3xl">
          <Heading fontSize="4xl" mb={6} fontWeight="light" color="gold.500">
            Partner With Us
          </Heading>

          <Text fontSize="lg" color="whiteAlpha.900">
            Join us in building a generation of Christ-centered leaders.
          </Text>

          <Badge mt={8} bg="gold.500" color="black" px={4} py={2}>
            Admissions • Training • Partnership
          </Badge>
        </Container>
      </Box>

    </Box>
  );
}