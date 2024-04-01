import './App.scss';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {React, useState, useEffect} from 'react';
import { NavBar } from './components/nav-bar/nav-bar';
import { MainView } from './components/main-view/main-view';
import { SkillsView } from './components/skills-view/skills-view';
import { ContactView } from './components/contact-view/contact-view';
import { PortfolioView } from './components/portfolio-view/portfolio-view';
import { Background } from './components/background/background';
import { ModalManager } from './components/modal-manager/modal-manager';

function App() {

    const [colorIndex, setColorIndex] = useState(0);
    const [modalTarget, setModalTarget] = useState('');

    const [backgroundIndex, setBackgroundIndex] = useState(0);

    useEffect(() => {
        //Transition background overlay
        document.body.classList.add('loaded');

        return() => {
            document.body.classList.remove('loaded');
        };
    }, []);
    
    return (
        <div className='app-container'>

            {/* Changing background */}
            <Background backgroundIndex={backgroundIndex}/>
            
            {/* Modal Management */}
            {modalTarget !== '' && 
                <ModalManager modalTarget={modalTarget} setModalTarget={setModalTarget}/>
            }
            
            {/* Routes */}
            <Router basename='/react-portfolio/'>
                <NavBar colorIndex = {colorIndex} setBackgroundIndex={setBackgroundIndex}/>
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

export default App;
