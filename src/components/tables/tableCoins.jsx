import React from 'react';
import PropTypes from 'prop-types';

const TableCoins = () => {
    return (
        <>
            <table className="table-fixed" style={{border: '1px solid red'}}>
                <thead>
                    <tr>
                        <th>COIN NAME</th>
                        <th>PRICE</th>
                        <th>24H CHANGE</th>
                        <th>24H VOLUME</th>
                        <th>LAST 7 DAYS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        <td>1975</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default TableCoins;