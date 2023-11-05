import { StaticImageData } from "next/image";

interface NFTCardProps {
  currency?: string;

  likes?: number;

  mediaUrl?: string | StaticImageData;

  name?: string;

  price?: string;

  user?: {
    avatar: {
      url: string | StaticImageData;
    };
    verified?: boolean;
  };
}

export default NFTCardProps;
