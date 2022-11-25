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
import BizarroWorld from "./pages/BizarroWorld/BizarroWorld";
import Rabbithole from "./pages/Rabbithole/Rabbithole";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/User/UserContext";
import { actionTypes } from "./context/User/UserReducer";
import { viewProfile } from "./api/ApiCall/viewProfile";
import { useQuery } from "react-query";
import AuthGuard from "./protectedRoutes/AuthGaurd";
import UserGuard from "./protectedRoutes/UserGuard"
import { toast } from "react-toastify";

function App() {
  const [{ token }, dispatch] = useContext(UserContext);

 const tokens=token?token: localStorage.getItem("token");
    const {refetch } = useQuery(
    ["viewProfile", tokens],
    () => viewProfile(tokens), {
    onSuccess: (data) => {
      dispatch({ type: actionTypes.SET_USER, value: data?.data });
    },
  });

  useEffect(() => {
      const jwtToken = localStorage.getItem("token");
      if (jwtToken) {
        dispatch({ type: actionTypes.SET_TOKEN, value: jwtToken });
        refetch?.()
      }
  }, [dispatch,token]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserGuard><Home /></UserGuard>} />
          <Route exact path="/:userName" element={<Profile />} />
          <Route exact path="/hidden-nft" element={<AuthGuard><HiddenNFT /></AuthGuard>} />
          <Route exact path="/explore" element={<AuthGuard><Explore/></AuthGuard>} />
          <Route exact path="/wallet" element={<AuthGuard><Wallet /></AuthGuard>} />
          <Route exact path="/nftdetailpage/:id" element={<NFTdetailpage />} />
          <Route exact path="/signup" name="Signup Page" element={<UserGuard><Signup/></UserGuard>} />
          <Route exact path="/login" name="Login Page" element={<UserGuard><Login/></UserGuard>} />
          <Route exact path="/forget" name="Reset Page" element={<UserGuard><Forget/></UserGuard>} />
          <Route exact path="/reset" element={<UserGuard><Reset /></UserGuard>} />
          <Route exact path="/bizarro-world" element={<BizarroWorld />} />
          <Route exact path="/rabit-hole" element={<Rabbithole />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
