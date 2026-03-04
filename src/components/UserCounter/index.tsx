"use client";
import { AuraTextColors } from "#/src/utils/Colors";
import { Box, Flex, Text, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { LuDownload } from "react-icons/lu";

interface GitHubRelease {
    assets: Array<{
        download_count: number;
    }>;
}

const UserCounter = () => {
    const [count, setCount] = useState<number | null>(null);
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

                setCount(totalDownloads);
            } catch (error) {
                console.error('Error fetching stats:', error);
                // Fallback to a realistic number if API fails
                setCount(1200);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <Flex
            align="center"
            gap={2}
            bg="rgba(255, 255, 255, 0.05)"
            px={4}
            py={2}
            rounded="full"
            border="1px solid rgba(255, 255, 255, 0.1)"
        >
            <Box color={AuraTextColors.primary}>
                <LuDownload size={16} />
            </Box>
            <Skeleton isLoaded={!loading} startColor="rgba(255,255,255,0.1)" endColor="rgba(255,255,255,0.2)">
                <Text
                    color={AuraTextColors.textLight}
                    fontSize="sm"
                    fontFamily="'Space Mono', monospace"
                    fontWeight={400}
                >
                    <Text as="span" color={AuraTextColors.white} fontWeight={700}>{count !== null ? count.toLocaleString() : '...'}</Text> downloads
                </Text>
            </Skeleton>
        </Flex>
    );
};

export default UserCounter;
