

import React from 'react';
import backgroundImage from '/background-image-v2.png';
import './background.scss';

export const Background = () => {

    return (
        <div className='background-container'>
            <img className='background-image' src={backgroundImage} />
            <div className='shadow-image'/>
        </div>
    );

};