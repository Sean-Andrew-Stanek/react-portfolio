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
            This is my main page.
        </div>
    );
}


export default App;
