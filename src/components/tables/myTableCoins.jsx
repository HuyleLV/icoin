import React, { useState, useEffect } from 'react';
import { AiFillLock } from 'react-icons/ai';
import { NumericFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import MyModal from '../common/Modal';

const MyTableCoin = (props) => {

    // take props
    const { data, column } = props;

    // list init array
    const [lstSearch, setLstSearch] = useState([]);

    const navigate = useNavigate();

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
        if (data === 'deposit') {
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

    const _handleGoToHistory = () => {
        navigate('/my-history')
    }
    return (
        <div className='h-full w-full'>
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
                            <button className='border rounded px-2 py-1' onClick={() => _handleGoToHistory()}>
                                History
                            </button>
                        </td>
                    </tr>
                    <tr className='border-b'>
                        <td className='p-3 text-sm text-gray-700'>
                            <div className='flex m-0 items-center justify-between'>
                                <div className="boxContent flex items-center">
                                    <img src="" className='w-5 h-5 rounded-full mr-1' />
                                    <span className='uppercase font-bold mr-2 self-cente'>NCO</span>
                                    <span className='self-center text-gray-700 text-opacity-60'>(NCO Token)</span>
                                </div>
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
                            <button className='border rounded px-2 py-1' onClick={() => handleShowModalDeposit('deposit')}>
                                Deposit
                            </button>
                        </td>
                        <td className='p-3 font-bold text-sm text-[#563672] text-center'>
                            <button className='border rounded px-2 py-1'>
                                Withdraw
                            </button>
                        </td>
                        <td className="p-3 font-bold text-sm text-[#563672] text-center">
                            <button className='border rounded px-2 py-1' onClick={() => _handleGoToHistory()}>
                                History
                            </button>
                        </td>
                    </tr>
                    <tr className='border-b'>
                        <td className='p-3 text-sm text-gray-700'>
                            <div className='flex m-0 items-center justify-between'>
                                <div className="boxContent flex items-center">
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" className='w-5 h-5 rounded-full mr-1' />
                                    <span className='uppercase font-bold mr-2 self-cente'>BTC</span>
                                    <span className='self-center text-gray-700 text-opacity-60'>(Bitcoin)</span>
                                </div>
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
                            <div className='flex m-0 items-center justify-between'>
                                <div className="boxContent flex items-center">
                                    <img src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663" className='w-5 h-5 rounded-full mr-1' />
                                    <span className='uppercase font-bold mr-2 self-cente'>USDT</span>
                                    <span className='self-center text-gray-700 text-opacity-60'>(Tether USDT)</span>
                                </div>
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
                            <div className='flex m-0 items-center justify-between'>
                                <div className="boxContent flex items-center">
                                    <img src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" className='w-5 h-5 rounded-full mr-1' />
                                    <span className='uppercase font-bold mr-2 self-cente'>ETH</span>
                                    <span className='self-center text-gray-700 text-opacity-60'>(Ethereum)</span>
                                </div>
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
                            <div className='flex m-0 items-center justify-between'>
                                <div className="boxContent flex items-center">
                                    <img src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850" className='w-5 h-5 rounded-full mr-1' />
                                    <span className='uppercase font-bold mr-2 self-cente'>BNB</span>
                                    <span className='self-center text-gray-700 text-opacity-60'>(Binance Coin)</span>
                                </div>
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
                            <div className='flex m-0 items-center justify-between'>
                                <div className="boxContent flex items-center">
                                    <img src="https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766" className='w-5 h-5 rounded-full mr-1' />
                                    <span className='uppercase font-bold mr-2 self-cente'>BUSD</span>
                                    <span className='self-center text-gray-700 text-opacity-60'>(Binance USD)</span>
                                </div>
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
                            <div className='flex m-0 items-center justify-between'>
                                <div className="boxContent flex items-center">
                                    <img src="https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389" className='w-5 h-5 rounded-full mr-1' />
                                    <span className='uppercase font-bold mr-2 self-cente'>USDC</span>
                                    <span className='self-center text-gray-700 text-opacity-60'>(USD Coin)</span>
                                </div>
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
                            <div className='flex m-0 items-center justify-between'>
                                <div className="boxContent flex items-center">
                                    <img src="https://assets.coingecko.com/coins/images/1094/thumb/tron-logo.png?1547035066" className='w-5 h-5 rounded-full mr-1' />
                                    <span className='uppercase font-bold mr-2 self-cente'>TRX</span>
                                    <span className='self-center text-gray-700 text-opacity-60'>(Tron)</span>
                                </div>
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
                            <div className='flex m-0 items-center justify-between'>
                                <div className="boxContent flex items-center">
                                    <img src="https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png?1547034700" className='w-5 h-5 rounded-full mr-1' />
                                    <span className='uppercase font-bold mr-2 self-cente'>LINK</span>
                                    <span className='self-center text-gray-700 text-opacity-60'>(Chainlink)</span>
                                </div>
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