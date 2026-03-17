"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Box, Flex, Heading, Text, SimpleGrid, Icon, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { LuArrowRight, LuSparkles } from "react-icons/lu";

const PromptOptimizer = () => {
    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            py={24}
            position="relative"
            bg="transparent"
        >
            <Flex
                direction={"column"}
                align={"center"}
                maxW={1200}
                mx={"auto"}
                px={6}
            >
                <Heading
                    fontSize={{ base: 28, md: 42 }}
                    fontWeight={700}
                    textAlign={"center"}
                    color={AuraTextColors.text}
                    mb={4}
                    maxW={700}
                    lineHeight={1.25}
                >
                    Same Input. Completely Different Result.
                </Heading>
                <Text
                    color={AuraTextColors.textLight}
                    textAlign="center"
                    fontSize="lg"
                    maxW={600}
                    mb={16}
                >
                    The difference isn&apos;t the AI. It&apos;s how you think.
                </Text>

                {/* Before/After Examples */}
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
                    {examples.map((example, index) => (
                        <ExampleCard key={index} {...example} />
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

const ExampleCard = ({ title, before, after }: any) => (
    <Flex
        direction="column"
        p={6}
        bg="rgba(255, 255, 255, 0.03)"
        border="1px solid rgba(255, 255, 255, 0.05)"
        borderRadius={20}
        transition="all 0.3s ease"
        _hover={{
            borderColor: AuraTextColors.primary,
            transform: "translateY(-5px)",
        }}
    >
        <Text color={AuraTextColors.text} fontWeight={600} fontSize="lg" mb={4}>
            {title}
        </Text>

        {/* Before */}
        <VStack align="flex-start" spacing={2} mb={4}>
            <Text color={AuraTextColors.grey} fontSize="xs" fontWeight={600} textTransform="uppercase">
                Before
            </Text>
            <Box
                w="full"
                p={4}
                bg="rgba(239, 68, 68, 0.1)"
                border="1px solid rgba(239, 68, 68, 0.3)"
                borderRadius={12}
            >
                <Text color={AuraTextColors.textLight} fontSize="sm" fontFamily="'Space Mono', monospace">
                    {before}
                </Text>
            </Box>
        </VStack>

        {/* Arrow */}
        <Flex justify="center" mb={4}>
            <Icon as={LuArrowRight} color={AuraTextColors.primary} fontSize={28} transform="rotate(90deg)" />
        </Flex>

        {/* After */}
        <VStack align="flex-start" spacing={2}>
            <HStack spacing={2}>
                <Text color={AuraTextColors.grey} fontSize="xs" fontWeight={600} textTransform="uppercase">
                    After AuraText
                </Text>
                <Icon as={LuSparkles} color={AuraTextColors.primary} fontSize={14} />
            </HStack>
            <Box
                w="full"
                p={4}
                bg={`${AuraTextColors.primary}15`}
                border={`1px solid ${AuraTextColors.primary}40`}
                borderRadius={12}
            >
                <Text color={AuraTextColors.text} fontSize="sm" fontFamily="'Space Mono', monospace">
                    {after}
                </Text>
            </Box>
        </VStack>
    </Flex>
);

const examples = [
    {
        title: "Messaging / Communication",
        before: "reply to this message politely",
        after: "You are a professional responding to a delayed client request. Write a clear and polite reply that: (1) Acknowledges the delay, (2) Explains the reason briefly without over-apologizing, (3) Sets a clear next step and timeline, (4) Maintains a confident and respectful tone.",
    },
    {
        title: "Debugging / Problem Solving",
        before: "fix this error in my code",
        after: "You are an experienced developer. Analyze this error step-by-step: (1) Identify the root cause, (2) Explain why it\'s happening in simple terms, (3) Provide a corrected version of the code, (4) Suggest how to prevent this issue in the future.",
    },
];

export default PromptOptimizer;
