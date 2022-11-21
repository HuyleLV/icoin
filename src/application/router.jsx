import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/common/header";
import HomePage from "../pages/home/homePage";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Register from "../pages/Register/Register";
import WalletCoin from "../pages/WalletCoin/WalletCoin";
import Footer from './../components/common/footer';
import KycUser from './../pages/kycUser/KycUser';
import TranferHistory from './../pages/TranferHistory/TranferHistory';
import TopWallet from './../pages/Topwallet/TopWallet';
import MyTranferHistory from "../pages/MyTranferHistory/MyTranferHistory";
import PeerToPeer from "../pages/PeerToPeer/PeerToPeer";
import ProtectedRoutes from "./ProtectRoutes";
import Profile from './../pages/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentUser } from "../redux/actions/UserActions";
import { useEffect } from 'react';

const Router = () => {
  // const { currentUser } = useSelector((state) => state.userReducer);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addCurrentUser('da dit pat'))
  // }, []);

  return (
    <BrowserRouter>
      <div className="mainBox">
        <Header />
        <div className="border-b" style={{ minHeight: '400px', height: 'fit-content' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/kyc" element={<KycUser />} />
              <Route path="/wallet" element={<WalletCoin />} />
              <Route path="/my-history" element={<MyTranferHistory />} />
              <Route path="/my-profile" element={<Profile />} />
            </Route>
            <Route path="/trading-volume" element={<TranferHistory />} />
            <Route path="/top-global" element={<TopWallet />} />
            <Route path="/peer-to-peer" element={<PeerToPeer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Router;