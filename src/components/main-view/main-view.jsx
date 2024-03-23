import {React} from 'react';
import './main-view.scss';

export const MainView = () => {

    return (
        <div className='main-view-container'>
            <div className='mv-avatar-container'>
                <img src = 'Question-200-350.png' style={{width:'35%', marginBottom: '5px'}}/>
                <img src = 'Avatar-150-450.png'  style={{width:'100%'}}/>
            </div>
            <div className='mv-text-bubble'>
                
            </div>
        </div>
    );

    
};
