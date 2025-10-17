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
} from "react-icons/lu";

const Features = () => {
  return (
    <Flex
      id="features"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
        fontFamily="'Space Mono', monospace"
        fontWeight={400}
        color={AuraTextColors.text}
      >
        Key Features
      </Heading>
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
  <Flex maxW={350} role="group" p={6} borderRadius={12} bg={AuraTextColors.white} border={`1px solid ${AuraTextColors.lightGrey}`} transition={"all 0.25s ease"} _hover={{ borderColor: AuraTextColors.primary, shadow: "lg" }}>
    <Icon
      as={icon}
      fontSize={48}
      mr={5}
      p={2}
      bg={AuraTextColors.lightBg}
      rounded={"md"}
      strokeWidth={1.5}
      transition={"all 0.25s ease"}
      color={AuraTextColors.primary}
      _groupHover={{
        bg: AuraTextColors.primary,
        color: AuraTextColors.white,
        transform: "scale(1.1)",
      }}
    />
    <Flex direction={"column"} gap={2}>
      <Heading fontSize={"xl"} fontFamily="'Space Mono', monospace" fontWeight={400} color={AuraTextColors.text}>{title}</Heading>
      <Text fontSize={"sm"} color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace" fontWeight={400} lineHeight={1.6}>
        {children}
      </Text>
    </Flex>
  </Flex>
);

const Cards = [
  {
    icon: LuLock,
    title: "Smart Cursor Lock",
    text: "First click locks to any application, subsequent clicks insert directly. No more clicking in target fields.",
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
    icon: LuDownload,
    title: "Easy Installation",
    text: "One-click installer with no additional dependencies. Works seamlessly with Windows 10/11.",
  },
];

export default Features;
