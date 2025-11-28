"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Box, Flex, Heading, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import React from "react";
import { LuDownload, LuKey, LuKeyboard, LuSparkles } from "react-icons/lu";
import { motion } from "framer-motion";

const HowItWorks = () => {
    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            py={24}
            position="relative"
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
                    How it Works
                </Heading>
                <Text
                    color={AuraTextColors.textLight}
                    textAlign="center"
                    fontSize="lg"
                    maxW={600}
                    mb={16}
                >
                    Get started with AuraText in minutes. No complex setup required.
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
                    {steps.map((step, index) => (
                        <StepCard key={index} {...step} index={index + 1} />
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

const StepCard = ({ icon, title, description, index }: any) => (
    <Flex
        direction="column"
        align="center"
        textAlign="center"
        position="relative"
    >
        <Flex
            w={16}
            h={16}
            align="center"
            justify="center"
            bg={`linear-gradient(135deg, ${AuraTextColors.primary}20, ${AuraTextColors.secondary}20)`}
            rounded="2xl"
            color={AuraTextColors.primary}
            mb={6}
            position="relative"
            zIndex={1}
        >
            <Icon as={icon} fontSize={32} />
            <Flex
                position="absolute"
                top={-3}
                right={-3}
                w={8}
                h={8}
                bg={AuraTextColors.primary}
                rounded="full"
                align="center"
                justify="center"
                fontSize="sm"
                fontWeight="bold"
                color="white"
                border="4px solid black"
            >
                {index}
            </Flex>
        </Flex>

        <Heading fontSize="xl" fontWeight={600} mb={3} color={AuraTextColors.text}>
            {title}
        </Heading>
        <Text color={AuraTextColors.textLight} lineHeight={1.6}>
            {description}
        </Text>
    </Flex>
);

const steps = [
    {
        icon: LuDownload,
        title: "Download & Install",
        description: "Get the Windows App or Browser Extension. Both work seamlessly together.",
    },
    {
        icon: LuKey,
        title: "Connect AI",
        description: "Add your API keys for OpenAI, Gemini, or Perplexity in the Settings.",
    },
    {
        icon: LuKeyboard,
        title: "Type Anywhere",
        description: "Start typing in any application or text field. AuraText is always ready.",
    },
    {
        icon: LuSparkles,
        title: "Refine & Replace",
        description: "Let AuraText optimize your text and replace it instantly with a click.",
    },
];

export default HowItWorks;
