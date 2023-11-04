import { StaticImageData } from "next/image";

interface UserProps {
  name: string;
  info?: string;
  avatar?: string | StaticImageData;
  size?: number;
  verified?: boolean;
}

export default UserProps;
