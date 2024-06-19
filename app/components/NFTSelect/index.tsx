import { forwardRef, useState } from "react";
import { useChainId } from "wagmi";
import { Address } from "viem";
import {
  Stack,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NFTsDialog from "@/app/components/NFTSelect/NFTsDialog";
import NFTCard from "@/app/components/NFTCard";
import { NFT } from "@/app/models/NFT";

interface Props {
  nftAddress: Address;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

const NFTSelect = forwardRef<HTMLDivElement, Props>(
  function NFTSelect(props, ref) {
    const { nftAddress, value, onChange, error } = props;

    const [NFTsDialogOpen, setNFTsDialogOpen] = useState<boolean>(false);
    const [selectedNFT, setSelectedNFT] = useState<NFT>();

    const onNFTsDialogClose = () => {
      setNFTsDialogOpen(false);
    };

    const onAdd = () => {
      setNFTsDialogOpen(true);
    };

    const onEdit = () => {
      setNFTsDialogOpen(true);
    };

    const onSelectNFT = (nft: NFT) => {
      setSelectedNFT(nft);
      onChange(nft.nftId);
    };

    return (
      <Stack ref={ref} sx={{ mb: 2 }}>

        {(value && selectedNFT) ? (
          <NFTCard
            nft={selectedNFT}
            onClick={onEdit}
          />
        ) : (
          <Stack
            height={300}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button size={"large"} variant={"outlined"} onClick={onAdd}>
              <Stack>
                <Stack alignItems={"center"}>
                  <AddIcon fontSize={"large"}/>
                </Stack>
                <span>Select your NFT</span>
              </Stack>
            </Button>
          </Stack>
        )}

        <NFTsDialog
          open={NFTsDialogOpen}
          onClose={onNFTsDialogClose}
          nftAddress={nftAddress}
          selectedNftId={value}
          onSelectNFT={onSelectNFT}
        />
      </Stack>
    );
  });

export default NFTSelect;