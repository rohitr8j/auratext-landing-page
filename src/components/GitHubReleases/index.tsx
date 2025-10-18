"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import {
  Button,
  Flex,
  Heading,
  Text,
  Box,
  VStack,
  HStack,
  Icon,
  Badge,
  Divider,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LuDownload, LuGithub, LuCalendar, LuTag, LuExternalLink } from "react-icons/lu";

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  assets: Array<{
    name: string;
    download_count: number;
    size: number;
    browser_download_url: string;
  }>;
}

const GitHubReleases = () => {
  const [releases, setReleases] = useState<GitHubRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Y4shr4j/auratext-releases/releases');
        if (!response.ok) {
          throw new Error('Failed to fetch releases');
        }
        const data = await response.json();
        setReleases(data.slice(0, 5)); // Show only latest 5 releases
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch releases');
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };


  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (loading) {
    return (
      <Flex
        id="releases"
        direction={"column"}
        justify={"center"}
        align={"center"}
        py={24}
        px={{ base: 6, md: 10 }}
        maxW={1200}
        mx={{ base: 2, xl: "auto" }}
      >
        <Text fontFamily="'Space Mono', monospace" color={AuraTextColors.textLight}>
          Loading releases...
        </Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex
        id="releases"
        direction={"column"}
        justify={"center"}
        align={"center"}
        py={24}
        px={{ base: 6, md: 10 }}
        maxW={1200}
        mx={{ base: 2, xl: "auto" }}
      >
        <VStack spacing={8} align="center" maxW={600}>
          <VStack spacing={4} align="center">
            <Heading 
              textAlign={"center"} 
              fontSize={{ base: "2xl", md: "3xl" }}
              fontFamily="'Space Mono', monospace"
              fontWeight={400}
              color={AuraTextColors.text}
            >
              Releases Coming Soon
            </Heading>
            
            <Text 
              textAlign={"center"} 
              fontSize="lg"
              color={AuraTextColors.textLight}
              fontFamily="'Space Mono', monospace"
              fontWeight={400}
            >
              We're working on making AuraText releases available. Check back soon for downloads and updates.
            </Text>
          </VStack>

          <VStack spacing={4} align="center">
            <Text 
              fontSize="sm" 
              color={AuraTextColors.textLight} 
              fontFamily="'Space Mono', monospace" 
              textAlign="center"
            >
              Want to stay updated on AuraText development?
            </Text>
            
            <Button
              as={Link}
              href="https://github.com/Y4shr4j"
              target="_blank"
              leftIcon={<LuGithub />}
              rightIcon={<LuExternalLink />}
              variant="outline"
              borderColor={AuraTextColors.primary}
              color={AuraTextColors.primary}
              _hover={{ bg: AuraTextColors.lightBg }}
              fontFamily="'Space Mono', monospace"
              fontWeight={400}
              size="lg"
              px={8}
              py={6}
              borderRadius="8px"
            >
              Visit AuraText Organization
            </Button>
          </VStack>
        </VStack>
      </Flex>
    );
  }

  return (
    <Flex
      id="releases"
      direction={"column"}
      justify={"center"}
      align={"center"}
      py={24}
      px={{ base: 6, md: 10 }}
      maxW={1200}
      mx={{ base: 2, xl: "auto" }}
      bg="#000000"
    >
      <VStack spacing={8} align="center" maxW={1000}>
        <VStack spacing={4} align="center">
          <Heading 
            textAlign={"center"} 
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            color={AuraTextColors.text}
          >
            All Releases
          </Heading>
          
          <Text 
            textAlign={"center"} 
            fontSize="lg"
            color={AuraTextColors.textLight}
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            maxW={600}
          >
            Download any version of AuraText. All releases are available on GitHub.
          </Text>
        </VStack>

        <VStack spacing={6} w="full">
          {releases.map((release, index) => (
            <Box
              key={release.tag_name}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              w="full"
              p={6}
              border={`1px solid ${AuraTextColors.lightGrey}`}
              borderRadius={16}
              bg={AuraTextColors.lightBg}
              _hover={{ borderColor: AuraTextColors.primary, shadow: "lg" }}
            >
              <VStack spacing={4} align="start" w="full">
                <HStack justify="space-between" w="full" align="start" direction={{ base: "column", md: "row" }} spacing={{ base: 4, md: 0 }}>
                  <VStack align="start" spacing={2} w={{ base: "100%", md: "auto" }}>
                    <HStack spacing={3} wrap="wrap">
                      <Badge 
                        colorScheme={index === 0 ? "green" : "blue"} 
                        borderRadius="full" 
                        px={3} 
                        py={1}
                        fontFamily="'Space Mono', monospace"
                      >
                        {index === 0 ? "Latest" : "Release"}
                      </Badge>
                      <Text 
                        fontSize={{ base: "md", md: "lg" }} 
                        fontFamily="'Space Mono', monospace" 
                        fontWeight={400}
                        color={AuraTextColors.text}
                      >
                        {release.name || release.tag_name}
                      </Text>
                    </HStack>
                    
                    <HStack spacing={4} color={AuraTextColors.textLight}>
                      <HStack spacing={1}>
                        <Icon as={LuCalendar} boxSize={4} />
                        <Text fontSize="sm" fontFamily="'Space Mono', monospace">
                          {formatDate(release.published_at)}
                        </Text>
                      </HStack>
                      <HStack spacing={1}>
                        <Icon as={LuTag} boxSize={4} />
                        <Text fontSize="sm" fontFamily="'Space Mono', monospace">
                          {release.tag_name}
                        </Text>
                      </HStack>
                    </HStack>
                  </VStack>

                  {/* Temporarily commented out - GitHub release links hidden */}
                  {/* <Button
                    as={Link}
                    href={`https://github.com/Y4shr4j/auratext-releases/releases/tag/${release.tag_name}`}
                    target="_blank"
                    leftIcon={<LuGithub />}
                    variant="outline"
                    borderColor={AuraTextColors.primary}
                    color={AuraTextColors.primary}
                    _hover={{ bg: AuraTextColors.lightBg }}
                    fontFamily="'Space Mono', monospace"
                    fontWeight={400}
                    size={{ base: "xs", md: "sm" }}
                    rightIcon={<LuExternalLink />}
                    w={{ base: "100%", md: "auto" }}
                  >
                    View Release
                  </Button> */}
                </HStack>

                {release.body && (
                  <Text 
                    fontSize="sm" 
                    color={AuraTextColors.textLight}
                    fontFamily="'Space Mono', monospace"
                    fontWeight={400}
                    lineHeight={1.6}
                    noOfLines={3}
                  >
                    {release.body.replace(/[#*]/g, '').substring(0, 200)}...
                  </Text>
                )}

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                  {release.assets.map((asset) => (
                    <Box
                      key={asset.name}
                      p={4}
                      bg={AuraTextColors.lightBg}
                      borderRadius={8}
                      border={`1px solid ${AuraTextColors.lightGrey}`}
                    >
                      <VStack spacing={2} align="start">
                        <HStack justify="space-between" w="full">
                          <Text 
                            fontSize="sm" 
                            fontFamily="'Space Mono', monospace" 
                            fontWeight={400}
                            color={AuraTextColors.text}
                            noOfLines={1}
                          >
                            {asset.name}
                          </Text>
                          <Badge 
                            colorScheme="blue" 
                            borderRadius="full" 
                            px={2} 
                            py={1}
                            fontSize="xs"
                          >
                            {formatFileSize(asset.size)}
                          </Badge>
                        </HStack>
                        
                        <HStack justify="space-between" w="full">
                          <Text 
                            fontSize="xs" 
                            color={AuraTextColors.textLight}
                            fontFamily="'Space Mono', monospace"
                          >
                            {asset.download_count.toLocaleString()} downloads
                          </Text>
                          
                          <Button
                            as={Link}
                            href={asset.browser_download_url}
                            target="_blank"
                            leftIcon={<LuDownload />}
                            size="xs"
                            bg={AuraTextColors.primary}
                            color={AuraTextColors.white}
                            _hover={{ bg: AuraTextColors.secondary }}
                            fontFamily="'Space Mono', monospace"
                            fontWeight={400}
                          >
                            Download
                          </Button>
                        </HStack>
                      </VStack>
                    </Box>
                  ))}
                </SimpleGrid>
              </VStack>
            </Box>
          ))}
        </VStack>

        <Divider my={8} />

        <VStack spacing={4} align="center">
          <Text 
            fontSize="sm" 
            color={AuraTextColors.textLight} 
            fontFamily="'Space Mono', monospace" 
            textAlign="center"
          >
            Want to see all releases and contribute to AuraText?
          </Text>
          
          {/* Temporarily commented out - GitHub repository link hidden */}
          {/* <Button
            as={Link}
            href="https://github.com/Y4shr4j/auratext-releases"
            target="_blank"
            leftIcon={<LuGithub />}
            rightIcon={<LuExternalLink />}
            variant="outline"
            borderColor={AuraTextColors.primary}
            color={AuraTextColors.primary}
            _hover={{ bg: AuraTextColors.lightBg }}
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            size="lg"
            px={8}
            py={6}
            borderRadius="8px"
          >
            Visit GitHub Repository
          </Button> */}
        </VStack>
      </VStack>
    </Flex>
  );
};

export default GitHubReleases;
