import Image from "next/image";
import LogoDefault from "../_resources/Logo-default.svg";
import LogoMuted from "../_resources/Logo-muted.svg";
import React from "react";

const Logo = ({ muted }: LogoProps) => {
  return <Image src={muted ? LogoMuted : LogoDefault} alt="logo" />;
};

export default Logo;
