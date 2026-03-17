"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Box, Flex, Heading, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import React from "react";
import { LuPencil, LuMessageCircle, LuSparkles } from "react-icons/lu";
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
                    fontSize={{ base: 28, md: 42 }}
                    fontWeight={700}
                    textAlign={"center"}
                    color={AuraTextColors.text}
                    mb={4}
                    maxW={700}
                    lineHeight={1.25}
                >
                    From Messy Thought to Better Output in 3 Steps
                </Heading>
                <Text
                    color={AuraTextColors.textLight}
                    textAlign="center"
                    fontSize="lg"
                    maxW={560}
                    mb={16}
                >
                    No setup. No learning curve. Just write and let AuraText guide your thinking.
                </Text>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
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
        icon: LuPencil,
        title: "Start Messy",
        description: "Write whatever's in your head. Vague, incomplete, half-formed — it's fine. AuraText works with where you are.",
    },
    {
        icon: LuMessageCircle,
        title: "Get the Right Questions",
        description: "AuraText asks a few targeted questions to clarify your intent, audience, and goal. No long forms. Fast and focused.",
    },
    {
        icon: LuSparkles,
        title: "Get a Better Output",
        description: "A structured prompt goes to the AI of your choice. Better prompt = dramatically better result. Every single time.",
    },
];

export default HowItWorks;
