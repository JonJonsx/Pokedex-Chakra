import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      position="fixed"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={5}
      bg="#000000"
      color="#ffffff"
      w="100%"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          <Link to="/">
            LOGO
          </Link>
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        justify="end"
        spacing="10px"
        mt={{ base: 4, md: 0 }}
      >
        <Text>Home</Text>
        <Text>Sobre nós</Text>
      </Stack>
    </Flex >
  );
}