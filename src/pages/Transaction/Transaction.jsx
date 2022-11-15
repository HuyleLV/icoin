import React from 'react'
import MyTableCoin from './../../components/tables/myTableCoins';

const Transaction = () => {
  return (
    <div className='w-full p-5'>
      <div className="boxHeader h-20 border p-2 bg-purple-300 rounded">
        <p className='p-0 m-0'>Estimated assets value: </p>
        <p>--</p>
      </div>
      <div className="trasactionForm">
        <div className="input-long flex flex-col w-[250px] my-2">
          <label>Number:</label>
          <input className='border' />
        </div>
        <div className="input-long flex flex-col w-[250px] my-2">
          <label>ID Wallet Reciever:</label>
          <input className='border' />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Send</button>
      </div>
      <div className="tableCoinHave">
        <MyTableCoin />
      </div>
    </div>
  )
}

export default Transaction
