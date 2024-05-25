///////////////////////////////////////////////////////////////////////////
//                                                                       //
//  This modal will display a place to chat with an AI about the resume  //
//                                                                       //
///////////////////////////////////////////////////////////////////////////

import {React, useEffect, useState} from 'react';
import './chatbot-modal.scss';
import { images } from '../../utils/images';
import PropTypes from 'prop-types';




export const ChatBotModal = ({prepRemoveChat, setChatIsVisible}) => {


    const [userInput, setUserInput] = useState('');
    const [moveVerticalSpears, setMoveVerticalSpears] = useState(false);
    const [moveHorizontalSpears, setMoveHorizontalSpears] = useState(false);
    const [mainViewVisible, setMainViewVisible] = useState(false);
    const [chatLog, setChatLog] = useState([
        ['warn', 'Welcome to the simulated chatroom powered by OpenAI.  Feel free to ask any questions you have about my portfolio and experience.'],
        ['admin', 'Welcome!  There are currently two others online.']
    ]);

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

    useEffect(() => {
        if(prepRemoveChat)
            unloadPage();
    }, [prepRemoveChat]);

    const unloadPage = () => {

        setMainViewVisible(false);

        const removeChat = setTimeout(() => {
            setMoveVerticalSpears(false);
            setMoveHorizontalSpears(false);
        }, 500);

        
        
        const chatTimer = setTimeout(() => {
            setChatIsVisible(false);
        }, 1500);
        
        return () => {
            clearTimeout(chatTimer);
            clearTimeout(removeChat);
        };

    };

    const createMessageDiv = (message, index) => {
        if (message[0]!=='warn')
            return (
                <div className={`cbm-chat-entry ${chatColorSelector(message[0])}`} key={index}>
                    <div>
                        {`<${message[0]}>:`}
                    </div>
                    <div>
                        {`${message[1]}`}
                    </div>                 
                </div>
            );
        else
            return (
                <div className={`cbm-chat-entry ${chatColorSelector(message[0])}`} key={index}>
                    <div style={{gridColumn: 'span 2'}}>
                        {`${message[1]}`}
                    </div>                 
                </div>
            );
    };

    const chatColorSelector = (user) => {
        switch(user) {
            case 'warn':
                return 'color-warn';
            case 'admin':
                return 'color-admin';
            case 'user':
                return 'color-user';
        }
    };

    const handleSubmit = () => {
        if(userInput!=='') {
            setChatLog([...chatLog, ['user', userInput]]);

            //export const getResponseFromOpenAI = async (messages, new_message) => {
            //getResponseFromOpenAI

            setUserInput('');
        }
    };

    const handleResponse = () => {
        //Find if a new message has been sent
        //Find if there are any more messages to send

        //Set timer depending on type of message
        //Send message if appropriate
    }

    return (
        <div className={`cbm-modal-background ${mainViewVisible && 'cbm-modal-background-unfade'}`}>
            <div className = 'cbm-main-container'>
                <img className = {`cbm-spear-left ${moveVerticalSpears && 'cbm-vertical-spear-end-position'}`} src = {images.spearVertical}/>
                <img className = {`cbm-spear-right ${moveVerticalSpears && 'cbm-vertical-spear-end-position'}`} src = {images.spearVertical}/>
                <img className = {`cbm-spear-top ${moveHorizontalSpears && 'cbm-horizontal-spear-end-position'}`} src = {images.spearHorizontal}/>
                <div className = {`cbm-chat-window-container ${mainViewVisible && 'cbm-chat-window-container-visible'}`}>
                    <div className='cbm-chat-window'>
                        {/* Adds the messages */}
                        {chatLog.map((message, index) => createMessageDiv(message, index))}
                    </div>
                    <div className='cbm-user-bar'>
                        <input type='text' value={userInput} onChange = {(e) => {setUserInput(e.target.value);}} />
                        <div onClick={handleSubmit}>
                            Submit
                        </div>
                    </div>
                    
                </div>
            </div>            
        </div>

    );

};

ChatBotModal.propTypes = {
    prepRemoveChat: PropTypes.bool.isRequired,
    setChatIsVisible: PropTypes.func.isRequired,
};