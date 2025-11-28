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
        Power Features
      </Heading>
      <Text
        color={AuraTextColors.textLight}
        textAlign="center"
        fontSize="lg"
        maxW={600}
        mb={12}
      >
        Everything you need to write faster and better.
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
    icon: LuLock,
    title: "Smart Cursor Lock",
    text: "First click locks to any application, subsequent clicks insert directly. No more clicking in target fields.",
  },
  {
    icon: LuWand,
    title: "Prompt Optimizer",
    text: "Don't just write prompts, optimize them. Built-in tools to enhance your AI instructions for better results.",
  },
  {
    icon: LuLayoutTemplate,
    title: "Frameworks & Templates",
    text: "Use industry-standard frameworks or create your own custom templates for consistent output.",
  },
  {
    icon: LuBot,
    title: "Multi-AI Provider Support",
    text: "Choose from Gemini, Perplexity, OpenAI, or bring your own API key. No vendor lock-in.",
  },
  {
    icon: LuZap,
    title: "Real-time Text Analysis",
    text: "AI analyzes your text as you type and provides intelligent suggestions for improved writing quality.",
  },
  {
    icon: LuMonitor,
    title: "Overlay Mode",
    text: "Floating button stays on top of any application for instant access without interfering with your workflow.",
  },
  {
    icon: LuShield,
    title: "Secure & Private",
    text: "All API keys stored locally, no data sent to our servers. Your privacy and security are our priority.",
  },
  {
    icon: LuGlobe,
    title: "Universal Compatibility",
    text: "Works with all text structures and inputs across Windows applications and browsers.",
  },
  {
    icon: LuDownload,
    title: "Easy Installation",
    text: "One-click installer with no additional dependencies. Works seamlessly with Windows 10/11.",
  },
];

export default Features;
