import {React, useState} from 'react';
import '../../styles/styles.scss';
import './main-view.scss';
import { mainViewStrings as strings} from '../../utils/strings';
import PropTypes from 'prop-types';
import TypeWriter from '../../utils/typewriter';
import { images } from '../../utils/images';
import { resumeLink } from '../../utils/strings';

export const MainView = ({iterateColor}) => {


    const handleResumeDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = resumeLink;
        downloadLink.target = '_blank';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);        
    };

    const [typeWriterIndex, setTypeWriterIndex] = useState(0);

    return (
        <div className='main-container'>
            {
            // Quest Bubble
            }
            <div className='quest-container mv-quest-container'>
                {
                // Background Image
                }
                <img alt='' className='quest-border quest-border-left' src = {images.questSide}/>
                <img alt='' className='quest-border quest-border-right' src = {images.questSide}/>
                <img alt='' className='quest-border quest-border-top' src = {images.questTop}/>
                <img alt='' className='quest-border quest-border-bottom' src = {images.questTop}/>
                <div className='quest-background'>
                    <img alt='' src = {images.questBackground}/>
                </div>
                {
                // Text Intro
                }
                <div className='quest-text-intro'>
                    <TypeWriter text={strings.greeting} speed={50}  onComplete={()=>setTypeWriterIndex(1)} />
                </div>
                {
                // Text Body
                }
                <div className='quest-text-body scrollable'>
                    {typeWriterIndex>=1 && <TypeWriter text={strings.body} speed={5} onComplete={()=>setTypeWriterIndex(2)} />}
                </div>
                {
                // Text End
                }   
                <div className='quest-text-end mv-quest-end'>
                    {typeWriterIndex>=2 && <TypeWriter text={'You can download my'} speed={5} onComplete={()=>setTypeWriterIndex(3)} />}
                    <div aria-disabled={typeWriterIndex<3} aria-label='Resume download' className={`mv-link ${typeWriterIndex<3 && 'mv-loading'}`} 
                        onClick={handleResumeDownload} onKeyDown={(event) => (event.key === 'Enter' || event.key === 'Space') && handleResumeDownload()} role='button'tabIndex='0'>
                        <img alt='' src= {images.resumeButton} />
                        <span>
                            Resume
                        </span>
                    </div>
                    {typeWriterIndex>=3 && <TypeWriter text={'or click the links above.'} speed={5} onComplete={()=>setTypeWriterIndex(3)} />}
                </div>
                
            </div>
            
            {
            //Avatar
            }
            <div className='avatar-container' style={{left: '10px', bottom: '10px'}}>
                <img className='avatar-image' src = {images.avatar} onClick={iterateColor}/>
            </div>
        </div>
    );
    
};

MainView.propTypes = {
    iterateColor: PropTypes.func.isRequired,
};