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
            <div className='avatar-container'>
                <img src = 'Exclaim-200-350.png' className='avatar-above-image'/>
                <img src = 'Avatar-150-450.png'  className='avatar-image' onClick={iterateColor}/>
            </div>
            <div className='mv-text-bubble'>
                <div style={{margin: '0 auto'}}>
                    <TypeWriter text={strings.greeting} speed={50}  onComplete={()=>setTypeWriterIndex(1)} />
                    
                </div>
                <div style={{margin: '0 10px'}}>
                    {typeWriterIndex>=1 && <TypeWriter text={strings.body} speed={10} onComplete={()=>setTypeWriterIndex(2)} />}
                </div>
                <div style={{margin: '0 10px'}}>
                    {typeWriterIndex>=2 && <TypeWriter text={strings.closing}  speed={10}/>}
                </div>
            </div>
        </div>
    );
    
};

MainView.propTypes = {
    iterateColor: PropTypes.func.isRequired,
};