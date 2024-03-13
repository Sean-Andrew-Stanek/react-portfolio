import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';

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

function Home() {
    return (
        <div>
            <div className='image-holder'>
                <img src='./Perlin-Background-300-300.png' className='profile-image' />
                <img src='./Portrait-300-300.png' className='profile-image' />
                <img src='./Gold-Ring-300-300.png' className='profile-image' />
            </div>
        </div>
    );
}


export default App;
