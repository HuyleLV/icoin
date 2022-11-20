import React, { useState, useEffect } from 'react'
import GoogleLoginButton from '../../components/common/googleLoginButton'
import Axios from "axios";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import next from "../../assets/next.png"
import { getTransferHistoryNTC, getTransferHistoryNCO, getTransferHistoryNUSD } from '../../api/useTransferHistory';

const TopWallet = () => {
    const [transferHistoryNTC, setTransferHistoryNTC] = useState([]);
    const [transferHistoryNCO, setTransferHistoryNCO] = useState([]);
    const [transferHistoryNUSD, setTransferHistoryNUSD] = useState([]);

    
    const [total_coin_NCO, setTotal_coin_NCO] = useState(0);
    const [total_coin_NUSD, setTotal_coin_NUSD] = useState(0);
    // const [totalprice, settotalprice] = useState(0);

    const totalpricec = (totalcoin) => {
        return totalcoin * 0.3;
    }

    const totalcoinNTC = () => {
        let totalNTC = 0;
        for ( let i=0; i < transferHistoryNTC.length; i++){
            totalNTC += transferHistoryNTC[i].total_coin_NTC;
        }
        console.log(transferHistoryNTC[0]);
        return totalNTC;
        
    }    
    
    const totalcoinNCO = () => {
        let totalNCO = 0;
        for ( let i=0; i < transferHistoryNCO.length; i++){
            totalNCO += transferHistoryNCO[i].total_coin_NCO;
        }
        return totalNCO;
        
    }   
    
    const totalcoinNUSD = () => {
        let totalNUSD = 0;
        for ( let i=0; i < transferHistoryNUSD.length; i++){
            totalNUSD += transferHistoryNUSD[i].total_coin_NUSD;
        }
        return totalNUSD;
        
    }

    useEffect(() => {
        getTransferHistoryNTC(setTransferHistoryNTC);
        getTransferHistoryNCO(setTransferHistoryNCO);
        getTransferHistoryNUSD(setTransferHistoryNUSD);
    },[]);
    console.log(transferHistoryNTC)
    
    return (
        <>
            <div className='h-screen w-full container' style={{ textAlign: "left", marginTop: "20px" }}>
                <div style={{backgroundColor: "rgb(65 34 93)", padding: "15px", color: "white"}}>
                    <p className='rounded text-lg'>Top Global</p>
                    <h3>Total coin NTC in system = {totalcoinNTC()}</h3>
                    <h3>Total coin NCO in system = {totalcoinNCO()}</h3>
                    <h3>Total coin NUSD in system = {totalcoinNUSD()}</h3>
                </div>
                <table className='border w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Numerical Order</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Wallet Code</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Total Coin</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transferHistoryNTC && transferHistoryNTC.length ? (
                                transferHistoryNTC.slice(0, 10).map((item, index) => (
                                    
                                    <tr className='bg-white' key={item.id}>
                                        <td className='p-3 text-sm text-gray-700 text-center'><b>#{index + 1}</b></td>
                                        <td className='p-3 text-sm text-gray-700 text-center'><b><Link to={``} style={{ color: "black" }}>{item.coin_code_NTC}</Link></b></td>
                                        <td className='p-3 text-sm text-gray-700 text-center'>{item.total_coin_NTC}<b style={{ color: "#0033CC" }}> NTC</b></td>
                                        <td className='p-3 text-sm text-gray-700 text-center'>{totalpricec(item.total_coin_NTC)} <b style={{ color: "#0033CC" }}> USD</b></td>
                                        <td className='p-3 text-sm text-gray-700 text-center'>{item.total_coin_NTC} <b style={{ color: "#0033CC" }}> USD</b></td>
                                        
                                    </tr>
                                ))
                            ) : null
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TopWallet