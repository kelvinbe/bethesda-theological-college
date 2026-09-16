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
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";

import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaArrowUp,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa6";

import { useState, useEffect } from "react";

/* =========================================================
   RECOGNITION & PARTNERS
   ========================================================= */

const recognitionPartners = [
  {
    name: "TVETA",
    img: "/tiveta.png",
    large: false,
  },
  {
    name: "EAK",
    img: "/eak.png",
    large: false,
  },
  {
    name: "ISO Certification",
    img: "/iso.png",
    large: false,
  },
  {
    name: "KPCA",
    img: "/kpca.png",
    large: true,
  },
  {
    name: "Crossway",
    img: "/cross.png",
    large: true,
  },
  {
    name: "Intentional Discipling Africa",
    img: "/ida.png",
    large: false,
  },
  {
    name: "Injili Ministries",
    img: "/logo.svg",
    large: false,
  },
  {
    name: "Christianbook",
    img: "/cb.png",
    large: true,
  },
];

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      position="relative"
      inset={0}
      bgSize="400px"
      backgroundPosition="center"
      bgRepeat="repeat"
      bg="brand.50"
    >
      <Container
        maxW="109rem"
        position="relative"
        zIndex={1}
      >
        {/* =====================================================
            MAIN FOOTER
            ===================================================== */}

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(5, 1fr)",
          }}
          gap={{ base: 6, md: 6, lg: 7 }}
          ml={0}
          py={{ base: 8, md: 9 }}
        >
          {/* ===================================================
              ABOUT
              =================================================== */}

          <GridItem justifySelf="start">
            <Box
              display="flex"
              flexDir="column"
              alignItems="flex-start"
              textAlign="left"
              h="100%"
              mt={{ base: 0, md: -19 }}
              w="100%"
            >
              {/* =================================================
                  FOOTER LOGO
                  ================================================= */}

              <Box
                w={{
                  base: "150px",
                  md: "170px",
                  lg: "270px",
                }}
                overflow="visible"
                ml={{
                  base: 0,
                  md: "-55px",
                }}
              >
                <Image
                  src="/fot.png"
                  w="370px"
                  alt="Bethesda Training College"
                  objectFit="contain"
                />
              </Box>

              {/* =================================================
                  COLLEGE TITLE
                  ================================================= */}

              <Heading
                color="#000000"
                size="md"
                mb={3}
              >
                Bethesda Training College
              </Heading>

              {/* =================================================
                  DESCRIPTION
                  ================================================= */}

              <Text
                color="gray.700"
                fontSize="sm"
                lineHeight="1.7"
              >
                We equip pastors, ministry leaders, and believers with
                sound biblical, theological, and practical training to
                serve the Church and society effectively.
              </Text>
            </Box>
          </GridItem>

          {/* ===================================================
              QUICKLINKS
              =================================================== */}

          <GridItem>
            <Heading
              size="sm"
              mb={3}
              color="#000000"
              textTransform="uppercase"
            >
              QUICKLINKS
            </Heading>

            <Stack gap={2}>
              <Link
                as={NextLink}
                href="/about"
                color="gray.700"
              >
                About Us
              </Link>

              <Link
                as={NextLink}
                href="/"
                color="gray.700"
              >
                Admissions
              </Link>

              <Link
                as={NextLink}
                href="/"
                color="gray.700"
              >
                Contact
              </Link>

              <Link
                as={NextLink}
                href="/"
                color="gray.700"
              >
                News & Events
              </Link>

              <Link
                as={NextLink}
                href="/"
                color="gray.700"
              >
                Student Portal
              </Link>
            </Stack>
          </GridItem>

          {/* ===================================================
              COURSES
              =================================================== */}

          <GridItem>
            <Heading
              size="sm"
              mb={3}
              color="#000000"
              textTransform="uppercase"
            >
              COURSES
            </Heading>

            <Stack gap={2}>
              <Text color="gray.700">
                Diploma in Theology
              </Text>

              <Text color="gray.700">
                Bachelor of Theology
              </Text>

              <Text color="gray.700">
                Masters in Divinity
              </Text>

              <Text color="gray.700">
                Church Leadership
              </Text>

              <Text color="gray.700">
                Christian Counseling
              </Text>
            </Stack>
          </GridItem>

          {/* ===================================================
              CONTACT
              =================================================== */}

          <GridItem>
            <Heading
              size="sm"
              mb={3}
              color="#000000"
              textTransform="uppercase"
            >
              CONTACT
            </Heading>

            <Stack gap={2}>
              {/* Location */}

              <HStack
                gap={3}
                align="flex-start"
              >
                <Icon
                  as={FaLocationDot}
                  boxSize={4}
                  color="gold.500"
                  mt="2px"
                  flexShrink={0}
                />

                <Text
                  color="gray.700"
                  fontSize="sm"
                  lineHeight="1.5"
                >
                  Matuu, Machakos County
                </Text>
              </HStack>

              {/* Email */}

              <HStack
                gap={3}
                align="flex-start"
              >
                <Icon
                  as={FaEnvelope}
                  boxSize={4}
                  color="gold.500"
                  mt="2px"
                  flexShrink={0}
                />

                <Link
                  href="mailto:info@bethesdacollege.org"
                  color="gray.700"
                  fontSize="sm"
                  lineHeight="1.5"
                  _hover={{
                    color: "gold.500",
                  }}
                >
                  info@bethesdacollege.org
                </Link>
              </HStack>

              {/* Phone */}

              <HStack
                gap={3}
                align="flex-start"
              >
                <Icon
                  as={FaPhone}
                  boxSize={4}
                  color="gold.500"
                  mt="2px"
                  flexShrink={0}
                />

                <Text
                  color="gray.700"
                  fontSize="sm"
                  lineHeight="1.5"
                >
                  +254 XXX XXX XXX
                </Text>
              </HStack>

              {/* Office Hours */}

              <HStack
                gap={3}
                align="flex-start"
              >
                <Icon
                  as={FaClock}
                  boxSize={4}
                  color="gold.500"
                  mt="2px"
                  flexShrink={0}
                />

                <Text
                  color="gray.700"
                  fontSize="sm"
                  lineHeight="1.5"
                >
                  Mon - Fri
                  <br />
                  8:00 AM - 5:00 PM
                </Text>
              </HStack>
            </Stack>
          </GridItem>

          {/* ===================================================
              CONNECT WITH US
              =================================================== */}

          <GridItem>
            <Heading
              size="sm"
              mb={3}
              color="#000000"
              textTransform="uppercase"
            >
              CONNECT WITH US
            </Heading>

            {/* Social Media Icons */}

            <HStack
              gap={4}
              flexWrap="wrap"
              align="center"
            >
              <Link
                href="#"
                aria-label="Facebook"
                color="gray.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="all 0.2s ease"
                _hover={{
                  color: "gold.500",
                  transform: "translateY(-2px)",
                }}
              >
                <Icon
                  as={FaFacebook}
                  boxSize={5}
                />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                color="gray.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="all 0.2s ease"
                _hover={{
                  color: "gold.500",
                  transform: "translateY(-2px)",
                }}
              >
                <Icon
                  as={FaInstagram}
                  boxSize={5}
                />
              </Link>

              <Link
                href="#"
                aria-label="X"
                color="gray.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="all 0.2s ease"
                _hover={{
                  color: "gold.500",
                  transform: "translateY(-2px)",
                }}
              >
                <Icon
                  as={FaXTwitter}
                  boxSize={5}
                />
              </Link>

              <Link
                href="#"
                aria-label="YouTube"
                color="gray.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="all 0.2s ease"
                _hover={{
                  color: "gold.500",
                  transform: "translateY(-2px)",
                }}
              >
                <Icon
                  as={FaYoutube}
                  boxSize={5}
                />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                color="gray.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="all 0.2s ease"
                _hover={{
                  color: "gold.500",
                  transform: "translateY(-2px)",
                }}
              >
                <Icon
                  as={FaLinkedin}
                  boxSize={5}
                />
              </Link>
            </HStack>

            {/* Partner With Us */}

            <Button
              mt={4}
              size="md"
              variant="outline"
              borderColor="gold.500"
              color="gold.500"
              px={6}
              _hover={{
                bg: "gold.500",
                color: "earth.500",
              }}
            >
              Partner With Us
            </Button>

            {/* Tagline */}

            <Text
              color="earth.300"
              fontSize="sm"
              mt={4}
              lineHeight="1.6"
            >
              Rooted in the Word, Ready for the World.
            </Text>
          </GridItem>
        </Grid>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <Box
          borderTop="1px solid"
          borderColor="brand.500"
        />

        {/* =====================================================
            RECOGNITION & PARTNERS
            ===================================================== */}

        <Box py={{ base: 6, md: 7 }}>
          <Stack
            gap={6}
            align="center"
          >
            {/* Section Heading */}

            <Text
              fontSize="sm"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="#000000"
              fontWeight="600"
              textAlign="center"
            >
              Recognition & Partners
            </Text>

            {/* =================================================
                DESKTOP LOGOS
                ================================================= */}

            <Box
              display={{
                base: "none",
                md: "flex",
              }}
              justifyContent="space-between"
              alignItems="center"
              w="full"
              gap={4}
            >
              {recognitionPartners.map((item) => (
                <Box
                  key={item.name}
                  flex="1"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  minH="75px"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    maxH={
                      item.large
                        ? "95px"
                        : "70px"
                    }
                    maxW={
                      item.large
                        ? "180px"
                        : "150px"
                    }
                    objectFit="contain"
                    filter="grayscale(100%) opacity(.7)"
                    transition="all .3s"
                    _hover={{
                      filter:
                        "grayscale(0%) opacity(1)",
                      transform: "scale(1.05)",
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* =================================================
                MOBILE LOGOS
                ================================================= */}

            <SimpleGrid
              display={{
                base: "grid",
                md: "none",
              }}
              columns={2}
              gap={6}
              w="full"
            >
              {recognitionPartners.map((item) => (
                <Box
                  key={item.name}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  minH="70px"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    maxH={
                      item.large
                        ? "90px"
                        : "65px"
                    }
                    maxW={
                      item.large
                        ? "165px"
                        : "125px"
                    }
                    objectFit="contain"
                    filter="grayscale(100%) opacity(.7)"
                    transition="all .3s"
                    _hover={{
                      filter:
                        "grayscale(0%) opacity(1)",
                      transform: "scale(1.05)",
                    }}
                  />
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Box>

        {/* =====================================================
            BOTTOM DIVIDER
            ===================================================== */}

        <Box
          borderTop="1px solid"
          borderColor="brand.500"
        />

        {/* =====================================================
            BOTTOM BAR
            ===================================================== */}

        <Box
          py={3}
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
          gap={3}
        >
          {/* Copyright */}

          <Text
            fontSize="2xs"
            color="gray.700"
            lineHeight="1.4"
          >
            © {new Date().getFullYear()} Bethesda Training
            College. All Rights Reserved.
          </Text>

          {/* Legal Links */}

          <HStack
            fontSize="2xs"
            gap={{
              base: 3,
              md: 5,
            }}
            flexWrap="wrap"
          >
            <Link
              fontSize="2xs"
              href="/privacy-policy"
              color="gray.700"
            >
              Privacy Policy
            </Link>

            <Link
              fontSize="2xs"
              href="/terms"
              color="gray.700"
            >
              Terms of Use
            </Link>

            <Link
              fontSize="2xs"
              href="/accessibility"
              color="gray.700"
            >
              Accessibility
            </Link>

            <Text
              fontSize="2xs"
              color="gray.700"
              display="flex"
              alignItems="center"
              gap={1}
            >
              Made with{" "}
              <Box
                as="span"
                color="red.500"
              >
                ♥
              </Box>{" "}
              by Beno
            </Text>
          </HStack>
        </Box>
      </Container>

      {/* =======================================================
          SCROLL TO TOP
          ======================================================= */}

      {showButton && (
        <IconButton
          aria-label="Scroll to top"
          onClick={scrollToTop}
          position="fixed"
          bottom={{
            base: 5,
            md: 8,
          }}
          right={{
            base: 5,
            md: 8,
          }}
          borderRadius="full"
          size="lg"
          bg="gold.500"
          color="white"
          shadow="xl"
          zIndex={1000}
          _hover={{
            bg: "gold.600",
            transform: "translateY(-3px)",
          }}
          _active={{
            transform: "translateY(0)",
          }}
        >
          <FaArrowUp />
        </IconButton>
      )}
    </Box>
  );
}