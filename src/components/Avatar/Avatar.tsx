import React from "react";
import Image from "next/image";
import AvatarImg from "../../resources/avatar.png";
import VerifiedBadge from "../../resources/verified.svg";
import styles from "./Avatar.module.css";

const Avatar = ({ size = 90, verified, image }: AvatarProps) => {
  return (
    <div
      className={styles.avatarContainer}
      style={{ width: size, height: size }}
    >
      <Image src={AvatarImg || image} className={styles.avatar} alt="avatar" />
      {verified && (
        <Image
          src={VerifiedBadge}
          className={styles.badge}
          alt="verifiedBadge"
        />
      )}
    </div>
  );
};

interface AvatarProps {
  image?: string; // not sure if this is the right type or should I pass the image as a prop?
  size?: number;
  verified?: boolean;
}

export default Avatar;
