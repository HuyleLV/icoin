import React, { useState, useEffect } from 'react';
import { AiFillLock } from 'react-icons/ai';
import { NumericFormat } from 'react-number-format';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import MyModal from '../common/Modal';

const MyTableCoin = (props) => {

    // take props
    const { data, column } = props;

    // list init array
    const [lstSearch, setLstSearch] = useState([]);

    const [showMyModal, setShowMyModal] = useState({
        isShow: false,
        title: "",
        qrCode: "",
        walletCode: "",
        showWithDraw: ""
    });

    // const [showWithDraw, setShowWithDraw] = useState(false);

    // const [titleModal, setTitleModal] = useState('');

    // const [walletCode, setWalletCode] = useState('');

    const onChangeSearch = (text) => {
        if (text && data.length > 0) {
            const newArr = data.filter((item, index) =>
                item.name.toLowerCase().includes(text) || item.symbol.toLowerCase().includes(text)
            );
            if (newArr) {
                setLstSearch(newArr);
            }
        } else {
            setLstSearch(data);
        }
    }

    // clear state
    useEffect(() => {
        setLstSearch(data);
        return () => setLstSearch([]);
    }, [data]);

    const handleOnClose = () => {
        setShowMyModal({
            isShow: false,
            qrCode: '',
            showWithDraw: false,
            title: '',
            walletCode: ''
        })
    };

    const handleShowModalDeposit = (data) => {
       if(data === 'deposit') {
        setShowMyModal({
            isShow: true,
            qrCode: '',
            showWithDraw: false,
            title: 'My Wallet Information',
            walletCode: '0x123n9asdnl9as8vaslk9asdn9dasnld'
        })
       } else {
        setShowMyModal({
            isShow: true,
            qrCode: '',
            showWithDraw: true,
            title: 'Transaction Information',
            walletCode: ''
        })
       }
    }; 

    return (
        <div className='h-screen w-full'>
            <table className='border w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr className='w-full'>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left' style={{ width: '30%' }}>COIN NAME</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-center' style={{ width: '20%' }}>AMOUNT</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-right'></th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-right'></th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-right'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b'>
                        <td className='p-3 text-sm text-gray-700'>
                            <div className='flex m-0 items-center'>
                                <img src="" className='w-5 h-5 rounded-full mr-1' />
                                <span className='uppercase font-bold mr-2 self-cente'>NTC</span>
                                <span className='self-center text-gray-700 text-opacity-60'>(NCoin)</span>
                            </div>
                        </td>
                        <td className={`p-3 text-sm text-gray-700 text-center flex flex-col`}>
                            <span className='text=black font-bold text-base'>
                                00.00
                            </span>
                            <span className='text-gray-500'>
                                00.00$
                            </span>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1' onClick={() => handleShowModalDeposit('deposit')}>
                                Deposit
                            </button>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1' onClick={() => handleShowModalDeposit('withdraw')}>
                                Withdraw
                            </button>
                        </td>
                        <td className="p-3 font-bold text-sm text-[#563672] text-center">
                            <button className='border rounded px-2 py-1'>
                                History
                            </button>
                        </td>
                    </tr>
                    <tr className='border-b'>
                        <td className='p-3 text-sm text-gray-700'>
                            <div className='flex m-0 items-center'>
                                <img src="" className='w-5 h-5 rounded-full mr-1' />
                                <span className='uppercase font-bold mr-2 self-cente'>NTC</span>
                                <span className='self-center text-gray-700 text-opacity-60'>(NCoin)</span>
                            </div>
                        </td>
                        <td className={`p-3 text-sm text-gray-700 text-center flex flex-col`}>
                            <span className='text=black font-bold text-base'>
                                00.00
                            </span>
                            <span className='text-gray-500'>
                                00.00$
                            </span>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1' onClick={() => handleShowModalDeposit('deposit')}>
                                Deposit
                            </button>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1' onClick={() => handleShowModalDeposit('withdraw')}>
                                Withdraw
                            </button>
                        </td>
                        <td className="p-3 font-bold text-sm text-[#563672] text-center">
                            <button className='border rounded px-2 py-1'>
                                History
                            </button>
                        </td>
                    </tr>
                    <tr className='border-b'>
                        <td className='p-3 text-sm text-gray-700'>
                            <div className='flex m-0 items-center'>
                                <img src="" className='w-5 h-5 rounded-full mr-1' />
                                <span className='uppercase font-bold mr-2 self-cente'>NTC</span>
                                <span className='self-center text-gray-700 text-opacity-60'>(NCoin)</span>
                                <AiFillLock className='ml-2' />
                            </div>
                        </td>
                        <td className={`p-3 text-sm text-gray-700 text-center flex flex-col`}>
                            <span className='text=black font-bold text-base'>
                                00.00
                            </span>
                            <span className='text-gray-500'>
                                00.00$
                            </span>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1'>
                                Deposit
                            </button>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1'>
                                Withdraw
                            </button>
                        </td>
                        <td className="p-3 font-bold text-sm text-[#563672] text-center">
                            <button className='border rounded px-2 py-1'>
                                History
                            </button>
                        </td>
                    </tr>
                    <tr className='border-b'>
                        <td className='p-3 text-sm text-gray-700'>
                            <div className='flex m-0 items-center'>
                                <img src="" className='w-5 h-5 rounded-full mr-1' />
                                <span className='uppercase font-bold mr-2 self-cente'>NTC</span>
                                <span className='self-center text-gray-700 text-opacity-60'>(NCoin)</span>
                                <AiFillLock className='ml-2' />
                            </div>
                        </td>
                        <td className={`p-3 text-sm text-gray-700 text-center flex flex-col`}>
                            <span className='text=black font-bold text-base'>
                                00.00
                            </span>
                            <span className='text-gray-500'>
                                00.00$
                            </span>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1'>
                                Deposit
                            </button>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1'>
                                Withdraw
                            </button>
                        </td>
                        <td className="p-3 font-bold text-sm text-[#563672] text-center">
                            <button className='border rounded px-2 py-1'>
                                History
                            </button>
                        </td>
                    </tr>
                    <tr className='border-b'>
                        <td className='p-3 text-sm text-gray-700'>
                            <div className='flex m-0 items-center'>
                                <img src="" className='w-5 h-5 rounded-full mr-1' />
                                <span className='uppercase font-bold mr-2 self-cente'>NTC</span>
                                <span className='self-center text-gray-700 text-opacity-60'>(NCoin)</span>
                                <AiFillLock className='ml-2' />
                            </div>
                        </td>
                        <td className={`p-3 text-sm text-gray-700 text-center flex flex-col`}>
                            <span className='text=black font-bold text-base'>
                                00.00
                            </span>
                            <span className='text-gray-500'>
                                00.00$
                            </span>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1'>
                                Deposit
                            </button>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1'>
                                Withdraw
                            </button>
                        </td>
                        <td className="p-3 font-bold text-sm text-[#563672] text-center">
                            <button className='border rounded px-2 py-1'>
                                History
                            </button>
                        </td>
                    </tr>
                    <tr className='border-b'>
                        <td className='p-3 text-sm text-gray-700'>
                            <div className='flex m-0 items-center'>
                                <img src="" className='w-5 h-5 rounded-full mr-1' />
                                <span className='uppercase font-bold mr-2 self-cente'>NTC</span>
                                <span className='self-center text-gray-700 text-opacity-60'>(NCoin)</span>
                                <AiFillLock className='ml-2' />
                            </div>
                        </td>
                        <td className={`p-3 text-sm text-gray-700 text-center flex flex-col`}>
                            <span className='text=black font-bold text-base'>
                                00.00
                            </span>
                            <span className='text-gray-500'>
                                00.00$
                            </span>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1'>
                                Deposit
                            </button>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1'>
                                Withdraw
                            </button>
                        </td>
                        <td className="p-3 font-bold text-sm text-[#563672] text-center">
                            <button className='border rounded px-2 py-1'>
                                History
                            </button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            <MyModal isWidthDraw={showMyModal.showWithDraw} title={showMyModal.title} walletCode={showMyModal.walletCode} visible={showMyModal.isShow} onClose={handleOnClose} />
        </div>
    );
};

export default MyTableCoin;