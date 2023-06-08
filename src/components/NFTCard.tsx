import React, { FC } from "react";
import { Chip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Image from "next/image";
import millify from "millify";
import Avatar from "./Avatar/Avatar";
import NFTCardProps from "@/models/NFTCardProps";
import theme from "utils/theme";

const NFTCard: FC<NFTCardProps> = ({
  name = "Clock",
  likes = 1111,
  mediaUrl = "../resources/nft.jpg",
  user = {
    avatar: {
      url: "../resources/avatar.png",
    },
    verified: true,
  },
  price = "~12.2",
  currency = "ETH",
}: NFTCardProps) => {
  return (
    <div className="rounded-xl bg-background-paper items-start p-3">
      <div className="pb-4">
        <Avatar image={user.avatar.url} size={35} verified={user.verified} />
      </div>
      <div className="flex justify-center">
        <Image
          width={400}
          height={400}
          src={mediaUrl}
          className="rounded-xl"
          alt="nft"
        />
      </div>
      <div className="flex justify-between mt-3">
        <div>
          <Typography variant="h6">{name}</Typography>
          <Typography
            variant="body2"
            fontWeight={600}
            color={theme.palette.secondary.main}
          >{`${price} ${currency}`}</Typography>
        </div>
        <Chip
          className="my-auto border-2 border-secondary-main bg-secondary-main bg-opacity-10 font-black"
          size="medium"
          variant="outlined"
          color="secondary"
          icon={<FavoriteIcon className="text-sm" />}
          label={`${millify(likes, { lowercase: true })}`}
        />
      </div>
    </div>
  );
};

export default NFTCard;
