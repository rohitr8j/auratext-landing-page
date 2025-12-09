"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import {
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

// Feature Flag: Check if payments are enabled
// In .env.local: NEXT_PUBLIC_ENABLE_PAYMENTS="true"
const ARE_PAYMENTS_ENABLED = process.env.NEXT_PUBLIC_ENABLE_PAYMENTS === 'true';

// Payment Links for Support Model
const PAYMENT_LINKS: Record<string, string> = {
  Supporter: process.env.NEXT_PUBLIC_SUPPORTER_PAYMENT_LINK || "https://checkout.dodopayments.com/buy/pdt_If7ZR9bfb7dolhcxA3iMb?quantity=1",
  Tip: process.env.NEXT_PUBLIC_TIP_PAYMENT_LINK || "https://checkout.dodopayments.com/buy/pdt_If7ZR9bfb7dolhcxA3iMb?quantity=1",
};

const Pricing = () => {
  const toast = useToast();

  const handleCheckout = (planName: string) => {
    if (!ARE_PAYMENTS_ENABLED) {
      toast({
        title: "Coming Soon!",
        description: "Payment integration is being set up. Check back soon!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const link = PAYMENT_LINKS[planName];
    if (link) {
      window.open(link, "_blank");
    } else {
      toast({
        title: "Error",
        description: "Payment link not found. Please contact support.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const plans = [
    {
      name: "Free Beta",
      price: "$0",
      period: "during beta",
      features: [
        "Full prompt optimizer with 5+ frameworks",
        "Multi-AI provider support (Gemini, OpenAI, Perplexity)",
        "Smart cursor lock & overlay mode",
        "50+ prompt templates",
        "Community support via Discord",
        "Early access to all features",
      ],
      isFree: true,
    },
    {
      name: "Supporter",
      price: "$9",
      period: "per month",
      features: [
        "Everything in Free, plus:",
        "Early access to new frameworks (15+ total)",
        "Priority bug fixes & feature requests",
        "200+ premium prompt templates",
        "Direct support from developer",
        "Behind-the-scenes updates",
      ],
      isSupporter: true,
    },
    {
      name: "One-Time Tip",
      price: "Pay What You Want",
      period: "one-time",
      features: [
        "☕ $9 - Buy me a coffee",
        "🍜 $19 - Support development",
        "🚀 $49 - Fund a month of hosting",
        "💙 Custom amount - You decide",
        "Support a student developer",
        "Help build AuraText full-time",
      ],
      isTip: true,
    },
  ];

  return (
    <Flex
      id="pricing"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      pt={6}
      pb={{
        base: 6,
        md: 12,
      }}
      px={{
        base: 6,
        md: 10,
      }}
      maxW={1200}
      mx={{
        base: 2,
        xl: "auto",
      }}
      border={`1px solid ${AuraTextColors.lightBg}`}
      borderRadius={24}
    >
      <Heading textAlign={"center"} px={2} color={AuraTextColors.text}>
        Support AuraText
      </Heading>
      <Text mt={4} color={AuraTextColors.grey} fontSize="lg" textAlign="center" maxW={600}>
        Free during beta. Support early development and get lifetime benefits.
      </Text>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={6}
        w={"100%"}
        mt={12}
      >
        <AnimatePresence mode="wait">
          {plans.map((plan) => (
            <Flex
              as={motion.div}
              key={plan.name}
              p={4}
              direction={"column"}
              w={"100%"}
              border={`1px solid ${AuraTextColors.lightBg}`}
              borderRadius={18}
              bg={AuraTextColors.darkBg}
              layout
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.2 }}
              transition={"all 0.25s ease"}
            >
              <Text
                as="h3"
                fontSize="sm"
                textAlign="center"
                mb={4}
                color={AuraTextColors.grey}
              >
                {plan.name}
              </Text>
              <Stack mb={4}>
                <Heading
                  fontSize={{
                    base: "3xl",
                    md: "4xl",
                  }}
                  textAlign="center"
                  fontWeight={600}
                  color={AuraTextColors.text}
                >
                  {plan.price}
                </Heading>
                <Text
                  textAlign="center"
                  fontSize="sm"
                  color={AuraTextColors.grey}
                >
                  {plan.period}
                </Text>
              </Stack>
              <Stack spacing={3} mb={6}>
                {plan.features.map((feature) => (
                  <Flex
                    align={"flex-start"}
                    key={feature}
                  >
                    <Flex
                      bg={`${AuraTextColors.primary}25`}
                      mr={2}
                      borderRadius={"full"}
                      p={1}
                    >
                      <Icon as={LuCheck} color={AuraTextColors.primary} />
                    </Flex>
                    <Text key={feature} color={AuraTextColors.text}>{feature}</Text>
                  </Flex>
                ))}
              </Stack>
              <Button
                mt={"auto"}
                w="full"
                onClick={() => {
                  if (plan.isFree) {
                    // Free tier - redirect to download
                    window.location.href = "#download";
                  } else if (plan.isSupporter) {
                    // Supporter tier - handle payment
                    handleCheckout("Supporter");
                  } else if (plan.isTip) {
                    // Tip tier - handle payment
                    handleCheckout("Tip");
                  }
                }}
                bg={plan.isSupporter ? AuraTextColors.primary : "transparent"}
                color={plan.isSupporter ? AuraTextColors.white : AuraTextColors.primary}
                border={!plan.isSupporter ? `1px solid ${AuraTextColors.primary}` : "none"}
                _hover={{
                  bg: plan.isSupporter ? AuraTextColors.secondary : `${AuraTextColors.primary}20`,
                  opacity: plan.isSupporter ? 1 : 0.8,
                }}
              >
                {plan.isFree
                  ? "Download Free"
                  : plan.isSupporter
                    ? (ARE_PAYMENTS_ENABLED ? "Become a Supporter" : "Coming Soon")
                    : (ARE_PAYMENTS_ENABLED ? "Send a Tip" : "Coming Soon")
                }
              </Button>
            </Flex>
          ))}
        </AnimatePresence>
      </Stack>
    </Flex>
  );
};

export default Pricing;
