"use client";

import { useEffect, useState } from "react";
import {
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { Address, ContractFunctionArgs } from "viem";
import { HELLO_ERC721_ADDRESS } from "@/app/config/constants";
import { ERC721Bridgeable } from "@/app/abis/ERC721Bridgeable";

export const useBridge = () => {
  const [hash, setHash] = useState<Address>();
  const { isPending, error, writeContract } = useWriteContract();
  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({ hash });

  const bridge = (
    args: ContractFunctionArgs<
      typeof ERC721Bridgeable,
      "nonpayable",
      "bridge"
    >,
  ) => writeContract({
    address: HELLO_ERC721_ADDRESS,
    abi: ERC721Bridgeable,
    functionName: "bridge",
    args,
  }, {
    onSuccess: (data) => {
      setHash(data);
    },
  });

  useEffect(() => {
    setHash(undefined);
  }, [isConfirmed]);

  return {
    bridge,
    error,
    isLoading: isPending || isConfirming,
  };
};