import {React, useEffect, useState, useRef} from 'react';
import './nav-bar.scss';
import { Link } from 'react-router-dom';

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
    
    let cancelDefaultDrag = (event) => {
        event.preventDefault();
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

    let routes = ['home', 'contact', 'skills', 'portfolio'];

    let rightNavBar = () => {
        return (
            <div className='nb-right-skillbar' style={{transform: 'rotate(90deg)'}}>
                <img className='nb-skillbar-end' src={'Nav-Bar-End-400-200.png'} style={{ transform: 'scaleX(-1)' }}/>
                {
                //Adhere to format rules for image and path
                }
                {
                    routes.map((path, index)=> {
                        let capPath = path.charAt(0).toUpperCase() + path.slice(1);
                        return (
                            <div className='nb-skillbar-border-right'  key={index}>
                                <img src={'Nav-Bar-Icon-Border-150-200.png'} />
                                <Link to={`./${path}`} aria-label={`Navigate to ${capPath}`} key={index}>
                                    <img src={`${capPath}-Icon-300-300.png`} className='nb-skillbar-icon nb-icon-right'  style={{transform: 'rotate(-90deg)'}} alt={`Button to ${capPath}`} onDragStart={cancelDefaultDrag}/>
                                </Link>
                            </div>
                        );
                    })
                }
                <img className='nb-skillbar-end' src={'Nav-Bar-End-400-200.png'}/>
            </div>
        );        
    };


    let contactRoutes = [
        ['Discord', 'https://discordapp.com/users/dartimos'],
        ['Twitter', 'https://twitter.com/stanek_sean'],
        ['GitHub', 'https://github.com/Sean-Andrew-Stanek'],
        ['Linked-In', 'https://www.linkedin.com/in/sean-stanek-68b54129b']
    ];
    
    let bottomNavBar = () => {
        return (
            <div className='nb-bottom-skillbar'>
                <img className='nb-skillbar-end' src={'Nav-Bar-End-400-200.png'} style={{ transform: 'scaleX(-1)' }}/>
                {
                    //Adhere to format rules for image and outbound link
                }
                {
                    contactRoutes.map((info, index) => {
                        return (
                            <div className='nb-skillbar-border'  key={index}>
                                <img src={'Nav-Bar-Icon-Border-150-200.png'}/>
                                <Link to={info[1]} aria-label={`Navigate to Sean's ${info[1]} page`} target='_blank' key={index}>
                                    <img src={`${info[0]}-Icon-300-300.png`} className='nb-skillbar-icon nb-icon-bottom' onDragStart={cancelDefaultDrag}/>
                                </Link>
                                <div className='nb-tooltip'>
                                    {info[0]}
                                </div>
                            </div>
                        );
                    })
                }
                <img className='nb-skillbar-end' src={'Nav-Bar-End-400-200.png'}/>      
            </div>
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

