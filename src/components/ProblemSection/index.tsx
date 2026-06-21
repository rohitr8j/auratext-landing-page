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
                Everyone knows what they want.
                <br />
                Nobody knows what to tell AI.
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
                    `A developer knows they need a dashboard — but types "build me a dashboard" and gets something generic`,
                    `A writer knows the article they want — but the AI doesn't know the audience, tone, or goal`,
                    `A founder knows the problem they're solving — but gets generic advice because AI got a generic request`,
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
                The gap isn&apos;t intelligence. It&apos;s translation.
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
                    Between what you want and what AI produces
                    <br />
                    <Box as="span" color={AuraTextColors.text} fontWeight={600}>
                        is a gap most people never close.
                    </Box>
                </Text>
                <Text
                    textAlign="center"
                    color={AuraTextColors.text}
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight={600}
                    lineHeight={1.7}
                >
                    AuraText closes it. Automatically.
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
                        Tell AuraText what you want.{" "}
                        <Box as="span" color={AuraTextColors.primary}>
                            AuraText figures out what AI needs.
                        </Box>
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};

export default ProblemSection;
