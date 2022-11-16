import React, { useState, useEffect } from 'react'
import GoogleLoginButton from '../../components/common/googleLoginButton'
import Axios from "axios";
import next from "../../assets/next.png"

const TranferHistory = () => {
    const [TransferHistory, setTransferHistory] = useState([]);
    // const [totalprice, settotalprice] = useState(0);

    const getTransferHistory = async () => {
        try {
          const res = await Axios.get(
            "http://localhost:5000/api/v1/transfer/getHistoryTranfer"
          );
          if (res) {
            setTransferHistory(res.data.data);
          }
        } catch (error) {
          console.log(error);
        }
      };

      const totalpricec = (totalcoin) => {
        let totalPrice = parseFloat(totalcoin) * 0.3;
        return totalPrice;
      }

      useEffect(() => {
            getTransferHistory();
            totalpricec();
        });

    return (
        <>
            <div className='h-screen w-full container' style={{textAlign: "left", marginTop: "20px"}}>
                <div>
                    <h1 style={{backgroundColor: "#210c34", color: "white", padding: "15px"}}>Transfer History</h1>
                </div>
                <table className='border w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Wallet Transfer</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'><img src={next} style={{width: "20px"}}/></th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Wallet Receiving</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Transfer Date</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Transaction validation</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Total Coin</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        TransferHistory && TransferHistory.length ? (
                            TransferHistory.slice(0, 10).map((item, index) => (
                                <tr className='bg-white border-b' key={item.id}>
                                    <td className='p-3 text-sm text-gray-700 text-center'><b>{item.transfer_wallet_code}</b></td>
                                    <td className='p-3 text-sm text-gray-700 text-center'><img src={next} style={{width: "20px"}}/></td>
                                    <td className='p-3 text-sm text-gray-700 text-center'><b>{item.take_wallet_code}</b></td>
                                    <td className='p-3 text-sm text-gray-700 text-center'><b style={{ fontSize: "12px" }}>{(new Date(item.createdAt)).toString().slice(0, 31)}</b></td>
                                    <td className='p-3 text-sm text-gray-700 text-center'><b>6/6</b></td>
                                    <td className='p-3 text-sm text-gray-700 text-center'>{item.total_coin}<b style={{color: "#0033CC"}}>NTC</b></td>
                                    <td className='p-3 text-sm text-gray-700 text-center'>{totalpricec(item.total_coin)} <b style={{color: "#0033CC"}}>USD</b></td>
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

export default TranferHistory