"use client";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    AspectRatio,
    Box,
} from "@chakra-ui/react";
import React from "react";
import { AuraTextColors } from "#/src/utils/Colors";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
    // Extract video ID from standard YouTube URL if needed, or assume embed URL is passed
    // For https://youtu.be/Fh1bW8Kcnlc -> Fh1bW8Kcnlc
    const videoId = "Fh1bW8Kcnlc";
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
            <ModalOverlay backdropFilter="blur(10px)" bg="rgba(0, 0, 0, 0.8)" />
            <ModalContent bg="transparent" boxShadow="none" maxW="90vw">
                <ModalCloseButton
                    color="white"
                    bg="rgba(255, 255, 255, 0.1)"
                    _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
                    zIndex={10}
                />
                <ModalBody p={0}>
                    <Box
                        rounded="2xl"
                        overflow="hidden"
                        border={`1px solid ${AuraTextColors.primary}40`}
                        boxShadow={`0 0 40px ${AuraTextColors.primary}20`}
                    >
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                title="AuraText Demo"
                                src={embedUrl}
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </AspectRatio>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default VideoModal;
