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
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { LuDownload, LuMonitor, LuGlobe, LuCheck } from "react-icons/lu";
import { useLatestRelease } from "#/src/hooks/useGitHubReleases";

const Download = () => {
  const { latestRelease, loading, error } = useLatestRelease();

  const downloadMainApp = async () => {
    try {
      // Track download event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'download', {
          event_category: 'engagement',
          event_label: 'main_app',
          value: 1,
        });
      }

      // Use latest release URL or fallback
      const mainAppAsset = latestRelease?.assets?.find(asset => 
        asset.name.includes('.exe') && asset.name.includes('Setup')
      );
      
      const downloadUrl = mainAppAsset?.browser_download_url || 
        'https://github.com/Y4shr4j/auratext-releases/releases/latest/download/AuraText-Setup-1.0.3.exe';
      
      // Open download in new tab
      window.open(downloadUrl, '_blank');
      
      console.log('Download initiated:', mainAppAsset?.name || 'AuraText-Setup.exe');
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  const downloadExtension = async () => {
    try {
      // Track download event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'download', {
          event_category: 'engagement',
          event_label: 'browser_extension',
          value: 1,
        });
      }

      // Use latest release URL or fallback
      const extensionAsset = latestRelease?.assets?.find(asset => 
        asset.name.includes('.zip') && asset.name.includes('Extension')
      );
      
      const downloadUrl = extensionAsset?.browser_download_url || 
        'https://github.com/Y4shr4j/auratext-releases/releases/latest/download/AuraText-Extension.zip';
      
      // Open download in new tab
      window.open(downloadUrl, '_blank');
      
      console.log('Download initiated:', extensionAsset?.name || 'AuraText-Extension.zip');
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <Flex
      id="download"
      direction={"column"}
      justify={"center"}
      align={"center"}
      py={24}
      px={{
        base: 6,
        md: 10,
      }}
      maxW={1200}
      mx={{
        base: 2,
        xl: "auto",
      }}
    >
      <VStack spacing={8} align="center" maxW={800}>
        <Heading 
          textAlign={"center"} 
          fontSize={{ base: "3xl", md: "4xl" }}
          fontFamily="'Space Mono', monospace"
          fontWeight={400}
          color={AuraTextColors.text}
        >
          Download AuraText
        </Heading>
        
        <Text 
          textAlign={"center"} 
          fontSize="lg"
          color={AuraTextColors.textLight}
          fontFamily="'Space Mono', monospace"
          fontWeight={400}
          maxW={600}
        >
          Choose your preferred version. Both are free and work seamlessly together.
        </Text>

        <HStack spacing={8} direction={{ base: "column", md: "row" }} align="stretch">
          {/* Main App Download */}
          <Box
            as={motion.div}
            whileHover={{ scale: 1.02 }}
            p={8}
            border={`2px solid ${AuraTextColors.lightGrey}`}
            borderRadius={16}
            bg={AuraTextColors.white}
            minW={300}
            textAlign="center"
          >
            <VStack spacing={6}>
              <Icon as={LuMonitor} boxSize={12} color={AuraTextColors.primary} />
              
              <VStack spacing={2}>
                <Heading fontSize="xl" fontFamily="'Space Mono', monospace" fontWeight={400}>
                  Main Application
                </Heading>
                <Badge colorScheme="blue" borderRadius="full" px={3} py={1}>
                  Windows 10/11
                </Badge>
              </VStack>

              <Text fontSize="sm" color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace">
                Full-featured desktop application with overlay mode, cursor locking, and multi-AI provider support.
              </Text>

              <VStack spacing={2} align="start" w="full">
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace">Smart cursor locking</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace">Multi-AI provider support</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace">Overlay mode</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace">Real-time text analysis</Text>
                </HStack>
              </VStack>

              <Button
                leftIcon={<LuDownload />}
                onClick={downloadMainApp}
                size="lg"
                bg={AuraTextColors.primary}
                color={AuraTextColors.white}
                _hover={{ bg: AuraTextColors.secondary }}
                fontFamily="'Space Mono', monospace"
                fontWeight={400}
                w="full"
                borderRadius="8px"
                isLoading={loading}
                loadingText="Loading..."
              >
                {latestRelease ? `Download ${latestRelease.tag_name}` : 'Download Latest'}
              </Button>
            </VStack>
          </Box>

          {/* Extension Download */}
          <Box
            as={motion.div}
            whileHover={{ scale: 1.02 }}
            p={8}
            border={`2px solid ${AuraTextColors.lightGrey}`}
            borderRadius={16}
            bg={AuraTextColors.white}
            minW={300}
            textAlign="center"
          >
            <VStack spacing={6}>
              <Icon as={LuGlobe} boxSize={12} color={AuraTextColors.primary} />
              
              <VStack spacing={2}>
                <Heading fontSize="xl" fontFamily="'Space Mono', monospace" fontWeight={400}>
                  Browser Extension
                </Heading>
                <Badge colorScheme="green" borderRadius="full" px={3} py={1}>
                  Chrome, Edge, Firefox
                </Badge>
              </VStack>

              <Text fontSize="sm" color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace">
                Lightweight browser extension for quick AI text generation directly in your web browser.
              </Text>

              <VStack spacing={2} align="start" w="full">
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace">Quick text generation</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace">Browser integration</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace">Minimal resource usage</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace">Cross-platform</Text>
                </HStack>
              </VStack>

              <Button
                leftIcon={<LuDownload />}
                onClick={downloadExtension}
                size="lg"
                variant="outline"
                borderColor={AuraTextColors.primary}
                color={AuraTextColors.primary}
                _hover={{ bg: AuraTextColors.lightBg }}
                fontFamily="'Space Mono', monospace"
                fontWeight={400}
                w="full"
                borderRadius="8px"
                isLoading={loading}
                loadingText="Loading..."
              >
                {latestRelease?.assets?.find(asset => asset.name.includes('.zip')) ? 
                  'Download Extension' : 'Coming Soon'}
              </Button>
            </VStack>
          </Box>
        </HStack>

        <Divider my={8} />

        {/* System Requirements */}
        <VStack spacing={4} align="center" mt={8}>
          <Text fontSize="sm" color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace" textAlign="center">
            <strong>System Requirements:</strong> Windows 10 (version 1903+) or Windows 11, 4GB RAM minimum, 100MB free space
          </Text>
          <Text fontSize="xs" color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace" textAlign="center">
            Internet connection required for AI providers. All files are digitally signed and Windows SmartScreen compatible.
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Download;
