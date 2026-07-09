"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
  Text,
  HStack,
  Button,
  Icon,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <Box
      position="relative"
        inset={0}
        bgImage="url('/green.png')"
        bgSize="400px"
        backgroundPosition="center"
        bgRepeat="repeat"
    >
      {/* Light overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(250,248,243,0.93)"
        backdropFilter="blur(2px)"
        zIndex={0}
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        {/* MAIN FOOTER */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(4, 1fr)",
          }}
          gap={14}
          py={16}
        >
          {/* ABOUT */}
          <GridItem>
            <Box
              display="flex"
              flexDir="column"
              alignItems="center"
              textAlign="center"
              h="100%"
              mt={-16}
            >
              <Image
                src="/fot.png"
                boxSize={{ base: "59px", md: "195px" }}
                alt="Bethesda Training College"
              />

              <Heading color="earth.900" size="md" mb={4}>
                Bethesda Training College
              </Heading>

              <Text color="earth.300" mb={4}>
                Rooted in the Word, Ready for the World.
              </Text>

              <Text color="gray.700" fontSize="sm">
                We equip pastors, ministry leaders, and believers with sound
                biblical, theological, and practical training to serve the
                Church and society effectively.
              </Text>

              <HStack mt={5} gap={4}>
                <Link href="#" _hover={{ color: "yellow.500" }}>
                  <Icon as={FaFacebook} boxSize={5} />
                </Link>

                <Link href="#" _hover={{ color: "yellow.500" }}>
                  <Icon as={FaInstagram} boxSize={5} />
                </Link>

                <Link href="#" _hover={{ color: "yellow.500" }}>
                  <Icon as={FaXTwitter} boxSize={5} />
                </Link>

                <Link href="#" _hover={{ color: "yellow.500" }}>
                  <Icon as={FaYoutube} boxSize={5} />
                </Link>

                <Link href="#" _hover={{ color: "yellow.500" }}>
                  <Icon as={FaLinkedin} boxSize={5} />
                </Link>
              </HStack>
            </Box>
          </GridItem>

          {/* QUICK LINKS */}
          <GridItem>
            <Heading size="sm" mb={4}>
              Quick Links
            </Heading>

            <Stack gap={2}>
              <Link as={NextLink} href="/about" color="gray.700">
                About Us
              </Link>

              <Link as={NextLink} href="/" color="gray.700">
                Admissions
              </Link>

              <Link as={NextLink} href="/" color="gray.700">
                Contact
              </Link>

              <Link as={NextLink} href="/" color="gray.700">
                News & Events
              </Link>

              <Link as={NextLink} href="/" color="gray.700">
                Student Portal
              </Link>
            </Stack>
          </GridItem>

          {/* PROGRAMS */}
          <GridItem>
            <Heading size="sm" mb={4}>
              Programs
            </Heading>

            <Stack gap={2}>
              <Text color="gray.700">Diploma in Theology</Text>
              <Text color="gray.700">Bachelor of Theology</Text>
              <Text color="gray.700">Masters in Divinity</Text>
              <Text color="gray.700">Church Leadership</Text>
              <Text color="gray.700">Christian Counseling</Text>
            </Stack>
          </GridItem>

          {/* CONTACT */}
          <GridItem>
            <Heading size="sm" mb={4}>
              Contact
            </Heading>

            <Stack gap={2}>
              <Text color="gray.700">Matuu, Machakos County</Text>

              <Text color="gray.700">info@bethesdacollege.org</Text>

              <Text color="gray.700">+254 XXX XXX XXX</Text>

              <Text color="gray.700" fontSize="sm" mt={2}>
                Office Hours: Mon - Fri (8:00 AM - 5:00 PM)
              </Text>

              <Button mt={3}
              size="lg"
              variant="outline"
              borderColor="gold.500"
              color="gold.500"
              _hover={{
                bg: "gold.500",
                color: "earth.500",
              }}>
                Partner With Us
              </Button>
            </Stack>
          </GridItem>
        </Grid>

        {/* Divider */}
        <Box borderTop="1px solid rgba(0,0,0,0.12)" />

        {/* Bottom Bar */}
        <Box
          py={6}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "center" }}
          gap={4}
        >
          <Text color="gray.700" fontSize="sm">
            © {new Date().getFullYear()} Bethesda Training College. All Rights
            Reserved.
          </Text>

          <HStack gap={6} flexWrap="wrap">
            <Link href="/privacy-policy" color="gray.700">
              Privacy Policy
            </Link>

            <Link href="/terms" color="gray.700">
              Terms of Use
            </Link>

            <Link href="/accessibility" color="gray.700">
              Accessibility
            </Link>

            <Text
              fontSize="sm"
              color="gray.700"
              display="flex"
              alignItems="center"
              gap={1}
            >
              Made with{" "}
              <Box as="span" color="red.500">
                ♥
              </Box>{" "}
              by Beno
            </Text>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}