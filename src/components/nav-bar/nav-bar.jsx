import {React, Fragment, useEffect, useState, useRef} from 'react';
import './nav-bar.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { contactRoutes } from '../../utils/strings';
import { images } from '../../utils/images';
import { ChatBotModal } from '../chatbot-modal/chatbot-modal';

export const NavBar = ({colorIndex, setBackgroundIndex}) => {

    const [healthBarIndex, setHealthBarIndex] = useState(0);
    const [healthBarWidth, setHealthBarWidth] = useState(0);
    const [prepRemoveChat, setPrepRemoveChat] = useState(true);
    const [chatIsVisible, setChatIsVisible] = useState(false);
    const [isStarting, setIsStarting] = useState(true);

    const healthBarContainerRef = useRef(null);
    
    let colors = ['black', 'red', 'yellow', 'green', 'blue'];
    let percentageHealthBar = [0, .25, .5, .75, 1];

    /*****************/
    // Functions
    /*****************/

    let updateBackgroundLocation = (index) => {
        setBackgroundIndex(index);
    };

    //Tied to a window resize listener
    let updateHealthBarWidth = () => {
        if(healthBarContainerRef.current) {
            setHealthBarWidth(healthBarContainerRef.current.offsetWidth);
        }
    };

    let moveHealthBarLeft = () => {
        return 0-healthBarWidth*(percentageHealthBar[healthBarIndex%percentageHealthBar.length]);
    };
    
    let cancelDefaultDrag = (event) => {
        event.preventDefault();
    };

    /*****************/
    // useEffects
    /*****************/

    //The health bar animates to the correct length according to the window size.
    useEffect(() => {
        updateHealthBarWidth();
        window.addEventListener('resize', updateHealthBarWidth);
        
        const showAIToolTipTimer = setTimeout(() => {
            setIsStarting(false);
        }, 5000);

        return () => {
            clearTimeout(showAIToolTipTimer);
            window.removeEventListener('resize', updateHealthBarWidth);
        };        

    },[]);

    /*****************/
    // Sub-Components
    /*****************/

    //Link and Image strings

    let routes = ['home', 'contact', 'skills', 'portfolio','case-study'];
    let routeDetails = ['Return to the intro screen.', 'Contact me for information!', 'My skill set.', 'My projects and achievements.', 'Case studies of my projects'];


    let namePlate = () => {
        return (
            <>
                <img src={images.namePlateBackground} className='nb-name-plate'/>
                <div className='nb-name-plate nb-name-plate-color-overlay' style={{backgroundColor: colors[colorIndex%colors.length], opacity: .4}}/>
                <img src={images.namePlate} className='nb-name-plate' />
            </>
        );
    };

    let healthBar = () => {
        return (
            <div ref={healthBarContainerRef} className='nb-healthbar-container'>
                <img src= {images.redHealthBar} className='nb-health-bar'/>
                <img src= {images.greenHealthBar} className='nb-health-bar' style = {{left: `${moveHealthBarLeft()}px`}}/>
                <img src= {images.healthBarOutline} className='nb-health-bar'/>
            </div>
        );
    };
    
    let topNavBar = () => {
        return (
            <div className='nb-buffbar'>
                {
                    routes.map((path, index)=> {
                        let capPath = path.charAt(0).toUpperCase() + path.slice(1);
                        return (
                            <Fragment key={index}>
                                <Link to={`./${path}`} aria-label={`Navigate to ${capPath}`} className='nb-tooltip-anchor' onClick={() => {setHealthBarIndex(index); updateBackgroundLocation(index);}}  role='link'>
                                    <img alt={`Button to ${capPath}`} className='nb-buffbar-image' onDragStart={cancelDefaultDrag} role='link' src={`${images.iconImagePath}${capPath}.png`} />
                                    <div className='nb-tooltip-down  nb-tooltip'>
                                        <div>
                                            {capPath}
                                        </div>
                                        <div style={{color:'rgba(255, 255, 255, .5)', fontSize: '.8rem', fontStyle: 'italic'}}>
                                            {routeDetails[index]}
                                        </div>
                                        
                                    </div>
                                </Link>
                            </Fragment>
                        );
                    })
                }
            </div>
        );
    };

    let profileImage = () => {
        return(
            <>
                <img src= {images.portraitTextureBackground} className='nb-profile-image'/>
                <div className='nb-profile-image nb-profile-background-color' style={{borderRadius: '50%', backgroundColor: colors[colorIndex%colors.length], opacity: .4}} />
                <img src= {images.portrait} className='nb-profile-image' />
                <img src= {images.portraitBorder} className='nb-profile-image nb-profile-border' />
            </>
        );
    };

        
    let handleChatVisible = () => {
        if(chatIsVisible) {
            setPrepRemoveChat(true);
        }else {
            setPrepRemoveChat(false);
            setChatIsVisible(true);
        }
    };

    let showAIToolTip  = {
        bottom: 'calc(100% + 5px)',
        opacity: '1',
        visibility: 'visible'
    };

    let bottomNavBar = () => {
        return (
            <div className='nb-bottom-skillbar'>
                {chatIsVisible&&
                    <ChatBotModal 
                        prepRemoveChat = {prepRemoveChat} 
                        setChatIsVisible = {setChatIsVisible}
                    />}
                <img className='nb-skillbar-end' src={'Nav-Bar-End-400-200.png'} style={{ transform: 'scaleX(-1)' }}/>
                {
                    //Adhere to format rules for image and outbound link
                }
                {
                    contactRoutes.map((info, index) => {
                        return (
                            <div className='nb-skillbar-border'  key={index}>
                                <img src={'Nav-Bar-Icon-Border-150-200.png'}/>
                                <Link to={info[1]} aria-label={`Navigate to Sean's ${info[1]} page`} target='_blank' key={index}style={{overflow:'hidden'}}>
                                    <img className='nb-skillbar-icon nb-icon-bottom' onDragStart={cancelDefaultDrag} role='link' src={`${images.iconImagePath}${info[0]}.png`}/>
                                </Link>
                                <div className='nb-tooltip-up nb-tooltip'>
                                    <div>
                                        {info[0].replace('-', '')}
                                    </div>
                                    <div style={{color:'rgba(255, 255, 255, .5)', fontSize: '.8rem', fontStyle: 'italic'}}>
                                        Contact me on {info[0]}!
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                <div className='nb-skillbar-mid'> 
                    <img onClick={()=> handleChatVisible()} src={images.chatButton} />
                    <div className='nb-skill-bar-mid-shimmer-mask'/>
                    <div className='nb-tooltip-up nb-tooltip nb-chat-tooltip' style={isStarting?{...showAIToolTip}:{}}>
                        <div style={{textAlign:'center'}}>
                            Check out my Portfolio AI Chat.
                        </div>
                        <div>
                            <img src={images.navArrow} className='nb-tooltip-arrow'/>
                        </div>
                    </div>
                </div>
                <img className='nb-skillbar-end' src={'Nav-Bar-End-400-200.png'}/>  
            </div>
        );
    };

    /*****************/
    // Main Component
    /*****************/
    return (
        <div className='navbar-container'>
            {bottomNavBar()}
            {namePlate()}
            {topNavBar()}
            {healthBar()}
            {profileImage()}
        </div>
    );

};

NavBar.propTypes = {
    colorIndex: PropTypes.number.isRequired,
    setBackgroundIndex: PropTypes.func.isRequired,
};
