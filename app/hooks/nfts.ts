"use client";

import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import axios from "axios";
import {
  CHAIN_ID_2_MORALIS_CHAIN,
} from "@/app/config/constants";
import { NFT } from "@/app/models/NFT";

const MORALIS_API_KEY = process.env.NEXT_PUBLIC_MORALIS_API_KEY;

export const useNFTsByWallet = (
  chainId: number, nft_address: Address, wallet_address?: Address,
) => {
  const fetchNFTsByWallet = () => axios.get(
    `https://deep-index.moralis.io/api/v2.2/${wallet_address}/nft`, {
      headers: {
        "x-api-key": MORALIS_API_KEY,
      },
      params: {
        chain: CHAIN_ID_2_MORALIS_CHAIN[chainId],
        normalizeMetadata: true,
        token_addresses: [nft_address],
      },
    }).then((response) => response.data);

  return useQuery({
    queryKey: ["nftsByWallet", chainId, nft_address, wallet_address],
    queryFn: fetchNFTsByWallet,
    select: (data): NFT[] => {
      const { result } = data;

      return result.map((item: any) => {
        const normalizedMetadata = item.normalized_metadata;

        if (normalizedMetadata.name) {
          return {
            name: normalizedMetadata.name,
            description: normalizedMetadata.description,
            image: normalizedMetadata.image,
            address: item.token_address,
            nftId: item.token_id,
          };
        } else {
          return {
            name: item.name,
            description: "",
            image: "",
            address: item.token_address,
            nftId: item.token_id,
          };
        }
      });
    },
    enabled: !!chainId && !!nft_address && !!wallet_address,
  });
};