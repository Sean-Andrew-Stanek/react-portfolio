import {React} from 'react';
import './contact-view.scss';
import '../../styles/styles.scss';

export const ContactView = () => {

    return (
        <div className='main-container'>
            
            <div className='avatar-container' style={{right: '10px', bottom: '10px'}}>
                <img className='avatar-above-image'  src = '/react-portfolio/Exclaim-200-350.png' />
                <img className='avatar-image' src = '/react-portfolio/Avatar-150-450.png'/>
            </div>

            <div className='cv-button-container'>
                <div className= 'cv-gradient-border' />
                <div className='cv-button'>
                </div>
                <img className='cv-charm' src='/react-portfolio/Drake-Corner-256-256.png'/>
            </div>

        </div>
    );

    
};
