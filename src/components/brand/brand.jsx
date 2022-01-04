import React from 'react';
import { LaLiga, nba, epl, ufc, f1 } from './imports';
import './brand.css';

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={LaLiga} alt="LaLiga" />
            </div>
            <div>
                <img src={nba} alt="nba" />
            </div>
            <div>
                <img src={epl} alt="epl" />
            </div>
            <div>
                <img src={ufc} alt="ufc" />
            </div>
            <div>
                <img src={f1} alt="f1" />
            </div>
        </div>
    )
}

export default Brand
