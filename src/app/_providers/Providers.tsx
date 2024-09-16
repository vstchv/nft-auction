"use client";

import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "./_authProvider/AuthProvider";
import { CssBaseline } from "@mui/material";
import NextAppDirEmotionCacheProvider from "./_themeRegistry/EmotionCache";
import React, { useEffect } from "react";
import ReactQueryWrapper from "./_reactQuery/ReactQueryWrapper";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import theme from "./_themeRegistry/theme";
import useAuth from "../_context/useAuth";
import { useRouter } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const context = useAuth();
  const router = useRouter();
  useEffect(() => {
    console.log(context.user);
  }, [context.user, router]);
  return (
    <>
      <AuthProvider>
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
          <ThemeProvider theme={theme}>
            <ReactQueryWrapper>
              <CssBaseline />
              {children}
              <ToastContainer position="bottom-center" />
            </ReactQueryWrapper>
          </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
      </AuthProvider>
    </>
  );
}
