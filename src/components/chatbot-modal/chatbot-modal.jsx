///////////////////////////////////////////////////////////////////////////
//                                                                       //
//  This modal will display a place to chat with an AI about the resume  //
//                                                                       //
///////////////////////////////////////////////////////////////////////////

import React from 'react';
import './chatbot-modal.scss';
import { images } from '../../utils/images';


export const ChatBotModal = () => {

    return (
        <div className='cbm-modal-background'>
            <div className = 'cbm-main-container'>
                <img className = 'cbm-spear-left' src = {images.spearVertical}/>
                <img className = 'cbm-spear-right' src = {images.spearVertical}/>
                <img className = 'cbm-spear-top' src = {images.spearHorizontal}/>
                <div className = 'cbm-chat-window-container'>
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