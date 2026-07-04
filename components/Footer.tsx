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
    <Box bg="brand.700" color="white">

      <Container maxW="7xl">

        {/* MAIN FOOTER */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(4, 1fr)",
          }}
          gap={10}
          py={16}
        >

          {/* ABOUT */}
          <GridItem>
            <Heading size="md" mb={4}>
              Bethesda Theological College
            </Heading>

            <Text color="gray.300" mb={4}>
              Rooted in the Word, Ready for the World.
            </Text>

            <Text color="gray.400" fontSize="sm">
              We equip pastors, ministry leaders, and believers
              with sound biblical, theological, and practical training
              to serve the Church and society effectively.
            </Text>

            {/* SOCIALS */}
            <HStack mt={5} gap={4}>
              <Link href="#" _hover={{ color: "yellow.400" }}>
                <Icon as={FaFacebook} boxSize={5} />
              </Link>

              <Link href="#" _hover={{ color: "yellow.400" }}>
                <Icon as={FaInstagram} boxSize={5} />
              </Link>

              <Link href="#" _hover={{ color: "yellow.400" }}>
                <Icon as={FaXTwitter} boxSize={5} />
              </Link>

              <Link href="#" _hover={{ color: "yellow.400" }}>
                <Icon as={FaYoutube} boxSize={5} />
              </Link>

              <Link href="#" _hover={{ color: "yellow.400" }}>
                <Icon as={FaLinkedin} boxSize={5} />
              </Link>
            </HStack>
          </GridItem>

          {/* QUICK LINKS */}
          <GridItem>
            <Heading size="sm" mb={4}>
              Quick Links
            </Heading>

            <Stack gap={2}>
              <Link as={NextLink} href="/about" color="gray.300">
                About Us
              </Link>
              <Link as={NextLink} href="/" color="gray.300">
                Admissions
              </Link>
              <Link as={NextLink} href="/" color="gray.300">
                Contact
              </Link>
              <Link as={NextLink} href="/" color="gray.300">
                News & Events
              </Link>
              <Link as={NextLink} href="/" color="gray.300">
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
              <Text color="gray.300">Diploma in Theology</Text>
              <Text color="gray.300">Bachelor of Theology</Text>
              <Text color="gray.300">Masters in Divinity</Text>
              <Text color="gray.300">Church Leadership</Text>
              <Text color="gray.300">Christian Counseling</Text>
            </Stack>
          </GridItem>

          {/* CONTACT */}
          <GridItem>
            <Heading size="sm" mb={4}>
              Contact
            </Heading>

            <Stack gap={2}>
              <Text color="gray.300">
                Matuu, Machakos County
              </Text>

              <Text color="gray.300">
                info@bethesdacollege.org
              </Text>

              <Text color="gray.300">
                +254 XXX XXX XXX
              </Text>

              <Text color="gray.400" fontSize="sm" mt={2}>
                Office Hours: Mon - Fri (8:00 AM - 5:00 PM)
              </Text>

              <Button
                mt={3}
                colorScheme="yellow"
                size="sm"
                width="fit-content"
              >
                Partner With Us
              </Button>
            </Stack>
          </GridItem>
        </Grid>

        {/* DIVIDER LINE */}
        <Box borderTop="1px solid rgba(255,255,255,0.1)" />

        {/* BOTTOM BAR */}
        <Box
          py={6}
          display="flex"
          flexDirection={{
            base: "column",
            md: "row",
          }}
          justifyContent="space-between"
          alignItems={{
            base: "flex-start",
            md: "center",
          }}
          gap={4}
        >
          <Text color="gray.400" fontSize="sm">
            © {new Date().getFullYear()} Bethesda Theological College.
            All Rights Reserved.
          </Text>

          <HStack gap={6} flexWrap="wrap">
            <Link href="/privacy-policy" color="gray.400">
              Privacy Policy
            </Link>

            <Link href="/terms" color="gray.400">
              Terms of Use
            </Link>

            <Link href="/accessibility" color="gray.400">
              Accessibility
            </Link>

            <Text fontSize="sm" color="gray.400" display="flex" alignItems="center" gap={1}>
              Made with <Box as="span" color="red.400">♥</Box> by Beno
            </Text>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}