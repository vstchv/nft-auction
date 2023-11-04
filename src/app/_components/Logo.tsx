import Image from "next/image";
import LogoDefault from "../resources/Logo-default.svg";
import LogoMuted from "../resources/Logo-muted.svg";
import React from "react";

const Logo = ({ muted }: LogoProps) => {
  return <Image src={muted ? LogoMuted : LogoDefault} alt="logo" />;
};

export default Logo;
