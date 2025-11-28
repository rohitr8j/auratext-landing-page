"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Box, Container, Heading, Text, VStack, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import Navbar from "#/src/components/Navbar";
import Footer from "#/src/components/Footer";

const TermsOfService = () => {
    return (
        <Box bg={AuraTextColors.darkBg} minH="100vh">
            <Navbar />
            <Container maxW="container.lg" pt={32} pb={20}>
                <VStack spacing={8} align="start">
                    <Heading color={AuraTextColors.text} as="h1" size="2xl">
                        Terms of Service
                    </Heading>
                    <Text color={AuraTextColors.textLight}>
                        Last updated: November 28, 2025
                    </Text>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            1. Acceptance of Terms
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            By accessing or using AuraText (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Service.
                        </Text>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            2. License
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to download and use the Service for your personal or internal business purposes.
                        </Text>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            3. User Responsibilities
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            You are responsible for:
                        </Text>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4}>
                            <ListItem>Maintaining the confidentiality of your API keys.</ListItem>
                            <ListItem>All activities that occur under your usage of the Service.</ListItem>
                            <ListItem>Ensuring your use of the Service complies with all applicable laws and regulations.</ListItem>
                            <ListItem>Not using the Service for any illegal or unauthorized purpose.</ListItem>
                        </UnorderedList>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            4. Disclaimer of Warranties
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the operation of the Service or the information, content, or materials included therein.
                        </Text>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            5. Limitation of Liability
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            In no event shall AuraText, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </Text>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            6. Changes to Terms
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                        </Text>
                    </Box>
                </VStack>
            </Container>
            <Footer />
        </Box>
    );
};

export default TermsOfService;
