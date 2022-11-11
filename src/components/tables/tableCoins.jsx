import React, { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const TableCoins = (props) => {

    // take props
    const { data } = props;

    // list init array
    const [lstSearch, setLstSearch] = useState([]);

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

    return (
        <div className='h-screen w-full'>
            <div className="flex justify-end">
                <div className="mb-1 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input onChange={(event) => onChangeSearch(event.target.value)} type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search coins" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <table className='border w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>COIN NAME</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-right'>PRICE</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-right'>24H CHANGE</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-right'>24H VOLUME</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-center'>Last 7 days</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-right'>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lstSearch && lstSearch.length ? (
                            lstSearch.slice(0, 10).map((item, index) => (
                                <tr className='bg-white' key={item.id}>
                                    <td className='p-3 text-sm text-gray-700'>
                                        <div className='flex m-0'>
                                            <img src={item.image} alt={item.id} className='w-5 h-5 rounded-full mr-1' />
                                            <span className='font-bold mr-2 self-cente'>{item.name}</span>
                                            <span className='uppercase self-center text-gray-500 text-opacity-60'>{item.symbol}</span>
                                        </div>
                                    </td>
                                    <td className='p-3 text-sm text-gray-700 text-right'><NumericFormat value={item.current_price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                    <td className={`p-3 text-sm text-gray-700 text-right ${item.market_cap_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-500'}`}>{item.market_cap_change_percentage_24h < 0 ? item.market_cap_change_percentage_24h : `+${item.market_cap_change_percentage_24h}`}%</td>
                                    <td className='p-3 text-sm text-gray-700 text-right'>
                                        <NumericFormat value={item.total_volume} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </td>
                                    <td className="p-3 text-sm text-gray-700">
                                        <Sparklines data={item.sparkline_in_7d.price}>
                                            <SparklinesLine color="blue" />
                                        </Sparklines>
                                    </td>
                                    <td className='p-3 text-sm text-gray-700 text-right'> <NumericFormat value={item.market_cap} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                </tr>
                            ))
                        ) : null
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TableCoins;