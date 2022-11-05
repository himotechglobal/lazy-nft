import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from "./Components/Pages/Home/Home";
import Profile from "./Components/Pages/Profile/Profile";
import "bootstrap-icons/font/bootstrap-icons.css";
import HiddenNFT from "./Components/HiddenNFT/HiddenNFT";
import Explore from "./Components/Pages/Explore/Explore";
import NFTdetailpage from "./Components/Pages/NFTdetailpage/NFTdetailpage";
import Wallet from "./Components/Pages/Wallet/Wallet";
import ConfirmPassword from "./Components/ConfirmPassword/ConfirmPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hidden-nft" element={<HiddenNFT />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/nftdetailpage/:id" element={<NFTdetailpage />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;