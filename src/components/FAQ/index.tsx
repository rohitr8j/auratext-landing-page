"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What makes AuraText different from other AI tools?",
        answer: "AuraText works as a universal overlay on any Windows application. Instead of switching between ChatGPT tabs, you can use any AI model (Claude, Gemini, Perplexity, local Ollama) directly in Word, VS Code, Slack, or any app you're working in. Plus, you bring your own API keys—no subscriptions, just pay for what you use.",
    },
    {
        question: "How does prompt optimization work?",
        answer: "AuraText analyzes your prompt in real-time and applies proven frameworks like RISEN, RTF, and COSTAR to make it more effective. You can choose from multiple frameworks or let AI automatically enhance your prompt for better results.",
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. AuraText uses a BYOK (Bring Your Own Key) model. Your API keys, prompts, and data are stored locally and sent directly to your chosen AI provider. We never proxy, access, or store your sensitive information.",
    },
    {
        question: "Which AI models are supported?",
        answer: "AuraText supports OpenAI (GPT-4, ChatGPT), Google Gemini, Anthropic Claude, Perplexity, and local Ollama models. You can switch between them instantly or test prompts across multiple models side-by-side.",
    },
    {
        question: "Does it work with my applications?",
        answer: "Yes! AuraText works as an overlay on top of any Windows application—Word, VS Code, Slack, Notion, browsers, and more. If you can type in it, AuraText works with it.",
    },
    {
        question: "How do I get started?",
        answer: "Download the Windows installer, add your API keys in Settings, and you're ready to go. The app installs in under 60 seconds with no dependencies required.",
    },
];

const FAQ = () => {
    return (
        <Box py={20} id="faq">
            <Container maxW="container.lg">
                <VStack spacing={12}>
                    <Heading
                        as={motion.h2}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        color={AuraTextColors.text}
                        size="2xl"
                        textAlign="center"
                    >
                        Frequently Asked Questions
                    </Heading>

                    <Accordion allowToggle w="full" maxW="800px">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                border="none"
                                mb={4}
                                bg="rgba(255, 255, 255, 0.03)"
                                borderRadius="xl"
                                overflow="hidden"
                            >
                                <h2>
                                    <AccordionButton
                                        _hover={{ bg: "rgba(255, 255, 255, 0.05)" }}
                                        p={6}
                                    >
                                        <Box flex="1" textAlign="left">
                                            <Heading size="md" color={AuraTextColors.text}>
                                                {faq.question}
                                            </Heading>
                                        </Box>
                                        <AccordionIcon color={AuraTextColors.textLight} />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={6} px={6} color={AuraTextColors.textLight}>
                                    {faq.answer}
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </VStack>
            </Container>
        </Box>
    );
};

export default FAQ;
