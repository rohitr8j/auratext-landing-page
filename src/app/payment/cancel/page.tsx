"use client";
import { Flex, Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { AuraTextColors } from "#/src/utils/Colors";
import { LuXCircle, LuArrowLeft } from "react-icons/lu";
import Link from "next/link";

export default function PaymentCancel() {
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
            as={LuXCircle}
            size={64}
            color={AuraTextColors.grey}
          />
          <VStack spacing={2} align="center">
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              color={AuraTextColors.text}
              textAlign="center"
            >
              Payment Cancelled
            </Heading>
            <Text
              color={AuraTextColors.textLight}
              textAlign="center"
              fontSize="lg"
            >
              Your payment was cancelled. No charges were made.
            </Text>
          </VStack>

          <VStack spacing={4} w="100%" mt={4}>
            <Button
              as={Link}
              href="/#pricing"
              w="full"
              bg={AuraTextColors.primary}
              color={AuraTextColors.white}
              _hover={{
                bg: AuraTextColors.primary,
                opacity: 0.8,
              }}
              leftIcon={<LuArrowLeft />}
            >
              Back to Pricing
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

