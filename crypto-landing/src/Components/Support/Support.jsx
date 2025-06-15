import React from 'react';
import './Support.scss';
import bgImage from '../assets/bg4.png';
import keysImage from '../assets/keys.png';

const Support = () => {
    return (
        <div className="support-section" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="support-content">
                <div className="support-left">
                    <img src={keysImage} alt="Support Shield Icon" className="support-icon" />
                </div>
                <div className="support-right">
                    <h2>24/7 access to full service customer support</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        Lorem ipsum dolor sit amet, consectetur.
                    </p>
                    <button className="get-started">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Support;