import {React} from 'react';
import './contact-view.scss';
import '../../styles/styles.scss';

export const ContactView = () => {



    return (
        <div className='main-container'>

            <div className='cv-button-column'>
                <div className='text-box-container'>
                    <div className= 'text-box-border' />
                    <div className='text-box-content'>
                        Contact me on Discord
                    </div>
                    <img className='text-box-charm' src='/react-portfolio/Drake-Corner-256-256.png'/>
                </div>
                <div className='text-box-container'>
                    <div className= 'text-box-border' />
                    <div className='text-box-content'>
                        Contact me on Twitter
                    </div>
                    <img className='text-box-charm' src='/react-portfolio/Drake-Corner-256-256.png'/>
                </div>
                <div className='text-box-container'>
                    <div className= 'text-box-border' />
                    <div className='text-box-content'>
                        Contact me on LinkedIn
                    </div>
                    <img className='text-box-charm' src='/react-portfolio/Drake-Corner-256-256.png'/>
                </div>
                <div className='text-box-container'>
                    <div className= 'text-box-border' />
                    <div className='text-box-content'>
                        Contact me through e-mail
                    </div>
                    <img className='text-box-charm' src='/react-portfolio/Drake-Corner-256-256.png'/>
                </div>
            </div>

            <div className='quest-container cv-quest-container'>
                {
                // Background Image
                }
                <img className='quest-background' src='Drake-Quest-Border-700-650.png'/>
                {
                // Text Intro
                }
                <div className='quest-text-intro'>
                    Intro
                </div>
                {
                // Text Body
                }
                <div className='quest-text-body'>
                    body
                </div>
            </div>
            
            <div className='avatar-container'  style={{right: '10px', bottom: '10px'}}>
                <img className='avatar-above-image'  src = '/react-portfolio/Exclaim-200-350.png' />
                <img className='avatar-image' src = '/react-portfolio/Avatar-150-450.png'/>
            </div>

        </div>
    );

    
};
