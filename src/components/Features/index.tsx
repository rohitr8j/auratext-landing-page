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
        Prompt Optimization Powerhouse
      </Heading>
      <Text
        color={AuraTextColors.textLight}
        textAlign="center"
        fontSize="lg"
        maxW={600}
        mb={12}
      >
        Everything you need to craft, optimize, and deploy better AI prompts.
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
    title: "AI-Powered Prompt Optimizer",
    text: "Transform basic prompts into optimized AI instructions. Leverage advanced algorithms to enhance clarity, specificity, and effectiveness for superior results.",
  },
  {
    icon: LuLayoutTemplate,
    title: "Proven Frameworks & Templates",
    text: "Access industry-standard frameworks (RISEN, RTF, COSTAR, RACE) and 500+ ready-to-use templates. Create custom frameworks for your unique needs.",
  },
  {
    icon: LuBot,
    title: "Multi-Model Testing",
    text: "Test your prompts across Gemini, OpenAI, Perplexity, and more. Compare outputs side-by-side to find the perfect AI provider for each task.",
  },
  {
    icon: LuZap,
    title: "Real-time Quality Analysis",
    text: "Get instant feedback on prompt quality with AI-powered scoring. Identify weaknesses and get suggestions for improvement as you type.",
  },
  {
    icon: LuLock,
    title: "Smart Cursor Lock",
    text: "First click locks to any application, subsequent clicks insert optimized text directly. Seamless workflow integration without disruption.",
  },
  {
    icon: LuMonitor,
    title: "Universal Windows Integration",
    text: "Floating overlay stays on top of any application. Optimize prompts in Word, Slack, browsers, IDEs—anywhere you type on Windows.",
  },
  {
    icon: LuShield,
    title: "Secure & Private",
    text: "All API keys and prompts stored locally. Zero data sent to our servers. Your intellectual property stays yours.",
  },
  {
    icon: LuGlobe,
    title: "Cross-Platform Compatibility",
    text: "Works with all text structures and inputs across Windows applications and browsers. No setup required.",
  },
  {
    icon: LuDownload,
    title: "One-Click Installation",
    text: "Professional installer with no dependencies. Up and running in under 60 seconds on Windows 10/11.",
  },
];

export default Features;
