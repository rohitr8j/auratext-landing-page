"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { LuBrain, LuZap, LuTrendingUp } from "react-icons/lu";
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
          base: 28,
          md: 42,
        }}
        textAlign={"center"}
        fontWeight={700}
        color={AuraTextColors.text}
        mb={4}
        maxW={700}
        lineHeight={1.25}
      >
        The outcome isn&apos;t better prompts.
        <br />
        It&apos;s fewer rewrites.
      </Heading>
      <Text
        color={AuraTextColors.textLight}
        textAlign="center"
        fontSize="lg"
        maxW={500}
        mb={12}
      >
        AuraText connects better thinking to real outcomes you can measure.
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={10}
        my={10}
        w="full"
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
    icon: LuBrain,
    title: "Fewer Rewrites",
    text: "When AI knows exactly what you need, it gets it right the first time. Stop regenerating. Stop debugging bad outputs. Start shipping.",
  },
  {
    icon: LuZap,
    title: "Better Requirements",
    text: "The gaps you skip at the start become the problems you debug at the end. AuraText surfaces missing requirements before AI generates anything.",
  },
  {
    icon: LuTrendingUp,
    title: "Outputs You Actually Want",
    text: "Not good enough. Not almost right. Precise and aligned with the real goal, because AuraText found the gaps before the AI filled them.",
  },
];

export default Features;
