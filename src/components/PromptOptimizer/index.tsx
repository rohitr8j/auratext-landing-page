"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Box, Flex, Heading, Text, SimpleGrid, Icon, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { LuArrowRight, LuSparkles, LuCheckCircle2 } from "react-icons/lu";

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
                    fontSize={{ base: 32, md: 48 }}
                    fontWeight={700}
                    textAlign={"center"}
                    color={AuraTextColors.text}
                    mb={4}
                >
                    See Prompt Optimization in Action
                </Heading>
                <Text
                    color={AuraTextColors.textLight}
                    textAlign="center"
                    fontSize="lg"
                    maxW={700}
                    mb={16}
                >
                    Transform basic prompts into powerful AI instructions using proven frameworks and real-time quality analysis.
                </Text>

                {/* Before/After Examples */}
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full" mb={16}>
                    {examples.map((example, index) => (
                        <ExampleCard key={index} {...example} />
                    ))}
                </SimpleGrid>

                {/* Framework Showcase */}
                <Box w="full" mb={16}>
                    <Heading
                        fontSize={{ base: 24, md: 32 }}
                        fontWeight={600}
                        textAlign={"center"}
                        color={AuraTextColors.text}
                        mb={8}
                    >
                        Proven Frameworks Included
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
                        {frameworks.map((framework, index) => (
                            <FrameworkCard key={index} {...framework} />
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Benefits */}
                <Box
                    w="full"
                    p={8}
                    bg="rgba(59, 130, 246, 0.05)"
                    border={`1px solid ${AuraTextColors.primary}40`}
                    borderRadius={24}
                >
                    <Heading
                        fontSize={{ base: 20, md: 24 }}
                        fontWeight={600}
                        color={AuraTextColors.text}
                        mb={6}
                        textAlign="center"
                    >
                        Why Optimize Your Prompts?
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                        {benefits.map((benefit, index) => (
                            <HStack key={index} align="flex-start" spacing={3}>
                                <Icon as={LuCheckCircle2} color={AuraTextColors.primary} fontSize={24} mt={1} />
                                <VStack align="flex-start" spacing={1}>
                                    <Text color={AuraTextColors.text} fontWeight={600}>
                                        {benefit.title}
                                    </Text>
                                    <Text color={AuraTextColors.textLight} fontSize="sm">
                                        {benefit.description}
                                    </Text>
                                </VStack>
                            </HStack>
                        ))}
                    </SimpleGrid>
                </Box>
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
                    After Optimization
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

const FrameworkCard = ({ name, acronym, description }: any) => (
    <Flex
        direction="column"
        p={6}
        bg="rgba(255, 255, 255, 0.03)"
        border="1px solid rgba(255, 255, 255, 0.05)"
        borderRadius={16}
        transition="all 0.3s ease"
        _hover={{
            borderColor: AuraTextColors.primary,
            bg: "rgba(255, 255, 255, 0.05)",
        }}
    >
        <HStack mb={3}>
            <Box
                px={3}
                py={1}
                bg={`${AuraTextColors.primary}20`}
                borderRadius="md"
            >
                <Text color={AuraTextColors.primary} fontWeight={700} fontSize="sm">
                    {acronym}
                </Text>
            </Box>
        </HStack>
        <Text color={AuraTextColors.text} fontWeight={600} mb={2}>
            {name}
        </Text>
        <Text color={AuraTextColors.textLight} fontSize="sm">
            {description}
        </Text>
    </Flex>
);

const examples = [
    {
        title: "Email Writing",
        before: "Write an email about the project delay",
        after: "You are a professional project manager. Write a concise, empathetic email to stakeholders explaining a 2-week project delay. Include: (1) Clear reason for delay, (2) Revised timeline, (3) Mitigation steps taken, (4) Reassurance of commitment. Tone: Professional yet warm. Length: 150-200 words.",
    },
    {
        title: "Code Generation",
        before: "Create a function to sort data",
        after: "You are an expert Python developer. Create a function that: (1) Accepts a list of dictionaries, (2) Sorts by a specified key in ascending/descending order, (3) Handles missing keys gracefully, (4) Returns the sorted list. Include type hints, docstring, and error handling. Follow PEP 8 standards.",
    },
];

const frameworks = [
    {
        name: "RISEN Framework",
        acronym: "RISEN",
        description: "Role, Instructions, Steps, End goal, Narrowing - Perfect for complex, multi-step tasks requiring detailed guidance.",
    },
    {
        name: "RTF Framework",
        acronym: "RTF",
        description: "Role, Task, Format - Ideal for quick, straightforward requests with clear output requirements.",
    },
    {
        name: "COSTAR Framework",
        acronym: "COSTAR",
        description: "Context, Objective, Style, Tone, Audience, Response - Best for content creation and communication tasks.",
    },
    {
        name: "RACE Framework",
        acronym: "RACE",
        description: "Role, Action, Context, Expectation - Optimized for decision-making and analytical tasks.",
    },
    {
        name: "CRAFT Framework",
        acronym: "CRAFT",
        description: "Context, Role, Action, Format, Target - Designed for creative and strategic planning prompts.",
    },
    {
        name: "Custom Frameworks",
        acronym: "CUSTOM",
        description: "Create your own frameworks tailored to your specific use cases and workflows.",
    },
];

const benefits = [
    {
        title: "Better Results",
        description: "Get more accurate, relevant, and useful outputs from AI models",
    },
    {
        title: "Save Time",
        description: "Reduce back-and-forth iterations with optimized prompts from the start",
    },
    {
        title: "Learn Best Practices",
        description: "Understand what makes a great prompt through real-time feedback",
    },
];

export default PromptOptimizer;
