"use client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactQueryWrapper from "../_reactQuery/ReactQueryWrapper";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider theme={theme}>
          <ReactQueryWrapper>
            <CssBaseline />
            {children}
            <ToastContainer />
          </ReactQueryWrapper>
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
}
