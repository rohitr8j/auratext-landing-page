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
          boxShadow: "0 4px 12px rgba(42, 42, 42, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        transition="all 0.2s ease"
        bg={AuraTextColors.lightGrey}
        borderRadius="full"
        cursor="pointer"
        display="inline-block"
      >
        <HStack
          spacing={2}
          px={config.px}
          py={config.py}
          _hover={{ bg: AuraTextColors.lightBg }}
          transition="all 0.3s ease"
        >
          {/* Product Hunt Logo */}
          <Box
            w={config.iconSize}
            h={config.iconSize}
            bg={AuraTextColors.lightGrey}
            borderRadius="sm"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color={AuraTextColors.text} fontSize="xs" fontWeight="bold">PH</Text>
          </Box>

          {/* Text */}
          <Text 
            color={AuraTextColors.text} 
            fontSize={config.fontSize} 
            fontFamily="'Space Mono', monospace" 
            fontWeight={400}
          >
            Product Hunt
          </Text>

          {/* Stats (if enabled) */}
          {showStats && votes > 0 && (
            <>
              <Text color={AuraTextColors.text} fontSize={config.fontSize}>•</Text>
              <HStack spacing={1}>
                <Icon as={LuHeart} boxSize={config.iconSize} color={AuraTextColors.text} />
                <Text 
                  color={AuraTextColors.text} 
                  fontSize={config.fontSize} 
                  fontFamily="'Space Mono', monospace"
                >
                  {votes.toLocaleString()}
                </Text>
              </HStack>
            </>
          )}

          {/* External Link Icon */}
          <Icon as={LuExternalLink} boxSize={config.iconSize} color={AuraTextColors.text} />
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
      borderRadius="full" 
      px={3} 
      py={1}
      fontSize="xs"
      fontFamily="'Space Mono', monospace"
      bg={AuraTextColors.lightBg}
      border={`1px solid ${AuraTextColors.lightGrey}`}
      color={AuraTextColors.textLight}
    >
      <HStack spacing={1}>
        <Icon as={LuTrendingUp} boxSize={3} color={AuraTextColors.grey} />
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
      bg={AuraTextColors.lightBg}
      borderRadius="full"
      border={`1px solid ${AuraTextColors.lightGrey}`}
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
