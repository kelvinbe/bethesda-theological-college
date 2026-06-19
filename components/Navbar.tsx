"use client";

import {
  Box,
  Container,
  HStack,
  Link,
  Text,
  Button,
  Portal,
  Drawer,
  CloseButton,
  VStack,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="#0B2E14" borderBottom="1px solid #eee">
      <Container maxW="7xl" py={4}>
        <HStack justify="space-between">

          {/* Brand */}
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="brand.50"
          >
            Bethesda
          </Text>

          {/* Desktop Navigation */}
          <HStack
            gap={6}
            display={{ base: "none", md: "flex" }}
          >
            <Link 
            color="brand.50"  href="/">Home</Link>
            <Link 
            color="brand.50"
            
            href="/about">About</Link>
            <Link
            color="brand.50"
            
            href="/academics">Academics</Link>
            <Link
            color="brand.50"
            
            href="/admissions">Admissions</Link>
            <Link
            color="brand.50"
            
            href="/partnerships">Partnerships</Link>
          </HStack>

 

          {/* MOBILE DRAWER (v3 API) */}
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Button
                display={{ base: "flex", md: "none" }}
                variant="outline"
                size="sm"
              >
                Menu
              </Button>
            </Drawer.Trigger>

            <Portal>
              <Drawer.Backdrop />

              <Drawer.Positioner>
                <Drawer.Content bg="white">

                  {/* Header */}
                  <Drawer.Header>
                    <Drawer.Title
                      fontSize="lg"
                      color="brand.500"
                    >
                      Bethesda Navigation
                    </Drawer.Title>
                  </Drawer.Header>

                  {/* Body */}
                  <Drawer.Body>
                    <VStack align="start" gap={5}>
                      <Link href="/">Home</Link>
                      <Link href="/">About</Link>
                      <Link href="/">Academics</Link>
                      <Link href="/">Admissions</Link>
                      <Link href="/">Partnerships</Link>

                      <Button
                        mt={4}
                        w="full"
                        bg="gold.500"
                        color="black"
                      >
                        Give / Donate
                      </Button>
                    </VStack>
                  </Drawer.Body>

                  {/* Footer */}
                  <Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton />
                    </Drawer.CloseTrigger>
                  </Drawer.Footer>

                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>

        </HStack>
      </Container>
    </Box>
  );
}