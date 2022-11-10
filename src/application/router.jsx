import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/common/header";

import HomePage from "../pages/home/homePage";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const Router = () => (
  <BrowserRouter>
    <Header />
    <div style={{ height: 480 }}>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default Router;