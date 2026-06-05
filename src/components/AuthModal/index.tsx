"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Box,
  Flex,
  useToast,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { LuZap, LuMail, LuLock, LuCheck } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { AuraTextColors } from "#/src/utils/Colors";
import { auth } from "#/src/utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "signin" | "signup";
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = "signin",
}) => {
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const toast = useToast();

  const handleClose = () => {
    if (!loading) {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setResetSent(false);
      setMode(initialMode);
      onClose();
    }
  };

  const getFriendlyErrorMessage = (errorCode: string) => {
    switch (errorCode) {
      case "auth/invalid-credential":
        return "Incorrect email or password. Please try again.";
      case "auth/email-already-in-use":
        return "An account with this email already exists.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-not-found":
        return "No account found with this email.";
      default:
        return "An authentication error occurred. Please try again.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email is required",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      if (mode === "signin") {
        if (!password) {
          toast({
            title: "Password is required",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
          setLoading(false);
          return;
        }
        await signInWithEmailAndPassword(auth, email, password);
        toast({
          title: "Successfully signed in",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        handleClose();
      } else if (mode === "signup") {
        if (!password || !confirmPassword) {
          toast({
            title: "All fields are required",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          toast({
            title: "Passwords do not match",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
          setLoading(false);
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        toast({
          title: "Account created successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        handleClose();
      } else if (mode === "forgot") {
        await sendPasswordResetEmail(auth, email);
        setResetSent(true);
        toast({
          title: "Reset email sent",
          description: "Check your inbox for instructions.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      toast({
        title: mode === "forgot" ? "Failed to send reset email" : "Authentication failed",
        description: getFriendlyErrorMessage(error.code),
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast({
        title: "Successfully signed in with Google",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      handleClose();
    } catch (error: any) {
      console.error("Google Auth error:", error);
      if (error.code !== "auth/popup-closed-by-user") {
        toast({
          title: "Google sign-in failed",
          description: getFriendlyErrorMessage(error.code),
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      toast({
        title: "Successfully signed in with GitHub",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      handleClose();
    } catch (error: any) {
      console.error("GitHub Auth error:", error);
      if (error.code !== "auth/popup-closed-by-user") {
        toast({
          title: "GitHub sign-in failed",
          description: getFriendlyErrorMessage(error.code),
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered size="md">
      <ModalOverlay backdropFilter="blur(12px)" bg="rgba(0,0,0,0.7)" />
      <ModalContent
        bg={AuraTextColors.darkBg}
        border={`1px solid rgba(255,255,255,0.08)`}
        borderRadius="20px"
        mx={4}
        overflow="hidden"
      >
        <Box
          h="3px"
          bgGradient={`linear(to-r, ${AuraTextColors.primary}, ${AuraTextColors.secondary})`}
        />

        <ModalHeader pt={6} pb={0}>
          <Flex align="center" gap={2}>
            <Box color={AuraTextColors.primary}>
              <LuZap size={20} />
            </Box>
            <Text
              color={AuraTextColors.text}
              fontFamily="'Space Mono', monospace"
              fontWeight={600}
              fontSize="lg"
            >
              {mode === "signin"
                ? "Sign In"
                : mode === "signup"
                ? "Create Account"
                : "Reset Password"}
            </Text>
          </Flex>
          <Text
            color={AuraTextColors.textLight}
            fontSize="sm"
            fontFamily="'Space Mono', monospace"
            fontWeight={400}
            mt={2}
          >
            {mode === "signin"
              ? "Access your AuraText settings and keys."
              : mode === "signup"
              ? "Get started with your universal AI thinking layer."
              : "Enter your email to receive a password reset link."}
          </Text>
        </ModalHeader>
        <ModalCloseButton color={AuraTextColors.textLight} top={4} right={4} />

        <ModalBody pb={8} pt={6}>
          {resetSent ? (
            <Flex
              direction="column"
              align="center"
              gap={4}
              py={6}
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Box
                p={4}
                bg={`${AuraTextColors.primary}20`}
                borderRadius="full"
                color={AuraTextColors.primary}
              >
                <LuCheck size={32} />
              </Box>
              <Text
                color={AuraTextColors.text}
                fontSize="lg"
                fontFamily="'Space Mono', monospace"
                fontWeight={600}
                textAlign="center"
              >
                Reset link sent!
              </Text>
              <Text
                color={AuraTextColors.textLight}
                fontSize="sm"
                textAlign="center"
                lineHeight={1.6}
              >
                We've sent a password reset link to{" "}
                <Box as="span" color={AuraTextColors.primary}>
                  {email}
                </Box>
                . Please check your spam folder if you don't receive it in a few minutes.
              </Text>
              <Button
                mt={2}
                onClick={() => setResetSent(false)}
                bg={AuraTextColors.primary}
                color={AuraTextColors.white}
                _hover={{ bg: AuraTextColors.secondary }}
                fontFamily="'Space Mono', monospace"
                fontWeight={400}
                size="sm"
                px={6}
                borderRadius="8px"
              >
                Back to Sign In
              </Button>
            </Flex>
          ) : (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel
                    color={AuraTextColors.textLight}
                    fontFamily="'Space Mono', monospace"
                    fontSize="sm"
                    fontWeight={400}
                  >
                    Email Address
                  </FormLabel>
                  <Flex align="center" position="relative">
                    <Box
                      position="absolute"
                      left={3}
                      zIndex={2}
                      color="rgba(255,255,255,0.25)"
                    >
                      <LuMail size={16} />
                    </Box>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      pl={10}
                      bg="rgba(255,255,255,0.04)"
                      border={`1px solid rgba(255,255,255,0.1)`}
                      borderRadius="10px"
                      color={AuraTextColors.text}
                      fontFamily="'Space Mono', monospace"
                      fontSize="sm"
                      _placeholder={{ color: "rgba(255,255,255,0.25)" }}
                      _focus={{
                        borderColor: AuraTextColors.primary,
                        boxShadow: `0 0 0 1px ${AuraTextColors.primary}`,
                        bg: "rgba(255,255,255,0.06)",
                      }}
                      _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
                    />
                  </Flex>
                </FormControl>

                {mode !== "forgot" && (
                  <FormControl isRequired>
                    <FormLabel
                      color={AuraTextColors.textLight}
                      fontFamily="'Space Mono', monospace"
                      fontSize="sm"
                      fontWeight={400}
                    >
                      Password
                    </FormLabel>
                    <Flex align="center" position="relative">
                      <Box
                        position="absolute"
                        left={3}
                        zIndex={2}
                        color="rgba(255,255,255,0.25)"
                      >
                        <LuLock size={16} />
                      </Box>
                      <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        pl={10}
                        bg="rgba(255,255,255,0.04)"
                        border={`1px solid rgba(255,255,255,0.1)`}
                        borderRadius="10px"
                        color={AuraTextColors.text}
                        fontFamily="'Space Mono', monospace"
                        fontSize="sm"
                        _placeholder={{ color: "rgba(255,255,255,0.25)" }}
                        _focus={{
                          borderColor: AuraTextColors.primary,
                          boxShadow: `0 0 0 1px ${AuraTextColors.primary}`,
                          bg: "rgba(255,255,255,0.06)",
                        }}
                        _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
                      />
                    </Flex>
                  </FormControl>
                )}

                {mode === "signup" && (
                  <FormControl isRequired>
                    <FormLabel
                      color={AuraTextColors.textLight}
                      fontFamily="'Space Mono', monospace"
                      fontSize="sm"
                      fontWeight={400}
                    >
                      Confirm Password
                    </FormLabel>
                    <Flex align="center" position="relative">
                      <Box
                        position="absolute"
                        left={3}
                        zIndex={2}
                        color="rgba(255,255,255,0.25)"
                      >
                        <LuLock size={16} />
                      </Box>
                      <Input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        pl={10}
                        bg="rgba(255,255,255,0.04)"
                        border={`1px solid rgba(255,255,255,0.1)`}
                        borderRadius="10px"
                        color={AuraTextColors.text}
                        fontFamily="'Space Mono', monospace"
                        fontSize="sm"
                        _placeholder={{ color: "rgba(255,255,255,0.25)" }}
                        _focus={{
                          borderColor: AuraTextColors.primary,
                          boxShadow: `0 0 0 1px ${AuraTextColors.primary}`,
                          bg: "rgba(255,255,255,0.06)",
                        }}
                        _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
                      />
                    </Flex>
                  </FormControl>
                )}

                {mode === "signin" && (
                  <Flex w="full" justify="flex-end">
                    <Text
                      as="button"
                      type="button"
                      onClick={() => setMode("forgot")}
                      color={AuraTextColors.primary}
                      fontSize="xs"
                      fontFamily="'Space Mono', monospace"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Forgot password?
                    </Text>
                  </Flex>
                )}

                <Button
                  type="submit"
                  w="full"
                  isLoading={loading}
                  loadingText={
                    mode === "signin"
                      ? "Signing in..."
                      : mode === "signup"
                      ? "Registering..."
                      : "Sending..."
                  }
                  bg={AuraTextColors.primary}
                  color={AuraTextColors.white}
                  _hover={{
                    bg: AuraTextColors.secondary,
                    transform: "translateY(-1px)",
                    boxShadow: `0 0 20px ${AuraTextColors.primary}50`,
                  }}
                  fontFamily="'Space Mono', monospace"
                  fontWeight={500}
                  size="lg"
                  borderRadius="10px"
                  transition="all 0.2s"
                  mt={4}
                >
                  {mode === "signin"
                    ? "Sign In"
                    : mode === "signup"
                    ? "Create Account"
                    : "Send Reset Link"}
                </Button>

                {mode !== "forgot" && (
                  <>
                    <Flex align="center" w="full" my={2}>
                      <Box flex={1} h="1px" bg="rgba(255, 255, 255, 0.08)" />
                      <Text
                        px={3}
                        color="rgba(255, 255, 255, 0.3)"
                        fontSize="10px"
                        fontFamily="'Space Mono', monospace"
                        textTransform="uppercase"
                        whiteSpace="nowrap"
                      >
                        or continue with
                      </Text>
                      <Box flex={1} h="1px" bg="rgba(255, 255, 255, 0.08)" />
                    </Flex>

                    <HStack spacing={4} w="full">
                      <Button
                        w="full"
                        onClick={handleGoogleSignIn}
                        leftIcon={<Icon as={FcGoogle} />}
                        bg="rgba(255, 255, 255, 0.04)"
                        border="1px solid rgba(255, 255, 255, 0.1)"
                        color={AuraTextColors.text}
                        _hover={{ bg: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255, 255, 255, 0.2)" }}
                        fontFamily="'Space Mono', monospace"
                        fontSize="xs"
                        fontWeight={500}
                        py={5}
                      >
                        Google
                      </Button>
                      <Button
                        w="full"
                        onClick={handleGithubSignIn}
                        leftIcon={<Icon as={FaGithub} />}
                        bg="rgba(255, 255, 255, 0.04)"
                        border="1px solid rgba(255, 255, 255, 0.1)"
                        color={AuraTextColors.text}
                        _hover={{ bg: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255, 255, 255, 0.2)" }}
                        fontFamily="'Space Mono', monospace"
                        fontSize="xs"
                        fontWeight={500}
                        py={5}
                      >
                        GitHub
                      </Button>
                    </HStack>
                  </>
                )}

                {mode === "signin" ? (
                  <Text color={AuraTextColors.textLight} fontSize="xs" mt={2}>
                    Don't have an account?{" "}
                    <Text
                      as="button"
                      type="button"
                      onClick={() => setMode("signup")}
                      color={AuraTextColors.primary}
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Sign Up
                    </Text>
                  </Text>
                ) : (
                  <Text color={AuraTextColors.textLight} fontSize="xs" mt={2}>
                    Already have an account?{" "}
                    <Text
                      as="button"
                      type="button"
                      onClick={() => setMode("signin")}
                      color={AuraTextColors.primary}
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Sign In
                    </Text>
                  </Text>
                )}
              </VStack>
            </form>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
