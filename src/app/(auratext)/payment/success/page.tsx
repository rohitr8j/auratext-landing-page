"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { AuraTextColors } from "#/src/utils/Colors";
import { LuCheckCircle, LuArrowRight } from "react-icons/lu";
import Link from "next/link";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const toast = useToast();
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const provider = searchParams.get("provider") || "razorpay";
  const orderId = searchParams.get("order_id");
  const paymentId = searchParams.get("payment_id");
  const token = searchParams.get("token");
  const payerId = searchParams.get("PayerID");

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        if (provider === "paypal") {
          // Handle PayPal callback
          // PayPal returns token (which is the order ID) and PayerID
          if (token && payerId) {
            // Token is actually the order ID in PayPal
            const orderIdToUse = token;
            
            // Capture PayPal payment
            const captureResponse = await fetch("/api/paypal-capture", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ orderId: orderIdToUse }),
            });

            const captureData = await captureResponse.json();

            if (captureData.verified) {
              // Fetch order details
              const orderResponse = await fetch(`/api/paypal-checkout?order_id=${captureData.orderId}`);
              const orderData = await orderResponse.json();

              if (orderData.order) {
                const purchaseUnit = orderData.order.purchase_units?.[0];
                setSessionData({
                  id: orderData.order.id,
                  metadata: { 
                    planName: purchaseUnit?.custom_id?.split('_')[0] || "Unknown", 
                    billing: purchaseUnit?.custom_id?.split('_')[1] || "Unknown" 
                  },
                  amount_total: parseFloat(purchaseUnit?.amount?.value || "0") * 100,
                  payment_id: captureData.paymentId,
                  currency: captureData.currency || "USD",
                });
              }
            } else {
              throw new Error("Payment verification failed");
            }
          } else if (orderId && paymentId) {
            // Alternative: if we have orderId and paymentId directly (already captured)
            const orderResponse = await fetch(`/api/paypal-checkout?order_id=${orderId}`);
            const orderData = await orderResponse.json();

            if (orderData.order) {
              const purchaseUnit = orderData.order.purchase_units?.[0];
              setSessionData({
                id: orderData.order.id,
                metadata: { 
                  planName: purchaseUnit?.custom_id?.split('_')[0] || "Unknown", 
                  billing: purchaseUnit?.custom_id?.split('_')[1] || "Unknown" 
                },
                amount_total: parseFloat(purchaseUnit?.amount?.value || "0") * 100,
                payment_id: paymentId,
                currency: "USD",
              });
            }
          } else {
            toast({
              title: "Invalid Payment",
              description: "No payment information found. Redirecting...",
              status: "error",
              duration: 3000,
            });
            setTimeout(() => router.push("/"), 3000);
            return;
          }
        } else {
          // Handle Razorpay
          if (!orderId || !paymentId) {
            throw new Error("Missing payment information");
          }

          const response = await fetch(`/api/razorpay-checkout?order_id=${orderId}`);
          
          if (!response.ok) {
            if (response.status === 503) {
              setSessionData({ 
                id: orderId,
                metadata: { planName: "Unknown", billing: "Unknown" },
                amount_total: 0
              });
              setLoading(false);
              return;
            }
            throw new Error("Failed to fetch order details");
          }
          
          const data = await response.json();

          if (data.order) {
            setSessionData({
              id: data.order.id,
              metadata: data.order.notes || { planName: "Unknown", billing: "Unknown" },
              amount_total: data.order.amount,
              payment_id: paymentId,
              currency: "INR",
            });
          } else {
            throw new Error("Failed to fetch order details");
          }
        }
      } catch (error) {
        console.error("Order fetch error:", error);
        toast({
          title: "Payment Verification Failed",
          description: "Could not verify payment. Please contact support if payment was deducted.",
          status: "error",
          duration: 5000,
        });
        setSessionData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [provider, orderId, paymentId, token, payerId, router, toast]);

  if (loading) {
    return (
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg={AuraTextColors.darkBg}
        direction="column"
        gap={4}
      >
        <Spinner size="xl" color={AuraTextColors.primary} />
        <Text color={AuraTextColors.textLight}>Verifying your payment...</Text>
      </Flex>
    );
  }

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={AuraTextColors.darkBg}
      px={4}
    >
      <Box
        maxW="600px"
        w="100%"
        p={8}
        border={`1px solid ${AuraTextColors.lightBg}`}
        borderRadius={24}
        bg={AuraTextColors.black}
      >
        <VStack spacing={6} align="center">
          <Box
            as={LuCheckCircle}
            size={64}
            color={AuraTextColors.primary}
          />
          <VStack spacing={2} align="center">
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              color={AuraTextColors.text}
              textAlign="center"
            >
              Payment Successful!
            </Heading>
            <Text
              color={AuraTextColors.textLight}
              textAlign="center"
              fontSize="lg"
            >
              Thank you for your purchase. Your subscription is now active.
            </Text>
          </VStack>

          {sessionData && (
            <VStack
              spacing={2}
              align="stretch"
              w="100%"
              p={4}
              bg={AuraTextColors.lightBg}
              borderRadius={12}
            >
              <Text color={AuraTextColors.textLight} fontSize="sm">
                Plan: {sessionData.metadata?.planName || "N/A"}
              </Text>
              <Text color={AuraTextColors.textLight} fontSize="sm">
                Billing: {sessionData.metadata?.billing || "N/A"}
              </Text>
              {sessionData.amount_total && (
                <Text color={AuraTextColors.textLight} fontSize="sm">
                  Amount: {sessionData.currency === "USD" ? "$" : "₹"}{(sessionData.amount_total / 100).toFixed(2)}
                </Text>
              )}
              {sessionData.payment_id && (
                <Text color={AuraTextColors.textLight} fontSize="xs">
                  Payment ID: {sessionData.payment_id.substring(0, 20)}...
                </Text>
              )}
            </VStack>
          )}

          <VStack spacing={4} w="100%" mt={4}>
            <Button
              as={Link}
              href="/#download"
              w="full"
              bg={AuraTextColors.primary}
              color={AuraTextColors.white}
              _hover={{
                bg: AuraTextColors.primary,
                opacity: 0.8,
              }}
              rightIcon={<LuArrowRight />}
            >
              Download AuraText
            </Button>
            <Button
              as={Link}
              href="/"
              w="full"
              variant="outline"
              borderColor={AuraTextColors.lightBg}
              color={AuraTextColors.text}
              _hover={{
                bg: AuraTextColors.lightBg,
              }}
            >
              Return to Home
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
}

