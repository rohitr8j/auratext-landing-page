"use client";
import { Button, Flex, Heading, Text, useToast, Box, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { AuraTextColors } from "#/src/utils/Colors";
import { LuPlay } from "react-icons/lu";

const Header = () => {
  const videoUrl = "https://youtu.be/Fh1bW8Kcnlc";



  return (
    <Flex
      as={motion.div}
      initial="initial"
      animate="animate"
      minH="85svh"
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
      position={"relative"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={8}
      pt={{ base: 16, md: 20 }}
      pb={{ base: 10, md: 12 }}
    >
      <Flex
        bg={AuraTextColors.lightBg}
        px={{ base: 4, sm: 6 }}
        py={2}
        rounded={"full"}
        mb={5}
        maxW={{ base: "90%", sm: "auto" }}
        mx="auto"
      >
        <Text
          color={AuraTextColors.textLight}
          fontSize={{ base: "xs", sm: "sm" }}
          fontFamily="'Space Mono', monospace"
          fontWeight={400}
          textAlign="center"
          whiteSpace="nowrap"
        >
          Thinking Layer for AI
        </Text>
      </Flex>

      <Heading
        fontSize={{
          base: 28,
          md: 44,
          lg: 52,
        }}
        color={AuraTextColors.text}
        lineHeight={1.1}
        textAlign={"center"}
        fontFamily="'Space Mono', monospace"
        fontWeight={600}
        mb={4}
        px={4}
      >
        Stop Prompting Blindly.
        <br />
        Start Thinking First.
      </Heading>

      <Text
        color={AuraTextColors.textLight}
        maxW={560}
        textAlign={"center"}
        fontSize={{ base: "md", md: "lg" }}
        fontWeight={400}
        mb={8}
        lineHeight={1.6}
        fontFamily="'Space Mono', monospace"
        px={4}
      >
        AuraText sits between you and AI. It asks the right questions, structures your thinking, and helps you create prompts that actually work — so you get better outputs and stay sharp.
      </Text>

      <Flex gap={4} direction={{ base: "column", md: "row" }} align="center">
        <Button
          as={motion.a}
          href={"#download"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          size={"lg"}
          bg={AuraTextColors.primary}
          color={AuraTextColors.white}
          _hover={{
            bg: AuraTextColors.secondary,
            transform: "translateY(-2px)",
            boxShadow: `0 0 30px ${AuraTextColors.primary}60`
          }}
          fontWeight={600}
          px={8}
          py={6}
          borderRadius="12px"
          transition="all 0.3s ease"
          boxShadow={`0 0 20px ${AuraTextColors.primary}40`}
        >
          Download AuraText
        </Button>

        <Button
          leftIcon={<LuPlay />}
          as={motion.a}
          href={videoUrl}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          size={"lg"}
          variant="outline"
          borderColor={AuraTextColors.primary}
          color={AuraTextColors.primary}
          _hover={{ bg: "rgba(59, 130, 246, 0.1)" }}
          fontWeight={500}
          px={8}
          py={6}
          borderRadius="12px"
          backdropFilter="blur(10px)"
        >
          Watch Demo
        </Button>
      </Flex>





      <ChakraLink
        mt={8}
        href="#features"
        color={AuraTextColors.textLight}
        opacity={0.8}
        transition={"all .25s ease"}
        _hover={{ opacity: 1, textDecoration: "none" }}
        fontFamily="'Space Mono', monospace"
        fontWeight={400}
        fontSize="sm"
      >
        Learn More ↓
      </ChakraLink>



      <HeroBottomSVG />
    </Flex>
  );
};

export default Header;
