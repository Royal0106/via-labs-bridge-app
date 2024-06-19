import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle, Grid,
  IconButton, Stack, Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NFTCard from "@/app/components/NFTCard";
import { useNFTsByWallet } from "@/app/hooks/nfts";
import { useAccount, useChainId } from "wagmi";
import { Address } from "viem";
import { NFT } from "@/app/models/NFT";

interface Props {
  open: boolean;
  onClose: () => void;
  nftAddress: Address,
  selectedNftId?: string;
  onSelectNFT: (nft: NFT) => void;
}

const NFTsDialog: FC<Props> = ({
  open,
  onClose,
  nftAddress,
  selectedNftId,
  onSelectNFT,
}) => {
  const chainId = useChainId();
  const { address } = useAccount();

  const { data } = useNFTsByWallet(
    chainId, nftAddress, address,
  );

  const onNFTClick = (nft: NFT) => {
    onSelectNFT(nft);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll={"paper"}
      maxWidth={"md"}
      fullWidth
    >
      <DialogTitle>Select NFT</DialogTitle>
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
        }}
      >
        <CloseIcon/>
      </IconButton>
      <DialogContent>
        {(data && data.length) ? (
          <Grid container spacing={2}>
            {data?.map((nft) => (
              <Grid item xs={12} md={4} key={nft.address + nft.nftId}>
                <NFTCard
                  nft={nft}
                  selected={selectedNftId === nft.nftId}
                  onClick={() => onNFTClick(nft)}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Stack alignItems={"center"}>
            <Typography>
              No tokens available.
            </Typography>
          </Stack>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NFTsDialog;