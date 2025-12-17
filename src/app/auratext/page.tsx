import type { Metadata } from "next";
import { Flex, Heading, Text, Button, VStack, HStack, Box, Link as ChakraLink } from "@chakra-ui/react";
import { AuraTextColors } from "#/src/utils/Colors";
import { FaWindows, FaGithub, FaReddit, FaLinkedin } from "react-icons/fa";
import { LuTwitter, LuInstagram, LuExternalLink } from "react-icons/lu";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Auratext – What It Is, Who Built It, and the Official Download",
    description:
        "Auratext is the informal spelling of AuraText, an AI prompt optimizer for Windows built by Yash Raj. Official site: auratxt.com. Download the official app and learn more.",
    keywords: [
        "Auratext",
        "auratext",
        "AuraText",
        "Yash Raj",
        "AI prompt optimizer",
        "Windows AI tool",
        "prompt engineering",
        "official download",
    ],
    authors: [{ name: "Yash Raj" }],
    creator: "Yash Raj",
    publisher: "AuraText",
    alternates: {
        canonical: "https://auratxt.com/auratext",
    },
    openGraph: {
        title: "Auratext – Official AI Prompt Optimizer by Yash Raj",
        description:
            "Auratext is the informal spelling of AuraText, an AI prompt optimizer for Windows built by Yash Raj. Official site: auratxt.com.",
        url: "https://auratxt.com/auratext",
        type: "website",
    },
    twitter: {
        title: "Auratext – Official AI Prompt Optimizer by Yash Raj",
        description:
            "Auratext is the informal spelling of AuraText, an AI prompt optimizer for Windows built by Yash Raj. Official site: auratxt.com.",
        card: "summary_large_image",
    },
};

