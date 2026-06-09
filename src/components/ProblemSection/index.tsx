"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const ProblemSection = () => {
    return (
        <Flex
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            direction={"column"}
            justify={"center"}
            align={"center"}
            my={24}
            px={4}
            maxW={900}
            mx={"auto"}
            bg="transparent"
        >
            <Heading
                fontSize={{
                    base: 28,
                    md: 42,
                }}
                textAlign={"center"}
                fontWeight={700}
                color={AuraTextColors.text}
                mb={10}
                lineHeight={1.25}
            >
                AI generates answers.
                <br />
                Nobody asks if you&apos;re asking the right question.
            </Heading>

            <Flex
                direction="column"
                gap={4}
                w="full"
                maxW={640}
                mb={10}
                px={{ base: 2, md: 0 }}
            >
                {[
                    `A developer types "Build a casino app" and ends up with 3 hours of broken code to debug`,
                    `A writer types "Write a blog post" and rewrites it 5 times before it\'s usable`,
                    `A founder types "Help me grow my startup" and gets generic, forgettable advice`,
                ].map((line, i) => (
                    <Flex key={i} align="center" gap={4}>
                        <Box
                            w={2}
                            h={2}
                            borderRadius="full"
                            flexShrink={0}
                            bg={AuraTextColors.primary}
                        />
                        <Text
                            color={AuraTextColors.textLight}
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight={1.6}
                        >
                            {line}
                        </Text>
                    </Flex>
                ))}
            </Flex>

            <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight={700}
                color={AuraTextColors.text}
                textAlign="center"
                mb={12}
            >
                The AI isn&apos;t wrong. Your request was incomplete.
            </Text>

            {/* Insight box */}
            <Box
                p={8}
                borderRadius={20}
                bg={`linear-gradient(135deg, ${AuraTextColors.primary}12, ${AuraTextColors.secondary}12)`}
                border={`1px solid ${AuraTextColors.primary}30`}
                maxW={660}
                w="full"
            >
                <Text
                    textAlign="center"
                    color={AuraTextColors.textLight}
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight={1.8}
                    mb={4}
                >
                    Missing requirements. Hidden assumptions. Unclear goals.
                    <br />
                    <Box as="span" color={AuraTextColors.text} fontWeight={600}>
                        AI generates anyway.
                    </Box>
                </Text>
                <Text
                    textAlign="center"
                    color={AuraTextColors.text}
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight={600}
                    lineHeight={1.7}
                >
                    AuraText slows you down for 30 seconds
                    <br />
                    <Box as="span" color={AuraTextColors.primary}>
                        so you don&apos;t waste the next 3 hours.
                    </Box>
                </Text>
                <Box
                    mt={6}
                    pt={6}
                    borderTop={`1px solid ${AuraTextColors.primary}20`}
                >
                    <Text
                        textAlign="center"
                        color={AuraTextColors.text}
                        fontSize={{ base: "sm", md: "md" }}
                        fontWeight={700}
                        fontFamily="'Space Mono', monospace"
                        letterSpacing="0.01em"
                    >
                        AuraText doesn&apos;t generate for you.{" "}
                        <Box as="span" color={AuraTextColors.primary}>
                            It discovers what you&apos;re missing first.
                        </Box>
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};

export default ProblemSection;
