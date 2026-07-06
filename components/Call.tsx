"use client";

import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaUserGraduate,
  FaUniversity,
} from "react-icons/fa";

export default function CallToAction() {
  return (
    <Box
      bg="brand.500"
      py={{ base: 20, md: 28 }}
      color="white"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="6xl">
        <VStack gap={8} textAlign="center">
          {/* Section Label */}
          <Text
            color="gold.500"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="0.2em"
          >
            Take the Next Step
          </Text>

          {/* Heading */}
          <Heading
            maxW="4xl"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight="1.2"
            color="white"
          >
            Begin Your Journey of Gospel-Centered Learning
          </Heading>

          {/* Description */}
          <Text
            maxW="3xl"
            color="whiteAlpha.800"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.9"
          >
            Whether you are preparing for pastoral ministry, theological
            leadership, Christian counseling, or simply seeking to deepen your
            understanding of God's Word, Bethesda Theological College is ready
            to walk alongside you.
          </Text>

          {/* Buttons */}
          <HStack
            gap={5}
            flexWrap="wrap"
            justify="center"
            mt={4}
          >
            {/* Apply */}
            <Button
              as={NextLink}
              href="/apply"
              size="lg"
              rounded="full"
              px={10}
              bg="gold.500"
              color="brand.500"
              leftIcon={<FaUniversity />}
              _hover={{
                bg: "#e0bc4d",
                transform: "translateY(-2px)",
              }}
            >
              Apply Now
            </Button>

            {/* Faculty */}
            <Button
              as={NextLink}
              href="/faculty"
              size="lg"
              rounded="full"
              px={10}
              variant="outline"
              borderWidth="2px"
              borderColor="gold.500"
              color="gold.500"
              leftIcon={<FaUserGraduate />}
              _hover={{
                bg: "gold.500",
                color: "brand.500",
                borderColor: "gold.500",
                transform: "translateY(-2px)",
              }}
            >
              Meet Our Faculty
            </Button>
          </HStack>

          {/* Divider */}
          <Box
            mt={8}
            w="120px"
            h="2px"
            bg="gold.500"
            opacity={0.6}
          />

          {/* Contact Text */}
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "md", md: "lg" }}
          >
            Need help choosing a program or understanding the admissions
            process?
          </Text>

          {/* Contact Link */}
          <Button
            as={NextLink}
            href="/contact"
            variant="ghost"
            color="gold.500"
            size="lg"
            rightIcon={<FaArrowRight />}
            _hover={{
              bg: "transparent",
              color: "white",
            }}
          >
            Contact Us to Apply / Learn More
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}