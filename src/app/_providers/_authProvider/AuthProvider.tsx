"use client";

import React, { FC, ReactNode, useState } from "react";

import AuthContext from "@/app/_context/AuthContext";

const AuthProvider: FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  const handleSetUser = (user: string | null): void => {
    setUser(user);
  };

  const handleLogin = (user: string) => {
    setUser(user);
    localStorage.setItem("user", user);
    console.log(user)
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: handleSetUser,
        login: handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

interface AuthProviderProps {
  children: ReactNode;
}

export default AuthProvider;
