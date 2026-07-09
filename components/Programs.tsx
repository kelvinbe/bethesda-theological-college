"use client";

import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";

const programs = [
  {
    title: "Master's Degrees",
    description:
      "Our master's degree programs are designed to equip you for gospel-centered transformation across Africa and beyond, whether you are pursuing full-time pastoral ministry, theological leadership, or a career in Christian counseling.",
    button: "Explore Master's Degrees",
    href: "/programs/masters",
    icon: FaGraduationCap,
  },
  {
    title: "Advanced Degrees",
    description:
      "We provide rigorous advanced degrees for pastors, ministry leaders, theological educators, and missionaries seeking a professional, high-level qualification to further equip them for sustainable, gospel-centered ministry in their specific cultural contexts.",
    button: "Explore Advanced Degrees",
    href: "/programs/advanced",
    icon: FaUniversity,
  },
  {
    title: "Certificates & Diplomas",
    description:
      "Our certificates and diplomas provide a solid, gospel centered foundation for those serving in lay leadership or bi-vocational ministry. These programs offer robust theological education for those who desire to effectively serve their local church but do not require a master's degree in their ministry context.",
    button: "Explore Certificates & Diplomas",
    href: "/programs/certificates",
    icon: FaCertificate,
  },
  {
    title: "Non-Formal Training Courses",
    description:
      "Our non-formal training courses provide highly accessible, practical equipping for grassroots church leaders, community workers, and everyday believers. Designed with flexibility in mind, these short courses and workshops focus on immediate, hands-on ministry skills and foundational biblical literacy without the demands or prerequisites of a traditional academic track.",
    button: "Explore Non-Formal Training",
    href: "/programs/non-formal",
    icon: FaBookOpen,
  },
];

export default function Programs() {
  return (
    <Box bg="brand.50" py={{ base: 16, md: 24 }}>
      <Container maxW="7xl">
        {/* Section Heading */}
        <Stack gap={4} mb={14} textAlign="center">
          <Text
            color="gold.500"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="0.2em"
          >
            Academic Programs
          </Text>

          <Heading
            color="brand.500"
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            Discover Your Path of Study
          </Heading>

          <Text
            maxW="3xl"
            mx="auto"
            color="gray.700"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.9"
          >
            Bethesda Theological College offers programs designed to prepare
            pastors, Christian leaders, counselors, and believers for
            gospel centered service in the Church, the community, and the
            marketplace.
          </Text>
        </Stack>

        {/* Program Cards */}
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "repeat(4, 1fr)",
          }}
          gap={{ base: 10, lg: 0 }}
        >
          {programs.map((program, index) => (
            <Stack
              key={program.title}
              position="relative"
              px={{ base: 0, lg: 7 }}
              py={8}
              gap={5}
              align="flex-start"
              h="100%"
              _after={
                index !== programs.length - 1
                  ? {
                      content: '""',
                      display: { base: "none", lg: "block" },
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "1px",
                      height: "180px",
                      bg: "brand.500",
                    }
                  : {}
              }
            >
              {/* Icon */}
              <Icon
                as={program.icon}
                boxSize={6}
                color="gold.500"
              />

              {/* Heading */}
              <Heading
                fontFamily="serif"
                fontWeight="700"
                fontSize={{ base: "xl", md: "xl" }}
                color="brand.500"
                lineHeight="1.25"
              >
                {program.title}
              </Heading>

              {/* Description */}
              <Text
                color="gray.700"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="1.8"
                flex={1}
              >
                {program.description}
              </Text>

              {/* Button */}
              <Button
                as={NextLink}
                href={program.href}
                mt="auto"
                bg="gold.500"
                color="earth.500"
                borderRadius="lg"
                px={6}
                py={3}
                h="auto"
                fontSize="sm"
                fontWeight="600"
                rightIcon={<FaArrowRight />}
                transition="all .3s"
                _hover={{
                  color: "white",
                }}
              >
                {program.button}
              </Button>
            </Stack>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}