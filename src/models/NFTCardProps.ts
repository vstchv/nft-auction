import { StaticImageData } from "next/image";

interface NFTCardProps {
  name?: string;
  likes?: number;
  mediaUrl?: string | StaticImageData;
  user?: {
    avatar: {
      url: string | StaticImageData;
    };
    verified?: boolean;
  };
  price?: string;
  currency?: string;
}

export default NFTCardProps;
