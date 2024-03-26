import {React, useState} from 'react';
import './main-view.scss';
import '../../styles/avatar.scss';
import { mainViewStrings as strings} from '../../utils/strings';
import PropTypes from 'prop-types';
import TypeWriter from '../../utils/typewriter';

export const MainView = ({iterateColor}) => {

    const [typeWriterIndex, setTypeWriterIndex] = useState(0);

    return (
        <div className='main-view-container'>
            {
            // Quest Bubble
            }
            <div className='mv-quest-container'>
                {
                // Background Image
                }
                <img src='Drake-Quest-Border-700-650.png' className='mv-quest-background' />
                {
                // Text Intro
                }
                <div className='mv-quest-text-intro' style={{margin: '0 auto'}}>
                    <TypeWriter text={strings.greeting} speed={50}  onComplete={()=>setTypeWriterIndex(1)} />
                </div>
                {
                // Text Body
                }
                <div className='mv-quest-text-body'>
                    <div style={{margin: '0 10px'}}>
                        {typeWriterIndex>=1 && <TypeWriter text={strings.body} speed={10} onComplete={()=>setTypeWriterIndex(2)} />}
                    </div>
                    <div style={{margin: '0 10px'}}>
                        {typeWriterIndex>=2 && <TypeWriter text={strings.closing}  speed={10}/>}
                    </div>
                </div>
            </div>

            <div className='avatar-container'>
                <img src = '/react-portfolio/Exclaim-200-350.png' className='avatar-above-image'/>
                <img src = '/react-portfolio/Avatar-150-450.png'  className='avatar-image' onClick={iterateColor}/>
            </div>
        </div>
    );
    
};

MainView.propTypes = {
    iterateColor: PropTypes.func.isRequired,
};