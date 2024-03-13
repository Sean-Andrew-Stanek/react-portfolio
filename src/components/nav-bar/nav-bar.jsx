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
                <img src='./Perlin-Background-300-300.png' className='nb-profile-image nb-tintable'/>
                <div className='nb-profile-image' style={{borderRadius: '50%', backgroundColor: colors[colorIndex%colors.length], opacity: .4}} />
                <img src='./Portrait-300-300.png' className='nb-profile-image' />
                <img src='./Gold-Ring-300-300.png' className='nb-profile-image' />
            </div>
            <button onClick={iterateColor} style={{position:'absolute', bottom:'20px'}}>Change Color</button>
        </div>
    );

};