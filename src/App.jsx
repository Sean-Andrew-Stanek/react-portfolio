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
import { CaseStudyView } from './components/case-study-view/case-study-view';

function App() {

    const [colorIndex, setColorIndex] = useState(0);
    const [modalData, setModalData] = useState({});

    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [messages, setMessages] = useState([]);

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
            {Object.keys(modalData).length > 0 && 
                <ModalManager modalData={modalData} setModalData={setModalData}/>
            }
            
            {/* Routes */}
            <Router basename='/'>
                <Routes>
                    <Route path='/' element={<MainView iterateColor={()=>setColorIndex(colorIndex+1)}/>} />
                    <Route path='/skills' element={<SkillsView setModalData={setModalData}/>} />
                    <Route path='/contact' element={<ContactView />} />
                    <Route path='/portfolio' element={<PortfolioView  setModalData={setModalData}/>} />
                    <Route path='/case-study' element={<CaseStudyView  setModalData={setModalData} />} />
                    <Route path='/*' element={<Navigate to='/' />} />

                </Routes>
                <NavBar colorIndex = {colorIndex} setBackgroundIndex={setBackgroundIndex} messages={messages} setMessages={setMessages}/>
            </Router>
        </div>
    );
}

export default App;
