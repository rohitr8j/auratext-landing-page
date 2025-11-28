"use client";
import { Flex, Heading, Text, Box, Icon } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SiOpenai } from "react-icons/si";

const AI_MODELS = [
    {
        name: "ChatGPT",
        icon: SiOpenai,
        color: "#ffffff", // White for icon
    },
    {
        name: "Perplexity",
        src: "/assets/ai-logos/perplexity.png",
        color: "#22bfa5", // Perplexity Teal
    },
    {
        name: "Gemini",
        src: "/assets/ai-logos/gemini.svg",
        color: "#4285F4", // Google Blue
    },
    {
        name: "Claude",
        src: "/assets/ai-logos/claude.svg",
        color: "#d97757", // Anthropic Orange
    },
];

const AiHero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % AI_MODELS.length);
        }, 2000); // Change every 2 seconds
        return () => clearInterval(timer);
    }, []);

    const currentModel = AI_MODELS[index];

    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            py={10}
            px={4}
            position="relative"
            overflow="hidden"
            w="full"
        >
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="center"
                gap={{ base: 4, md: 6 }}
                zIndex={1}
                textAlign="center"
            >
                <Heading
                    color="white"
                    fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                    fontWeight={500}
                    letterSpacing="-0.02em"
                >
                    Experience the power of
                </Heading>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentModel.name}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ display: "flex", alignItems: "center", gap: "16px" }}
                    >
                        <Box position="relative" w={{ base: "40px", md: "60px" }} h={{ base: "40px", md: "60px" }} display="flex" alignItems="center" justifyContent="center">
                            {currentModel.icon ? (
                                <Icon as={currentModel.icon} w="full" h="full" color={currentModel.color} />
                            ) : (
                                <Image
                                    src={currentModel.src!}
                                    alt={`${currentModel.name} Logo`}
                                    fill
                                    style={{
                                        objectFit: "contain",
                                    }}
                                />
                            )}
                        </Box>
                        <Heading
                            color="white"
                            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                            fontWeight={500}
                            fontFamily="'Space Mono', monospace"
                        >
                            {currentModel.name}
                        </Heading>
                    </motion.div>
                </AnimatePresence>
            </Flex>

            <Text
                mt={8}
                color="gray.400"
                fontSize={{ base: "lg", md: "xl" }}
                maxW="600px"
                textAlign="center"
                zIndex={1}
            >
                Seamlessly integrate the world's best AI models into your desktop experience.
            </Text>
        </Flex>
    );
};

export default AiHero;
