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
      h={"45px"}
      bg={"#000000"}
      w="100%"
      align={"center"}
    >
      <Text
        fontSize={{
          base: "md",
          md: "lg",
        }}
        color={AuraTextColors.white}
        fontWeight={700}
        mr={4}
      >
        NEW
      </Text>
      <Text
        fontSize={{
          base: "xs",
          md: "sm",
        }}
        color={AuraTextColors.white}
      >
        AuraText is now available for Windows 10/11 - Download free! Follow us on Instagram and X for updates.
      </Text>
      <Icon
        as={LuX}
        color={AuraTextColors.white}
        fontSize={"lg"}
        cursor={"pointer"}
        ml={2}
        onClick={() => {
          localStorage.setItem("auratext-banner", "true");
          setShowBanner(false);
        }}
      >
        Close
      </Icon>
    </Flex>
  ) : null;
};

export default Banner;
