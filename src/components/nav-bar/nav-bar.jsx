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

    let iterateColorIndex = () => {
        setColorIndex(colorIndex+1);
    };

    //Tied to a window resize listener
    let updateHealthBarWidth = () => {
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

    //The health bar animates to the correct length according to the window size.
    useEffect(() => {
        updateHealthBarWidth();
        window.addEventListener('resize', updateHealthBarWidth);
        
        return() => window.removeEventListener('resize', updateHealthBarWidth);

    },[]);

    /*****************/
    // Sub-Components
    /*****************/
    let namePlate = () => {
        return (
            <>
                
                <img src='./Name-Plate-Background-250-25.png' className='nb-name-plate'/>
                <div className='nb-name-plate nb-name-plate-color-overlay' style={{backgroundColor: colors[colorIndex%colors.length], opacity: .4}}/>
                <img src='./Name-Plate-250-25.png' className='nb-name-plate' />
            </>
        );
    };

    let healthBar = () => {
        return (
            <div ref={healthBarContainerRef} className='nb-healthbar-container'>
                <img src='./Red-Health-600-50.png' className='nb-health-bar'/>
                <img src='./Green-Health-600-50.png' className='nb-health-bar' style = {{left: `${moveHealthBarLeft()}px`}}/>
                <img src='./Health-Outline-600-50.png' className='nb-health-bar'/>
            </div>
        );
    };

    let profileImage = () => {
        return(
            <>
                <img src='./Perlin-Background-300-300.png' className='nb-profile-image'/>
                <div className='nb-profile-image nb-profile-background-color' style={{borderRadius: '50%', backgroundColor: colors[colorIndex%colors.length], opacity: .4}} />
                <img src='./Portrait-300-300.png' className='nb-profile-image' />
                <img src='./Gold-Ring-300-300.png' className='nb-profile-image nb-profile-border' />
            </>
        );
    };

    let rightNavBar = () => {
        return (
            <>
                <div className='nb-right-skillbar'>
                    <img src='./Home-Icon-300-300.png' className='nb-skillbar-icon'/>
                    <img src='./Contact-Icon-300-300.png' className='nb-skillbar-icon'/>
                    <img src='./Skills-Icon-300-300.png' className='nb-skillbar-icon'/>
                    <img src='./Portfolio-Icon-300-300.png' className='nb-skillbar-icon'/>
                </div>                
            </>
        );
    };

    let bottomNavBar = () => {
        return (
            <>
                <div className='nb-bottom-skillbar'>
                    <img src='./Discord-Icon-300-300.png' className='nb-skillbar-icon'/>
                    <img src='./Contact-Icon-300-300.png' className='nb-skillbar-icon'/>
                    <img src='./Skills-Icon-300-300.png' className='nb-skillbar-icon'/>
                    <img src='./Portfolio-Icon-300-300.png' className='nb-skillbar-icon'/>
                </div>
            </>
        );
    };

    /*****************/
    // Main Component
    /*****************/
    return (
        <>
            {bottomNavBar()}
            {rightNavBar()}
            {namePlate()}
            {healthBar()}
            {profileImage()}
            <button onClick={iterateHealthBar} style={{position:'absolute', bottom:'20px'}}>Change Health</button>
            <button onClick={iterateColorIndex} style={{position:'absolute', bottom:'60px'}}>Change Color</button>
        </>
    );

};

