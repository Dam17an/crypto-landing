import React from 'react';
import './Trade.scss';
import bg5 from '../assets/bg5.png';
import table from '../assets/table.png';

const Trade = () => {
    return (
        <div className="trade-container">
            <div className="trade-content">
                <h1>Buy and sell with the lowest<br />fees in the industry</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="learn-more">Learn More →</a>
                <img src={table} alt="Crypto table" className="table-image" />
            </div>
        </div>
    );
};

export default Trade;