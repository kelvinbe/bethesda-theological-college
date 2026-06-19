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
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="green.950" color="white" mt={24}>
      <Container maxW="7xl">
        {/* Main Footer */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(4, 1fr)",
          }}
          gap={10}
          py={16}
        >
          {/* College Info */}
          <GridItem>
            <Heading size="md" mb={4}>
              Bethesda Theological College
            </Heading>

            <Text color="gray.300" mb={4}>
              Rooted in the Word, Ready for the World.
            </Text>

            <Text color="gray.400" fontSize="sm">
              Equipping pastors, church leaders, and communities
              through biblical, theological, and vocational
              education.
            </Text>
          </GridItem>

          {/* Quick Links */}
          <GridItem>
            <Heading size="sm" mb={4}>
              Explore
            </Heading>

            <Stack gap={2}>
              <Link as={NextLink} href="/about">
                About Us
              </Link>

              <Link as={NextLink} href="/academics">
                Academics
              </Link>

              <Link as={NextLink} href="/admissions">
                Admissions
              </Link>

              <Link as={NextLink} href="/partnerships">
                Partnerships
              </Link>

              <Link as={NextLink} href="/contact">
                Contact
              </Link>
            </Stack>
          </GridItem>

          {/* Resources */}
          <GridItem>
            <Heading size="sm" mb={4}>
              Resources
            </Heading>

            <Stack gap={2}>
              <Link as={NextLink} href="/statement-of-faith">
                Statement of Faith
              </Link>

              <Link as={NextLink} href="/impact">
                Impact Stories
              </Link>

              <Link as={NextLink} href="/reports">
                Annual Reports
              </Link>

              <Link as={NextLink} href="/student-portal">
                Student Portal
              </Link>

              <Link as={NextLink} href="/news">
                News & Updates
              </Link>
            </Stack>
          </GridItem>

          {/* Contact */}
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

              <Button
                mt={3}
                colorScheme="yellow"
                size="sm"
                width="fit-content"
              >
                Give / Donate
              </Button>
            </Stack>
          </GridItem>
        </Grid>

        {/* Accreditation & Partners */}
        {/* <Divider borderColor="whiteAlpha.300" /> */}

        <Box py={8} divideY="2px">
          <Heading size="sm" mb={4}>
            Accreditation & Partners
          </Heading>

          <HStack
            gap={6}
            flexWrap="wrap"
            color="gray.400"
          >
            <Text>TVETA</Text>
            <Text>ISO Certification</Text>
            <Text>Crossway</Text>
            <Text>Ligonier</Text>
            <Text>Christianbook</Text>
          </HStack>
        </Box>

        {/* <Divider borderColor="whiteAlpha.300" /> */}

        {/* Bottom Bar */}
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
          <Text color="gray.500" fontSize="sm">
            © {new Date().getFullYear()} Bethesda Theological College.
            All Rights Reserved.
          </Text>

          <HStack gap={6}>
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms of Use
            </Link>

            <Link href="/accessibility">
              Accessibility
            </Link>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}