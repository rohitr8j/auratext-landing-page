"use client";
import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { LuMenu, LuX, LuZap } from "react-icons/lu";
import { motion } from "framer-motion";
import { AuraTextColors } from "#/src/utils/Colors";
import useBannerVisibility from "#/src/utils/BannerVisibility";

const NavItems = [
  { name: "Features", href: "/#features" },
  { name: "Download", href: "/#download" },
  { name: "Releases", href: "/#releases" },
  { name: "Support", href: "/#footer" },
];

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner] = useBannerVisibility("auratext-banner");
  const [activeSection, setActiveSection] = useState("");
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (showBanner ? 45 : 0));

      const sectionIDs = NavItems.map((item) => item.name.toLowerCase());

      const currentSection = sectionIDs.find((sectionID) => {
        const sectionElement = document.getElementById(sectionID);
        if (sectionElement) {
          const { top, bottom } = sectionElement.getBoundingClientRect();
          const isSectionInView = top >= 0 && bottom <= window.innerHeight;
          return isSectionInView;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showBanner]);

  return (
    <>
      <Flex
        position={isScrolled ? "fixed" : "absolute"}
        top={isScrolled ? 0 : "auto"}
        zIndex={100}
        bg={isScrolled ? AuraTextColors.darkBg : "rgba(0, 0, 0, 0.8)"}
        w="100%"
        justify="center"
        align="center"
        backdropFilter="blur(24px)"
        minH={75}
        transition="all .25s ease"
        direction="column"
      >
        <Flex
          maxW={1440}
          w="100%"
          py={5}
          px={{ base: 10, xl: 5 }}
          align="center"
          justify="space-between"
        >
          <Flex align="center" gap={3}>
            <LuZap 
              size={32} 
              color={AuraTextColors.text}
              className="zap-icon"
            />
            <Text
              as={Link}
              href="/"
              fontSize="3xl"
              userSelect="none"
              color={AuraTextColors.text}
              fontWeight={400}
              fontFamily="'Space Mono', monospace"
            >
              AuraText
            </Text>
          </Flex>
          <Flex
            gap={5}
            display={{ base: "none", lg: "flex" }}
            color={AuraTextColors.text}
          >
            {NavItems.map((item, index) => (
              <Flex
                as={Link}
                href={item.href}
                key={index}
                px={5}
                py={2}
                borderRadius={12}
                transition="all .25s ease"
                _hover={{ bg: AuraTextColors.lightBg }}
                bg={
                  activeSection === item.name.toLowerCase()
                    ? AuraTextColors.lightBg
                    : "transparent"
                }
              >
                <Text>{item.name}</Text>
              </Flex>
            ))}
          </Flex>

          <Flex gap={4} display={{ base: "none", lg: "flex" }}>
            <Button
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              href="#download"
              rounded="8px"
              background={AuraTextColors.primary}
              color={AuraTextColors.white}
              _hover={{ bg: AuraTextColors.secondary }}
              fontFamily="'Space Mono', monospace"
              fontWeight={400}
            >
              Download
            </Button>
          </Flex>

          <IconButton
            icon={isOpen ? <Icon as={LuX} /> : <Icon as={LuMenu} />}
            aria-label="Hamburger menu"
            variant="unstyled"
            onClick={onToggle}
            color={AuraTextColors.text}
            display={{ base: "flex", lg: "none" }}
            fontSize={"lg"}
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Flex
            zIndex={10000}
            w="100%"
            justify="center"
            align="center"
            display={{ base: "flex", md: "none" }}
            direction="column"
            mb={5}
            gap={5}
          >
            {NavItems.map((item, index) => (
              <Flex
                as={Link}
                href={item.href}
                key={index}
                color={AuraTextColors.text}
              >
                <Text>{item.name}</Text>
              </Flex>
            ))}
            <Flex gap={5} mt={5}>
              <Button
                as={motion.a}
                whileHover={{ scale: 1.05 }}
                href="#download"
                rounded="8px"
                background={AuraTextColors.primary}
                color={AuraTextColors.white}
                _hover={{ bg: AuraTextColors.secondary }}
                fontFamily="'Space Mono', monospace"
                fontWeight={400}
              >
                Download
              </Button>
            </Flex>
          </Flex>
        </Collapse>
      </Flex>
    </>
  );
};

export default Navbar;
