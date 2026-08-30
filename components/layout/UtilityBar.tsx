"use client";

import { Box, Button, Container, HStack, Link,  } from "@chakra-ui/react";
import { Dropdown } from "../Navbar";

const partner = ["Adjunct Faculty", "Donate Books", "Give"];


export default function UtilityBar() {
  return (
    <Box 
    style={{padding: 0 }}

    bg="brand.50" color="white"  borderRadius={2} borderColor={'red'} className="" py={0}>

      <Box w="auto">
        <HStack
          justify="flex-end"
          gap={1}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          fontSize={{ base: "sm", md: "md" }}
        >

      <Button
               size="lg"
              variant="outline"
              borderColor="gold.500"
              color="gold.500"
              _hover={{
                bg: "gold.500",
                color: "earth.500",
              }}
            >
         <Dropdown
                      label="Partner With Us"
                      items={partner}
                      color="earth.500"
                      _
                    />
                    </Button>
        </HStack>
      </Box>
    </Box>
  );
}