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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { LuMenu, LuX, LuZap, LuUser, LuLogOut, LuChevronDown } from "react-icons/lu";
import { motion } from "framer-motion";
import { AuraTextColors } from "#/src/utils/Colors";
import useBannerVisibility from "#/src/utils/BannerVisibility";
import { auth } from "#/src/utils/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import AuthModal from "#/src/components/AuthModal";


const NavItems = [
  { name: "Features", href: "/#features" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Founder", href: "/#founder" },
  { name: "FAQ", href: "/#faq" },
];

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner] = useBannerVisibility("auratext-banner");
  const [activeSection, setActiveSection] = useState("");
  const { isOpen, onToggle } = useDisclosure();

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"signin" | "signup">("signin");
  const toast = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleOpenAuth = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.mode) {
        setAuthModalMode(customEvent.detail.mode);
      }
      setAuthModalOpen(true);
    };
    window.addEventListener("open-auth-modal", handleOpenAuth);
    return () => window.removeEventListener("open-auth-modal", handleOpenAuth);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Signed out successfully",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Sign out failed",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

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

          <Flex gap={3} align="center" display={{ base: "none", lg: "flex" }}>
            {currentUser ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<Icon as={LuChevronDown} />}
                  variant="outline"
                  borderColor="rgba(255, 255, 255, 0.15)"
                  color={AuraTextColors.text}
                  _hover={{ bg: AuraTextColors.lightBg, borderColor: AuraTextColors.primary }}
                  _active={{ bg: AuraTextColors.lightBg }}
                  fontFamily="'Space Mono', monospace"
                  fontWeight={400}
                  size="sm"
                  leftIcon={<Icon as={LuUser} color={AuraTextColors.primary} />}
                  borderRadius="8px"
                >
                  {currentUser.email?.split("@")[0]}
                </MenuButton>
                <MenuList
                  bg={AuraTextColors.darkBg}
                  borderColor="rgba(255, 255, 255, 0.1)"
                  borderRadius="xl"
                  p={2}
                >
                  <MenuItem
                    icon={<Icon as={LuLogOut} />}
                    onClick={handleSignOut}
                    bg="transparent"
                    color="red.400"
                    _hover={{ bg: "rgba(239, 68, 68, 0.1)", borderRadius: "lg" }}
                    fontFamily="'Space Mono', monospace"
                    fontSize="sm"
                  >
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button
                variant="ghost"
                onClick={() => {
                  setAuthModalMode("signin");
                  setAuthModalOpen(true);
                }}
                color={AuraTextColors.text}
                _hover={{ bg: AuraTextColors.lightBg, color: AuraTextColors.primary }}
                fontFamily="'Space Mono', monospace"
                fontWeight={400}
                size="sm"
                borderRadius="8px"
              >
                Log In
              </Button>
            )}
            <Button
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              href="/#download"
              rounded="8px"
              background={AuraTextColors.primary}
              color={AuraTextColors.white}
              _hover={{ bg: AuraTextColors.secondary }}
              fontFamily="'Space Mono', monospace"
              fontWeight={400}
              size="sm"
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

            {currentUser ? (
              <VStack spacing={4} w="full" mt={2}>
                <Flex align="center" gap={2} color={AuraTextColors.textLight}>
                  <Icon as={LuUser} color={AuraTextColors.primary} />
                  <Text fontFamily="'Space Mono', monospace" fontSize="sm">
                    {currentUser.email}
                  </Text>
                </Flex>
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  colorScheme="red"
                  fontFamily="'Space Mono', monospace"
                  fontWeight={400}
                  size="sm"
                  w="140px"
                  borderRadius="8px"
                >
                  Sign Out
                </Button>
              </VStack>
            ) : (
              <Button
                variant="outline"
                onClick={() => {
                  setAuthModalMode("signin");
                  setAuthModalOpen(true);
                  onToggle(); // Close mobile menu
                }}
                borderColor="rgba(255, 255, 255, 0.2)"
                color={AuraTextColors.text}
                _hover={{ bg: AuraTextColors.lightBg, color: AuraTextColors.primary }}
                fontFamily="'Space Mono', monospace"
                fontWeight={400}
                size="sm"
                w="140px"
                borderRadius="8px"
                mt={2}
              >
                Log In
              </Button>
            )}

            <Box mt={2}>
              <Button
                as={motion.a}
                whileHover={{ scale: 1.05 }}
                href="/#download"
                rounded="8px"
                background={AuraTextColors.primary}
                color={AuraTextColors.white}
                _hover={{ bg: AuraTextColors.secondary }}
                fontFamily="'Space Mono', monospace"
                fontWeight={400}
                onClick={onToggle} // Close mobile menu
              >
                Download
              </Button>
            </Box>
          </Flex>
        </Collapse>
      </Flex>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />
    </>
  );
};

export default Navbar;
