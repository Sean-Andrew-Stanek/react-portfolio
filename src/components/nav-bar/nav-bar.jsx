import {React, useState} from 'react';
import './nav-bar.scss';

export const NavBar = () => {

    const [colorIndex, setColorIndex] = useState(0);

    let iterateColor = () => {
        setColorIndex(colorIndex+1);
    };
    
    let colors = ['red', 'yellow', 'green', 'blue'];

    return (
        <div>
            <div className='image-holder'>
                <img src='./Perlin-Background-300-300.png' className='profile-image tintable'/>
                <div className='profile-image' style={{borderRadius: '50%', width: '300px', height: '300px', backgroundColor: colors[colorIndex%colors.length], opacity: .4}} />
                <img src='./Portrait-300-300.png' className='profile-image' />
                <img src='./Gold-Ring-300-300.png' className='profile-image' />
            </div>
            <button onClick={iterateColor}>Change Color</button>
        </div>
    );

}