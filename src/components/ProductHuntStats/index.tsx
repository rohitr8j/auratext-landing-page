"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
  Link,
  Spinner,
  Alert,
  AlertIcon,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { LuHeart, LuMessageCircle, LuExternalLink, LuTrendingUp, LuUsers } from "react-icons/lu";
import { useProductHuntStats } from "#/src/hooks/useProductHunt";

const ProductHuntStats = () => {
  const { votes, comments, productName, tagline, website, thumbnail, loading, error } = useProductHuntStats();

  if (loading) {
    return (
      <Flex
        id="producthunt"
        direction={"column"}
        justify={"center"}
        align={"center"}
        py={24}
        px={{ base: 6, md: 10 }}
        maxW={1200}
        mx={{ base: 2, xl: "auto" }}
        bg="#000000"
      >
        <Flex justify="center" align="center" py={8}>
          <Spinner color={AuraTextColors.primary} size="lg" />
          <Text ml={4} color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace">
            Loading Product Hunt stats...
          </Text>
        </Flex>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex
        id="producthunt"
        direction={"column"}
        justify={"center"}
        align={"center"}
        py={24}
        px={{ base: 6, md: 10 }}
        maxW={1200}
        mx={{ base: 2, xl: "auto" }}
        bg="#000000"
      >
        <Alert status="warning" borderRadius="md" bg={AuraTextColors.lightBg} border={`1px solid ${AuraTextColors.lightGrey}`} maxW={600}>
          <AlertIcon color={AuraTextColors.primary} />
          <Text color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace" fontSize="sm">
            Unable to load Product Hunt stats. {error}
          </Text>
        </Alert>
      </Flex>
    );
  }

  return (
    <Flex
      id="producthunt"
      direction={"column"}
      justify={"center"}
      align={"center"}
      py={24}
      px={{ base: 6, md: 10 }}
      maxW={1200}
      mx={{ base: 2, xl: "auto" }}
      bg="#000000"
    >
      <VStack spacing={8} align="center" maxW={800}>
        <VStack spacing={4} align="center">
          <Heading 
            textAlign={"center"} 
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            color={AuraTextColors.text}
          >
            Loved by Product Hunt
          </Heading>
          
          <Text 
            textAlign={"center"} 
            fontSize="lg"
            color={AuraTextColors.textLight}
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            maxW={600}
          >
            Join thousands of users who discovered AuraText on Product Hunt
          </Text>
        </VStack>

        <Box
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          p={8}
          border={`2px solid ${AuraTextColors.lightGrey}`}
          borderRadius={16}
          bg={AuraTextColors.lightBg}
          w="100%"
          maxW={500}
        >
          <VStack spacing={6} align="center">
            {/* Product Hunt Logo/Badge */}
            <HStack spacing={3}>
              <Box
                w={8}
                h={8}
                bg="#DA552F"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="white" fontSize="sm" fontWeight="bold">PH</Text>
              </Box>
              <Text fontSize="lg" color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace">
                Product Hunt
              </Text>
            </HStack>

            {/* Product Name */}
            <Heading 
              fontSize="xl" 
              color={AuraTextColors.text} 
              fontFamily="'Space Mono', monospace" 
              fontWeight={400}
              textAlign="center"
            >
              {productName}
            </Heading>

            {/* Tagline */}
            {tagline && (
              <Text 
                fontSize="md" 
                color={AuraTextColors.textLight} 
                fontFamily="'Space Mono', monospace"
                textAlign="center"
                lineHeight={1.4}
              >
                {tagline}
              </Text>
            )}

            {/* Stats */}
            <HStack spacing={8} justify="center" w="full">
              {/* Votes */}
              <VStack spacing={2}>
                <HStack spacing={2}>
                  <Icon as={LuHeart} boxSize={5} color="#DA552F" />
                  <Text fontSize="2xl" fontWeight="bold" color={AuraTextColors.text} fontFamily="'Space Mono', monospace">
                    {votes.toLocaleString()}
                  </Text>
                </HStack>
                <Text fontSize="sm" color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace">
                  votes
                </Text>
              </VStack>

              {/* Comments */}
              <VStack spacing={2}>
                <HStack spacing={2}>
                  <Icon as={LuMessageCircle} boxSize={5} color={AuraTextColors.primary} />
                  <Text fontSize="2xl" fontWeight="bold" color={AuraTextColors.text} fontFamily="'Space Mono', monospace">
                    {comments.toLocaleString()}
                  </Text>
                </HStack>
                <Text fontSize="sm" color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace">
                  comments
                </Text>
              </VStack>
            </HStack>

            {/* Product Hunt Link */}
            <Link
              href="https://www.producthunt.com/posts/auratext"
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <HStack
                spacing={3}
                px={6}
                py={3}
                bg="#DA552F"
                borderRadius="full"
                _hover={{ 
                  bg: "#C44A26",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(218, 85, 47, 0.4)"
                }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                <Icon as={LuExternalLink} boxSize={5} color="white" />
                <Text 
                  color="white" 
                  fontSize="md" 
                  fontFamily="'Space Mono', monospace" 
                  fontWeight={400}
                >
                  View on Product Hunt
                </Text>
              </HStack>
            </Link>

            {/* Trending Badge */}
            {votes > 100 && (
              <Badge 
                colorScheme="orange" 
                borderRadius="full" 
                px={4} 
                py={2}
                fontSize="sm"
                fontFamily="'Space Mono', monospace"
                bg="rgba(255, 140, 0, 0.1)"
                border="1px solid rgba(255, 140, 0, 0.3)"
                color="#FF8C00"
              >
                <HStack spacing={2}>
                  <Icon as={LuTrendingUp} boxSize={4} />
                  <Text>Trending on Product Hunt</Text>
                </HStack>
              </Badge>
            )}
          </VStack>
        </Box>

        <Divider my={8} />

        <VStack spacing={4} align="center">
          <Text 
            fontSize="sm" 
            color={AuraTextColors.textLight} 
            fontFamily="'Space Mono', monospace" 
            textAlign="center"
          >
            Help us reach more users by voting and sharing on Product Hunt
          </Text>
          
          <HStack spacing={4}>
            <Link
              href="https://www.producthunt.com/posts/auratext"
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <HStack
                spacing={2}
                px={4}
                py={2}
                border={`1px solid ${AuraTextColors.primary}`}
                borderRadius="full"
                _hover={{ 
                  bg: AuraTextColors.primary,
                  color: AuraTextColors.white
                }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                <Icon as={LuHeart} boxSize={4} color={AuraTextColors.primary} />
                <Text 
                  fontSize="sm" 
                  fontFamily="'Space Mono', monospace" 
                  fontWeight={400}
                  color={AuraTextColors.primary}
                >
                  Vote for AuraText
                </Text>
              </HStack>
            </Link>
            
            <Link
              href="https://www.producthunt.com/posts/auratext"
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <HStack
                spacing={2}
                px={4}
                py={2}
                border={`1px solid ${AuraTextColors.lightGrey}`}
                borderRadius="full"
                _hover={{ 
                  bg: AuraTextColors.lightBg,
                  borderColor: AuraTextColors.primary
                }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                <Icon as={LuUsers} boxSize={4} color={AuraTextColors.textLight} />
                <Text 
                  fontSize="sm" 
                  fontFamily="'Space Mono', monospace" 
                  fontWeight={400}
                  color={AuraTextColors.textLight}
                >
                  Join Community
                </Text>
              </HStack>
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default ProductHuntStats;
