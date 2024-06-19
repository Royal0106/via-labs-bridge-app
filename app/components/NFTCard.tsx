import { FC } from "react";
import { Card, CardHeader, CardMedia } from "@mui/material";
import { NFT } from "@/app/models/NFT";

interface Props {
  nft: NFT;
  selected?: boolean;
  onClick?: () => void;
}

const NFTCard: FC<Props> = ({ nft, selected, onClick }) => {
  return (
    <Card
      variant={"outlined"}
      sx={{
        borderColor: selected ? "primary.main" : undefined,
      }}
      onClick={onClick}
    >
      <CardHeader
        title={nft.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={nft.image}
        alt={nft.name}
      />
    </Card>
  );
};

export default NFTCard;