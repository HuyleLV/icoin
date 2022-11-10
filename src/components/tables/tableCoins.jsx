import React from 'react';
import PropTypes from 'prop-types';

const TableCoins = () => {
    return (
        <div className='p-5 h-screen bg-gray-100 w-100'>
            <table className='w-full'>
                <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>COIN NAME</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>PRICE</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>24H CHANGE</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>24H VOLUME</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>LAST 7 DAYS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white'>
                        <td className='p-3 text-sm text-gray-700'>Shining Star</td>
                        <td className='p-3 text-sm text-gray-700'>Earth, Wind, and Fire</td>
                        <td className='p-3 text-sm text-gray-700'>1975</td>
                        <td className='p-3 text-sm text-gray-700'>1975</td>
                        <td className='p-3 text-sm text-gray-700'>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableCoins;