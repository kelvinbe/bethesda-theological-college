"use client";

import NextLink from "next/link";

import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";

import {
  FaArrowRight,
  FaUserGraduate,
  FaUniversity,
} from "react-icons/fa";

export default function CallToAction() {
  return (
    <Box bg="brand.500" color="white">

      {/* ================= IMAGE SECTION ================= */}
      <Box
        display={{ base: "block", md: "grid" }}
        gridTemplateColumns="1fr 1fr"
      >

        {/* APPLY IMAGE */}
        <Box
          position="relative"
          minH={{ base: "350px", md: "500px" }}
          backgroundImage="url('u.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          _before={{
            content: '""',
            position: "absolute",
            inset: 0,
            bg: "blackAlpha.600",
          }}
        >

          <VStack
            position="relative"
            zIndex={1}
            maxW="500px"
            px={6}
            gap={5}
          >
            <Heading
              fontFamily="serif"
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Apply Now
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.8"
            >
              Bethesda Theological College would be honored to help equip
              you for the profound work God is calling you to.
              Our admissions team is ready to answer your questions.
            </Text>

            <Button
              as={NextLink}
              href="/apply"
              variant="solid"
              color="white"
              rightIcon={<FaArrowRight />}
              borderBottom="1px solid"
              borderRadius="0"
              _hover={{
                bg: "transparent",
                color: "gold.500",
              }}
            >
              CONTACT US TO APPLY
            </Button>
          </VStack>

        </Box>



        {/* FACULTY IMAGE */}
        <Box
          position="relative"
          minH={{ base: "350px", md: "500px" }}
          backgroundImage="url('faculty.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          _before={{
            content: '""',
            position: "absolute",
            inset: 0,
            bg: "blackAlpha.600",
          }}
        >

          <VStack
            position="relative"
            zIndex={1}
            maxW="500px"
            px={6}
            gap={5}
          >

            <Heading
              fontFamily="serif"
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Meet Our Faculty
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.8"
            >
              Our faculty are passionate about equipping you to mine
              the riches of God's Word at unparalleled depth.
              Learn about their expertise and backgrounds.
            </Text>

            <Button
              as={NextLink}
              href="/faculty"
              variant="solid"
              color="white"
              rightIcon={<FaArrowRight />}
              borderBottom="1px solid"
              borderRadius="0"
              _hover={{
                bg: "transparent",
                color: "gold.500",
              }}
            >
              LEARN MORE
            </Button>

          </VStack>

        </Box>

      </Box>

    </Box>
  );
}