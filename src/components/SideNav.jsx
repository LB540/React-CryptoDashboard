import { BiSupport } from "react-icons/bi"; 
import { BsArrowDownUp } from "react-icons/bs"; 
import { RxDashboard } from "react-icons/rx";
import { Stack, HStack, Icon, Text, Heading, Box } from "@chakra-ui/react";
import React from "react";

function SideNav() {

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transaction",
    },
  ];

  return (
    <Stack justify="space-between" boxShadow="lg" maxW="256px" height="100vh">
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">@DoSomeCoding</Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack borderRadius py="3" px="4" key={nav.text} color="#797E82"
            _hover={{
              bordeRadius: "10px",
              color: "#171717",
              bg:"#F3F3F7"
            }}>
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
            </HStack>
          ))}
        </Box>
      </Box>
        
      <Box mt="6" mx="3" mb="6">
        <HStack borderRadius py="3" px="4" color="#797E82"
          _hover={{
            bordeRadius: "10px",
            color: "#171717",
            bg:"#F3F3F7"
          }}>
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">Support</Text>
          </HStack>
        </Box>
    </Stack>
  );
}

export default SideNav;
