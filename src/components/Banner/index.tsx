"use client";
import useBannerVisibility from "#/src/utils/BannerVisibility";
import { AuraTextColors } from "#/src/utils/Colors";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";

const Banner = () => {
  const [showBanner, setShowBanner] = useBannerVisibility("auratext-banner");

  return showBanner ? (
    <Flex
      justify={"center"}
      h={{ base: "auto", md: "45px" }}
      bg={"#1a1a1a"}
      w="100%"
      align={"center"}
      px={{ base: 4, md: 0 }}
      py={{ base: 2, md: 0 }}
    >
      <Flex align="center" justify="center" wrap="wrap" gap={{ base: 1, md: 4 }} maxW="1200px">
        <Text
          fontSize={{
            base: "sm",
            md: "lg",
          }}
          color={AuraTextColors.white}
          fontWeight={700}
          mr={{ base: 2, md: 4 }}
        >
          NEW
        </Text>
        <Text
          fontSize={{
            base: "xs",
            md: "sm",
          }}
          color={AuraTextColors.white}
          textAlign="center"
          flex={1}
          minW="200px"
        >
          AuraText is now available for Windows 10/11 - Download free! Follow us on Instagram and X for updates.
        </Text>
        <Icon
          as={LuX}
          color={AuraTextColors.white}
          fontSize={"lg"}
          cursor={"pointer"}
          ml={{ base: 1, md: 2 }}
          onClick={() => {
            localStorage.setItem("auratext-banner", "true");
            setShowBanner(false);
          }}
        >
          Close
        </Icon>
      </Flex>
    </Flex>
  ) : null;
};

export default Banner;
