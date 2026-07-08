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
            size="sm"
            bg="gold.500"
            color="black"
            w={{ base: "full", md: "auto" }}
          >
         <Dropdown
                      label="Partner"
                      items={partner}
                      color="white"
                    />
                    </Button>
        </HStack>
      </Box>
    </Box>
  );
}