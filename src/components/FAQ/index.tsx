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
        answer: "No. Most tools rewrite your prompts after you write them. AuraText helps you think before you write them — by asking the right questions and structuring your intent.",
    },
    {
        question: "Will this slow me down?",
        answer: "No. AuraText adds a few seconds of thinking — but saves minutes of rewriting and fixing bad outputs. Most people spend that time rewriting bad prompts anyway.",
    },
    {
        question: "Do I need to know prompt engineering?",
        answer: "No. AuraText guides you in real time. You improve naturally as you use it — no courses, no frameworks to memorize.",
    },
    {
        question: "Does it work with the AI tools I already use?",
        answer: "Yes. AuraText works with ChatGPT, Claude, Gemini, and Perplexity — no switching required. Use the tools you already have, just with better inputs.",
    },
    {
        question: "Will this actually improve my results?",
        answer: "Yes — and you'll see it immediately. AuraText shows you the difference between a vague prompt and a structured one, so you can see exactly why the output improves.",
    },
    {
        question: "What if I'm already getting decent outputs?",
        answer: "Decent is the trap. You settle for outputs that are \"good enough\" — but not precise, reliable, or fully aligned with what you want. AuraText helps you go from decent → intentional → high-quality.",
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
