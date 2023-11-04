import React, { FC } from "react";
import Avatar from "../Avatar/Avatar";
import AvatarPlaceholder from "../../resources/avatar.png";
import UserProps from "@/models/UserProps";

const UserCard: FC<UserProps> = ({
  name = "",
  info = "",
  avatar = AvatarPlaceholder,
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