export default function AuratextPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Auratext – Official Information",
        description:
            "Auratext is the informal spelling of AuraText, an AI prompt optimizer for Windows built by Yash Raj.",
        url: "https://auratxt.com/auratext",
        mainEntity: {
            "@type": "SoftwareApplication",
            name: "AuraText",
            alternateName: "Auratext",
            applicationCategory: "ProductivityApplication",
            operatingSystem: "Windows",
            creator: {
                "@type": "Person",
                name: "Yash Raj",
            },
            url: "https://auratxt.com",
            downloadUrl: "https://auratxt.com/#download",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <Flex
                minH="100vh"
                bg="black"
                position="relative"
                align="center"
                justify="center"
                direction="column"
                px={8}
                py={24}
            >
                <VStack spacing={8} maxW="800px" mx="auto">
                    {/* Main Heading */}
                    <Heading
                        as="h1"
                        fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                        color={AuraTextColors.text}
                        textAlign="center"
                        fontFamily="'Space Mono', monospace"
                        fontWeight={700}
                        lineHeight={1.2}
                    >
                        Auratext – The Official AI Prompt Optimizer
                    </Heading>

                    {/* Subheading */}
                    <Text
                        color={AuraTextColors.textLight}
                        fontSize={{ base: "lg", md: "xl" }}
                        textAlign="center"
                        fontFamily="'Space Mono', monospace"
                        fontWeight={400}
                        lineHeight={1.6}
                    >
                        Looking for <Box as="span" color={AuraTextColors.primary} fontWeight={600}>auratext</Box>?
                        You've found it.
                    </Text>

                    {/* Explanation Section */}
                    <VStack
                        spacing={6}
                        bg={AuraTextColors.lightBg}
                        p={8}
                        borderRadius="16px"
                        border={`1px solid ${AuraTextColors.primary}40`}
                        w="full"
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "xl", md: "2xl" }}
                            color={AuraTextColors.text}
                            fontFamily="'Space Mono', monospace"
                            fontWeight={600}
                        >
                            What is Auratext?
                        </Heading>

                        <VStack spacing={4} align="start" w="full">
                            <Text color={AuraTextColors.textLight} fontSize="md" lineHeight={1.8}>
                                <Box as="span" color={AuraTextColors.primary} fontWeight={600}>Auratext</Box> is the informal,
                                lowercase spelling of <Box as="span" color={AuraTextColors.primary} fontWeight={600}>AuraText</Box>.
                            </Text>

                            <Text color={AuraTextColors.textLight} fontSize="md" lineHeight={1.8}>
                                <Box as="span" fontWeight={600}>AuraText</Box> is an AI prompt optimizer for Windows built by{" "}
                                <Box as="span" color={AuraTextColors.primary} fontWeight={600}>Yash Raj</Box>.
                            </Text>

                            <Text color={AuraTextColors.textLight} fontSize="md" lineHeight={1.8}>
                                Official website: <ChakraLink
                                    href="https://auratxt.com"
                                    color={AuraTextColors.primary}
                                    fontWeight={600}
                                    _hover={{ textDecoration: "underline" }}
                                >
                                    auratxt.com
                                </ChakraLink>
                            </Text>
                        </VStack>
                    </VStack>

                    {/* Key Features */}
                    <VStack spacing={4} w="full" align="start">
                        <Heading
                            as="h2"
                            fontSize={{ base: "lg", md: "xl" }}
                            color={AuraTextColors.text}
                            fontFamily="'Space Mono', monospace"
                            fontWeight={600}
                        >
                            What does AuraText (Auratext) do?
                        </Heading>

                        <VStack spacing={3} align="start" pl={4}>
                            <Text color={AuraTextColors.textLight} fontSize="md">
                                ✨ Optimizes AI prompts with proven frameworks (RISEN, RTF, COSTAR)
                            </Text>
                            <Text color={AuraTextColors.textLight} fontSize="md">
                                🔄 Tests prompts across multiple AI models
                            </Text>
                            <Text color={AuraTextColors.textLight} fontSize="md">
                                ⚡ Works anywhere you type on Windows
                            </Text>
                            <Text color={AuraTextColors.textLight} fontSize="md">
                                🎯 Transforms mediocre prompts into powerful AI instructions
                            </Text>
                        </VStack>
                    </VStack>

                    {/* CTA Buttons */}
                    <HStack spacing={4} flexWrap="wrap" justify="center" mt={8}>
                        <Button
                            as={Link}
                            href="/#download"
                            leftIcon={<FaWindows size={20} />}
                            size="lg"
                            bg={AuraTextColors.primary}
                            color={AuraTextColors.white}
                            _hover={{
                                bg: AuraTextColors.secondary,
                                transform: "translateY(-2px)",
                                boxShadow: `0 0 30px ${AuraTextColors.primary}60`,
                            }}
                            fontWeight={600}
                            px={8}
                            py={6}
                            borderRadius="12px"
                            transition="all 0.3s ease"
                            boxShadow={`0 0 20px ${AuraTextColors.primary}40`}
                        >
                            Download for Windows
                        </Button>

                        <Button
                            as={Link}
                            href="/"
                            leftIcon={<LuExternalLink />}
                            size="lg"
                            variant="outline"
                            borderColor={AuraTextColors.primary}
                            color={AuraTextColors.primary}
                            _hover={{ bg: "rgba(59, 130, 246, 0.1)" }}
                            fontWeight={500}
                            px={8}
                            py={6}
                            borderRadius="12px"
                        >
                            Visit Homepage
                        </Button>
                    </HStack>

                    {/* Official Links */}
                    <VStack spacing={4} mt={12} w="full">
                        <Heading
                            as="h3"
                            fontSize={{ base: "md", md: "lg" }}
                            color={AuraTextColors.text}
                            fontFamily="'Space Mono', monospace"
                            fontWeight={600}
                        >
                            Official AuraText Links
                        </Heading>

                        <VStack spacing={3} w="full">
                            <ChakraLink
                                href="https://www.producthunt.com/posts/auratxt"
                                isExternal
                                color={AuraTextColors.textLight}
                                _hover={{ color: AuraTextColors.primary }}
                                fontSize="md"
                            >
                                🚀 Product Hunt Launch
                            </ChakraLink>

                            <ChakraLink
                                href="https://github.com/Y4shr4j"
                                isExternal
                                color={AuraTextColors.textLight}
                                _hover={{ color: AuraTextColors.primary }}
                                fontSize="md"
                            >
                                💻 GitHub (Yash Raj)
                            </ChakraLink>

                            <ChakraLink
                                href="https://www.reddit.com/r/AuraText/"
                                isExternal
                                color={AuraTextColors.textLight}
                                _hover={{ color: AuraTextColors.primary }}
                                fontSize="md"
                            >
                                💬 Reddit Community
                            </ChakraLink>

                            <ChakraLink
                                href="https://x.com/auratext"
                                isExternal
                                color={AuraTextColors.textLight}
                                _hover={{ color: AuraTextColors.primary }}
                                fontSize="md"
                            >
                                🐦 Twitter/X
                            </ChakraLink>

                            <ChakraLink
                                href="https://www.linkedin.com/company/auratext"
                                isExternal
                                color={AuraTextColors.textLight}
                                _hover={{ color: AuraTextColors.primary }}
                                fontSize="md"
                            >
                                💼 LinkedIn
                            </ChakraLink>

                            <ChakraLink
                                href="https://www.instagram.com/auratext.app/"
                                isExternal
                                color={AuraTextColors.textLight}
                                _hover={{ color: AuraTextColors.primary }}
                                fontSize="md"
                            >
                                📸 Instagram
                            </ChakraLink>
                        </VStack>
                    </VStack>

                    {/* Bottom Note */}
                    <Box
                        mt={12}
                        p={6}
                        bg="rgba(59, 130, 246, 0.05)"
                        borderRadius="12px"
                        border={`1px solid ${AuraTextColors.primary}20`}
                    >
                        <Text
                            color={AuraTextColors.textLight}
                            fontSize="sm"
                            textAlign="center"
                            lineHeight={1.8}
                        >
                            <Box as="span" fontWeight={600}>Note:</Box> Whether you search for "auratext",
                            "Auratext", or "AuraText" — they all refer to the same product.
                            The official brand name is <Box as="span" color={AuraTextColors.primary} fontWeight={600}>AuraText</Box>,
                            built by <Box as="span" color={AuraTextColors.primary} fontWeight={600}>Yash Raj</Box>.
                        </Text>
                    </Box>
                </VStack>
            </Flex>
        </>
    );
}
