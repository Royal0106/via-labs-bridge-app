import { Address } from "viem";

export interface NFT {
  name: string;
  description: string;
  image: string;
  address: Address;
  nftId: string;
}