"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="pricing"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      py={16}
      px={{
        base: 6,
        md: 10,
      }}
      maxW={800}
      mx={"auto"}
      border={`1px solid ${AuraTextColors.lightBg}`}
      borderRadius={24}
      bg={`linear-gradient(135deg, ${AuraTextColors.primary}08, ${AuraTextColors.secondary}08)`}
      textAlign="center"
    >
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        fontFamily="'Space Mono', monospace"
        fontWeight={600}
        color={AuraTextColors.text}
        mb={4}
        lineHeight={1.2}
      >
        Start using AuraText today.
      </Heading>

      <Text
        fontSize={{ base: "md", md: "lg" }}
        color={AuraTextColors.textLight}
        fontFamily="'Space Mono', monospace"
        fontWeight={400}
        mb={2}
        maxW={500}
        lineHeight={1.7}
      >
        Free to download. No credit card. No catch.
      </Text>

      <Text
        fontSize={{ base: "sm", md: "md" }}
        color={AuraTextColors.primary}
        fontFamily="'Space Mono', monospace"
        fontWeight={500}
        mb={10}
        opacity={0.9}
      >
        Paid features coming soon.
      </Text>

      <Box
        as={motion.div}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 } as any}
      >
        <Button
          as="a"
          href="#download"
          size="lg"
          bg={AuraTextColors.primary}
          color={AuraTextColors.white}
          _hover={{
            bg: AuraTextColors.secondary,
            transform: "translateY(-2px)",
            boxShadow: `0 0 30px ${AuraTextColors.primary}60`,
          }}
          fontFamily="'Space Mono', monospace"
          fontWeight={600}
          px={10}
          py={6}
          borderRadius="12px"
          transition="all 0.3s ease"
          boxShadow={`0 0 20px ${AuraTextColors.primary}40`}
        >
          Download Free
        </Button>
      </Box>
    </Flex>
  );
};

export default Pricing;
