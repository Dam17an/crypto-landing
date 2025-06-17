import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero">

            <div className="hero__header">
                <div className="hero__header-content">
                    <ul className="hero__nav">
                        <li>Buy / Sell</li>
                        <li>Grow</li>
                        <li>Markets</li>
                        <li>Business</li>
                        <li>Support</li>
                    </ul>

                    <div className="hero__buttons">
                        <button className="btn btn--white">Sign in</button>
                        <button className="btn btn--gradient">Sign up</button>
                    </div>
                </div>
            </div>

            {/* Centered hero text and CTA */}
            <div className="hero__content">
                <h1>We make crypto<br />clear and simple</h1>
                <button className="btn btn--gradient btn--large">Get Started</button>
            </div>
        </div>
    );
};

export default Hero;