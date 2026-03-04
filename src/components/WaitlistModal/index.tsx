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
    Select,
    VStack,
    Text,
    Box,
    Flex,
    useToast,
} from "@chakra-ui/react";
import { LuZap, LuCheck } from "react-icons/lu";
import { motion } from "framer-motion";
import { AuraTextColors } from "#/src/utils/Colors";

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdx07BOqhyfIcdHl2b6z-zPX848CVjSw4TdiJZ9Tgcqzcia-g/formResponse";
const FIELD_NAME = "entry.1007862804";
const FIELD_EMAIL = "entry.1135207329";
const FIELD_USECASE = "entry.304333359"; // checkboxes — "How will you use AuraText?"
const FIELD_SOURCE = "entry.1620381829"; // radio — "How did you hear about AuraText?"

const USE_CASES = [
    "Personal note-taking and journaling",
    "Professional document drafting (reports, proposals)",
    "Creative writing (stories, scripts, poetry)",
    "Educational research and study notes",
    "Team collaboration and shared documents",
    "Other (Please specify in the next question)",
];

const SOURCES = [
    "Social Media (X, LinkedIn, etc.)",
    "Friend or Colleague",
    "Online Article or Blog",
    "Search Engine",
    "Other",
];

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [useCase, setUseCase] = useState("");
    const [source, setSource] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const toast = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email) {
            toast({
                title: "Please fill in required fields",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append(FIELD_NAME, name);
            formData.append(FIELD_EMAIL, email);
            if (useCase) formData.append(FIELD_USECASE, useCase);
            if (source) formData.append(FIELD_SOURCE, source);

            // Submit to Google Form (no-cors so we can't read response — that's fine)
            await fetch(GOOGLE_FORM_ACTION, {
                method: "POST",
                body: formData,
                mode: "no-cors",
            });

            setSubmitted(true);
        } catch {
            // Google Forms with no-cors will throw a network error even on success
            // so we treat any response (including error) as success
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        if (!loading) {
            setName("");
            setEmail("");
            setUseCase("");
            setSource("");
            setSubmitted(false);
            onClose();
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
                {/* Gradient accent bar at top */}
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
                            Join the Waitlist
                        </Text>
                        <Box
                            px={2}
                            py={0.5}
                            bg={`${AuraTextColors.primary}20`}
                            borderRadius="md"
                            border={`1px solid ${AuraTextColors.primary}40`}
                        >
                            <Text
                                color={AuraTextColors.primary}
                                fontSize="xs"
                                fontWeight={600}
                                fontFamily="'Space Mono', monospace"
                                textTransform="uppercase"
                            >
                                Beta
                            </Text>
                        </Box>
                    </Flex>
                    <Text
                        color={AuraTextColors.textLight}
                        fontSize="sm"
                        fontFamily="'Space Mono', monospace"
                        fontWeight={400}
                        mt={2}
                    >
                        Be the first to know about new features and updates.
                    </Text>
                </ModalHeader>
                <ModalCloseButton color={AuraTextColors.textLight} top={4} right={4} />

                <ModalBody pb={8} pt={6}>
                    {submitted ? (
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
                                fontSize="xl"
                                fontFamily="'Space Mono', monospace"
                                fontWeight={600}
                                textAlign="center"
                            >
                                You&apos;re on the list!
                            </Text>
                            <Text
                                color={AuraTextColors.textLight}
                                fontSize="sm"
                                fontFamily="'Space Mono', monospace"
                                textAlign="center"
                                lineHeight={1.6}
                            >
                                We&apos;ll reach out to <Box as="span" color={AuraTextColors.primary}>{email}</Box> when
                                something exciting is ready.
                            </Text>
                            <Button
                                mt={2}
                                onClick={handleClose}
                                bg={AuraTextColors.primary}
                                color={AuraTextColors.white}
                                _hover={{ bg: AuraTextColors.secondary }}
                                fontFamily="'Space Mono', monospace"
                                fontWeight={400}
                                size="sm"
                                px={6}
                                borderRadius="8px"
                            >
                                Close
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
                                        Name
                                    </FormLabel>
                                    <Input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your name"
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
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel
                                        color={AuraTextColors.textLight}
                                        fontFamily="'Space Mono', monospace"
                                        fontSize="sm"
                                        fontWeight={400}
                                    >
                                        Email
                                    </FormLabel>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
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
                                </FormControl>

                                <FormControl>
                                    <FormLabel
                                        color={AuraTextColors.textLight}
                                        fontFamily="'Space Mono', monospace"
                                        fontSize="sm"
                                        fontWeight={400}
                                    >
                                        How will you use AuraText?{" "}
                                        <Text as="span" fontSize="xs" opacity={0.5}>
                                            (optional)
                                        </Text>
                                    </FormLabel>
                                    <Select
                                        value={useCase}
                                        onChange={(e) => setUseCase(e.target.value)}
                                        placeholder="Select one..."
                                        bg="rgba(255,255,255,0.04)"
                                        border={`1px solid rgba(255,255,255,0.1)`}
                                        borderRadius="10px"
                                        color={useCase ? AuraTextColors.text : "rgba(255,255,255,0.25)"}
                                        fontFamily="'Space Mono', monospace"
                                        fontSize="sm"
                                        _focus={{
                                            borderColor: AuraTextColors.primary,
                                            boxShadow: `0 0 0 1px ${AuraTextColors.primary}`,
                                        }}
                                        _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
                                        sx={{
                                            option: {
                                                background: AuraTextColors.darkBg,
                                                color: AuraTextColors.text,
                                            },
                                        }}
                                    >
                                        {USE_CASES.map((uc) => (
                                            <option key={uc} value={uc}>
                                                {uc}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <FormLabel
                                        color={AuraTextColors.textLight}
                                        fontFamily="'Space Mono', monospace"
                                        fontSize="sm"
                                        fontWeight={400}
                                    >
                                        How did you hear about AuraText?{" "}
                                        <Text as="span" fontSize="xs" opacity={0.5}>
                                            (optional)
                                        </Text>
                                    </FormLabel>
                                    <Select
                                        value={source}
                                        onChange={(e) => setSource(e.target.value)}
                                        placeholder="Select one..."
                                        bg="rgba(255,255,255,0.04)"
                                        border={`1px solid rgba(255,255,255,0.1)`}
                                        borderRadius="10px"
                                        color={source ? AuraTextColors.text : "rgba(255,255,255,0.25)"}
                                        fontFamily="'Space Mono', monospace"
                                        fontSize="sm"
                                        _focus={{
                                            borderColor: AuraTextColors.primary,
                                            boxShadow: `0 0 0 1px ${AuraTextColors.primary}`,
                                        }}
                                        _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
                                        sx={{
                                            option: {
                                                background: AuraTextColors.darkBg,
                                                color: AuraTextColors.text,
                                            },
                                        }}
                                    >
                                        {SOURCES.map((s) => (
                                            <option key={s} value={s}>
                                                {s}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>

                                <Button
                                    type="submit"
                                    w="full"
                                    isLoading={loading}
                                    loadingText="Joining..."
                                    mt={2}
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
                                    leftIcon={<LuZap />}
                                >
                                    Join Waitlist
                                </Button>

                                <Text
                                    color="rgba(255,255,255,0.25)"
                                    fontSize="xs"
                                    fontFamily="'Space Mono', monospace"
                                    textAlign="center"
                                >
                                    No spam. Unsubscribe anytime.
                                </Text>
                            </VStack>
                        </form>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default WaitlistModal;
