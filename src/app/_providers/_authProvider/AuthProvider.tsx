"use client";

import React, { FC, ReactNode, useEffect, useState } from "react";

import AuthContext from "@/app/_context/AuthContext";
import { jwtDecode } from "jwt-decode";

const AuthProvider: FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   if (storedToken) {
  //     setToken(storedToken);
  //     setUser(storedToken); // Replace with logic to decode the token and set user data
  //   }
  //   setLoading(false); // Set loading to false once the check is complete
  // }, []);

  const handleLogin = (token: string) => {
    console.log("login", token);
    setToken(token);
    setUser(token); // TODO remove
    localStorage.setItem("token", token);
    // const decodedToken: any = jwtDecode(token);
    // TODO set token attributes and extract user data
    // just having token is ok for now
    setLoading(false);
    console.log(token);
  };

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

interface AuthProviderProps {
  children: ReactNode;
}

export default AuthProvider;
