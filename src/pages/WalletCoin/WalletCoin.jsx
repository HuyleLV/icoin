import React from 'react'
import MyModal from '../../components/common/Modal';
import MyTableCoin from '../../components/tables/myTableCoins';
import { useState } from 'react';

const WalletCoin = () => {

  return (
    <div className='w-full container mt-5'>
      <div className="boxHeader h-20 border text-white p-2 bg-[#563672] rounded">
        <p className='p-0 m-0'>Estimated assets value: </p>
        <p>--</p>
      </div>

      <div className="tableCoinHave mt-5">
        <MyTableCoin />
      </div>
    </div>
  )
}

export default WalletCoin
