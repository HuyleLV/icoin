import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/common/header";
import { useAuth } from "../hooks/useAuth";

import HomePage from "../pages/home/homePage";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Register from "../pages/Register/Register";
import WalletCoin from "../pages/WalletCoin/WalletCoin";
import Footer from './../components/common/footer';
import KycUser from './../pages/kycUser/KycUser';

const Router = () => {

  const auth = useAuth();
  console.log(auth);
  return (
    <BrowserRouter>
      <Header />
      <div className="border-b" style={{ minHeight: '400px' }}>
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
            auth.auth ? (
              <> */}
          <Route path="/kyc" element={<KycUser />} />
          <Route path="/wallet" element={<WalletCoin />} />
          {/* </>
            ) : null
          } */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
};

export default Router;