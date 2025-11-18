"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import {
  Badge,
  Button,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

const Pricing = () => {
  const [currentBilling, setCurrentBilling] = useState("monthly");
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const toast = useToast();

  // Stripe Price IDs - Replace these with your actual Stripe Price IDs from your Stripe Dashboard
  // You can find/create these in: Stripe Dashboard > Products > [Your Product] > Pricing
  const getPriceId = (planName: string, billing: string): string | null => {
    // These are placeholder price IDs - you need to replace them with actual Stripe Price IDs
    const priceMap: Record<string, Record<string, string>> = {
      Basic: {
        monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC_MONTHLY || "",
        annual: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC_ANNUAL || "",
      },
      Pro: {
        monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO_MONTHLY || "",
        annual: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO_ANNUAL || "",
      },
      Enterprise: {
        monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE_MONTHLY || "",
        annual: process.env.NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE_ANNUAL || "",
      },
    };
    return priceMap[planName]?.[billing] || null;
  };

  const handleCheckout = async (planName: string) => {
    const priceId = getPriceId(planName, currentBilling);
    
    if (!priceId) {
      toast({
        title: "Configuration Error",
        description: "Payment is not configured. Please contact support.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoadingPlan(planName);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          planName,
          billing: currentBilling,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error: any) {
      console.error("Checkout error:", error);
      toast({
        title: "Checkout Failed",
        description: error.message || "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoadingPlan(null);
    }
  };

  const plans = [
    {
      name: "Basic",
      price: currentBilling === "monthly" ? "$9" : "$90",
      features: [
        "AI Generator: Optimize with advanced AI technology",
        "Dashboard: User-friendly performance monitoring",
        "Secure Payments: Safe, encrypted transactions",
        "Multilang: Basic multi-language support",
        "Ready-to-use templates: Limited access",
        "Support Centre: Standard support",
      ],
    },
    {
      name: "Pro",
      price: currentBilling === "monthly" ? "$19" : "$190",
      features: [
        "AI Generator: Enhanced AI capabilities",
        "Dashboard: Advanced analytics and insights",
        "Secure Payments: Premium transaction security",
        "Multilang: Extended language support",
        "Ready-to-use templates: Comprehensive template library",
        "Support Centre: Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: currentBilling === "monthly" ? "$99" : "$990",
      features: [
        "AI Generator: Customizable AI solutions",
        "Dashboard: Full-featured command center",
        "Secure Payments: Enterprise-level security",
        "Multilang: Full range of language support",
        "Ready-to-use templates: Exclusive, customizable templates",
        "Support Centre: 24/7 premium support",
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
      <Text
        textAlign={"center"}
        color={AuraTextColors.textLight}
        fontSize="sm"
        mt={2}
        mb={-2}
        fontStyle="italic"
      >
        Payment options will be available soon
      </Text>
      <Flex
        mt={6}
        gap={2}
        p={2}
        borderRadius={16}
        border={`1px solid ${AuraTextColors.lightBg}`}
      >
        <Flex
          key={"monthly"}
          cursor={"pointer"}
          onClick={() => setCurrentBilling("monthly")}
          px={4}
          py={2}
          borderRadius={12}
          transition={"all 0.25s ease"}
          {...(currentBilling === "monthly" && {
            bgColor: AuraTextColors.black,
          })}
        >
          <Text
            fontWeight={"bold"}
            fontSize={"sm"}
            color={
              currentBilling === "monthly"
                ? AuraTextColors.white
                : AuraTextColors.grey
            }
          >
            Monthly
          </Text>
        </Flex>
        <Flex
          key={"annual"}
          cursor={"pointer"}
          onClick={() => setCurrentBilling("annual")}
          gap={2}
          justify={"center"}
          align={"center"}
          px={4}
          py={2}
          borderRadius={12}
          transition={"all 0.25s ease"}
          {...(currentBilling === "annual" && {
            bgColor: AuraTextColors.black,
          })}
        >
          <Text
            fontWeight={"bold"}
            fontSize={"sm"}
            color={
              currentBilling === "annual"
                ? AuraTextColors.white
                : AuraTextColors.grey
            }
          >
            Annual
          </Text>
          <Badge
            borderRadius={"full"}
            px={2}
            bg={
              currentBilling === "annual"
                ? AuraTextColors.white
                : AuraTextColors.primary
            }
            color={
              currentBilling === "annual"
                ? AuraTextColors.black
                : AuraTextColors.white
            }
          >
            2 months free
          </Badge>
        </Flex>
      </Flex>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={6}
        w={"100%"}
        mt={6}
      >
        <AnimatePresence mode="wait">
          {plans.map((plan) => (
            <Flex
              as={motion.div}
              key={`${plan.name}-${currentBilling}`}
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
                  per {currentBilling === "monthly" ? "month" : "year"}
                </Text>
              </Stack>
              <Stack spacing={3} mb={6}>
                {plan.features.map((feature) => (
                  <Flex
                    align={"flex-start"}
                    key={`${feature}-${currentBilling}`}
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
                onClick={() => handleCheckout(plan.name)}
                isLoading={loadingPlan === plan.name}
                loadingText="Processing..."
                spinner={<Spinner size="sm" />}
                disabled={true}
                opacity={0.6}
                cursor="not-allowed"
                {...(plan.name === "Enterprise"
                  ? {
                      bg: AuraTextColors.primary,
                      color: AuraTextColors.white,
                      _hover: {
                        bg: AuraTextColors.primary,
                        color: AuraTextColors.white,
                        opacity: 0.6,
                      },
                    }
                  : {})}
              >
                Payment Coming Soon
              </Button>
            </Flex>
          ))}
        </AnimatePresence>
      </Stack>
    </Flex>
  );
};

export default Pricing;
