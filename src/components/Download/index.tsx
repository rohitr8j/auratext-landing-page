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

  // Debug logging
  React.useEffect(() => {
    if (latestRelease?.assets) {
      console.log('Latest release assets:', latestRelease.assets.map(asset => asset.name));
      const extensionAsset = latestRelease.assets.find(asset => 
        asset.name.toLowerCase().includes('auratext-browser-bridge.zip') ||
        asset.name.toLowerCase().includes('.zip') || 
        asset.name.toLowerCase().includes('extension') ||
        asset.name.toLowerCase().includes('browser')
      );
      console.log('Extension asset detected:', extensionAsset);
    }
  }, [latestRelease]);

  const downloadMainApp = async () => {
    // Downloads disabled - users cannot download from website
    alert('Downloads are currently disabled. Please visit our GitHub repository for downloads.');
    return;
  };

  const downloadExtension = async () => {
    // Downloads disabled - users cannot download from website
    alert('Downloads are currently disabled. Please visit our GitHub repository for downloads.');
    return;
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
            bg="#000000"
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

        <VStack spacing={{ base: 6, md: 8 }} w="100%" display={{ base: "flex", md: "none" }}>
          {/* Mobile Layout - Vertical Stack */}
          {/* Main App Download */}
          <Box
            as={motion.div}
            whileHover={{ 
              scale: 1.02,
              boxShadow: `0 20px 40px rgba(59, 130, 246, 0.15)`,
              borderColor: AuraTextColors.primary
            }}
            transition="all 0.3s ease"
            p={{ base: 6, md: 8 }}
            border={`2px solid ${AuraTextColors.lightGrey}`}
            borderRadius={16}
            bg={AuraTextColors.lightBg}
            w="100%"
            textAlign="center"
            cursor="pointer"
          >
            <VStack spacing={6}>
              <Icon as={LuMonitor} boxSize={12} color={AuraTextColors.primary} />
              
              <VStack spacing={2}>
                <Heading fontSize={{ base: "lg", md: "xl" }} fontFamily="'Space Mono', monospace" fontWeight={400} color={AuraTextColors.text}>
                  Main Application
                </Heading>
                <Badge colorScheme="blue" borderRadius="full" px={3} py={1}>
                  Windows 10/11
                </Badge>
              </VStack>

              <Text fontSize={{ base: "xs", md: "sm" }} color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace">
                Full-featured desktop application with overlay mode, cursor locking, and multi-AI provider support.
              </Text>

              <VStack spacing={2} align="start" w="full">
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize={{ base: "xs", md: "sm" }} fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Smart cursor locking</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize={{ base: "xs", md: "sm" }} fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Multi-AI provider support</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize={{ base: "xs", md: "sm" }} fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Overlay mode</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize={{ base: "xs", md: "sm" }} fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Real-time text analysis</Text>
                </HStack>
              </VStack>

              <Button
                leftIcon={<LuDownload />}
                onClick={downloadMainApp}
                size={{ base: "md", md: "lg" }}
                bg={AuraTextColors.primary}
                color={AuraTextColors.white}
                _hover={{ 
                  bg: AuraTextColors.secondary,
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
                }}
                transition="all 0.3s ease"
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

          {/* Extension Download - Mobile */}
          <Box
            as={motion.div}
            whileHover={{ 
              scale: 1.02,
              boxShadow: `0 20px 40px rgba(34, 197, 94, 0.15)`,
              borderColor: AuraTextColors.primary
            }}
            transition="all 0.3s ease"
            p={{ base: 6, md: 8 }}
            border={`2px solid ${AuraTextColors.lightGrey}`}
            borderRadius={16}
            bg={AuraTextColors.lightBg}
            w="100%"
            textAlign="center"
            cursor="pointer"
          >
            <VStack spacing={6}>
              <Icon as={LuGlobe} boxSize={12} color={AuraTextColors.primary} />
              
              <VStack spacing={2}>
                <Heading fontSize={{ base: "lg", md: "xl" }} fontFamily="'Space Mono', monospace" fontWeight={400} color={AuraTextColors.text}>
                  Browser Extension
                </Heading>
                <Badge colorScheme="green" borderRadius="full" px={3} py={1}>
                  Chrome, Edge, Firefox
                </Badge>
              </VStack>

              <Text fontSize={{ base: "xs", md: "sm" }} color={AuraTextColors.textLight} fontFamily="'Space Mono', monospace">
                Lightweight browser extension for quick AI text generation directly in your web browser.
              </Text>

              <VStack spacing={2} align="start" w="full">
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize={{ base: "xs", md: "sm" }} fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Quick text generation</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize={{ base: "xs", md: "sm" }} fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Browser integration</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize={{ base: "xs", md: "sm" }} fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Minimal resource usage</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize={{ base: "xs", md: "sm" }} fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Cross-platform</Text>
                </HStack>
              </VStack>

              <Button
                leftIcon={<LuDownload />}
                onClick={downloadExtension}
                size={{ base: "md", md: "lg" }}
                variant="outline"
                borderColor={AuraTextColors.primary}
                color={AuraTextColors.primary}
                _hover={{ 
                  bg: AuraTextColors.lightBg,
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 20px rgba(34, 197, 94, 0.3)",
                  borderColor: AuraTextColors.secondary
                }}
                transition="all 0.3s ease"
                fontFamily="'Space Mono', monospace"
                fontWeight={400}
                w="full"
                borderRadius="8px"
                isLoading={loading}
                loadingText="Loading..."
              >
                {latestRelease?.assets?.find(asset => 
                  asset.name.toLowerCase().includes('auratext-browser-bridge.zip') ||
                  asset.name.toLowerCase().includes('.zip') || 
                  asset.name.toLowerCase().includes('extension') ||
                  asset.name.toLowerCase().includes('browser')
                ) ? 
                  'Download Extension' : 'Coming Soon'}
              </Button>
            </VStack>
          </Box>
        </VStack>

        {/* Desktop Layout - Horizontal Stack */}
        <HStack spacing={8} align="stretch" w="100%" display={{ base: "none", md: "flex" }}>
          {/* Main App Download - Desktop */}
          <Box
            as={motion.div}
            whileHover={{ 
              scale: 1.02,
              boxShadow: `0 20px 40px rgba(59, 130, 246, 0.15)`,
              borderColor: AuraTextColors.primary
            }}
            transition="all 0.3s ease"
            p={8}
            border={`2px solid ${AuraTextColors.lightGrey}`}
            borderRadius={16}
            bg={AuraTextColors.lightBg}
            minW={300}
            flex={1}
            textAlign="center"
            cursor="pointer"
          >
            <VStack spacing={6}>
              <Icon as={LuMonitor} boxSize={12} color={AuraTextColors.primary} />
              
              <VStack spacing={2}>
                <Heading fontSize="xl" fontFamily="'Space Mono', monospace" fontWeight={400} color={AuraTextColors.text}>
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
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Smart cursor locking</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Multi-AI provider support</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Overlay mode</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Real-time text analysis</Text>
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

          {/* Extension Download - Desktop */}
          <Box
            as={motion.div}
            whileHover={{ 
              scale: 1.02,
              boxShadow: `0 20px 40px rgba(34, 197, 94, 0.15)`,
              borderColor: AuraTextColors.primary
            }}
            transition="all 0.3s ease"
            p={8}
            border={`2px solid ${AuraTextColors.lightGrey}`}
            borderRadius={16}
            bg={AuraTextColors.lightBg}
            minW={300}
            flex={1}
            textAlign="center"
            cursor="pointer"
          >
            <VStack spacing={6}>
              <Icon as={LuGlobe} boxSize={12} color={AuraTextColors.primary} />
              
              <VStack spacing={2}>
                <Heading fontSize="xl" fontFamily="'Space Mono', monospace" fontWeight={400} color={AuraTextColors.text}>
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
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Quick text generation</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Browser integration</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Minimal resource usage</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={LuCheck} boxSize={4} color={AuraTextColors.primary} />
                  <Text fontSize="sm" fontFamily="'Space Mono', monospace" color={AuraTextColors.text}>Cross-platform</Text>
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
                {latestRelease?.assets?.find(asset => 
                  asset.name.toLowerCase().includes('auratext-browser-bridge.zip') ||
                  asset.name.toLowerCase().includes('.zip') || 
                  asset.name.toLowerCase().includes('extension') ||
                  asset.name.toLowerCase().includes('browser')
                ) ? 
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
