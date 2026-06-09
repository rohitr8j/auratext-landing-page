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
        answer: "No. Prompt rewriters take what you wrote and rephrase it. AuraText does something different. It asks you questions to discover what's missing from your request before you send anything to AI. It finds the gaps. Then you decide what to do with them.",
    },
    {
        question: "Why not just use ChatGPT directly?",
        answer: "ChatGPT generates based on what you give it. It doesn't push back. It doesn't ask what you haven't thought of yet. AuraText surfaces the missing requirements before you hit send, so ChatGPT, Claude, or Cursor gets a complete request instead of a vague one.",
    },
    {
        question: "How is this different from prompt engineering?",
        answer: "Prompt engineering is a skill you have to learn and manually apply every time. AuraText applies it for you, in real time, through targeted questions. No frameworks to memorize. No courses to take. It just works.",
    },
    {
        question: "Will this slow me down?",
        answer: "No. AuraText adds 30 seconds of structured thinking and saves you from 3 hours of fixing a bad output. Most people spend far more time rewriting and debugging than the discovery questions take.",
    },
    {
        question: "Do I need to know prompt engineering?",
        answer: "No. AuraText guides you in real time. You improve naturally as you use it. No courses, no frameworks to memorize.",
    },
    {
        question: "Does it work with the AI tools I already use?",
        answer: "Yes. AuraText works with ChatGPT, Claude, Gemini, and Perplexity. No switching required. Use the tools you already have, just with complete requests instead of vague ones.",
    },
    {
        question: "Will this actually improve my results?",
        answer: "Yes, and you'll see it immediately. The casino app example is real: typing \"Build a casino app\" gets you generic code. Running it through AuraText first surfaces 6 critical requirements you hadn't defined. That's the difference between an output you use and one you rewrite.",
    },
    {
        question: "What if I'm already getting decent outputs?",
        answer: "Decent is the trap. You settle for outputs that are \"good enough\" but not precise, reliable, or fully aligned with what you actually need. AuraText helps you go from decent to intentional to consistently high-quality.",
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
