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
  VStack,
  IconButton,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa6";
import { useState, useEffect } from "react";

const accreditations = [
  { name: "TVETA", img: "/tiveta.png" },
  { name: "EAK", img: "/eak.png" },
  { name: "ISO Certification", img: "/iso.png" },
  { name: "KPCA", img: "/kpca.png" },
];

const partners = [
  { name: "Crossway", logo: "/cross.png" },
  { name: "Intentional Discipling Africa", logo: "/ida.png" },
  { name: "Injili Ministries", logo: "/logo.svg" },
  { name: "Ligonier", logo: "/ligonair.png" },
  { name: "Christianbook", logo: "/cb.png" },
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
      <Container maxW="7xl" position="relative" zIndex={1}>
        {/* MAIN FOOTER */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(5, 1fr)",
          }}
          gap={{ base: 10, md: 8, lg: 10 }}
          ml={{ base: 0, lg: -10 }}
          py={16}
        >
          {/* ABOUT */}
        <GridItem justifySelf="start">
  <Box
    display="flex"
    flexDir="column"
    alignItems="flex-start"
    textAlign="left"
    h="100%"
    mt={{ base: 0, md: -19 }}
  >
    <Image

        src="/fot.png"
  w={{ base: "280px", sm: "200px", md: "195px", lg: "220px" }}
  alt="Bethesda Training College"
  ml={{ base: "-70px", sm: "-50px", md: "-55px", lg: "-75px" }}
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

              <Button
                mt={3}
                size="lg"
                variant="outline"
                borderColor="gold.500"
                color="gold.500"
                _hover={{
                  bg: "gold.500",
                  color: "earth.500",
                }}
              >
                Partner With Us
              </Button>
            </Stack>
          </GridItem>

          {/* CONNECT WITH US */}
          <GridItem>
            <Heading size="sm" mb={4}>
              Connect With Us
            </Heading>

            <HStack gap={4} flexWrap="wrap">
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

            <Text
              color="earth.300"
              fontSize="sm"
              mt={5}
              lineHeight="1.6"
            >
              Rooted in the Word, Ready for the World.
            </Text>
          </GridItem>
        </Grid>

        {/* Divider */}
        <Box borderTop="1px solid" borderColor="brand.500" />

        {/* Trust Section */}
        <Box py={{ base: 10, md: 10 }}>
          <Stack gap={10} align="center">
            {/* Accreditation */}
            <Text
              fontSize="sm"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="gray.500"
              fontWeight="600"
            >
              Accreditation & Recognition
            </Text>

            {/* Desktop */}
            <Box
              display={{ base: "none", md: "flex" }}
              justifyContent="space-between"
              alignItems="center"
              w="full"
            >
              {accreditations.map((acc) => (
                <Box
                  key={acc.name}
                  flex="1"
                  display="flex"
                  justifyContent="center"
                >
                  <Image
                    src={acc.img}
                    alt={acc.name}
                    maxH="80px"
                    maxW="150px"
                    objectFit="contain"
                    filter="grayscale(100%) opacity(.7)"
                    transition="all .3s"
                    _hover={{
                      filter: "grayscale(0%) opacity(1)",
                      transform: "scale(1.05)",
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* Mobile */}
            <SimpleGrid
              display={{ base: "grid", md: "none" }}
              columns={2}
              gap={8}
              w="full"
            >
              {accreditations.map((acc) => (
                <Box
                  key={acc.name}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src={acc.img}
                    alt={acc.name}
                    maxH="60px"
                    maxW="120px"
                    objectFit="contain"
                    filter="grayscale(100%) opacity(.7)"
                    transition="all .3s"
                    _hover={{
                      filter: "grayscale(0%) opacity(1)",
                      transform: "scale(1.05)",
                    }}
                  />
                </Box>
              ))}
            </SimpleGrid>

            {/* Divider */}
            <Box w="full" h="1px" bg="brand.500" borderRadius="full" />

            {/* Partners */}
            <Text
              fontSize="sm"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="gray.500"
              fontWeight="600"
            >
              Our Partners
            </Text>

            {/* Desktop */}
            <Box
              display={{ base: "none", md: "flex" }}
              justifyContent="space-between"
              alignItems="center"
              w="full"
            >
              {partners.map((par) => (
                <Box
                  key={par.name}
                  flex="1"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src={par.logo}
                    alt={par.name}
                    /*
                     * Increased Ligonier and Injili/KPCA visual sizing.
                     * maxH/maxW give the logos more room while
                     * objectFit keeps their aspect ratio.
                     */
                    maxH={
                      par.name === "Ligonier" ||
                      par.name === "Injili Ministries"
                        ? "105px"
                        : "80px"
                    }
                    maxW={
                      par.name === "Ligonier" ||
                      par.name === "Injili Ministries"
                        ? "180px"
                        : "150px"
                    }
                    objectFit="contain"
                    filter="grayscale(100%) opacity(.7)"
                    transition="all .3s"
                    _hover={{
                      filter: "grayscale(0%) opacity(1)",
                      transform: "scale(1.05)",
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* Mobile */}
            <SimpleGrid
              display={{ base: "grid", md: "none" }}
              columns={2}
              gap={8}
              w="full"
            >
              {partners.map((partner) => (
                <Box
                  key={partner.name}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    maxH={
                      partner.name === "Ligonier" ||
                      partner.name === "Injili Ministries"
                        ? "100px"
                        : "80px"
                    }
                    maxW={
                      partner.name === "Ligonier" ||
                      partner.name === "Injili Ministries"
                        ? "170px"
                        : "150px"
                    }
                    objectFit="contain"
                    filter="grayscale(100%) opacity(.7)"
                    transition="all .3s"
                    _hover={{
                      filter: "grayscale(0%) opacity(1)",
                      transform: "scale(1.05)",
                    }}
                  />
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Box>

        {/* Divider */}
        <Box borderTop="1px solid" borderColor="brand.500" />

        {/* Bottom Bar */}
        <Box
          py={4}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "center" }}
          gap={4}
        >
          <Text fontSize="smaller" color="gray.700" fontSize="sm">
            © {new Date().getFullYear()} Bethesda Training College. All Rights
            Reserved.
          </Text>

          <HStack fontSize="smaller" gap={6} flexWrap="wrap">
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
              fontSize="smaller"
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

      {showButton && (
        <IconButton
          aria-label="Scroll to top"
          onClick={scrollToTop}
          position="fixed"
          bottom={{ base: 5, md: 8 }}
          right={{ base: 5, md: 8 }}
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