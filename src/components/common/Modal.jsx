import React, { useRef } from 'react'
import { useState } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';
import { QRCodeSVG } from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect } from 'react';

const MyModal = ({ visible, onClose, title, isWidthDraw, walletCode, qrCode }) => {


    const [copySuccess, setCopySuccess] = useState(false);

    const textAreaRef = useRef(null);

    const handleOnClose = (e) => {
        if (e.target.id === 'container')
            onClose()
    }

    useEffect(() => {
        return () => {
            setCopySuccess(false);
        }
    }, [])

    if (!visible) return null;


    return (
        <div id='container' onClick={handleOnClose} className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 rounded shadow">
                <div className="box w-[400px] h-[400px]">
                    <p className='text-center font-bold mt-1 text-lg'>
                        {title}
                    </p>
                    {
                        !isWidthDraw ? (
                            <>
                                <div className="boxImage w-50 h-50" style={{ margin: '0 auto' }}>
                                    <QRCodeSVG value={walletCode} renderAs="canvas" width="100%" height="100%" />,
                                    {/* <img src='https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png' /> */}
                                </div>
                                <div className='text-center my-4'>
                                    <div className="borderLeft"></div>
                                    <p className='font-bold'>Or</p>
                                    <div className="borderLeft"></div>
                                </div>
                                <div className="border p-1 rounded codeWallet text-center flex items-center justify-center">
                                    <span className='whitespace-nowrap overflow-hidden text-ellipsis'>{walletCode}</span>
                                    <CopyToClipboard text={walletCode}
                                        onCopy={() => setCopySuccess(true)}>
                                        <div className='pointer-events-auto ml-2 border rounded bg-gray-100 p-1 cursor-pointer'>
                                            <AiOutlineCopy />
                                        </div>
                                    </CopyToClipboard>
                                </div>
                                {
                                    copySuccess && (
                                        <div className="notifi w-full text-center mt-2">
                                            <span className='border rounded p-1 w-full text-center text-green-500 font-semibold text-xs'>Copied</span>
                                        </div>
                                    )
                                }
                            </>
                        ) : (
                            <div className="withDraw mt-4 px-5">
                                <div className="textLong rounded flex flex-col my-2">
                                    <span className='font-semibold'>Address Wallet Reciever (NTC)</span>
                                    <input placeholder='Enter address' type='text' class='border w-full h-8 pl-2' />
                                </div>
                                <div className="textLong rounded flex flex-col my-2">
                                    <div className="label flex justify-between items-center">
                                        <span className='font-semibold'>Number Coin</span>
                                        <span className='text-xs cursor-pointer text-[#563672]'>All Coins</span>
                                    </div>
                                    <input type='text' placeholder='Enter number coin' class='border w-full h-8 pl-2' />
                                </div>
                                <div className="textLong rounded flex flex-col my-2">
                                    <span className='font-semibold'>USD</span>
                                    <input type='text' placeholder='Enter number USD' class='border w-full h-8 pl-2' />
                                </div>
                                <div className="textLong rounded flex flex-col my-2">
                                    <span className='font-semibold'>Message (Maximum 100 characters)</span>
                                    <textarea placeholder='Enter message' class="resize-none rounded-md w-full border"></textarea>
                                </div>
                                <div className="button w-full text-center mt-3">
                                    <button className='bg-[#563672] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Send</button>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    )
}

export default MyModal
