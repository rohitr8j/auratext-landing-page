"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Flex, Heading, Text, Box, Icon } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { LuAlertTriangle, LuBrain, LuClock } from "react-icons/lu";

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
            maxW={1200}
            mx={"auto"}
            bg="transparent"
        >
            <Flex
                align="center"
                gap={3}
                mb={6}
            >
                <Icon as={LuAlertTriangle} fontSize={32} color={AuraTextColors.primary} />
                <Heading
                    fontSize={{
                        base: 28,
                        md: 42,
                    }}
                    textAlign={"center"}
                    fontWeight={700}
                    color={AuraTextColors.text}
                >
                    THE CRISIS NOBODY'S TALKING ABOUT
                </Heading>
            </Flex>

            <Flex
                direction={{ base: "column", md: "row" }}
                gap={8}
                w="full"
                mt={8}
            >
                {/* Junior/Student Problem */}
                <Flex
                    direction="column"
                    flex={1}
                    p={8}
                    borderRadius={24}
                    bg="rgba(255, 255, 255, 0.03)"
                    border={`1px solid ${AuraTextColors.primary}40`}
                    backdropFilter="blur(10px)"
                >
                    <Flex align="center" gap={3} mb={4}>
                        <Icon as={LuBrain} fontSize={28} color={AuraTextColors.primary} />
                        <Heading fontSize="xl" color={AuraTextColors.text}>
                            For Students & Junior Developers
                        </Heading>
                    </Flex>

                    <Box
                        as="blockquote"
                        borderLeft={`4px solid ${AuraTextColors.primary}`}
                        pl={4}
                        py={2}
                        mb={4}
                        fontStyle="italic"
                        color={AuraTextColors.textLight}
                        fontSize="md"
                    >
                        "I build websites in 1 hour with Cursor AI.
                        <br />
                        But I don't understand the code I ship.
                        <br />
                        I've become a mindless prompt operator."
                    </Box>

                    <Text color={AuraTextColors.grey} fontSize="md" lineHeight={1.7}>
                        This is <Box as="span" color={AuraTextColors.primary} fontWeight={600}>"vibe coding"</Box> — and it's happening to millions.
                        <br /><br />
                        Students who can't write without ChatGPT.
                        <br />
                        Developers who can't debug without Cursor.
                        <br />
                        Creators who can't think without AI.
                        <br /><br />
                        <Box as="span" fontWeight={600} color={AuraTextColors.text}>Skills are dying. Dependency is growing.</Box>
                    </Text>
                </Flex>

                {/* Senior/Professional Problem */}
                <Flex
                    direction="column"
                    flex={1}
                    p={8}
                    borderRadius={24}
                    bg="rgba(255, 255, 255, 0.03)"
                    border={`1px solid ${AuraTextColors.secondary}40`}
                    backdropFilter="blur(10px)"
                >
                    <Flex align="center" gap={3} mb={4}>
                        <Icon as={LuClock} fontSize={28} color={AuraTextColors.secondary} />
                        <Heading fontSize="xl" color={AuraTextColors.text}>
                            For Senior Professionals
                        </Heading>
                    </Flex>

                    <Box
                        as="blockquote"
                        borderLeft={`4px solid ${AuraTextColors.secondary}`}
                        pl={4}
                        py={2}
                        mb={4}
                        fontStyle="italic"
                        color={AuraTextColors.textLight}
                        fontSize="md"
                    >
                        "AI is helpful but exhausting.
                        <br />
                        I spend 3 hours a day verifying outputs.
                        <br />
                        Switching between ChatGPT, Claude, Gemini constantly.
                        <br />
                        I'm burning out from AI management."
                    </Box>

                    <Text color={AuraTextColors.grey} fontSize="md" lineHeight={1.7}>
                        The promise was <Box as="span" color={AuraTextColors.secondary} fontWeight={600}>productivity</Box>. The reality is <Box as="span" color={AuraTextColors.secondary} fontWeight={600}>exhaustion</Box>.
                        <br /><br />
                        Manually checking every AI suggestion.
                        <br />
                        Catching hallucinations before they ship.
                        <br />
                        Context-switching between 5 different tools.
                        <br /><br />
                        <Box as="span" fontWeight={600} color={AuraTextColors.text}>AI was supposed to help. Instead, it's draining you.</Box>
                    </Text>
                </Flex>
            </Flex>

            {/* Solution Teaser */}
            <Box
                mt={12}
                p={6}
                borderRadius={16}
                bg={`linear-gradient(135deg, ${AuraTextColors.primary}15, ${AuraTextColors.secondary}15)`}
                border={`1px solid ${AuraTextColors.primary}30`}
                maxW={700}
            >
                <Text
                    textAlign="center"
                    color={AuraTextColors.text}
                    fontSize="lg"
                    fontWeight={600}
                >
                    AuraText solves both problems.
                </Text>
                <Text
                    textAlign="center"
                    color={AuraTextColors.grey}
                    fontSize="md"
                    mt={2}
                >
                    Juniors learn while they create. Seniors trust without burning out.
                </Text>
            </Box>
        </Flex>
    );
};

export default ProblemSection;
