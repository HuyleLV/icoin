import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/common/header";
import { useAuth } from "../hooks/useAuth";

import HomePage from "../pages/home/homePage";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Register from "../pages/Register/Register";
import TopWallet from "../pages/Topwallet/TopWallet";
import TranferHistory from "../pages/TranferHistory/TranferHistory";
import WalletCoin from "../pages/WalletCoin/WalletCoin";
import Footer from './../components/common/footer';
import KycUser from './../pages/kycUser/KycUser';
import MyTranferHistory from "../pages/MyTranferHistory/MyTranferHistory";
import PeerToPeer from "../pages/PeerToPeer/PeerToPeer";
import Profile from "../pages/Profile/Profile";

const Router = () => {

  const auth = useAuth();
  console.log(auth);
  return (
    <BrowserRouter>
      <div className="mainBox">
        <Header />
        <div className="border-b" style={{ minHeight: '400px', height: 'fit-content' }}>
          <Routes>
            {/* {
            !auth.auth ? (
              <> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* </> */}
            {/* ) : null
           } */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            {/* {
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </>
            ) : null
          }
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          {
            auth.auth ? (
              <> */}
            <Route path="/kyc" element={<KycUser />} />
            <Route path="/wallet" element={<WalletCoin />} />
            {/* </>
            ) : null
          } */}
            <Route path="*" element={<PageNotFound />} />
            <Route path="/trading-volume" element={<TranferHistory />} />
            <Route path="/top-global" element={<TopWallet />} />
            <Route path="/my-history" element={<MyTranferHistory />} />
            <Route path="/peer-to-peer" element={<PeerToPeer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
};

export default Router;