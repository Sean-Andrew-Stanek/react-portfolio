

import {React, useEffect, useState, useMemo} from 'react';
import './background.scss';
import PropTypes from 'prop-types';

export const Background = ({backgroundIndex}) => {


    //Images 
    const backgrounds = useMemo(() => ['./background-image-v2.png', './Signpost-Background-450-300.png'], []);
    
    const bgPositions = [ 'center', 'top left' ];

    const [firstBackground, setFirstBackground] = useState('');
    const [secondBackground, setSecondBackground] = useState('');
    const [firstBackgroundPosition, setFirstBackgroundPosition] = useState(bgPositions[backgroundIndex%bgPositions.length]);
    const [secondBackgroundPosition, setSecondBackgroundPosition] = useState(bgPositions[backgroundIndex%bgPositions.length]);
    const [firstImageShown, setFirstImageShown] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Swaps the backgrounds
    useEffect(() => {

        setFirstImageShown(!firstImageShown);
        
        if(!firstImageShown) {
            setFirstBackground(backgrounds[backgroundIndex%backgrounds.length]);
            setFirstBackgroundPosition(bgPositions[backgroundIndex%bgPositions.length]);
        } else {
            setSecondBackground(backgrounds[backgroundIndex%backgrounds.length]);
            setSecondBackgroundPosition(bgPositions[backgroundIndex%bgPositions.length]);
        }

    }, [backgroundIndex, backgrounds]);

    // Initial background
    useEffect(() => {
        
        setFirstBackground(backgrounds[backgroundIndex%backgrounds.length]);

        const timeout = setTimeout(() =>{
            setIsLoading(false);
        },250);

        return() => clearTimeout(timeout);

    }, []);

    //Has two backgrounds which take turns displaying and then a front image of translucent black to darken the background
    return (
        <div className='bg-background-container'>
            {/* First Background */}
            <div 
                className={`bg-background-image ${firstImageShown ? '' : 'bg-fade-out'}`} 
                style= {{
                    backgroundImage: `url(${firstBackground})`, 
                    backgroundPosition: firstBackgroundPosition
                }} 
            />
            {/* Second Background */}
            <div 
                className={`bg-background-image ${firstImageShown ? 'bg-fade-out' : ''}`} 
                style= {{ 
                    backgroundColor: 'rgba(0,0,0,1)',
                    backgroundImage: `url(${secondBackground})`, 
                    backgroundPosition: secondBackgroundPosition,
                }} 
            />
            {/* Black Translucent Background */}
            <div className={`bg-shadow-image ${isLoading && 'bg-is-loading'}`}/>
        </div>
    );

};

Background.propTypes = 
{
    backgroundIndex: PropTypes.number.isRequired
};