import './App.scss';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {React, useState, useEffect} from 'react';
import { NavBar } from './components/nav-bar/nav-bar';
import { MainView } from './components/main-view/main-view';
import { SkillsView } from './components/skills-view/skills-view';
import { ContactView } from './components/contact-view/contact-view';
import { PortfolioView } from './components/portfolio-view/portfolio-view';
import { Background } from './components/background/background';

function App() {

    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        //Transition background overlay
        document.body.classList.add('loaded');

        return() => {
            document.body.classList.remove('loaded');
        };
    }, []);
    
    return (
        <div className='app-container'>
            <div className='intro-cover' />
            <Background />
            <Router basename='/react-portfolio/'>
                <NavBar colorIndex = {colorIndex}/>
                <Routes>
                    <Route path='/' element={<MainView iterateColor={()=>setColorIndex(colorIndex+1)}/>} />
                    <Route path='/skills' element={<SkillsView />} />
                    <Route path='/contact' element={<ContactView />} />
                    <Route path='/portfolio' element={<PortfolioView />} />
                    <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
            </Router>
            
        </div>
    );
}


//<Route path='/portfolio' element={}/>


export default App;
