

import {React} from 'react';
import backgroundImage from '/background-image-v2.png';
import './background.scss';
import PropTypes from 'prop-types';

export const Background = ({backgroundTop, backgroundLeft}) => {

    const scaleValue = 1 + Math.max(-backgroundTop, -backgroundLeft) / 100;

    return (
        <div className='background-container'>
            <img className='background-image' style={{transform: `scale(${scaleValue})`, top: `${backgroundTop}%`, left: `${backgroundLeft}%`}} src={backgroundImage} />
            <div className='shadow-image'/>
        </div>
    );

};
//

Background.propTypes = 
{
    backgroundTop: PropTypes.number.isRequired,
    backgroundLeft: PropTypes.number.isRequired
};