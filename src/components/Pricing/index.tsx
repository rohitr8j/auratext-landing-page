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

// Dodo Payment Links (One-Time / Lifetime Deals)
const DODO_LINKS: Record<string, string> = {
  Basic: process.env.NEXT_PUBLIC_DODO_PAYMENT_LINK_BASIC || "https://checkout.dodopayments.com/buy/pdt_If7ZR9bfb7dolhcxA3iMb?quantity=1",
  Pro: process.env.NEXT_PUBLIC_DODO_PAYMENT_LINK_PRO || "",
  Enterprise: process.env.NEXT_PUBLIC_DODO_PAYMENT_LINK_ENTERPRISE || "",
};

const Pricing = () => {
  const toast = useToast();

  const handleCheckout = (planName: string) => {
    if (!ARE_PAYMENTS_ENABLED) {
      toast({
        title: "Coming Soon!",
        description: "We are currently in private beta. Join the waitlist!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const link = DODO_LINKS[planName];
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
      name: "Basic",
      price: "$19",
      period: "one-time",
      features: [
        "Prompt Optimizer with 5+ frameworks",
        "Basic prompt quality analysis",
        "Single AI provider testing",
        "50 ready-to-use prompt templates",
        "Smart cursor lock & overlay mode",
        "Standard support",
      ],
    },
    {
      name: "Pro",
      price: "$49",
      period: "one-time",
      features: [
        "Advanced Prompt Optimizer with 15+ frameworks",
        "Real-time prompt quality scoring",
        "Multi-model testing (compare 3+ AI providers)",
        "200+ prompt templates library",
        "Custom framework creation",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "one-time",
      features: [
        "Full Prompt Optimizer suite (25+ frameworks)",
        "Advanced analytics & performance tracking",
        "Unlimited multi-model testing",
        "Exclusive prompt library (500+ templates)",
        "Team collaboration & prompt sharing",
        "24/7 premium support",
      ],
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
        Pricing
      </Heading>
      <Text mt={4} color={AuraTextColors.grey} fontSize="lg">
        Simple, transparent lifetime pricing. Pay once, use forever.
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
                  if (plan.name === "Basic") {
                    handleCheckout(plan.name);
                  } else {
                    toast({
                      title: "Coming Soon!",
                      description: `${plan.name} plan is currently in private beta.`,
                      status: "info",
                      duration: 3000,
                      isClosable: true,
                    });
                  }
                }}
                {...(plan.name === "Enterprise"
                  ? {
                    bg: AuraTextColors.primary,
                    color: AuraTextColors.white,
                    _hover: {
                      bg: AuraTextColors.primary,
                      color: AuraTextColors.white,
                      opacity: 0.8,
                    },
                  }
                  : {})}
              >
                {ARE_PAYMENTS_ENABLED && plan.name === "Basic" ? `Get ${plan.name}` : "Join Waitlist"}
              </Button>
            </Flex>
          ))}
        </AnimatePresence>
      </Stack>
    </Flex>
  );
};

export default Pricing;
