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
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Pricing = () => {
  const [currentBilling, setCurrentBilling] = useState("monthly");
  const [paymentMethod, setPaymentMethod] = useState<"razorpay" | "paypal">("razorpay");
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const toast = useToast();

  // Load Razorpay script
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => setRazorpayLoaded(true);
      document.body.appendChild(script);
    } else if (window.Razorpay) {
      setRazorpayLoaded(true);
    }
  }, []);

  // Get price amount based on payment method
  const getPriceAmount = (planName: string, billing: string, method: "razorpay" | "paypal"): number => {
    if (method === "razorpay") {
      // INR prices
      const priceMap: Record<string, Record<string, number>> = {
        Basic: {
          monthly: 750, // ₹750/month
          annual: 7500, // ₹7,500/year
        },
        Pro: {
          monthly: 1600, // ₹1,600/month
          annual: 16000, // ₹16,000/year
        },
        Enterprise: {
          monthly: 8250, // ₹8,250/month
          annual: 82500, // ₹82,500/year
        },
      };
      return priceMap[planName]?.[billing] || 0;
    } else {
      // USD prices for PayPal
      const priceMap: Record<string, Record<string, number>> = {
        Basic: {
          monthly: 9, // $9/month
          annual: 90, // $90/year
        },
        Pro: {
          monthly: 19, // $19/month
          annual: 190, // $190/year
        },
        Enterprise: {
          monthly: 99, // $99/month
          annual: 990, // $990/year
        },
      };
      return priceMap[planName]?.[billing] || 0;
    }
  };

  const handleCheckout = async (planName: string) => {
    if (paymentMethod === "razorpay" && !razorpayLoaded) {
      toast({
        title: "Loading Payment",
        description: "Please wait while payment system loads...",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const amount = getPriceAmount(planName, currentBilling, paymentMethod);
    
    if (!amount) {
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
      if (paymentMethod === "razorpay") {
        // Razorpay checkout
        const response = await fetch("/api/razorpay-checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            planName,
            billing: currentBilling,
            currency: "INR",
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to create payment order");
        }

        // Open Razorpay checkout
        const options = {
          key: data.keyId,
          amount: data.amount,
          currency: data.currency,
          name: "AuraText",
          description: `${planName} Plan - ${currentBilling === "monthly" ? "Monthly" : "Annual"} Subscription`,
          order_id: data.orderId,
          handler: async function (response: any) {
            // Verify payment on server
            const verifyResponse = await fetch("/api/razorpay-verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.verified) {
              // Redirect to success page
              window.location.href = `/payment/success?provider=razorpay&order_id=${response.razorpay_order_id}&payment_id=${response.razorpay_payment_id}`;
            } else {
              toast({
                title: "Payment Verification Failed",
                description: "Please contact support if payment was deducted.",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
              setLoadingPlan(null);
            }
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          theme: {
            color: AuraTextColors.primary,
          },
          modal: {
            ondismiss: function() {
              setLoadingPlan(null);
            },
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        // PayPal checkout
        const response = await fetch("/api/paypal-checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            planName,
            billing: currentBilling,
            currency: "USD",
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to create payment order");
        }

        // Redirect to PayPal
        if (data.approvalUrl) {
          window.location.href = data.approvalUrl;
        } else {
          throw new Error("No approval URL received");
        }
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
      price: paymentMethod === "razorpay" 
        ? (currentBilling === "monthly" ? "₹750" : "₹7,500")
        : (currentBilling === "monthly" ? "$9" : "$90"),
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
      price: paymentMethod === "razorpay"
        ? (currentBilling === "monthly" ? "₹1,600" : "₹16,000")
        : (currentBilling === "monthly" ? "$19" : "$190"),
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
      price: paymentMethod === "razorpay"
        ? (currentBilling === "monthly" ? "₹8,250" : "₹82,500")
        : (currentBilling === "monthly" ? "$99" : "$990"),
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
      
      {/* Payment Method Selector */}
      <Flex
        mt={6}
        gap={2}
        p={2}
        borderRadius={16}
        border={`1px solid ${AuraTextColors.lightBg}`}
        justify="center"
        align="center"
        flexWrap="wrap"
      >
        <Text fontSize="sm" color={AuraTextColors.textLight} mr={2}>
          Payment:
        </Text>
        <Flex
          cursor={"pointer"}
          onClick={() => setPaymentMethod("razorpay")}
          px={4}
          py={2}
          borderRadius={12}
          transition={"all 0.25s ease"}
          {...(paymentMethod === "razorpay" && {
            bgColor: AuraTextColors.primary,
            color: AuraTextColors.white,
          })}
          {...(paymentMethod !== "razorpay" && {
            color: AuraTextColors.grey,
          })}
        >
          <Text fontWeight={"bold"} fontSize={"sm"}>
            Razorpay (₹)
          </Text>
        </Flex>
        <Flex
          cursor={"pointer"}
          onClick={() => setPaymentMethod("paypal")}
          px={4}
          py={2}
          borderRadius={12}
          transition={"all 0.25s ease"}
          {...(paymentMethod === "paypal" && {
            bgColor: AuraTextColors.primary,
            color: AuraTextColors.white,
          })}
          {...(paymentMethod !== "paypal" && {
            color: AuraTextColors.grey,
          })}
        >
          <Text fontWeight={"bold"} fontSize={"sm"}>
            PayPal ($)
          </Text>
        </Flex>
      </Flex>
      
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
                isLoading={loadingPlan === plan.name || !razorpayLoaded}
                loadingText={!razorpayLoaded ? "Loading..." : "Processing..."}
                spinner={<Spinner size="sm" />}
                disabled={loadingPlan !== null || !razorpayLoaded}
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
                {loadingPlan === plan.name ? "Processing..." : `Choose ${plan.name}`}
              </Button>
            </Flex>
          ))}
        </AnimatePresence>
      </Stack>
    </Flex>
  );
};

export default Pricing;
