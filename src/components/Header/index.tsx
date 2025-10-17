"use client";
import { Button, Flex, Heading, Text, keyframes, useToast } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { AuraTextColors } from "#/src/utils/Colors";
import { LuDownload, LuPlay, LuInstagram, LuTwitter, LuMail, LuZap, LuCheck } from "react-icons/lu";
import Link from "next/link";

const Header = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const toast = useToast();
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
      bg="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
      position={"relative"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={8}
    >
      <Flex bg={AuraTextColors.lightBg} px={6} py={2} rounded={"full"} mb={8}>
        <Text color={AuraTextColors.textLight} fontSize={"sm"} fontFamily="'Space Mono', monospace" fontWeight={400}>
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
        fontSize="lg"
        fontFamily="'Space Mono', monospace"
        fontWeight={400}
        mb={12}
        lineHeight={1.6}
      >
        Generate, edit, and insert AI text seamlessly into any application with intelligent cursor locking. 
        Works with Windows 10/11.
      </Text>
      
      <Flex gap={4} direction={{ base: "column", md: "row" }} align="center">
        <Button
          leftIcon={<LuDownload />}
          as={motion.a}
          href={"#download"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          size={"lg"}
          bg={AuraTextColors.primary}
          color={AuraTextColors.white}
          _hover={{ bg: AuraTextColors.secondary }}
          fontFamily="'Space Mono', monospace"
          fontWeight={400}
          px={8}
          py={6}
          borderRadius="8px"
        >
          Download for Windows
        </Button>
        
        <Button
          leftIcon={<LuPlay />}
          as={motion.a}
          href={"#demo"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          size={"lg"}
          variant="outline"
          borderColor={AuraTextColors.primary}
          color={AuraTextColors.primary}
          _hover={{ bg: AuraTextColors.lightBg }}
          fontFamily="'Space Mono', monospace"
          fontWeight={400}
          px={8}
          py={6}
          borderRadius="8px"
        >
          Watch Demo
        </Button>
      </Flex>
      
      <Text
        mt={8}
        as={Link}
        href={"#features"}
        color={AuraTextColors.textLight}
        opacity={0.8}
        transition={"all .25s ease"}
        _hover={{ opacity: 1 }}
        fontFamily="'Space Mono', monospace"
        fontWeight={400}
        fontSize="sm"
      >
        Learn More ↓
      </Text>
      
      {/* Social Media Links */}
      <Flex gap={4} mt={8} align="center">
        <Text 
          fontSize="sm" 
          color={AuraTextColors.textLight}
          fontFamily="'Space Mono', monospace"
          fontWeight={400}
        >
          Follow us:
        </Text>
        <Flex gap={3}>
          <Button
            as={Link}
            href="https://www.instagram.com/auratext.app/"
            target="_blank"
            size="sm"
            variant="ghost"
            color={AuraTextColors.textLight}
            _hover={{ color: AuraTextColors.primary }}
            p={2}
            minW="auto"
          >
            <LuInstagram size={20} />
          </Button>
          <Button
            as={Link}
            href="https://x.com/auratext"
            target="_blank"
            size="sm"
            variant="ghost"
            color={AuraTextColors.textLight}
            _hover={{ color: AuraTextColors.primary }}
            p={2}
            minW="auto"
          >
            <LuTwitter size={20} />
          </Button>
          <Button
            onClick={copyEmailToClipboard}
            size="sm"
            variant="ghost"
            color={emailCopied ? AuraTextColors.primary : AuraTextColors.textLight}
            _hover={{ color: AuraTextColors.primary }}
            p={2}
            minW="auto"
            cursor="pointer"
            transition="all 0.2s"
            title={emailCopied ? "Copied!" : "Click to copy email"}
          >
            {emailCopied ? <LuCheck size={20} /> : <LuMail size={20} />}
          </Button>
        </Flex>
      </Flex>
      
      <HeroBottomSVG />
    </Flex>
  );
};

export default Header;
