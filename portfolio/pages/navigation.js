
import styles from '../styles/Navigation.module.css'
import { ChakraProvider } from "@chakra-ui/react";
import React, {Component} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Link from "next/link"
import {
    Box,
    Stack,
    Heading,
    Flex,
    useDisclosure
  } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'

const Navigation = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());
  
    return (
    <ChakraProvider>
        <Flex
            position="fixed"
            w="100%"
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={2}
            bg="black"
            color="white"
            {...props}
            className={styles.background}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"} fontFamily={"VT323 monospace"}>
                    Swetha's Portfolio
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
            mt={{ base: 4, md: 0 }}
            >
                <Link href="."><a className={styles.link}>HOME</a></Link>
                <Link href="./projects"><a className={styles.link}>WORKS</a></Link>
                <Link href="./experience"><a className={styles.link}>EXPERIENCE</a></Link>
            </Stack>
        </Flex>
    </ChakraProvider>
    );
  };
  
export default Navigation





                    





                    
                    
                    