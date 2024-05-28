///////////////////////////////////////////////////////////////////////////
//                                                                       //
//  This modal will display a place to chat with an AI about the resume  //
//                                                                       //
///////////////////////////////////////////////////////////////////////////

import {React, useEffect, useState, useRef} from 'react';
import './chatbot-modal.scss';
import { images } from '../../utils/images';
import PropTypes from 'prop-types';
import { getResponseFromOpenAI } from '../../utils/fetch';




export const ChatBotModal = ({prepRemoveChat, setChatIsVisible}) => {


    const [userInput, setUserInput] = useState('');
    const [moveVerticalSpears, setMoveVerticalSpears] = useState(false);
    const [moveHorizontalSpears, setMoveHorizontalSpears] = useState(false);
    const [mainViewVisible, setMainViewVisible] = useState(false);
    const [nextBufferedUser, setNextBufferedUser] = useState('');
    //TODO: Add a random starting chat
    const [chatLog, setChatLog] = useState([
        ['warn', 'Welcome to the simulated chatroom powered by OpenAI.  Feel free to ask any questions you have about my portfolio and experience.'],
        ['admin', 'Welcome!  There are currently two others online.']
    ]);
    const scrollableChatContainerRef = useRef(null);
    const [bufferedMessages, setBufferedMessages] = useState([]);
    const initialBufferFetch = useRef(false);
    const messageTimeout = useRef(null);

    
    const createBuffer = async () => {
        //No chance of infinite repeat
        if(!initialBufferFetch.current && bufferedMessages.length === 0){
            let strResponse = await getResponseFromOpenAI([], 'Send me the first three lines in a conversation about Sean Stanek');
            initialBufferFetch.current = true;
            setBufferedMessages(formatResponse(strResponse));
        }            
    };

    //Returns an array of messages in {<userName>: <message>} format
    const formatResponse = (fullResponse) => {
        let response = fullResponse['reply'];
        
        try {
            response = JSON.parse(response);    
        }
        catch{
            console.log(`error with response: ${response}`);
            
        }
        

        let newBufferedMessages = [];

        response.forEach( msg => {
            for(const[key,value] of Object.entries(msg)){
                newBufferedMessages = [...newBufferedMessages, [key, value]];
            }
        });

        return newBufferedMessages;
    };

    //Sends out the buffered messages sequentially.
    //First is after 2 seconds.  Each after is 4 seconds.
    const addBufferedMessages = (passedIndex) => {
        if(bufferedMessages.length > passedIndex){
            setNextBufferedUser(bufferedMessages[passedIndex][0]);
            messageTimeout.current = setTimeout(() => {
                setChatLog(prevChat => [...prevChat, bufferedMessages[passedIndex]]);             
                addBufferedMessages(passedIndex+1, messageTimeout);
            }, (2000 + (passedIndex !== 0 && 2000)));
        } else {
            setNextBufferedUser('');
            setBufferedMessages([]);
        }
    };

    useEffect(() => {

        const passedIndex = 0;

        if(bufferedMessages.length > 0) {
            if(messageTimeout.current) {
                clearTimeout(messageTimeout.current);
            }

            addBufferedMessages(passedIndex);
        }

    }, [bufferedMessages]);

    

    useEffect(() => {
        if (scrollableChatContainerRef.current) {
            scrollableChatContainerRef.current.scrollTop = scrollableChatContainerRef.current.scrollHeight;
        }
    }, [chatLog]);

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
                createBuffer();
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

    const formatName = (name) => {
        switch (name) {
            case 'NPC1': 
                return 'Bob';
            case 'NPC2':
                return 'Steve';
            case 'user':
                return 'Guest';
            case 'admin':
                return 'Admin';
            default:
                return name;

        }
    }

    //Chat Stream - The lines the user sees
    const createMessageDiv = (message, index) => {
        if (message[0]!=='warn')
            return (
                <div className={`cbm-chat-entry ${chatColorSelector(message[0])}`} key={index}>
                    <div>
                        {`<${formatName(message[0])}>:`}
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
            case 'NPC1':
                return 'color-npc1';
            case 'NPC2':
                return 'color-npc2';
        }
    };

    //Handles user input
    const handleSubmit = async() => {
        if(userInput!=='') {
            
            //Add user message to chat log
            setChatLog([...chatLog, ['user', userInput]]);           

            let strResponse = await getResponseFromOpenAI([], `The user has written "${userInput}.  Give me the next three chat responses responding to the user message`);
            setBufferedMessages(formatResponse(strResponse));

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
                    <div className='cbm-scrollable-container' ref={scrollableChatContainerRef}>
                        <div className='cbm-chat-window'>
                            {/* Adds the messages */}
                            {chatLog.map((message, index) => createMessageDiv(message, index))}
                            {/* TODO: Make this look smaller */}
                            {(nextBufferedUser !== '') && 
                                <div className={'cbm-chat-entry'}>
                                    <div className = {'cbm-typing-notification'} style={{gridColumn: 'span 2'}}>
                                        {`${nextBufferedUser} is typing...`}
                                    </div>                 
                                </div>
                            }
                        </div>
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