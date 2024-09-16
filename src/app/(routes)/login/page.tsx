"use client";

import { useEffect } from "react";

import { FC } from "react";
import useAuth from "@/app/_context/useAuth";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";

const Login: FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/"); // Redirect after determining authentication state
    }
  }, [loading, user, router]);

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator while checking authentication
  }

  return <LoginForm />;
};
export default Login;
