///////////////////////////////////////////////////////////////////////////
//                                                                       //
//  This modal will display a place to chat with an AI about the resume  //
//                                                                       //
///////////////////////////////////////////////////////////////////////////

import {React, useEffect, useState} from 'react';
import './chatbot-modal.scss';
import { images } from '../../utils/images';
import PropTypes from 'prop-types';
import { getResponseFromOpenAI } from '../../utils/fetch';




export const ChatBotModal = ({prepRemoveChat, setChatIsVisible, messages, setMessages}) => {


    const [userInput, setUserInput] = useState('');
    const [moveVerticalSpears, setMoveVerticalSpears] = useState(false);
    const [moveHorizontalSpears, setMoveHorizontalSpears] = useState(false);
    const [mainViewVisible, setMainViewVisible] = useState(false);
    //TODO: Add a random starting chat
    const [chatLog, setChatLog] = useState([
        ['warn', 'Welcome to the simulated chatroom powered by OpenAI.  Feel free to ask any questions you have about my portfolio and experience.'],
        ['admin', 'Welcome!  There are currently two others online.']
    ]);
    //TODO: Add an initial buffer
    const [bufferedMessages, setBufferedMessages] = useState([]);
    
    const createBuffer = async () => {
        //No chance of infinite repeat
        if(bufferedMessages.length === 0){

            let response = await getResponseFromOpenAI([], 'Send me the first three lines in a conversation about Sean Stanek');
            setChatLog([...chatLog, ['user', response['reply']]]);
            setBufferedMessages(response['reply']);

        }

        //Return structured response.
        return [];
            
    };

    useEffect(() => {

        //console.log('useEffect in use');
        
        setMoveVerticalSpears(true);

        const horizontalTimer = setTimeout(() => {
            setMoveHorizontalSpears(true);
        }, 0);

        const mainWindowTimer = setTimeout(() => {
            setMainViewVisible(true);
        }, 1000);

        //Get initial "messages" behind the scenes but only on first load
        const initBuffer = async() => {
            if(chatLog.length === 2) {
                const buffer = await createBuffer();
                setBufferedMessages(buffer);
            }
        };

        initBuffer();

        return() => {
            clearTimeout(horizontalTimer);
            clearTimeout(mainWindowTimer);
        };

    }, []);

    //useEffect that unloads the page with style
    useEffect(() => {
        if(prepRemoveChat)
            unloadPage();
    }, [prepRemoveChat]);

    //function that unloads the page with style
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

    //Chat Stream - The lines the user sees
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

    //Chat entry colors
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

    //Handles user input
    const handleSubmit = async() => {
        if(userInput!=='') {
            
            //Add user message to chat log
            setChatLog([...chatLog, ['user', userInput]]);           

            //Get response

            let strResponse = await getResponseFromOpenAI([], `The user has written "${userInput}.  Give me the next three chat responses responding to the users message in an array with each line a JSON object using double quotes`);
            
            let response = strResponse['reply'];
            console.log(response);
            response = JSON.parse(response);
            console.log(response);


            let newBufferedMessages = [];

            response.forEach( msg => {
                for(const[key,value] of Object.entries(msg)){
                    newBufferedMessages = [...newBufferedMessages, [key, value]];
                }
            });
            console.log(newBufferedMessages);

            setBufferedMessages(newBufferedMessages);
            //TODO: have buffered messages do this
            console.log(`ChatLog: ${chatLog}`);
            setChatLog(prevChatLog => [...prevChatLog, ...newBufferedMessages]);

            setUserInput('');
        }
    };





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
                        {/* TODO: Make this look smaller */}
                        {(bufferedMessages.length !== 0) && 
                            <div className={'cbm-chat-entry'}>
                                <div style={{gridColumn: 'span 2'}}>
                                    Someone is typing...
                                </div>                 
                            </div>
                        }
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
    setMessages: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            role: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};