import React, { FC } from "react";
import Avatar from "../Avatar/Avatar";

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
    <div className="flex justify-start items-start">
      <Avatar image={avatar} size={size} verified={verified} />
      <div className="flex flex-col ml-3">
        <h3 className="font-black">{name}</h3>
        {info && <span className="text-secondary-main text-sm">{info}</span>}
      </div>
    </div>
  );
};

export default UserCard;
