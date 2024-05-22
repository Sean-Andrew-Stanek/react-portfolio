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
        <div className = 'cbm-main-container cbm-modal-background'>
            <img className = 'cbm-spear-left' src = {images.spearVertical}/>
            <img className = 'cbm-spear-right' src = {images.spearVertical}/>
            <img className = 'cbm-spear-top' src = {images.spearHorizontal}/>
            <div className = 'cbm-chat-window-container'>

            </div>
        </div>
    );

};