import React, { useState, useEffect } from 'react'
import GoogleLoginButton from '../../components/common/googleLoginButton'
import Axios from "axios";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import next from "../../assets/next.png"
import { getTransferHistory } from '../../api/useTransferHistory';

const TopWallet = () => {
    const [transferHistory, setTransferHistory] = useState([]);
    // const [totalprice, settotalprice] = useState(0);

    const totalpricec = (totalcoin) => {
        return parseFloat(totalcoin) * 0.3;
    }

    useEffect(() => {
        getTransferHistory(setTransferHistory);
    },[]);

    return (
        <>
            <div className='h-screen w-full container' style={{ textAlign: "left", marginTop: "20px" }}>
                <div>
                    <p style={{ backgroundColor: "#210c34", color: "white", padding: "15px" }} className='rounded text-lg'>Top Global</p>
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
                            transferHistory && transferHistory.length ? (
                                transferHistory.slice(0, 10).map((item, index) => (
                                    <tr className='bg-white' key={item.id}>
                                        <td className='p-3 text-sm text-gray-700 text-center'><b>#{index + 1}</b></td>
                                        <td className='p-3 text-sm text-gray-700 text-center'><b><Link to={``} style={{ color: "black" }}>{item.wallet_code}</Link></b></td>
                                        <td className='p-3 text-sm text-gray-700 text-center'>{item.total_coin}<b style={{ color: "#0033CC" }}> NTC</b></td>
                                        <td className='p-3 text-sm text-gray-700 text-center'>{totalpricec(item.total_coin)} <b style={{ color: "#0033CC" }}> USD</b></td>
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