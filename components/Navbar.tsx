"use client";

import { useState } from "react";
import {
  Box,
  Container,
  HStack,
  Link,
  Text,
  Image,
  Popover,
  Portal,
  VStack,
  IconButton,
  Drawer,
  CloseButton,
  GridItem,
  Stack,
  Heading,
  Icon
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import UtilityBar from "./layout/UtilityBar";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";


/* ================= DROPDOWN COMPONENT ================= */

export function Dropdown({
  label,
  items,
  color = "earth.900",
}: {
  label: string;
  items: string[];
  color?: string;
}) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Link
          color={color}
          cursor="pointer"
          fontWeight="500"
          _hover={{
            textDecoration: "none",
            // color: "yellow.400",
          }}
        >
          {label}
        </Link>
      </Popover.Trigger>

      <Portal>
        <Popover.Positioner>
          <Popover.Content
            bg="white"
            p={4}
            borderRadius="lg"
            boxShadow="lg"
            minW="220px"
          >
            <VStack align="start" gap={3}>
              {items.map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="brand.500"
                  _hover={{ color: "earth.500" }}
                >
                  • {item}
                </Link>
              ))}
            </VStack>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}

/* ================= DATA ================= */

const loginItems = ["Faculty", "Student", "Alumni Portal"];

const admissionsItems = [
  "Apply Now",
  "Schedule a Visit",
  "Schedule a Google Meet",
  "Tuition & Fees",
  "Student Aid",
];

const academics = [
  "Masters",
  "Doctrinal Studies",
  "Undergraduate Degrees",
  "Non-formal Programs",
];

const calendar = [
  "Academic Calendar",
  "Upcoming Events",
  "Past Events",
];

const updates = ["Newsletters", "Annual Reports"];

const partner = ["Adjunct Faculty", "Donate Books", "Give"];

/* ================= NAVBAR ================= */

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box position="sticky" top="0" zIndex="1000">
        {/* TOP SOCIAL BAR */}
<Box bg="brand.500" color="white">
  <Container maxW="8xl">
    <HStack justify="flex-end" py={2} gap={4}>
      <Link
        href="https://facebook.com"
        target="_blank"
        color="white"
        _hover={{ color: "yellow.500" }}
      >
        <Icon as={FaFacebook} boxSize={4} />
      </Link>

      <Link
        href="https://instagram.com"
        target="_blank"
        color="white"
        _hover={{ color: "yellow.500" }}
      >
        <Icon as={FaInstagram} boxSize={4} />
      </Link>

      <Link
        href="https://x.com"
        target="_blank"
        color="white"
        _hover={{ color: "yellow.500" }}
      >
        <Icon as={FaXTwitter} boxSize={4} />
      </Link>

      <Link
        href="https://youtube.com"
        target="_blank"
        color="white"
        _hover={{ color: "yellow.500" }}
      >
        <Icon as={FaYoutube} boxSize={4} />
      </Link>

      <Link
        href="https://linkedin.com"
        target="_blank"
        color="white"
        _hover={{ color: "yellow.500" }}
      >
        <Icon as={FaLinkedin} boxSize={4} />
      </Link>
    </HStack>
  </Container>
</Box>
        <Box bg="brand.50" boxShadow="sm">
          <Container maxW="8xl">
            <HStack
              align={{ base: "stretch", md: "stretch" }}
              justify="space-between"
              flexDir={{ base: "column", md: "row" }}
              minH={{ base: "auto", md: "140px" }}
            >
              {/* ================= LOGO SECTION ================= */}
              <HStack
                w={{ base: "100%", md: "auto" }}
                justify="space-between"
                align="center"
                py={{ base: 4, md: 0 }}
                pr={{ md: 10 }}
                flex="1"
              >
                <HStack
                  gap={4}
                  transform={{ base: "none", md: "translateY(-8px)" }}
                >
                  <Image
                    src="/beth.png"
                    boxSize={{ base: "55px", md: "130px" }}
                    alt="Bethesda Training College"
                  />

                  <Text
                    color="earth.700"
                    fontWeight="bold"
                    fontSize={{ base: "md", md: "34px" }}
                    lineHeight="1.1"
                    fontFamily="serif"
                  >
                    Bethesda Training College(BTC)
                  </Text>
                </HStack>
                

                {/* Mobile Hamburger */}
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open Menu"
                  variant="ghost"
                  color="earth.500"
                  onClick={() => setOpen(true)}
                >
                  <HiMenu size={28} />
                </IconButton>
              </HStack>

              {/* ================= DESKTOP NAVIGATION ================= */}
              <Box
                flex="1"
                display={{ base: "none", md: "block" }}
              >
                {/* TOP BAR */}
          <HStack
  justify="flex-end"
  py={3}
  borderBottom="1px solid"
  borderColor="brand.500"
  fontSize="sm"
>
  <HStack gap={8}>
    <Dropdown
      label="Login"
      items={loginItems}
      color="grey.900"
    />

    <Dropdown
      label="Admissions"
      items={admissionsItems}
      color="grey.900"
    />
  </HStack>

  <HStack gap={2}>
    <UtilityBar />

  
  </HStack>
</HStack>

                {/* BOTTOM BAR */}
                <HStack
                  justify="flex-end"
                  gap={10}
                  py={5}
                >
                      <Link
                    color="earth.900"
                    _hover={{
                      color: "yellow.400",
                      textDecoration: "none",
                    }}
                    href="/"
                    
                  >
                    Home
                  </Link>
                  <Link
                    color="earth.900"
                    _hover={{
                      color: "yellow.400",
                      textDecoration: "none",
                    }}
                    href="/about"
                    
                  >
                    About
                  </Link>


                  <Dropdown
                  
                    label="Academics"
                    items={academics}
                  />

                  <Dropdown
                    label="Updates"
                    items={calendar}
                  />
                </HStack>
                
              </Box>
            </HStack>
          </Container>
        </Box>
      </Box>

      {/* ================= MOBILE DRAWER ================= */}

      <Drawer.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        // placement={}
      >
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content bg="black">
            <Drawer.Header>
              <HStack justify="space-between">
                <Text color="white" fontWeight="bold">
                  Menu
                </Text>

                <CloseButton
                  color="white"
                  onClick={() => setOpen(false)}
                />
              </HStack>
            </Drawer.Header>

            <Drawer.Body>
              <VStack align="start" gap={6}>
                <Link href="/" color="white">Home</Link>

                <Link href="/about" color="white">About</Link>


                <Dropdown
                  label="Academics"
                  items={academics}
                  color="white"
                />



                <Dropdown
                  label="Updates"
                  items={updates}
                  color="white"
                />

                <Box
                  borderTop="1px solid"
                  borderColor="whiteAlpha.300"
                  w="100%"
                  pt={4}
                >
                  <VStack align="start" gap={4}>
                    <Dropdown
                      label="Login"
                      items={loginItems}
                      color="white"
                    />

                    <Dropdown
                      label="Admissions"
                      items={admissionsItems}
                      color="white"
                    />
                      <UtilityBar />
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
                  </VStack>
                </Box>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
}