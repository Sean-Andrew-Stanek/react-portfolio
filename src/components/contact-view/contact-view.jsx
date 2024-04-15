import {React} from 'react';
import './contact-view.scss';
import '../../styles/styles.scss';
import { contactRoutes } from '../../utils/strings';

export const ContactView = () => {


    let contactButton = (info, index) => {
        console.log('ding');
        return (
            <div className='text-box-container' key={`${info}-${index}`}>
                <div className= 'text-box-border' />
                <div className='text-box-content'>
                    Contact me on {info[0]}
                </div>
                <img className='text-box-charm' src='/react-portfolio/Drake-Corner-256-256.png'/>
            </div>
        );
    };

    return (
        <div className='main-container'>
            
            {
            // Left Side Links
            }
            <div className='cv-button-column'>
                {contactRoutes.map((info, index) => {
                    return contactButton(info, index);
                })}
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
            
            {
                //Avatar
            }
            <div className='avatar-container'  style={{right: '10px', bottom: '10px'}}>
                <img className='avatar-above-image'  src = '/react-portfolio/Exclaim-200-350.png' />
                <img className='avatar-image' src = '/react-portfolio/Avatar-150-450.png'/>
            </div>

        </div>
    );

    
};
