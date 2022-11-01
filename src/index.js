import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@rainbow-me/rainbowkit/styles.css';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  chain,
} from 'wagmi'
import { Buffer } from 'buffer'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const bsc = {
//   id:56,
//   name: 'Binance Smart Chain',
//   network: 'Binance Smart Chain',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'BNB',
//     symbol: 'BNB',
//   },
//   rpcUrls: {
//     default: 'https://bsc-dataseed.binance.org/',
//   },
//   blockExplorers: {
//     default: { name: 'BscScan', url: 'https://bscscan.com' },
//   },
//   testnet: true,
// }
// polyfill Buffer for client
if (!window.Buffer) {
  window.Buffer = Buffer
}
const { chains,provider,webSocketProvider } = configureChains([
  chain.mainnet,chain.polygon,chain.arbitrum,chain.optimism
], [
  publicProvider()
  // [jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })]
]);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const client = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
  })

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
      <QueryClientProvider client={queryClient}>
       <App />
       <ToastContainer />{" "}
       </QueryClientProvider>
       </RainbowKitProvider>
       </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();