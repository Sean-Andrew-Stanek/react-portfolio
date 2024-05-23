///////////////////////////////////////////////////////////////////////////
//                                                                       //
//  This modal will display a place to chat with an AI about the resume  //
//                                                                       //
///////////////////////////////////////////////////////////////////////////

import {React, useEffect, useState} from 'react';
import './chatbot-modal.scss';
import { images } from '../../utils/images';




export const ChatBotModal = () => {

    const [moveVerticalSpears, setMoveVerticalSpears] = useState(false);
    const [moveHorizontalSpears, setMoveHorizontalSpears] = useState(false);
    const [mainViewVisible, setMainViewVisible] = useState(false);

    useEffect(() => {
        
        setMoveVerticalSpears(true);

        const horizontalTimer = setTimeout(() => {
            setMoveHorizontalSpears(true);
        }, 0);

        const mainWindowTimer = setTimeout(() => {
            setMainViewVisible(true);
        }, 1000);

        return() => {
            clearTimeout(horizontalTimer);
            clearTimeout(mainWindowTimer);
        };

    }, []);

    const unloadPage = () => {

        setMoveVerticalSpears(false);
        setMoveHorizontalSpears(false);
        setMainViewVisible(false);

    };

    return (
        <div className='cbm-modal-background'>
            <div className = 'cbm-main-container'>
                <img className = {`cbm-spear-left ${moveVerticalSpears && 'cbm-vertical-spear-end-position'}`} src = {images.spearVertical}/>
                <img className = {`cbm-spear-right ${moveVerticalSpears && 'cbm-vertical-spear-end-position'}`} src = {images.spearVertical}/>
                <img className = {`cbm-spear-top ${moveHorizontalSpears && 'cbm-horizontal-spear-end-position'}`} src = {images.spearHorizontal}/>
                <div className = {`cbm-chat-window-container ${mainViewVisible && 'cbm-chat-window-container-visible'}`}>
                    <div className='cbm-chat-window'>

                    </div>
                    <div className='cbm-user-bar'>
                        <div className='cbm-input-box'>

                        </div>
                        <div className='cbm-submit-button'>
                            Submit
                        </div>
                    </div>
                    
                </div>
            </div>            
        </div>

    );

};