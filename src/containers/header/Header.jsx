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
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your email Address" />
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content_people">
                    <img src={people} alt="photo of people" />
                    <p>1600 people requested access a visit in the last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image bounce-in-top">
                <img src={kobe} alt="ai" />
            </div>
        </div >
    )
}

export default Header
