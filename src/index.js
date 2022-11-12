import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { publicProvider } from 'wagmi/providers/public';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { publicProvider } from 'wagmi/providers/public';

import '@rainbow-me/rainbowkit/styles.css';
import {
  connectorsForWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura'
// import { publicProvider } from 'wagmi/providers/public';
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  trustWallet,
  braveWallet,
  omniWallet
} from '@rainbow-me/rainbowkit/wallets';
import { UserProvider } from './context/User/UserContext';

const { chains,provider,webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    // infuraProvider({ apiKey: '782faee1db2f45a8842d36ff4c72e4e4'}),
    publicProvider()
  ]
);
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains ,shimDisconnect:true}),
      trustWallet({chains}),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      coinbaseWallet({ chains }),
      omniWallet({chains}),
      braveWallet({chains,shimDisconnect:true})
    ],
  },
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
})

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <UserProvider>
   <WagmiConfig client={wagmiClient}>
   <RainbowKitProvider chains={chains} modalSize='compact' >
   <QueryClientProvider client={queryClient}>
        <App />
       <ToastContainer />
   </QueryClientProvider>
    </RainbowKitProvider>
    </WagmiConfig>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
