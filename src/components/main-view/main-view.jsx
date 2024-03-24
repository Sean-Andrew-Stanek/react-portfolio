import {React} from 'react';
import './main-view.scss';
import '../../styles/avatar.scss';
import { mainViewStrings as strings} from '../../utils/strings';

export const MainView = () => {

    return (
        <div className='main-view-container'>
            <div className='avatar-container'>
                <img src = 'Question-200-350.png' className='avatar-above-image'/>
                <img src = 'Avatar-150-450.png'  className='avatar-image'/>
            </div>
            <div className='mv-text-bubble'>
                <div style={{margin: '0 auto'}}>
                    {strings.greeting}
                </div>
                <div style={{margin: '0 10px'}}>
                    {strings.body}
                </div>
                <div style={{margin: '0 10px'}}>
                    {strings.closing}
                </div>
            </div>
        </div>
    );

    
};
