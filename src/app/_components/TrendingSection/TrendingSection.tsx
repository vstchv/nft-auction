import { Container, Grid, MenuItem, Select, Typography } from "@mui/material";

import { FC } from "react";
import NFTCard from "../NFTCard";
import NFTCardProps from "@/app/_models/NFTCardProps";

const TrendingSection: FC<TrendingSectionProps> = ({
  cards = [],
}: TrendingSectionProps) => {
  return (
    <>
      <Container>
        <div className="flex justify-between my-5">
          <Typography variant="h2">Trending</Typography>
          <Select value={1}>
            <MenuItem value={1}>This Week</MenuItem>
          </Select>
        </div>
        <Grid
          className="flex justify-center items-center"
          container
          spacing={2}
        >
          {cards.map((card: NFTCardProps) => (
            <Grid key={card.name} item xs={3}>
              <NFTCard
                user={card.user}
                name={card.name}
                currency={card.currency}
                mediaUrl={card.mediaUrl}
                price={card.price}
                likes={card.likes}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

interface TrendingSectionProps {
  cards: any[];
}

export default TrendingSection;
