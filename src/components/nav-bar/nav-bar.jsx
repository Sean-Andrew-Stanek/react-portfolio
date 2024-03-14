import {React, useEffect, useState, useRef} from 'react';
import './nav-bar.scss';

export const NavBar = () => {

    // eslint-disable-next-line no-unused-vars
    const [colorIndex, setColorIndex] = useState(0);
    const [healthBarIndex, setHealthBarIndex] = useState(0);
    const [healthBarWidth, setHealthBarWidth] = useState(0);
    const healthBarContainerRef = useRef(null);

    //These are enums disguised as an array.
    let colors = ['red', 'yellow', 'green', 'blue'];
    let percentageHealthBar = [0, .25, .5, .75, 1];

    /*****************/
    // Functions
    /*****************/

    let iterateHealthBar = () => {
        setHealthBarIndex(healthBarIndex+1);
    };

    let updateDimensions = () => {
        if(healthBarContainerRef.current) {
            setHealthBarWidth(healthBarContainerRef.current.offsetWidth);
        }
    };

    let moveHealthBarLeft = () => {
        return 0-healthBarWidth*(percentageHealthBar[healthBarIndex%percentageHealthBar.length]);
    };
    
    /*****************/
    // useEffects
    /*****************/

    //This dynamically listens window width.
    //Now the health bar moves the correct length irregardless of window width.
    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        
        return() => window.removeEventListener('resize', updateDimensions);

    },[]);



    /*****************/
    // Sub-Components
    /*****************/
    let healthBar = () => {
        return (
            <div ref={healthBarContainerRef} className='nb-healthbar-container'>
                <img src='./Red-Health-600-50.png' className='health-bar'/>
                <img src='./Green-Health-600-50.png' className='health-bar' style = {{left: `${moveHealthBarLeft()}px`}}/>
                <img src='./Health-Outline-600-50.png' className='health-bar'/>
            </div>
        );
    };

    let profileImage = () => {
        return(
            <>
                <img src='./Perlin-Background-300-300.png' className='nb-profile-image nb-tintable'/>
                <div className='nb-profile-image' style={{borderRadius: '50%', backgroundColor: colors[colorIndex%colors.length], opacity: .4}} />
                <img src='./Portrait-300-300.png' className='nb-profile-image' />
                <img src='./Gold-Ring-300-300.png' className='nb-profile-image' />
            </>
        );
    };

    /*****************/
    // Main Component
    /*****************/
    return (
        <>
            <div className='image-holder'>
                {healthBar()}
                {profileImage()}
            </div>
            <button onClick={iterateHealthBar} style={{position:'absolute', bottom:'20px'}}>Change Color</button>
        </>
    );

};

