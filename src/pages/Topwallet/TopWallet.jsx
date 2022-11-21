import React, { useState, useEffect } from 'react'
import GoogleLoginButton from '../../components/common/googleLoginButton'
import Axios from "axios";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import next from "../../assets/next.png"
import { getTransferHistory } from '../../api/useTransferHistory';
import { styleGlobal } from '../../utils/styleGloba';

const TopWallet = () => {
    const [transferHistory, setTransferHistory] = useState([]);
    // const [totalprice, settotalprice] = useState(0);

    const totalpricec = (totalcoin) => {
        return parseFloat(totalcoin) * 0.3;
    }

    useEffect(() => {
        getTransferHistory(setTransferHistory);
    }, []);

    return (
        <>
            <div className='h-screen w-full container py-5'>
                <div className="boxHeader h-20 border text-white p-2 bg-[#563672] rounded h-16" style={{ background: styleGlobal.backgroundColor2 }}>
                    <p className='p-0 m-0'>Top Global</p>

                </div>
                <div className="my-2 flex sm:flex-row flex-col">
                    <div className="flex flex-row mb-1 sm:mb-0">
                        <div className="relative">
                            <select
                                className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative">
                            <select
                                className="appearance-none h-full rounded-r border sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                <option>All</option>
                                <option>NTC</option>
                                <option>NCO</option>
                                <option>NUSD</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="block relative">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input placeholder="Search"
                            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
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