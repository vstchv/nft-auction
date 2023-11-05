"use client";

import "react-toastify/dist/ReactToastify.css";

import { CssBaseline } from "@mui/material";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import React from "react";
import ReactQueryWrapper from "../_reactQuery/ReactQueryWrapper";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import theme from "./theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider theme={theme}>
          <ReactQueryWrapper>
            <CssBaseline />
            {children}
            <ToastContainer position="bottom-center" />
          </ReactQueryWrapper>
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
}
