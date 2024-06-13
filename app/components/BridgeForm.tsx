"use client";

import { useEffect, useState } from "react";
import {
  Stack,
  Button,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  TextField,
  Alert,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  useAccount,
  useChainId,
  useConnect,
  useSwitchChain,
  type BaseError,
} from "wagmi";
import { useBridge } from "@/app/hooks/erc721bridgeable";

type FormData = {
  destination: string
  nftId: string
}

const schema = yup.object({
  destination: yup.string().required(),
  nftId: yup.string().required(),
}).required();

export default function BridgeForm() {
  const [isSwitchingChain, setIsSwitchingChain] = useState<boolean>(false);

  const { chains, switchChain } = useSwitchChain();
  const chainId = useChainId();
  const { connectors, connect } = useConnect();
  const { isConnected, address } = useAccount();

  const { bridge, error, isLoading } = useBridge();

  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      destination: "",
      nftId: "",
    },
  });

  const onWalletConnect = () => {
    connect({ connector: connectors[0], chainId });
  };

  const onSourceNetworkChange = (e: SelectChangeEvent<number>) => {
    setIsSwitchingChain(true);
    switchChain({
      chainId: Number(e.target.value),
    }, {
      onSettled: () => {
        setIsSwitchingChain(false);
      },
    });
  };

  const onSubmit = (data: FormData) => {
    if (!address) {
      return;
    }

    bridge([BigInt(data.destination), address, BigInt(data.nftId)]);
  };

  useEffect(() => {
    setValue("destination", "");
  }, [chainId, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={4}>
        <FormControl
          fullWidth
          disabled={isSwitchingChain}
        >
          <InputLabel>Source Network</InputLabel>
          <Select
            label="Source Network"
            value={chainId}
            onChange={onSourceNetworkChange}
          >
            {chains.map((chain => (
              <MenuItem
                key={chain.id}
                value={chain.id}
              >
                {chain.name}
              </MenuItem>
            )))}
          </Select>
        </FormControl>
        <FormControl fullWidth error={!!errors.destination}>
          <InputLabel>Destination Network</InputLabel>
          <Controller
            control={control}
            render={({ field }) => (
              <Select
                label="Destination Network"
                {...field}
              >
                {chains.map((chain => (
                  <MenuItem
                    key={chain.id}
                    value={chain.id}
                    disabled={chain.id === chainId}
                  >
                    {chain.name}
                  </MenuItem>
                )))}
              </Select>
            )}
            name={"destination"}
          />
        </FormControl>
      </Stack>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
        <FormControl fullWidth>
          <InputLabel>Collection</InputLabel>
          <Select
            value="H721"
            label="Collection"
            disabled
          >
            <MenuItem value={"H721"}>H721</MenuItem>
          </Select>
        </FormControl>
        <Controller
          control={control}
          render={({ field }) => (
            <TextField
              label="NFT ID"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.nftId}
            />
          )}
          name={"nftId"}
        />
      </Stack>
      <Stack mb={2}>
        {isConnected ? (
          <LoadingButton
            variant="contained"
            size="large"
            type="submit"
            loading={isLoading}
          >
            <span>Bridge</span>
          </LoadingButton>
        ) : (
          <Button
            variant="outlined"
            size="large"
            onClick={onWalletConnect}
          >
            Connect Wallet
          </Button>
        )}
      </Stack>
      <Stack mb={2}>
        {error && (
          <Alert severity="error">
            {(error as BaseError).shortMessage || error.message}
          </Alert>
        )}
      </Stack>
    </form>
  );
}