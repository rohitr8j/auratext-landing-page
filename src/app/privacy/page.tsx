"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Box, Container, Heading, Text, VStack, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import React from "react";
import Navbar from "#/src/components/Navbar";


const PrivacyPolicy = () => {
    return (
        <Box bg={AuraTextColors.black} minH="100vh">
            <Navbar />
            <Container maxW="container.lg" pt={32} pb={20}>
                <VStack spacing={8} align="start">
                    <Heading color={AuraTextColors.text} as="h1" size="2xl">
                        Privacy Policy
                    </Heading>
                    <Text color={AuraTextColors.textLight}>
                        Last updated: January 2025
                    </Text>

                    <Box w="full">
                        <Text color={AuraTextColors.textLight} mb={4}>
                            AuraText is a BYOK (Bring Your Own Key) app. We do not store or proxy your API keys.
                        </Text>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            Data Collection
                        </Heading>
                        <Heading color={AuraTextColors.text} as="h3" size="md" mb={2}>
                            What We Collect
                        </Heading>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4} mb={4}>
                            <ListItem><strong>API Keys:</strong> Stored locally on your machine and sent directly to the selected provider</ListItem>
                            <ListItem><strong>Analytics Data</strong> (opt-in only): Anonymous usage statistics to help improve the app</ListItem>
                            <ListItem><strong>Diagnostics Data</strong> (opt-in only): Crash reports and error logs for debugging</ListItem>
                            <ListItem><strong>Update Information:</strong> Version checks and update downloads from GitHub Releases</ListItem>
                        </UnorderedList>

                        <Heading color={AuraTextColors.text} as="h3" size="md" mb={2}>
                            What We DON'T Collect
                        </Heading>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4}>
                            <ListItem>Personal information (names, emails, addresses)</ListItem>
                            <ListItem>Document contents or text you're working on</ListItem>
                            <ListItem>API responses or AI-generated content</ListItem>
                            <ListItem>Browsing history or other app usage</ListItem>
                            <ListItem>Location data or device identifiers</ListItem>
                        </UnorderedList>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            Analytics & Usage Data
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            When you opt-in to analytics (Settings &gt; Analytics & Usage Data), we collect:
                        </Text>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4} mb={4}>
                            <ListItem>App usage events (app started, features used, errors occurred)</ListItem>
                            <ListItem>Anonymous session data (session duration, feature usage patterns)</ListItem>
                            <ListItem>Technical information (app version, platform, error types)</ListItem>
                            <ListItem>No personal information or document contents</ListItem>
                        </UnorderedList>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            Analytics data is processed by Mixpanel and helps us:
                        </Text>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4} mb={4}>
                            <ListItem>Understand which features are most useful</ListItem>
                            <ListItem>Identify and fix bugs</ListItem>
                            <ListItem>Improve app performance</ListItem>
                            <ListItem>Plan future features</ListItem>
                        </UnorderedList>
                        <Text color={AuraTextColors.textLight}>
                            You can disable analytics at any time in Settings.
                        </Text>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            Diagnostics & Crash Reports
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            When you opt-in to diagnostics (Settings &gt; Diagnostics & Crash Reports), we collect:
                        </Text>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4} mb={4}>
                            <ListItem>Crash reports with stack traces</ListItem>
                            <ListItem>Error logs and technical details</ListItem>
                            <ListItem>App performance metrics</ListItem>
                            <ListItem>No personal information or document contents</ListItem>
                        </UnorderedList>
                        <Text color={AuraTextColors.textLight}>
                            This data helps us fix bugs, improve stability, and optimize performance. You can disable diagnostics at any time in Settings.
                        </Text>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            Data Storage & Security
                        </Heading>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4}>
                            <ListItem><strong>Local Storage:</strong> All your data (settings, API keys, chat history) is stored locally on your machine</ListItem>
                            <ListItem><strong>API Keys:</strong> Encrypted and stored securely in your system's credential store</ListItem>
                            <ListItem><strong>Analytics:</strong> Anonymous data sent to Mixpanel (privacy-focused analytics provider)</ListItem>
                            <ListItem><strong>Updates:</strong> Downloaded from GitHub Releases (no personal data transmitted)</ListItem>
                        </UnorderedList>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            Your Rights
                        </Heading>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4}>
                            <ListItem><strong>Opt-out:</strong> Disable analytics and diagnostics in Settings at any time</ListItem>
                            <ListItem><strong>Data Deletion:</strong> Uninstall the app to remove all local data</ListItem>
                            <ListItem><strong>Do Not Track:</strong> We respect your browser's Do Not Track setting</ListItem>
                            <ListItem><strong>Transparency:</strong> This privacy policy explains exactly what we collect and why</ListItem>
                        </UnorderedList>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            Data Retention
                        </Heading>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4}>
                            <ListItem><strong>Local Data:</strong> Stored on your machine until you uninstall the app</ListItem>
                            <ListItem><strong>Analytics:</strong> Retained for up to 2 years for product improvement</ListItem>
                            <ListItem><strong>Diagnostics:</strong> Retained for up to 1 year for bug fixing</ListItem>
                            <ListItem><strong>No Content:</strong> We never store your documents, text, or AI responses</ListItem>
                        </UnorderedList>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            Third-Party Services
                        </Heading>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4}>
                            <ListItem><strong>Mixpanel:</strong> Analytics provider (privacy-focused, GDPR compliant)</ListItem>
                            <ListItem><strong>GitHub:</strong> Update distribution (no personal data)</ListItem>
                            <ListItem><strong>AI Providers:</strong> Your API keys are sent directly to them (Google, OpenAI, etc.)</ListItem>
                        </UnorderedList>
                    </Box>

                    <Box w="full">
                        <Heading color={AuraTextColors.text} as="h2" size="lg" mb={4}>
                            Contact
                        </Heading>
                        <Text color={AuraTextColors.textLight} mb={4}>
                            For privacy questions or concerns:
                        </Text>
                        <UnorderedList color={AuraTextColors.textLight} spacing={2} pl={4}>
                            <ListItem>Email: <Link href="mailto:yash@auratxt.com" color={AuraTextColors.primary}>yash@auratxt.com</Link></ListItem>
                            <ListItem>GitHub Issues: <Link href="https://github.com/Y4shr4j/auratext-releases/issues" isExternal color={AuraTextColors.primary}>Create an issue</Link></ListItem>
                        </UnorderedList>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

export default PrivacyPolicy;
