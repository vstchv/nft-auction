import React from "react";
import Image from "next/image";
import AvatarPlaceholder from "../../resources/avatar.png";
import VerifiedBadge from "../../resources/verified.svg";
import styles from "./Avatar.module.css";
import AvatarProps from "@/models/AvatarProps";

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
