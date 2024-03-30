import {React, useState} from 'react';
import './main-view.scss';
import '../../styles/styles.scss';
import { mainViewStrings as strings} from '../../utils/strings';
import PropTypes from 'prop-types';
import TypeWriter from '../../utils/typewriter';

export const MainView = ({iterateColor}) => {

    const [typeWriterIndex, setTypeWriterIndex] = useState(0);

    return (
        <div className='main-container'>
            {
            // Quest Bubble
            }
            <div className='mv-quest-container'>
                {
                // Background Image
                }
                <img className='mv-quest-background' src='Drake-Quest-Border-700-650.png'/>
                {
                // Text Intro
                }
                <div className='mv-quest-text-intro'>
                    <TypeWriter text={strings.greeting} speed={50}  onComplete={()=>setTypeWriterIndex(1)} />
                </div>
                {
                // Text Body
                }
                <div className='mv-quest-text-body'>
                    <div>
                        {typeWriterIndex>=1 && <TypeWriter text={strings.body} speed={10} onComplete={()=>setTypeWriterIndex(2)} />}
                    </div>
                    <div>
                        {typeWriterIndex>=2 && <TypeWriter text={strings.closing}  speed={10}/>}
                    </div>
                </div>
            </div>

            <div className='avatar-container' style={{left: '10px', bottom: '10px'}}>
                <img className='avatar-above-image'  src = '/react-portfolio/Exclaim-200-350.png' />
                <img className='avatar-image' src = '/react-portfolio/Avatar-150-450.png' onClick={iterateColor}/>
            </div>
        </div>
    );
    
};

MainView.propTypes = {
    iterateColor: PropTypes.func.isRequired,
};