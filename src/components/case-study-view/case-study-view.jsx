import {React, useState, useRef, useEffect} from 'react';
import '../../styles/styles.scss';
import './case-study-view.scss';
import PropTypes from 'prop-types';
import { projects } from '../../utils/porfolio-projects';
import { images } from '../../utils/images';
import TypeWriter from '../../utils/typewriter';
import { caseStudyViewStrings as strings} from '../../utils/strings';
import '../portfolio-view/portfolio-view.scss';

export const CaseStudyView = ({setModalData}) => {

    //Filter projects with case studies.  
    //While it can handle more than four, it will only display four
    const caseStudyProjects = projects.filter(project => project.caseStudy==='true');
    const capstoneContainerListener = useRef(null);
    const [isTop, setIsTop] = useState(true);
    const [isBottom, setIsBottom] = useState(true);
    const [typeWriterIndex, setTypeWriterIndex] = useState(0);
    

    //Creates the buttons for each case study and places them appropriately around the screen.
    const createButtons = () => {
        return (
            <>
                {
                    caseStudyProjects.map((project,index) => {
                        return (
                            <div className='portfolio-project' key={`${project}${index}`} onClick={()=>setModalData({'type': 'case study', 'data': {'name': caseStudyProjects[index].name}})}>
                                <div className='portfolio-project-title'>
                                    {project.name}
                                </div>
                                <div className='portfolio-project-image-container'>
                                    <img src={`${images.projectImagePath}${project.image}`} />
                                </div>
                            </div>
                        );
                    })
                }
            </>
        );
    };

    
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
                            {createButtons()}
                        </div>
                    </div>
                    <img className='text-box-charm' src={images.textBoxCharm}/>
                    <img className={`text-box-nav-up ${isTop&&'nav-fade'}`} style={{zIndex:'-1'}} src={images.navArrow}/>
                    <img className={`text-box-nav-down ${isBottom&&'nav-fade'}`} style={{zIndex:'-1'}} src={images.navArrow}/>
                </div>
            </div>
            {
                //Info Box
            }
            <div className='quest-container portfolio-quest-container'>
                {
                // Background Image
                }
                <img alt='' className='quest-background' src={images.questBackground}/>
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



CaseStudyView.propTypes = {
    setModalData: PropTypes.func.isRequired,
};