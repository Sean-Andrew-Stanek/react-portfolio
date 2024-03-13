import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {React, useState} from 'react';

function App() {
    
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

let colors = ['red', 'yellow', 'green', 'blue'];

function Home() {
    const [colorIndex, setColorIndex] = useState(0);

    let iterateColor = () => {
        setColorIndex(colorIndex+1);
    };

    return (
        <div>
            <div className='image-holder'>
                <img src='./Perlin-Background-300-300.png' className='profile-image tintable'/>
                <div className='profile-image' style={{borderRadius: '50%', width: '300px', height: '300px', backgroundColor: colors[colorIndex%4], opacity: .4}} />
                <img src='./Portrait-300-300.png' className='profile-image' />
                <img src='./Gold-Ring-300-300.png' className='profile-image' />
            </div>
            <button onClick={iterateColor}>Change Color</button>
        </div>
    );
}


export default App;
