import {React, useEffect, useRef, useState} from 'react';
import './portfolio-view.scss';
import { projects } from '../../utils/porfolio-projects';
import PropTypes from 'prop-types';
import { portfolioViewStrings as strings} from '../../utils/strings';
import TypeWriter from '../../utils/typewriter';
import { images } from '../../utils/images';

export const PortfolioView = ({setModalData}) => {

    const capstoneContainerListener = useRef(null);
    const [isTop, setIsTop] = useState(true);
    const [isBottom, setIsBottom] = useState(true);


    /*
    *   Controls nav helper opacity
    */
    const handleScroll = () => {
        const capstoneScroller = capstoneContainerListener.current;

        setIsTop(capstoneScroller.scrollTop === 0);
            
        setIsBottom(capstoneScroller.scrollTop >= (capstoneScroller.scrollHeight - capstoneScroller.clientHeight));

    };

    /*
    *   onLoad calls
    */
    useEffect(() => {
        handleScroll();
    }, []);

    const [typeWriterIndex, setTypeWriterIndex] = useState(0);

    /*
    *   filters capstone projects and displays
    */
    let portfolioCapstones = () => {
        let filteredProjects = projects.filter(project => project.capstone==='true');

        return (
            <>
                {
                    filteredProjects.map((project, index) => {
                        return(
                            <div className='portfolio-project' key={`${project}${index}`} onClick={()=>setModalData({'type':'project', 'data':{'name':`${project.name}`}})}>
                                <div className='portfolio-project-title'>
                                    {project.name}
                                </div>
                                <div className='portfolio-project-image-container'>
                                    <img src={`${project.image}`} />
                                </div>
                            </div>
                        );
                    })
                }
            </>
        );
    };
    
    return (
        <div className='main-container'>
            {
                //Skill Container
            }
            <div className='portfolio-container'>
                <div className='text-box-container' 
                    style={{
                        width: '100%',
                        height: '100%',
                    }}>
                    <div className= 'text-box-border' />
                    <div className='text-box-content scrollable' style={{alignItems:'flex-start'}} ref={capstoneContainerListener} onScroll={handleScroll}>
                        <div className='portfolio-capstone-container'>
                            {portfolioCapstones()}
                        </div>
                    </div>
                    <img className='text-box-charm' src={images.textBoxCharm}/>
                    <img className={`text-box-nav-up ${isTop&&'nav-fade'}`} src={images.navArrow}/>
                    <img className={`text-box-nav-down ${isBottom&&'nav-fade'}`} src={images.navArrow}/>
                </div>
            </div>
            {
                //Info Box
            }
            <div className='quest-container portfolio-quest-container'>
                {
                // Background Image
                }
                <img className='quest-background' src={images.questBackground}/>
                {                
                // Text Intro
                }
                <div className='quest-text-intro'>
                    <TypeWriter text={strings.greeting} speed={50}  onComplete={()=>setTypeWriterIndex(1)} />
                </div>
                {
                // Text Body
                }
                <div className='quest-text-body'>
                    {typeWriterIndex>=1 && <TypeWriter text={strings.body} speed={5} onComplete={()=>setTypeWriterIndex(2)} />}
                </div>
                {
                // Text End
                }   
                <div className='quest-text-end'>
                    {typeWriterIndex>=2 && <TypeWriter text={strings.closing}  speed={5}/>}
                </div>
            </div>
            {
                //Avatar
            }
            <div className='avatar-container'  style={{left: '0px', bottom: '0px'}}>
                <img className='avatar-image' src = {images.avatar}/>
            </div>
        </div>
    );
};

PortfolioView.propTypes = {
    setModalData: PropTypes.func.isRequired,
};