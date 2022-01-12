import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import run from '../../assets/run.png';
import './possibility.css';

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={run} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Nulla quis sem at nibh elementum imperdiet</h4>
                <h1 className="gradient__text">The annual run event competition</h1>
                <p> Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility; 
