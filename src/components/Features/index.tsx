"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  LuLock,
  LuBot,
  LuZap,
  LuMonitor,
  LuShield,
  LuDownload,
  LuWand,
  LuLayoutTemplate,
  LuGlobe,
} from "react-icons/lu";

import { motion } from "framer-motion";

const Features = () => {
  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      id="features"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
      bg="transparent"
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
        fontWeight={700}
        color={AuraTextColors.text}
        mb={4}
      >
        Powerful Features
      </Heading>
      <Text
        color={AuraTextColors.textLight}
        textAlign="center"
        fontSize="lg"
        maxW={600}
        mb={12}
      >
        Everything you need to use AI effectively across all your Windows applications.
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={10}
        my={10}
      >
        {Cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title}>
            {card.text}
          </Card>
        ))}
      </Grid>
    </Flex>
  );
};

interface CardProps {
  icon: IconType;
  title: string;
  children: ReactNode;
}

const Card = ({ icon, title, children }: CardProps) => (
  <Flex
    direction="column"
    h="100%"
    p={8}
    borderRadius={24}
    bg="rgba(255, 255, 255, 0.03)"
    border="1px solid rgba(255, 255, 255, 0.05)"
    backdropFilter="blur(10px)"
    transition={"all 0.3s ease"}
    _hover={{
      borderColor: AuraTextColors.primary,
      transform: "translateY(-5px)",
      boxShadow: `0 10px 30px -10px ${AuraTextColors.primary}40`
    }}
  >
    <Flex
      align="center"
      justify="center"
      w={14}
      h={14}
      mb={6}
      bg={`linear-gradient(135deg, ${AuraTextColors.primary}20, ${AuraTextColors.secondary}20)`}
      rounded={"2xl"}
      color={AuraTextColors.primary}
    >
      <Icon as={icon} fontSize={28} />
    </Flex>
    <Heading fontSize={"xl"} fontWeight={600} color={AuraTextColors.text} mb={3}>{title}</Heading>
    <Text fontSize={"md"} color={AuraTextColors.textLight} lineHeight={1.6}>
      {children}
    </Text>
  </Flex>
);

const Cards = [
  {
    icon: LuWand,
    title: "Learning Mode",
    text: "Forces you to think before AI generates. Understand what you're building instead of blindly copy-pasting. Build real skills while using AI assistance.",
  },
  {
    icon: LuShield,
    title: "Trust Layer (Coming Soon)",
    text: "Auto-verifies AI outputs for hallucinations and errors. Confidence scoring on every suggestion. Stop wasting hours manually checking AI responses.",
  },
  {
    icon: LuZap,
    title: "AI Router",
    text: "Automatically picks the best AI for each task. Claude for analysis, GPT-4 for creative work, Gemini for research. Or choose manually—you're in control.",
  },
  {
    icon: LuLayoutTemplate,
    title: "Skill Dashboard (Coming Soon)",
    text: "Track your prompt quality improvement over time. See how your AI mastery grows. Celebrate milestones as you become less dependent on us.",
  },
  {
    icon: LuGlobe,
    title: "Use Any AI Model, Anywhere",
    text: "Break free from Microsoft Copilot. Use Claude, Gemini, Perplexity, or local Ollama models in Word, Slack, Notion, VS Code—any Windows app.",
  },
  {
    icon: LuBot,
    title: "Bring Your Own API Keys",
    text: "No subscription fatigue. Use your own OpenAI, Anthropic, Google, or Perplexity API keys. Pay only for what you use. Full control over your AI spend.",
  },
  {
    icon: LuMonitor,
    title: "Universal Windows Integration",
    text: "Floating overlay stays on top of any application. Work seamlessly in Word, Slack, browsers, IDEs—anywhere you type on Windows. No Alt-Tab required.",
  },
  {
    icon: LuLock,
    title: "Smart Cursor Lock",
    text: "First click locks to any application, subsequent clicks insert optimized text directly. Seamless workflow integration without disruption.",
  },
  {
    icon: LuDownload,
    title: "Proven Frameworks & Templates",
    text: "Access industry-standard prompt frameworks (RISEN, COSTAR, RTF) and 500+ ready-to-use templates. Learn the patterns that make AI work better.",
  },
];

export default Features;
