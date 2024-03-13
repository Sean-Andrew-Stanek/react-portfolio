import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {React} from 'react';
import { NavBar } from './components/nav-bar/nav-bar';

function App() {
    
    return (
        <div className='App'>
            <NavBar/>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}


export default App;
