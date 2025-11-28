"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Button, Flex, Heading, Text, HStack, VStack, Link, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import FooterTopSVG from "./FooterTopSVG";
import FooterBg from "./FooterBg";
import { LuArrowRight, LuInstagram, LuMail, LuTwitter, LuCopy, LuCheck } from "react-icons/lu";
import { FaLinkedin, FaReddit, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

import AiHero from "../AiHero";

const Footer = () => {
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
      py={32}
      position={"relative"}
      justify={"center"}
      align={"center"}
      direction={"column"}
      id="footer"
    >
      <FooterTopSVG />
      <FooterBg />
      <Flex mt={16} direction={"column"} align={"center"} px={2} w="full">
        <AiHero />
      </Flex>

      {/* Social Media Links */}
      <VStack spacing={6} mt={16} align="center">
        <Text
          color={AuraTextColors.white}
          fontSize="lg"
          fontFamily="'Space Mono', monospace"
          fontWeight={400}
          textAlign="center"
        >
          Follow us for updates and support
        </Text>

        <HStack spacing={{ base: 3, md: 6 }} wrap="wrap" justify="center">
          <Button
            as="a"
            href="https://discord.gg/EcusQjcWDJ"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaDiscord />}
            variant="outline"
            borderColor={AuraTextColors.white}
            color={AuraTextColors.white}
            _hover={{
              bg: "rgba(255, 255, 255, 0.1)",
              color: AuraTextColors.white,
              borderColor: AuraTextColors.white
            }}
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            borderRadius="8px"
            px={{ base: 4, md: 6 }}
            py={3}
            size={{ base: "sm", md: "md" }}
            cursor="pointer"
          >
            Discord
          </Button>

          <Button
            as="a"
            href="https://www.instagram.com/auratext.app/"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<LuInstagram />}
            variant="outline"
            borderColor={AuraTextColors.white}
            color={AuraTextColors.white}
            _hover={{
              bg: "rgba(255, 255, 255, 0.1)",
              color: AuraTextColors.white,
              borderColor: AuraTextColors.white
            }}
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            borderRadius="8px"
            px={{ base: 4, md: 6 }}
            py={3}
            size={{ base: "sm", md: "md" }}
            cursor="pointer"
          >
            Instagram
          </Button>

          <Button
            as="a"
            href="https://x.com/auratext"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<LuTwitter />}
            variant="outline"
            borderColor={AuraTextColors.white}
            color={AuraTextColors.white}
            _hover={{
              bg: "rgba(255, 255, 255, 0.1)",
              color: AuraTextColors.white,
              borderColor: AuraTextColors.white
            }}
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            borderRadius="8px"
            px={{ base: 4, md: 6 }}
            py={3}
            size={{ base: "sm", md: "md" }}
            cursor="pointer"
          >
            X (Twitter)
          </Button>

          <Button
            as="a"
            href="https://www.linkedin.com/company/auratext"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaLinkedin />}
            variant="outline"
            borderColor={AuraTextColors.white}
            color={AuraTextColors.white}
            _hover={{
              bg: "rgba(255, 255, 255, 0.1)",
              color: AuraTextColors.white,
              borderColor: AuraTextColors.white
            }}
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            borderRadius="8px"
            px={{ base: 4, md: 6 }}
            py={3}
            size={{ base: "sm", md: "md" }}
            cursor="pointer"
          >
            LinkedIn
          </Button>

          <Button
            as="a"
            href="https://www.reddit.com/r/AuraText/"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaReddit />}
            variant="outline"
            borderColor={AuraTextColors.white}
            color={AuraTextColors.white}
            _hover={{
              bg: "rgba(255, 255, 255, 0.1)",
              color: AuraTextColors.white,
              borderColor: AuraTextColors.white
            }}
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            borderRadius="8px"
            px={{ base: 4, md: 6 }}
            py={3}
            size={{ base: "sm", md: "md" }}
            cursor="pointer"
          >
            Reddit
          </Button>

          <Button
            onClick={copyEmailToClipboard}
            leftIcon={emailCopied ? <LuCheck /> : <LuMail />}
            variant="outline"
            borderColor={AuraTextColors.white}
            color={AuraTextColors.white}
            _hover={{
              bg: "rgba(255, 255, 255, 0.1)",
              color: AuraTextColors.white,
              borderColor: AuraTextColors.white
            }}
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            borderRadius="8px"
            px={{ base: 4, md: 6 }}
            py={3}
            size={{ base: "sm", md: "md" }}
            cursor="pointer"
            transition="all 0.2s"
          >
            {emailCopied ? "Copied!" : emailAddress}
          </Button>
        </HStack>
      </VStack>

      <VStack mt={32} spacing={4}>
        <HStack spacing={8} color={AuraTextColors.textLight} fontSize="sm">
          <Link href="/privacy" _hover={{ color: AuraTextColors.primary }}>Privacy Policy</Link>
          <Link href="/terms" _hover={{ color: AuraTextColors.primary }}>Terms of Service</Link>
          <Link href="/eula" _hover={{ color: AuraTextColors.primary }}>EULA</Link>
        </HStack>
        <Text color={AuraTextColors.textLight} fontSize="sm">
          © {new Date().getFullYear()} AuraText. All rights reserved.
        </Text>
      </VStack>
    </Flex>
  );
};

export default Footer;
