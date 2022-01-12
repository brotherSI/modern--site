import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import kobe from '../../assets/kobe.png';
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content slide-left">
                <h1 className="gradient__text">One stop platform for Streaming, Beting,Live-scores</h1>
                <p>Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your email Address" />
                    <button type="button">Join Us</button>
                </div>
            </div>
            <div className="gpt3__header-image bounce-in-top">
                <img src={kobe} alt="ai" />
            </div>
        </div >
    )
}

export default Header
