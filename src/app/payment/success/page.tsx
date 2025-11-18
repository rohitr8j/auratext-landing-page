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
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      toast({
        title: "Invalid Session",
        description: "No session ID found. Redirecting...",
        status: "error",
        duration: 3000,
      });
      setTimeout(() => router.push("/"), 3000);
      return;
    }

    // Verify the session
    const verifySession = async () => {
      try {
        const response = await fetch(`/api/checkout-session?session_id=${sessionId}`);
        const data = await response.json();

        if (response.ok && data.session) {
          setSessionData(data.session);
        } else {
          throw new Error("Failed to verify session");
        }
      } catch (error) {
        console.error("Session verification error:", error);
        toast({
          title: "Verification Failed",
          description: "Could not verify payment session.",
          status: "error",
          duration: 5000,
        });
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, [sessionId, router, toast]);

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
                  Amount: ${(sessionData.amount_total / 100).toFixed(2)}
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

