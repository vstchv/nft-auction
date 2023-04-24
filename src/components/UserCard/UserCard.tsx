import React, { FC } from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./UserCard.module.css";

interface UserProps {
  name: string;
  info?: string;
  avatar?: string;
  size?: number;
  verified?: boolean;
}

const UserCard: FC<UserProps> = ({
  name = "",
  info = "",
  avatar = "",
  size = 55,
  verified = false,
}) => {
  return (
    <div className="flex items-center">
      <Avatar image={avatar} size={size} verified={verified} />
      <div className={styles.name}>{name}</div>
      {info && <div className={styles.info}>{info}</div>}
    </div>
  );
};

export default UserCard;
