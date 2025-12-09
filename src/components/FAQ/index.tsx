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
        question: "What is prompt optimization and why do I need it?",
        answer: "Prompt optimization transforms basic AI instructions into well-structured, effective prompts that produce better results. Using proven frameworks like RISEN, RTF, and COSTAR, AuraText helps you get more accurate, relevant, and useful outputs from AI models.",
    },
    {
        question: "How does AuraText's prompt optimizer work?",
        answer: "AuraText analyzes your prompt in real-time, applies industry-standard frameworks, and suggests improvements for clarity, specificity, and effectiveness. You can choose from 5-25+ frameworks depending on your plan, or let AI automatically enhance your prompt.",
    },
    {
        question: "What frameworks are included?",
        answer: "AuraText includes proven frameworks like RISEN (Role, Instructions, Steps, End goal, Narrowing), RTF (Role, Task, Format), COSTAR (Context, Objective, Style, Tone, Audience, Response), RACE, and many more. Higher tiers unlock additional specialized frameworks.",
    },
    {
        question: "Can I test prompts across different AI models?",
        answer: "Yes! Pro and Enterprise plans include multi-model testing. Compare your optimized prompts across OpenAI, Gemini, Perplexity, and other providers side-by-side to find the best AI for each task.",
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. AuraText uses a BYOK (Bring Your Own Key) model. Your API keys, prompts, and data are stored locally and sent directly to your chosen AI provider. We never proxy, access, or store your sensitive information.",
    },
    {
        question: "Does it work with my text editor?",
        answer: "Yes! AuraText works as an overlay on top of any Windows application—Notepad, Word, VS Code, Slack, browsers, and more. Optimize prompts anywhere you type.",
    },
    {
        question: "App not appearing?",
        answer: "Check the overlay toggle, ensure you have granted necessary permissions, and verify 'Always on top' is enabled in Settings.",
    },
    {
        question: "Provider errors?",
        answer: "Verify your API keys in Settings and check the status of your AI provider (OpenAI, Gemini, etc.). Make sure your API key has sufficient credits and proper permissions.",
    },
    {
        question: "How do updates work?",
        answer: "Use Help → Check for updates in the app, or wait for the automatic prompt. Some updates may be mandatory for security or stability.",
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
