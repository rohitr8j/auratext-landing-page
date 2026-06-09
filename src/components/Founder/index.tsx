"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
  Image,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AuraTextColors } from "#/src/utils/Colors";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuUsers, LuBuilding, LuCpu, LuTwitter, LuInstagram, LuGlobe } from "react-icons/lu";
import AnimatedCounter from "../AnimatedCounter";

interface GitHubRelease {
  assets: Array<{
    download_count: number;
  }>;
}

const Founder = () => {
  const [userCount, setUserCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/y4shr4j/auratext-releases/releases');
        if (!response.ok) throw new Error('Failed to fetch');
        const data: GitHubRelease[] = await response.json();

        const totalDownloads = data.reduce((acc, release) => {
          return acc + release.assets.reduce((sum, asset) => sum + asset.download_count, 0);
        }, 0);

        setUserCount(totalDownloads);
      } catch (error) {
        console.error('Error fetching stats:', error);
        setUserCount(1200); // Fallback to match UserCounter fallback
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <Box py={20} id="founder" position="relative" overflow="hidden">
      <Container maxW="container.lg">
        <VStack spacing={12} align="stretch">
          {/* Header */}
          <VStack spacing={3} align="center" textAlign="center">
            <Heading
              as={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              color={AuraTextColors.text}
              size="2xl"
              fontFamily="'Space Mono', monospace"
            >
              Built by One Founder.
            </Heading>
            <Text
              color={AuraTextColors.textLight}
              fontSize={{ base: "md", md: "lg" }}
              maxW="600px"
            >
              Started from a simple observation: AI answers questions. It doesn&apos;t tell you whether you&apos;re asking the right ones.
            </Text>
          </VStack>

          {/* Core Info Grid */}
          <SimpleGrid columns={{ base: 1, md: 12 }} gap={8} alignItems="stretch">
            {/* Left Column - Founder Profile */}
            <Flex
              gridColumn={{ base: "span 1", md: "span 5" }}
              direction="column"
              bg="rgba(255, 255, 255, 0.02)"
              borderRadius="2xl"
              border={`1px solid rgba(255, 255, 255, 0.05)`}
              p={8}
              align="center"
              textAlign="center"
              justify="center"
            >
              {/* Profile Image */}
              <Box position="relative" mb={6}>
                <Box
                  position="absolute"
                  top="-3px"
                  left="-3px"
                  right="-3px"
                  bottom="-3px"
                  borderRadius="full"
                  bg={`linear-gradient(135deg, ${AuraTextColors.primary}, ${AuraTextColors.secondary})`}
                  zIndex={0}
                  opacity={0.8}
                />
                <Image
                  src="https://github.com/Y4shr4j.png"
                  alt="Yash Raj"
                  borderRadius="full"
                  boxSize="120px"
                  objectFit="cover"
                  border={`3px solid ${AuraTextColors.black}`}
                  position="relative"
                  zIndex={1}
                />
              </Box>

              <Heading size="md" color={AuraTextColors.text} mb={1}>
                YASH RAJ
              </Heading>
              <Text
                color={AuraTextColors.primary}
                fontFamily="'Space Mono', monospace"
                fontSize="sm"
                fontWeight="500"
                mb={4}
              >
                Founder & CEO
              </Text>

              <Text color={AuraTextColors.textLight} fontSize="sm" mb={6}>
                Every week, users spend more time fixing AI outputs than they saved using AI. The problem isn&apos;t the AI. The problem is incomplete requests. I built AuraText to fix that.
              </Text>

              {/* Founder Social Links - Important for Google Cloud Verification */}
              <HStack spacing={3} wrap="wrap" justify="center">
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/yashra4j", label: "LinkedIn" },
                  { icon: FaGithub, href: "https://github.com/Y4shr4j", label: "GitHub" },
                  { icon: LuTwitter, href: "https://x.com/YashRa4j", label: "Twitter / X" },
                  { icon: LuInstagram, href: "https://www.instagram.com/yashra4j/", label: "Instagram" },
                  { icon: LuGlobe, href: "https://yashra4j.xyz", label: "Portfolio" },
                ].map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    isExternal
                    bg="rgba(255, 255, 255, 0.04)"
                    color={AuraTextColors.text}
                    p={2.5}
                    borderRadius="lg"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.2s"
                    _hover={{
                      bg: "rgba(16, 185, 129, 0.15)",
                      color: AuraTextColors.primary,
                      borderColor: AuraTextColors.primary,
                      transform: "translateY(-1px)",
                    }}
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    aria-label={social.label}
                  >
                    <Icon as={social.icon} boxSize={5} />
                  </Link>
                ))}
              </HStack>
            </Flex>

            {/* Right Column - Business and Product Overview */}
            <VStack
              gridColumn={{ base: "span 1", md: "span 7" }}
              spacing={6}
              align="stretch"
              justify="space-between"
            >
              {/* Business details */}
              <VStack
                align="stretch"
                spacing={4}
                bg="rgba(255, 255, 255, 0.01)"
                border="1px solid rgba(255, 255, 255, 0.03)"
                borderRadius="2xl"
                p={6}
              >
                <HStack spacing={3} color={AuraTextColors.primary}>
                  <Icon as={LuBuilding} boxSize={5} />
                  <Heading size="xs" fontFamily="'Space Mono', monospace" letterSpacing="0.05em">
                    THE STORY
                  </Heading>
                </HStack>
                <Text color={AuraTextColors.textLight} fontSize="sm" lineHeight="1.6">
                  AuraText started as a simple question: why do people get worse results from better AI? The answer was always the same. Incomplete requests. AuraText exists to surface what you&apos;re missing before AI generates anything.
                </Text>
              </VStack>

              {/* Product details */}
              <VStack
                align="stretch"
                spacing={4}
                bg="rgba(255, 255, 255, 0.01)"
                border="1px solid rgba(255, 255, 255, 0.03)"
                borderRadius="2xl"
                p={6}
              >
                <HStack spacing={3} color={AuraTextColors.primary}>
                  <Icon as={LuCpu} boxSize={5} />
                  <Heading size="xs" fontFamily="'Space Mono', monospace" letterSpacing="0.05em">
                    THE PRODUCT
                  </Heading>
                </HStack>
                <Text color={AuraTextColors.textLight} fontSize="sm" lineHeight="1.6">
                  AuraText sits between you and your AI tool. Before you hit send, it asks the questions a senior engineer, editor, or strategist would ask. The result is a complete, structured request that gets dramatically better outputs on the first try, in Cursor, Claude, ChatGPT, Gemini, or any AI tool you already use.
                </Text>
              </VStack>

              {/* Metrics (Matched with main site counter) */}
              <HStack
                spacing={6}
                bg="rgba(255, 255, 255, 0.01)"
                border="1px solid rgba(255, 255, 255, 0.03)"
                borderRadius="2xl"
                p={6}
                wrap={{ base: "wrap", sm: "nowrap" }}
              >
                <VStack align="start" spacing={1} flex="1">
                  <Text color={AuraTextColors.textLight} fontSize="xs" fontWeight="500">
                    TOTAL DOWNLOADS
                  </Text>
                  <Skeleton isLoaded={!loading} startColor="rgba(255,255,255,0.05)" endColor="rgba(255,255,255,0.15)">
                    <HStack spacing={2} align="center">
                      <Icon as={LuUsers} color={AuraTextColors.primary} />
                      <Text color={AuraTextColors.text} fontSize="xl" fontWeight="700" fontFamily="'Space Mono', monospace">
                        {userCount !== null ? <AnimatedCounter target={userCount} /> : "..."}
                      </Text>
                    </HStack>
                  </Skeleton>
                </VStack>

                <VStack align="start" spacing={1} flex="1">
                  <Text color={AuraTextColors.textLight} fontSize="xs" fontWeight="500">
                    COUNTRIES REACHED
                  </Text>
                  <Text color={AuraTextColors.text} fontSize="xl" fontWeight="700" fontFamily="'Space Mono', monospace">
                    13+ Countries
                  </Text>
                </VStack>

                <VStack align="start" spacing={1} flex="1">
                  <Text color={AuraTextColors.textLight} fontSize="xs" fontWeight="500">
                    PLATFORM SUPPORT
                  </Text>
                  <Text color={AuraTextColors.text} fontSize="xl" fontWeight="700" fontFamily="'Space Mono', monospace">
                    Windows 10/11
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Founder;
