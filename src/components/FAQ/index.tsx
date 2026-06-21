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
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "Is this just another prompt rewriter?",
        answer: "No — AuraText is not a prompt rewriter. A prompt rewriter polishes what you wrote. AuraText works backwards from what you want to achieve — it asks the right questions, discovers what's missing, and builds a complete request for your AI tool. You never have to think about how to phrase it.",
    },
    {
        question: "ChatGPT and Claude already ask follow-up questions. Why do I need AuraText?",
        answer: "AuraText is consistent and structured across every AI tool, which is what ChatGPT and Claude are not. They ask follow-ups sometimes — inconsistently, starting from scratch every session, only when the model decides to. AuraText works the same way every time, across ChatGPT, Claude, Gemini, and Cursor. It is not a replacement for any of them. It is the layer that makes all of them work better.",
    },
    {
        question: "How is this different from prompt engineering?",
        answer: "AuraText eliminates the need for prompt engineering entirely. Prompt engineering is something you have to learn, remember, and apply manually every time. With AuraText, you describe what you want, and the rest happens automatically — invisibly, before AI ever sees your request.",
    },
    {
        question: "Will this slow me down?",
        answer: "No — AuraText saves time overall. It adds 30 seconds of structured thinking and saves you from hours of fixing a bad output. Most people spend far more time rewriting and debugging than the discovery questions take.",
    },
    {
        question: "Do I need any technical knowledge to use it?",
        answer: "No technical knowledge is required. AuraText guides you in real time — you describe what you want, it asks the right questions, and builds the request automatically. No frameworks to memorize, no prompt syntax to learn.",
    },
    {
        question: "Does it work with the AI tools I already use?",
        answer: "Yes — AuraText works with ChatGPT, Claude, Gemini, Cursor, and Perplexity. No switching required. It sits as a Windows overlay above all of them, so you use the tools you already have, just with complete, structured requests instead of vague ones.",
    },
    {
        question: "Will this actually improve my results?",
        answer: "Yes, and you will see it on the first use. The difference between a vague request and a complete one is not subtle — it is the difference between an output you use and one you rewrite three times.",
    },
    {
        question: "What if I'm already getting decent outputs?",
        answer: "Decent outputs mean you are leaving better results on the table. You settle for outputs that are close but not precise, not reliable, not fully aligned with what you actually need. AuraText takes you from decent to intentional.",
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
                        Common Questions
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
                                <AccordionPanel pb={6} px={6} color={AuraTextColors.textLight} lineHeight={1.8}>
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
