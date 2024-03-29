

import {React, useEffect, useState, useMemo} from 'react';
import './background.scss';
import PropTypes from 'prop-types';

export const Background = ({backgroundIndex}) => {

    const backgrounds = useMemo(() => ['./background-image-v2.png', './Signpost-Background-450-300.png'], []);
    const bgPositions = [ 'center', 'top left' ];

    const [currentBackground, setCurrentBackground] = useState(backgrounds[backgroundIndex%backgrounds.length]);
    const [currentPosition, setCurrentPosition] = useState(bgPositions[backgroundIndex%bgPositions.length]);
    const [fadeOut, setFadeOut] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setFadeOut(true);

        const timeout = setTimeout(() => {
            setCurrentBackground(backgrounds[backgroundIndex%backgrounds.length]);
            setCurrentPosition(bgPositions[backgroundIndex%bgPositions.length]);
            setFadeOut(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [backgroundIndex, backgrounds]);

    useEffect(() => {
        const timeout = setTimeout(() =>{
            setIsLoading(false);
        },250);

        return() => clearTimeout(timeout);

    }, []);

    return (
        <div className='background-container'>
            <div 
                className={`background-image ${fadeOut && 'fade-out'}`} 
                style= {{ 
                    backgroundImage: `url(${currentBackground})`, 
                    backgroundPosition: currentPosition
                }} />
            <div className={`shadow-image ${isLoading && 'is-loading'}`}/>
        </div>
    );

};
//backgroundIndex%backgrounds.length

Background.propTypes = 
{
    backgroundIndex: PropTypes.number.isRequired
};