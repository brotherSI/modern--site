import React from 'react';
import { Feature } from '../../components';
import './whatgpt3.css';
const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="Sport-site" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta" />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">One stop to the world of sports</h1>
                {/* <p>Explore The Library</p> */}
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Football" text="Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta." />
                <Feature title="NBA" text="Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla" />
                <Feature title="Formula 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet." />
            </div>

        </div>
    )
}

export default WhatGPT3
