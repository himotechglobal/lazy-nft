import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import "bootstrap-icons/font/bootstrap-icons.css";
import HiddenNFT from "./components/HiddenNFT/HiddenNFT";
import Explore from "./pages/Explore/Explore";
import NFTdetailpage from "./pages/NFTdetailpage/NFTdetailpage";
import Wallet from "./pages/Wallet/Wallet";
import Reset from "./pages/Register/Reset";
import Signup from "./pages/Register/Signup";
import Login from "./pages/Register/Login";
import Forget from "./pages/Register/Forget";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/hidden-nft" element={<HiddenNFT />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/wallet" element={<Wallet />} />
          <Route exact path="/nftdetailpage/:id" element={<NFTdetailpage />} />
          <Route exact path="/signup" name="Signup Page" element={<Signup />} />
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/forget" name="Reset Page" element={<Forget />} />
          <Route exact path="/reset" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
