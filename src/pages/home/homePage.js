import React, { useEffect } from "react";
import { useState } from "react";
import TableCoins from "./../../components/tables/tableCoins";
import { getListCoin } from "./../../api/useGetCoin";

const HomePage = () => {
  const [lstCoin, setLstCoin] = useState([]);

  useEffect(() => {
    getListCoin(setLstCoin);
  }, []);

  return (
    <div className="container">
      <div className="banner w-full flex h-60 border">
        <div className="leftBox flex-1">hello w</div>
        <div className="rightBox flex-1">right box</div>
      </div>
      <div className="listCoin">
        <h4>Cryptocurrency Prices</h4>
        <TableCoins data={lstCoin} />
      </div>
      <div className="roadMap">roadmap</div>
    </div>
  );
};

export default HomePage;
