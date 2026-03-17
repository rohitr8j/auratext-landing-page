"use client";
import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { AuraTextColors } from "#/src/utils/Colors";
import { LuPlay, LuDownload } from "react-icons/lu";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Header() {
  const videoUrl = "https://youtu.be/Fh1bW8Kcnlc";

  return (
    <Box
      position="relative"
      overflow="hidden"
      bg={{
        base: `
          radial-gradient(circle at 100% 140%, ${AuraTextColors.primary},${AuraTextColors.secondary}75, transparent, transparent, transparent), 
          radial-gradient(circle at 50% 160%, ${AuraTextColors.primary},${AuraTextColors.secondary}75, transparent, transparent, transparent),
          radial-gradient(circle at 0% 140%, ${AuraTextColors.primary},${AuraTextColors.secondary}75, transparent, transparent, transparent),
          black
        `,
        md: `
          radial-gradient(circle at 100% 150%, ${AuraTextColors.primary},${AuraTextColors.secondary}75, transparent, transparent, transparent), 
          radial-gradient(circle at 15% 175%, ${AuraTextColors.primary},${AuraTextColors.secondary}75, transparent, transparent, transparent),
          black
        `,
      }}
    >

      {/* Content */}
      <Flex
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
        direction="column"
        align="center"
        textAlign="center"
        maxW="896px"         /* ~Tailwind max-w-4xl */
        mx="auto"
        px={6}
        pt={{ base: 28, md: 36 }}   /* breathing room below navbar */
        pb={{ base: 20, md: 24 }}
        position="relative"
        zIndex={1}
      >
        {/* ── Badge ── */}
        <Box
          as={motion.div}
          variants={item}
          display="inline-block"
          border="1px solid rgba(255,255,255,0.12)"
          borderRadius="full"
          px={4}
          py={1}
          mb={6}
        >
          <Text
            color="gray.400"
            fontSize="sm"
            fontFamily="'Inter', 'Helvetica Neue', sans-serif"
            fontWeight={400}
            letterSpacing="0.02em"
          >
            Thinking Layer for AI
          </Text>
        </Box>

        {/* ── Headline ── */}
        <Heading
          as={motion.h1}
          variants={item}
          fontFamily="'Inter', 'Helvetica Neue', sans-serif"
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
          fontWeight={600}
          letterSpacing="-0.035em"
          lineHeight={1.08}
          color="white"
          mb={6}
          maxW="720px"
        >
          Your AI Outputs
          <br />
          Depend on Your Thinking
        </Heading>

        {/* ── Subheadline ── */}
        <Text
          as={motion.p}
          variants={item}
          fontFamily="'Inter', 'Helvetica Neue', sans-serif"
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.400"
          maxW="560px"
          lineHeight={1.65}
          mb={5}
        >
          AuraText helps you think before AI responds — so you get better results on the first try.
        </Text>

        {/* ── Hook line ── */}
        <Text
          as={motion.p}
          variants={item}
          fontFamily="'Inter', 'Helvetica Neue', sans-serif"
          fontSize={{ base: "sm", md: "md" }}
          color="gray.500"
          lineHeight={1.6}
          mb={10}
        >
          Most people use AI to avoid thinking.
          <br />
          AuraText makes sure you don&apos;t.
        </Text>

        {/* ── CTAs ── */}
        <Flex
          as={motion.div}
          variants={item}
          gap={4}
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="center"
        >
          {/* Primary */}
          <Button
            as="a"
            href="#download"
            leftIcon={<LuDownload />}
            fontFamily="'Inter', 'Helvetica Neue', sans-serif"
            fontWeight={500}
            fontSize="md"
            bg={AuraTextColors.primary}
            color="black"
            px={7}
            py={6}
            borderRadius="10px"
            _hover={{
              bg: AuraTextColors.secondary,
              transform: "translateY(-1px)",
              boxShadow: `0 8px 32px ${AuraTextColors.primary}55`,
            }}
            transition="all 0.2s ease"
            boxShadow={`0 4px 20px ${AuraTextColors.primary}40`}
          >
            Download AuraText
          </Button>

          {/* Secondary */}
          <Button
            as="a"
            href={videoUrl}
            target="_blank"
            leftIcon={<LuPlay />}
            fontFamily="'Inter', 'Helvetica Neue', sans-serif"
            fontWeight={400}
            fontSize="md"
            variant="outline"
            borderColor="rgba(255,255,255,0.2)"
            color="white"
            px={7}
            py={6}
            borderRadius="10px"
            _hover={{
              bg: "rgba(255,255,255,0.06)",
              borderColor: "rgba(255,255,255,0.35)",
            }}
            transition="all 0.2s ease"
          >
            Watch Demo
          </Button>
        </Flex>
      </Flex>

      <HeroBottomSVG />
    </Box>
  );
}
