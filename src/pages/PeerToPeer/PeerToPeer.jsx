import React from 'react'
import { AiOutlineLock } from 'react-icons/ai'
import { styleGlobal } from '../../utils/styleGloba'

const PeerToPeer = () => {
  return (
    <div className='h-screen w-full container py-5'>
      <div className="boxHeader h-20 border text-white p-2 bg-[#563672] rounded h-16" style={{ background: styleGlobal.backgroundColor2 }}>
        <p className='p-0 m-0'>Peer To Peer Trading</p>
      </div>
      <div className="flex flex-col justify-center pt-2 text-center">
        <AiOutlineLock size={100} className='self-center' />
        <p className='text-purple-500 text-lg'>Peer to peer feature was locked</p>
      </div>
    </div>
  )
}

export default PeerToPeer
