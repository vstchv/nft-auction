import { StaticImageData } from "next/image";

interface AvatarProps {
  image?: string | StaticImageData;

  size?: number;

  verified?: boolean;
}

export default AvatarProps;
