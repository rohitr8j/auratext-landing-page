"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Button, Flex, Heading, Text, HStack, VStack, Link, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import FooterTopSVG from "./FooterTopSVG";
import FooterBg from "./FooterBg";
import { LuArrowRight, LuInstagram, LuMail, LuTwitter, LuCopy, LuCheck } from "react-icons/lu";
import { motion } from "framer-motion";

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
      <Flex mt={16} direction={"column"} align={"center"} px={2}>
        <Flex bg={"#ffffff50"} pr={4} rounded={"full"} mb={5}>
          <Text color={AuraTextColors.white} fontSize={"xs"}>
            <Text
              as="span"
              fontWeight={600}
              bg={"#ffffff50"}
              px={2}
              rounded={"full"}
              mr={1}
            >
              AuraText
            </Text>{" "}
            The AI text assistant for Windows
          </Text>
        </Flex>
        <Heading
          fontSize={{
            base: 72,
            md: 96,
          }}
          textAlign={"center"}
          color="transparent"
          maxW={500}
          fontWeight={800}
          style={{
            backgroundImage: "linear-gradient(315deg, #ffffff 60%, #000000)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Download AuraText
        </Heading>

        <Button
          rightIcon={<LuArrowRight />}
          as={motion.a}
          href={"#download"}
          whileHover={{ scale: 1.1 }}
          size={"lg"}
          mt={5}
          gap={2}
          cursor={"pointer"}
        >
          Download Now
        </Button>
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
            as={Link}
            href="https://www.instagram.com/auratext.app/"
            target="_blank"
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
          >
            Instagram
          </Button>
          
          <Button
            as={Link}
            href="https://x.com/auratext"
            target="_blank"
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
          >
            X (Twitter)
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

      <Flex mt={32}>
        <Text color={AuraTextColors.white}>
          © 2025 AuraText. All rights reserved.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
