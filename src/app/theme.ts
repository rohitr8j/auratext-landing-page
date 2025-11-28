import { Inter } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

const inter = Inter({
  subsets: ["latin"],
});

export const customTheme = extendTheme({
  fonts: {
    heading: "'Space Mono', monospace",
    body: "'Inter', sans-serif",
    mono: "'Space Mono', monospace",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
