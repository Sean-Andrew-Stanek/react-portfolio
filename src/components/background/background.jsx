

import {React, useEffect, useState, useMemo} from 'react';
import './background.scss';
import PropTypes from 'prop-types';

export const Background = ({backgroundIndex}) => {

    const backgrounds = useMemo(() => ['./background-image-v2.png', './Signpost-Background-450-300.png'], []);
    const bgPositions = [ 'center', 'top left' ];

    const [firstBackground, setFirstBackground] = useState('');
    const [secondBackground, setSecondBackground] = useState('');
    const [firstBackgroundPosition, setFirstBackgroundPosition] = useState(bgPositions[backgroundIndex%bgPositions.length]);
    const [secondBackgroundPosition, setSecondBackgroundPosition] = useState(bgPositions[backgroundIndex%bgPositions.length]);
    const [firstImageShown, setFirstImageShown] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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

    useEffect(() => {
        
        setFirstBackground(backgrounds[backgroundIndex%backgrounds.length]);

        const timeout = setTimeout(() =>{
            setIsLoading(false);
        },250);

        return() => clearTimeout(timeout);

    }, []);

    return (
        <div className='bg-background-container'>
            <div 
                className={`bg-background-image ${firstImageShown ? '' : 'bg-fade-out'}`} 
                style= {{
                    backgroundImage: `url(${firstBackground})`, 
                    backgroundPosition: firstBackgroundPosition
                }} 
            />
            <div 
                className={`bg-background-image ${firstImageShown ? 'bg-fade-out' : ''}`} 
                style= {{ 
                    backgroundColor: 'rgba(0,0,0,1)',
                    backgroundImage: `url(${secondBackground})`, 
                    backgroundPosition: secondBackgroundPosition,
                }} 
            />
            <div className={`bg-shadow-image ${isLoading && 'bg-is-loading'}`}/>
        </div>
    );

};
//backgroundIndex%backgrounds.length

Background.propTypes = 
{
    backgroundIndex: PropTypes.number.isRequired
};