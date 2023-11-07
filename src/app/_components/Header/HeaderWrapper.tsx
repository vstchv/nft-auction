"use client";

import { useEffect, useState } from "react";

import Header from "./Header";
import useAuth from "@/app/_context/useAuth";

const HeaderWrapper = () => {
  const { user } = useAuth();

  const links: Link[] = [
    { text: "Home", href: "/" },
    { text: "Explore", href: "/explore" },
    { text: "Login", href: "/login" },
    { text: "Profile", href: "/profile", isVisible: user ? true : false },
  ];
  return (
    <>
      <Header links={links} />
    </>
  );
};

export default HeaderWrapper;

interface Link {
  text: string;
  href: string;
  isVisible?: boolean;
}
