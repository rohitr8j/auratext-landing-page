"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Flex, Grid, Heading, Text, Button, Badge, VStack, HStack, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { LuExternalLink, LuZap, LuDollarSign, LuServer, LuBuilding } from "react-icons/lu";

interface AIProvider {
    name: string;
    link: string;
    category: "free" | "payg" | "aggregator" | "enterprise" | "local";
    description: string;
    badge?: string;
}

const AIIntegrations = () => {
    const providers: AIProvider[] = [
        {
            name: "Google Gemini",
            link: "https://aistudio.google.com/app/apikey",
            category: "free",
            description: "Default provider with free tier",
            badge: "Default"
        },
        {
            name: "OpenAI",
            link: "https://platform.openai.com/api-keys",
            category: "payg",
            description: "GPT-4, GPT-3.5, GPT-4o models"
        },
        {
            name: "Anthropic",
            link: "https://console.anthropic.com/settings/keys",
            category: "payg",
            description: "Claude models"
        },
        {
            name: "Perplexity AI",
            link: "https://www.perplexity.ai/settings/api",
            category: "payg",
            description: "Sonar models"
        },
        {
            name: "Mistral AI",
            link: "https://console.mistral.ai/api-keys/",
            category: "payg",
            description: "Mistral models"
        },
        {
            name: "DeepSeek",
            link: "https://platform.deepseek.com/api_keys",
            category: "payg",
            description: "DeepSeek chat models"
        },
        {
            name: "OpenRouter",
            link: "https://openrouter.ai/keys",
            category: "aggregator",
            description: "Access multiple AI models through one API"
        },
        {
            name: "Cohere",
            link: "https://dashboard.cohere.com/api-keys",
            category: "free",
            description: "Cohere language models"
        },
        {
            name: "Azure OpenAI",
            link: "https://portal.azure.com/",
            category: "enterprise",
            description: "Enterprise OpenAI through Azure"
        },
        {
            name: "Local Ollama",
            link: "https://ollama.com/",
            category: "local",
            description: "Run models locally - no API key needed",
            badge: "No Key"
        },
        {
            name: "AIML API",
            link: "https://aimlapi.com/app/keys",
            category: "aggregator",
            description: "Multi-model API gateway"
        }
    ];

    const getCategoryInfo = (category: string) => {
        switch (category) {
            case "free":
                return { color: AuraTextColors.primary, label: "Free to Start" };
            case "payg":
                return { color: "#10b981", label: "Pay-as-you-go" };
            case "aggregator":
                return { color: "#8b5cf6", label: "Multi-Model" };
            case "enterprise":
                return { color: "#f59e0b", label: "Enterprise" };
            case "local":
                return { color: "#06b6d4", label: "Local" };
            default:
                return { color: AuraTextColors.textLight, label: "" };
        }
    };

    return (
        <Flex
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="ai-integrations"
            direction="column"
            justify="center"
            align="center"
            my={24}
            px={4}
            maxW={1400}
            mx="auto"
            bg="transparent"
        >
            <Heading
                fontSize={{
                    base: 32,
                    md: 48,
                }}
                textAlign="center"
                fontWeight={700}
                color={AuraTextColors.text}
                mb={4}
            >
                Works with Your Favorite AI Tools
            </Heading>
            <Text
                color={AuraTextColors.textLight}
                textAlign="center"
                fontSize="lg"
                maxW={700}
                mb={12}
            >
                Use ChatGPT, Claude, Gemini, Perplexity, and more — with your own API keys. No lock-in.
            </Text>

            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(4, 1fr)",
                }}
                gap={6}
                w="full"
                mb={12}
            >
                {providers.map((provider, index) => {
                    const categoryInfo = getCategoryInfo(provider.category);
                    return (
                        <Box
                            key={index}
                            as={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Flex
                                direction="column"
                                h="100%"
                                p={6}
                                borderRadius={16}
                                bg="rgba(255, 255, 255, 0.03)"
                                border="1px solid rgba(255, 255, 255, 0.05)"
                                backdropFilter="blur(10px)"
                                transition="all 0.3s ease"
                                _hover={{
                                    borderColor: categoryInfo.color,
                                    transform: "translateY(-5px)",
                                    boxShadow: `0 10px 30px -10px ${categoryInfo.color}40`
                                }}
                            >
                                <HStack justify="space-between" mb={3}>
                                    <Heading fontSize="lg" fontWeight={600} color={AuraTextColors.text}>
                                        {provider.name}
                                    </Heading>
                                    {provider.badge && (
                                        <Badge
                                            colorScheme="purple"
                                            fontSize="xs"
                                            px={2}
                                            py={1}
                                            borderRadius="md"
                                            bg={`${categoryInfo.color}20`}
                                            color={categoryInfo.color}
                                        >
                                            {provider.badge}
                                        </Badge>
                                    )}
                                </HStack>

                                <Text
                                    fontSize="sm"
                                    color={AuraTextColors.textLight}
                                    mb={4}
                                    flex={1}
                                    lineHeight={1.6}
                                >
                                    {provider.description}
                                </Text>

                                <VStack spacing={3} align="stretch">
                                    <Badge
                                        alignSelf="flex-start"
                                        fontSize="xs"
                                        px={3}
                                        py={1}
                                        borderRadius="full"
                                        bg={`${categoryInfo.color}15`}
                                        color={categoryInfo.color}
                                        border={`1px solid ${categoryInfo.color}30`}
                                    >
                                        {categoryInfo.label}
                                    </Badge>

                                    <Button
                                        as="a"
                                        href={provider.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="sm"
                                        rightIcon={<LuExternalLink />}
                                        bg={`${categoryInfo.color}20`}
                                        color={categoryInfo.color}
                                        border={`1px solid ${categoryInfo.color}40`}
                                        _hover={{
                                            bg: `${categoryInfo.color}30`,
                                            borderColor: categoryInfo.color,
                                        }}
                                        fontFamily="'Space Mono', monospace"
                                        fontWeight={400}
                                    >
                                        Get API Key
                                    </Button>
                                </VStack>
                            </Flex>
                        </Box>
                    );
                })}
            </Grid>
        </Flex>
    );
};

interface SummaryCardProps {
    icon: any;
    color: string;
    title: string;
    items: string[];
}

const SummaryCard = ({ icon, color, title, items }: SummaryCardProps) => (
    <Flex
        direction="column"
        p={6}
        borderRadius={16}
        bg="rgba(255, 255, 255, 0.02)"
        border="1px solid rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(10px)"
    >
        <Flex
            align="center"
            justify="center"
            w={12}
            h={12}
            mb={4}
            bg={`${color}20`}
            rounded="xl"
            color={color}
        >
            <Box as={icon} fontSize={24} />
        </Flex>
        <Heading fontSize="md" fontWeight={600} color={AuraTextColors.text} mb={3}>
            {title}
        </Heading>
        <VStack align="flex-start" spacing={1}>
            {items.map((item, idx) => (
                <Text key={idx} fontSize="sm" color={AuraTextColors.textLight}>
                    • {item}
                </Text>
            ))}
        </VStack>
    </Flex>
);

export default AIIntegrations;
