"use client";
import { Button, Flex, Heading, Text, keyframes, useToast, Box, Link as ChakraLink } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { AuraTextColors } from "#/src/utils/Colors";
import { LuDownload, LuPlay, LuInstagram, LuTwitter, LuMail, LuZap, LuCheck } from "react-icons/lu";
import { FaLinkedin, FaReddit, FaWindows } from "react-icons/fa";
import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import VideoModal from "../VideoModal";
import UserCounter from "../UserCounter";

const Header = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const emailAddress = "auratext.app@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      toast({
        title: "Email copied!",
        description: `${emailAddress} copied to clipboard`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the email manually: auratext.app@gmail.com",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      as={motion.div}
      initial="initial"
      animate="animate"
      minH="100svh"
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
      pt={{ base: 20, md: 24 }}
    >
      <Flex
        bg={AuraTextColors.lightBg}
        px={{ base: 4, sm: 6 }}
        py={2}
        rounded={"full"}
        mb={8}
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
          AI-Powered Text Assistant for Windows
        </Text>
      </Flex>

      <Flex align="center" justify="center" gap={6} mb={4}>
        <LuZap
          size={64}
          color={AuraTextColors.text}
          className="zap-icon"
        />
        <Heading
          fontSize={{
            base: 48,
            md: 64,
            lg: 84,
          }}
          color={AuraTextColors.text}
          lineHeight={1.1}
          textAlign={"center"}
          fontFamily="'Space Mono', monospace"
          fontWeight={400}
        >
          AuraText
        </Heading>
      </Flex>

      <Text
        color={AuraTextColors.textLight}
        maxW={600}
        textAlign={"center"}
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight={400}
        mb={12}
        lineHeight={1.6}
        fontFamily="'Space Mono', monospace"
      >
        Your AI writing copilot for Windows. <Box as="span" color={AuraTextColors.primary} fontWeight={600}>Generate, edit, and insert text</Box> seamlessly into any app with intelligent cursor locking.
      </Text>

      <Flex gap={4} direction={{ base: "column", md: "row" }} align="center">
        <Button
          leftIcon={<FaWindows size={20} />}
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
          Download for Windows
        </Button>

        <Button
          leftIcon={<LuPlay />}
          onClick={onOpen}
          as={motion.button}
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

      <Box mt={8}>
        <UserCounter />
      </Box>

      {/* Product Hunt Badge */}
      <Box mt={6}>
        <a
          href="https://www.producthunt.com/products/auratext?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-auratext"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1029350&theme=neutral&t=1761329769298"
            alt="AuraText - ✍️&#0032;Your&#0032;AI&#0032;writing&#0032;copilot&#0032;—&#0032;anywhere&#0032;you&#0032;type | Product Hunt"
            style={{ width: '250px', height: '54px' }}
            width="250"
            height="54"
          />
        </a>
      </Box>

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
      <VideoModal isOpen={isOpen} onClose={onClose} videoUrl="https://youtu.be/Fh1bW8Kcnlc" />
    </Flex >
  );
};

export default Header;
