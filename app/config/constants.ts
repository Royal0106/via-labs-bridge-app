import { Address } from "viem";

export const HELLO_ERC721_ADDRESS: {
  [key: number]: Address
} = {
  11155111: "0x31c15D2b8eb5D96549B7cEF97BF5229A7BD1A12D",
  80002: "0xF63C5B82d72Fd08c0CCb2361A6d211CF0D7106A8",
};

export const CHAIN_ID_2_MORALIS_CHAIN: {
  [key: number]: string
} = {
  11155111: "sepolia",
  80002: "polygon amoy",
};