import React from 'react';
import './FeatureCards.scss';
import bgImage from '../assets/bg2.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const features = [
    {
        img: img1,
        title: 'Create',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor',
        link: 'Get Started',
    },
    {
        img: img2,
        title: 'Login',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor',
        link: 'Find an ATM',
    },
    {
        img: img3,
        title: 'Manage',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor Lorem ipsum dolor',
        link: 'Download the App',
    },
];

const FeatureCards = () => {
    return (
        <div
            className="feature-section"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="cards-container">
                {features.map((feature, index) => (
                    <div className="card" key={index}>
                        <div className="icon">
                            <img src={feature.img} alt={feature.title} />
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                        <a href="#">{feature.link} →</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCards;