import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Gain unlimited access to the world</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Sign up today</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <h2 className="gradient__text">LOGO</h2>
                    <p>Sport-sites   All Rights Reserved</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12</p>
                    <p>085-136532</p>
                    <p>info@pa299.net</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">@2021 Sport-site. All rights reserved.</div>
        </div>
    )
}

export default Footer
