import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {React, useEffect} from 'react';
import { NavBar } from './components/nav-bar/nav-bar';
import { MainView } from './components/main-view/main-view';
import { SkillsView } from './components/skills-view/skills-view';
import { ContactView } from './components/contact-view/contact-view';
import { PortfolioView } from './components/portfolio-view/portfolio-view';

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
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<MainView />} />
                    <Route path='/skills' element={<SkillsView />} />
                    <Route path='/contact' element={<ContactView />} />
                    <Route path='/portfolio' element={<PortfolioView />} />
                </Routes>
            </Router>
            
        </div>
    );
}


//<Route path='/portfolio' element={}/>


export default App;
