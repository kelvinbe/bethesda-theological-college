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
      "Our certificates and diplomas provide a solid, gospel-centered foundation for those serving in lay leadership or bi-vocational ministry. These programs offer robust theological education for those who desire to effectively serve their local church but do not require a master's degree in their ministry context.",
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
            gospel-centered service in the Church, the community, and the
            marketplace.
          </Text>
        </Stack>

        {/* Program Cards */}
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "repeat(2, 1fr)",
          }}
          gap={8}
        >
          {programs.map((program) => (
            <Box
              key={program.title}
              bg="white"
              borderRadius="2xl"
              p={{ base: 8, md: 10 }}
              border="1px solid"
              borderColor="brand.100"
              boxShadow="lg"
              transition="all .35s ease"
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "gold.500",
                boxShadow: "2xl",
              }}
            >
              <Stack h="100%" gap={6}>
                {/* Icon */}
                <HStack>
                  <Box
                    bg="brand.50"
                    p={4}
                    borderRadius="full"
                  >
                    <Icon
                      as={program.icon}
                      boxSize={8}
                      color="gold.500"
                    />
                  </Box>
                </HStack>

                {/* Title */}
                <Heading
                  size="lg"
                  color="brand.500"
                >
                  {program.title}
                </Heading>

                {/* Description */}
                <Text
                  color="gray.700"
                  lineHeight="1.9"
                  flex={1}
                >
                  {program.description}
                </Text>

                {/* Button */}
                <Button
                  as={NextLink}
                  href={program.href}
                  bg="brand.500"
                  color="white"
                  alignSelf="flex-start"
                  rounded="full"
                  px={8}
                  size="lg"
                  rightIcon={<FaArrowRight />}
                  _hover={{
                    bg: "brand.600",
                    transform: "translateX(2px)",
                  }}
                >
                  {program.button}
                </Button>
              </Stack>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}