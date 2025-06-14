import React from 'react';
import './IntroSection.scss';
import bg3 from '../assets/bg3.png';

const IntroSection = () => {
    return (
        <div
            className="intro-section"
            style={{ backgroundImage: `url(${bg3})` }}
        >
            <div className="intro-content">
                <h1>A crypto investment platform<br />that invests in you</h1>
                <p>
                    We invest more resources than any other platform in making sure great<br />
                    support from real people is a click away, whenever you need it.
                </p>
                <button className="gradient-button">Get Started</button>
            </div>
        </div>
    );
};

export default IntroSection;