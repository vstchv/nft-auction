"use client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
}
