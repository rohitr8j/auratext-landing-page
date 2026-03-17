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
                You Use AI Every Day.
                <br />
                But You&apos;re Not Getting Better.
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
                    "You rewrite prompts again and again",
                    "You accept outputs you don't fully understand",
                    "You rely on AI more, but trust yourself less",
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
                You&apos;re not learning. You&apos;re just operating.
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
                    AI isn&apos;t the problem.
                    <br />
                    <Box as="span" color={AuraTextColors.text} fontWeight={600}>
                        How you think while using it is.
                    </Box>
                </Text>
                <Text
                    textAlign="center"
                    color={AuraTextColors.text}
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight={600}
                    lineHeight={1.7}
                >
                    AuraText doesn&apos;t replace your thinking.
                    <br />
                    <Box as="span" color={AuraTextColors.primary}>
                        It upgrades it.
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
                            It thinks with you.
                        </Box>
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};

export default ProblemSection;
