import {React, useState} from 'react';
import './nav-bar.scss';

export const NavBar = () => {

    // eslint-disable-next-line no-unused-vars
    const [colorIndex, setColorIndex] = useState(0);

    
    let colors = ['red', 'yellow', 'green', 'blue'];
    //let percentageHealthBar = ['0%', '50%', '100%'];

    let healthBar = () => {
        return (
            <div className='nb-healthbar-container'>
                <img src='./Red-Health-600-50.png' className='health-bar'/>
                <img src='./Green-Health-600-50.png' className='health-bar'/>
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

    return (
        <>
            <div className='image-holder'>
                {healthBar()}
                {profileImage()}
            </div>
        </>
    );

};

//<button onClick={iterateColor} style={{position:'absolute', bottom:'20px'}}>Change Color</button>