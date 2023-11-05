import AvatarPlaceholder from "../../resources/avatar.png";
import AvatarProps from "@/app/_models/AvatarProps";
import Image from "next/image";
import React from "react";
import VerifiedBadge from "../../resources/verified.svg";
import styles from "./Avatar.module.css";

const Avatar = ({ size = 90, verified, image }: AvatarProps) => {
  return (
    <div
      className={styles.avatarContainer}
      style={{ width: size, height: size }}
    >
      <Image
        src={AvatarPlaceholder || image}
        className={styles.avatar}
        alt="avatar"
        fill={true}
      />
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

export default Avatar;
