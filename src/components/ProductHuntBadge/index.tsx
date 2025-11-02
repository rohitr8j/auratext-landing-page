"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import {
  Box,
  Flex,
  Text,
  HStack,
  Icon,
  Link,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { LuExternalLink, LuHeart, LuTrendingUp } from "react-icons/lu";

interface ProductHuntBadgeProps {
  variant?: 'default' | 'compact' | 'minimal';
  showStats?: boolean;
  votes?: number;
  className?: string;
}

const ProductHuntBadge: React.FC<ProductHuntBadgeProps> = ({ 
  variant = 'default', 
  showStats = false, 
  votes = 0,
  className 
}) => {
  const variants = {
    default: {
      px: 4,
      py: 2,
      fontSize: 'sm',
      iconSize: 4,
    },
    compact: {
      px: 3,
      py: 1,
      fontSize: 'xs',
      iconSize: 3,
    },
    minimal: {
      px: 2,
      py: 1,
      fontSize: 'xs',
      iconSize: 3,
    }
  };

  const config = variants[variant];

  return (
    <Link
      href="https://www.producthunt.com/posts/auratext"
      isExternal
      _hover={{ textDecoration: "none" }}
      className={className}
    >
      <Box
        as={motion.div}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 4px 12px rgba(218, 85, 47, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        transition="all 0.2s ease"
        bg="#DA552F"
        borderRadius="full"
        cursor="pointer"
        display="inline-block"
      >
        <HStack
          spacing={2}
          px={config.px}
          py={config.py}
          _hover={{ bg: "#C44A26" }}
          transition="all 0.3s ease"
        >
          {/* Product Hunt Logo */}
          <Box
            w={config.iconSize}
            h={config.iconSize}
            bg="white"
            borderRadius="sm"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="#DA552F" fontSize="xs" fontWeight="bold">PH</Text>
          </Box>

          {/* Text */}
          <Text 
            color="white" 
            fontSize={config.fontSize} 
            fontFamily="'Space Mono', monospace" 
            fontWeight={400}
          >
            Product Hunt
          </Text>

          {/* Stats (if enabled) */}
          {showStats && votes > 0 && (
            <>
              <Text color="white" fontSize={config.fontSize}>•</Text>
              <HStack spacing={1}>
                <Icon as={LuHeart} boxSize={config.iconSize} color="white" />
                <Text 
                  color="white" 
                  fontSize={config.fontSize} 
                  fontFamily="'Space Mono', monospace"
                >
                  {votes.toLocaleString()}
                </Text>
              </HStack>
            </>
          )}

          {/* External Link Icon */}
          <Icon as={LuExternalLink} boxSize={config.iconSize} color="white" />
        </HStack>
      </Box>
    </Link>
  );
};

// Specialized badge for trending status
export const ProductHuntTrendingBadge: React.FC<{ votes?: number }> = ({ votes = 0 }) => {
  if (votes < 100) return null;

  return (
    <Badge 
      colorScheme="orange" 
      borderRadius="full" 
      px={3} 
      py={1}
      fontSize="xs"
      fontFamily="'Space Mono', monospace"
      bg="rgba(255, 140, 0, 0.1)"
      border="1px solid rgba(255, 140, 0, 0.3)"
      color="#FF8C00"
    >
      <HStack spacing={1}>
        <Icon as={LuTrendingUp} boxSize={3} />
        <Text>Trending on Product Hunt</Text>
      </HStack>
    </Badge>
  );
};

// Social proof component for headers
export const ProductHuntSocialProof: React.FC<{ votes?: number }> = ({ votes = 0 }) => {
  return (
    <Flex
      align="center"
      justify="center"
      gap={4}
      py={2}
      px={4}
      bg="rgba(218, 85, 47, 0.05)"
      borderRadius="full"
      border="1px solid rgba(218, 85, 47, 0.2)"
      w="fit-content"
      mx="auto"
    >
      <Text 
        fontSize="sm" 
        color={AuraTextColors.textLight} 
        fontFamily="'Space Mono', monospace"
      >
        Featured on
      </Text>
      <ProductHuntBadge variant="compact" showStats={votes > 0} votes={votes} />
    </Flex>
  );
};

export default ProductHuntBadge;
