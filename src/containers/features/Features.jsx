import React from 'react';
import { Feature } from '../../components';
import './features.css';

const Features = () => {

    const featuresData = [
        {
            title: 'Quisque cursus, metus',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
        },
        {
            title: 'Lorem ipsum dolor sit',
            text: 'Fusce nec tellus sed augue semper porta. Mauris massa.Vestibulum lacinia arcu eget nulla. Class aptent taciti.',
        },
        {
            title: 'Quisque cursus, metus',
            text: ' Praesent mauris. Fusce nec tellus sed augue semper porta, Class aptent taciti',
        },
        {
            title: 'Sed cursus ante',
            text: 'Fusce nec tellus sed augue semper porta. Mauris massa.Vestibulum lacinia arcu eget nulla. Class aptent taciti.',
        },

    ];

    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</h1>
                <p>Vestibulum ante ipsum primis</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>

    )
}

export default Features
