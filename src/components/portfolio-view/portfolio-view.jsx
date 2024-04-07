import {React} from 'react';
import './portfolio-view.scss';
import { projects } from '../../utils/porfolio-projects';

export const PortfolioView = () => {

    let portfolioCapstones = () => {
        let filteredProjects = projects.filter(project => project.capstone==='true');

        return (
            <>
                {
                    filteredProjects.map((project, index) => {
                        return(
                            <div className='portfolio-project' key={`${project}${index}`}>
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
                    <div className='text-box-content' style={{alignItems:'flex-start'}}>
                        <div className='portfolio-capstone-container'>
                            {portfolioCapstones()}
                        </div>
                    </div>
                    <img className='text-box-charm' src='/react-portfolio/Drake-Corner-256-256.png'/>
                </div>
            </div>
            {
                //Info Box
            }
            <div className='quest-container portfolio-quest-container'>
                {
                // Background Image
                }
                <img className='quest-background' src='/react-portfolio/Drake-Quest-Border-700-650.png'/>
                {
                // Text Intro
                }
                <div className='quest-text-intro'>
                    Intro
                </div>
                {
                // Text Body
                }
                <div className='quest-text-body'>
                    body
                </div>
            </div>
            {
                //Avatar
            }
            <div className='avatar-container'  style={{left: '0px', bottom: '0px'}}>
                <img className='avatar-image' src = '/react-portfolio/Avatar-150-450.png'/>
            </div>
        </div>
    );
};
