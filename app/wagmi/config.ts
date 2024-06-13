import { http, createConfig } from "wagmi";
import { sepolia, polygonAmoy } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [sepolia, polygonAmoy],
  ssr: true,
  connectors: [
    injected(),
  ],
  transports: {
    [sepolia.id]: http(),
    [polygonAmoy.id]: http(),
  },
});