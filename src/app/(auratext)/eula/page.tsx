"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Box, Container, Heading, Text, VStack, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import Navbar from "#/src/components/Navbar";


const EULA = () => {
    return (
        <Box bg={AuraTextColors.black} minH="100vh">
            <Navbar />
            <Container maxW="container.lg" pt={32} pb={20}>
                <VStack spacing={8} align="start">
                    <Heading color={AuraTextColors.text} as="h1" size="2xl">
                        End User License Agreement (EULA)
                    </Heading>
                    <Text color={AuraTextColors.textLight}>
                        Last updated: November 28, 2025
                    </Text>

                    <Box w="full">
                        <Text color={AuraTextColors.textLight} mb={4}>
                            This End User License Agreement ("Agreement") is a legal agreement between you ("User") and AuraText ("Company") governing your use of the AuraText software application ("Software").
                        </Text>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            1. Grant of License
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            The Company grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the Software solely for your personal, non-commercial purposes strictly in accordance with the terms of this Agreement.
                        </Text>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            2. Restrictions
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            You agree not to, and you will not permit others to:
                        </Text>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4}>
                            <ListItem>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose, or otherwise commercially exploit the Software.</ListItem>
                            <ListItem>Modify, make derivative works of, disassemble, decrypt, reverse compile, or reverse engineer any part of the Software.</ListItem>
                            <ListItem>Remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) of the Company or its affiliates, partners, suppliers, or the licensors of the Software.</ListItem>
                        </UnorderedList>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            3. Intellectual Property
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            The Software, including without limitation all copyrights, patents, trademarks, trade secrets, and other intellectual property rights are, and shall remain, the sole and exclusive property of the Company.
                        </Text>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            4. Termination
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            This Agreement is effective until terminated by you or the Company. Your rights under this Agreement will terminate automatically without notice from the Company if you fail to comply with any term(s) of this Agreement. Upon termination of the Agreement, you shall cease all use of the Software and delete all copies of the Software from your mobile device or computer.
                        </Text>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            5. Governing Law
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            This Agreement shall be governed by and construed in accordance with the laws of India, excluding its conflicts of law rules.
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

export default EULA;
