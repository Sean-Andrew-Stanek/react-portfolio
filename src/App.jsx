import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {React, useEffect} from 'react';
import { NavBar } from './components/nav-bar/nav-bar';

function App() {

    useEffect(() => {
        //Transition background overlay
        document.body.classList.add('loaded');

        return() => {
            document.body.classList.remove('loaded');
        };
    }, []);
    
    return (
        <div className='App'>
            <div className='intro-cover' />
            <NavBar />
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
            
        </div>
    );
}


function Home() {
    return <></>;
}


export default App;
