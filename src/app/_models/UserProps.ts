import { StaticImageData } from "next/image";

interface UserProps {
  avatar?: string | StaticImageData;

  info?: string;

  name: string;

  size?: number;

  verified?: boolean;
}

export default UserProps;
