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
import { auth } from "#/src/utils/firebase";

// Feature Flag: Check if payments are enabled
// In .env.local: NEXT_PUBLIC_ENABLE_PAYMENTS="true"
const ARE_PAYMENTS_ENABLED = true;

// Payment Links for Support Model
const PAYMENT_LINKS: Record<string, string> = {
  OneTime: process.env.NEXT_PUBLIC_ONETIME_PAYMENT_LINK || "https://checkout.dodopayments.com/buy/pdt_If7ZR9bfb7dolhcxA3iMb?quantity=1",
};

const Pricing = () => {
  const toast = useToast();

  const handleCheckout = (planName: string) => {
    if (!auth.currentUser) {
      toast({
        title: "Account required",
        description: "Please create a free account or log in to support AuraText.",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
      window.dispatchEvent(new CustomEvent("open-auth-modal", { detail: { mode: "signup" } }));
      return;
    }

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
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Full guided prompt builder",
        "Works with ChatGPT, Claude, Gemini & Perplexity",
        "Works in any Windows app — no Alt-Tab",
        "Bring your own API keys",
        "Early access to all new features",
      ],
      isFree: true,
    },
    {
      name: "One-Time Support",
      price: "$49",
      period: "one-time",
      features: [
        "Everything in Free, forever",
        "Support indie development",
        "No recurring charges",
        "Lifetime updates",
        "Early access to new features",
        "Priority bug fixes",
      ],
      isOneTime: true,
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
        Start Free. Support If It Helps.
      </Heading>
      <Text mt={4} color={AuraTextColors.grey} fontSize="lg" textAlign="center" maxW={600}>
        AuraText is completely free to download. Pay only if AuraText genuinely helps you think better.
      </Text>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={6}
        w={"100%"}
        mt={12}
        justify="center"
        align="stretch"
      >
        <AnimatePresence mode="wait">
          {plans.map((plan) => (
            <Flex
              as={motion.div}
              key={plan.name}
              p={6}
              direction={"column"}
              w={"100%"}
              maxW="400px"
              border={`1px solid ${plan.isOneTime ? AuraTextColors.primary + "60" : AuraTextColors.lightBg}`}
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
                    window.location.href = "#download";
                  } else if (plan.isOneTime) {
                    handleCheckout("OneTime");
                  }
                }}
                bg={plan.isOneTime ? AuraTextColors.primary : "transparent"}
                color={plan.isOneTime ? AuraTextColors.white : AuraTextColors.primary}
                border={!plan.isOneTime ? `1px solid ${AuraTextColors.primary}` : "none"}
                _hover={{
                  bg: plan.isOneTime ? AuraTextColors.secondary : `${AuraTextColors.primary}20`,
                  opacity: plan.isOneTime ? 1 : 0.8,
                }}
              >
                {plan.isFree
                  ? "Download Free"
                  : (ARE_PAYMENTS_ENABLED ? "One-Time Purchase" : "Coming Soon")
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
