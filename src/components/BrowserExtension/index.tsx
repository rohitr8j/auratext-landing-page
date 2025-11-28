"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Box, Container, Flex, Heading, Text, VStack, SimpleGrid, Icon, Button } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { FaChrome, FaEdge, FaFirefoxBrowser, FaGlobe } from "react-icons/fa";
import { LuZap, LuShield, LuLayout } from "react-icons/lu";

const ExtensionFeatures = [
    {
        icon: LuZap,
        title: "Instant Integration",
        description: "Works on any website instantly. No setup required.",
    },
    {
        icon: LuShield,
        title: "Context Aware",
        description: "Reads the page context to give smarter, relevant suggestions.",
    },
    {
        icon: LuLayout,
        title: "Native Feel",
        description: "Blends seamlessly into your browser's interface.",
    },
];

const BrowserExtension = () => {
    return (
        <Box py={24} position="relative" overflow="hidden">
            {/* Background Elements */}
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                width="100%"
                height="100%"
                bg={`radial-gradient(circle at center, ${AuraTextColors.primary}10 0%, transparent 70%)`}
                zIndex={0}
            />

            <Container maxW="container.xl" position="relative" zIndex={1}>
                <Flex direction={{ base: "column", lg: "row" }} align="center" gap={16}>
                    {/* Left Content */}
                    <VStack align="start" spacing={8} flex={1}>
                        <Box
                            px={4}
                            py={1}
                            rounded="full"
                            bg="rgba(255, 255, 255, 0.1)"
                            border="1px solid rgba(255, 255, 255, 0.1)"
                        >
                            <Text fontSize="sm" color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace">
                                Available for all major browsers
                            </Text>
                        </Box>

                        <Heading
                            as={motion.h2}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            color={AuraTextColors.text}
                            size="2xl"
                            fontFamily="'Space Mono', monospace"
                        >
                            AuraText Everywhere.
                        </Heading>

                        <Text fontSize="xl" color={AuraTextColors.textLight} maxW="lg">
                            Not on Windows? No problem. The AuraText Browser Extension brings the power of AI to your web browsing experience on any OS.
                        </Text>

                        <Flex gap={6} color={AuraTextColors.textLight}>
                            <Icon as={FaChrome} w={8} h={8} _hover={{ color: "#4285F4" }} transition="color 0.2s" />
                            <Icon as={FaEdge} w={8} h={8} _hover={{ color: "#0078D7" }} transition="color 0.2s" />
                            <Icon as={FaFirefoxBrowser} w={8} h={8} _hover={{ color: "#FF7139" }} transition="color 0.2s" />
                            <Icon as={FaGlobe} w={8} h={8} _hover={{ color: AuraTextColors.primary }} transition="color 0.2s" />
                        </Flex>

                        <Button
                            as="a"
                            href="#download"
                            size="lg"
                            bg="white"
                            color="black"
                            _hover={{ bg: "gray.100" }}
                            rounded="xl"
                            px={8}
                            fontFamily="'Space Mono', monospace"
                        >
                            Get Extension
                        </Button>
                    </VStack>

                    {/* Right Content - Feature Grid */}
                    <Box flex={1} w="full">
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            {ExtensionFeatures.map((feature, index) => (
                                <Box
                                    key={index}
                                    as={motion.div}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 } as any}
                                    bg="rgba(255, 255, 255, 0.03)"
                                    border="1px solid rgba(255, 255, 255, 0.05)"
                                    p={6}
                                    rounded="2xl"
                                    _hover={{
                                        bg: "rgba(255, 255, 255, 0.05)",
                                        transform: "translateY(-5px)",
                                        borderColor: AuraTextColors.primary
                                    }}
                                    transition="all 0.3s ease"
                                >
                                    <Icon as={feature.icon} w={8} h={8} color={AuraTextColors.primary} mb={4} />
                                    <Heading size="md" color={AuraTextColors.text} mb={2} fontFamily="'Space Mono', monospace">
                                        {feature.title}
                                    </Heading>
                                    <Text color={AuraTextColors.textLight} fontSize="sm">
                                        {feature.description}
                                    </Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default BrowserExtension;
