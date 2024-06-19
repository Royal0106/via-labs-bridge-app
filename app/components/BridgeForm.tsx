"use client";

import { useEffect, useState } from "react";
import {
  Paper,
  Stack,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  Alert,
  IconButton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SwapVertIcon from "@mui/icons-material/SwapVert";
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
import { HELLO_ERC721_ADDRESS } from "@/app/config/constants";
import { useBridge } from "@/app/hooks/erc721bridgeable";

import NFTSelect from "./NFTSelect";

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
    setValue("nftId", "");
    setValue("destination", "");
  }, [chainId, setValue]);

  return (
    <Paper elevation={0} sx={{ p: { xs: 2, md: 3 } }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={5}>
            <FormControl fullWidth sx={{ mb: 8 }}>
              <InputLabel>Collection</InputLabel>
              <Select
                value="H721"
                label="Collection"
                disabled
              >
                <MenuItem value={"H721"}>H721</MenuItem>
              </Select>
            </FormControl>

            <Stack>
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
              <Stack alignItems={"center"} my={1}>
                <IconButton color={"primary"}>
                  <SwapVertIcon/>
                </IconButton>
              </Stack>
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
          </Grid>
          <Grid item xs={12} sm={7}>
            <Controller
              control={control}
              render={({ field }) => (
                <NFTSelect
                  nftAddress={HELLO_ERC721_ADDRESS[chainId]}
                  {...field}
                  error={!!errors.nftId}
                />
              )}
              name={"nftId"}
            />
            <Stack>
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
            <Stack>
              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {(error as BaseError).shortMessage || error.message}
                </Alert>
              )}
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
    ;
}