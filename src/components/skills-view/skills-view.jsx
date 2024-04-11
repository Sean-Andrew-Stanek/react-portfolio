import {React, Fragment} from 'react';
import './skills-view.scss';
import PropTypes from 'prop-types';
import { projects } from '../../utils/porfolio-projects';

export const SkillsView = ({setModalData}) => {

    const getSkills = () => {
        const returnObject = {};

        projects.forEach((project) => {
            Object.keys(project.skills).forEach((key) => {
                if(!returnObject[key]) {
                    returnObject[key] = [...project.skills[key]];
                } else {
                    returnObject[key] = returnObject[key].concat(project.skills[key]);
                }
            });
        });

        Object.keys(returnObject).forEach((key) => {
            const uniqueSet = new Set(returnObject[key]);

            returnObject[key] = Array.from(uniqueSet).sort((a,b)=> {
                if(a<b) return -1;
                if(a>b) return 1;
                return 0;
            });
            
        });

        return returnObject;

    };

    const skillTree = () => {

        const skillsMasterList = getSkills();

        return (
            Object.keys(skillsMasterList).map((key, index) => (
                <Fragment key={`${key}-${index}`}>
                    <div className = 'skill-tree-header'>
                        {key}
                        <div className = 'skill-tree-expander' /* onClick={() => setVisibilityToggle(!visibilityToggle)} */ >
                            <div className='skill-plus-sign' />
                        </div>
                    </div>
                    {skillsMasterList[key].map((skill, index) => { 
                        return (
                            <div key={`${skill}+${index}`} onClick={() => setModalData({'type': 'skills', 'data': {projects}})} >
                                <div className='skill-tree-skill'>
                                    {skill}
                                </div>
                            </div>
                        );
                    })}
                </Fragment>
            ))
        );

    };

    return (
        <div className='main-container'>
            {
                //Skill Container
            }
            <div className='skill-container'>
                <div className='text-box-container' 
                    style={{
                        width: '100%',
                        height: '100%',
                    }}>
                    <div className= 'text-box-border' />
                    <div className='text-box-content' style={{alignItems:'flex-start'}}>
                        <div style={{display:'flex', flexFlow:'column', alignItems:'flex-start', overflow: 'hidden'}}>
                            {skillTree()}
                        </div>
                    </div>
                    <img className='text-box-charm' src='/react-portfolio/Drake-Corner-256-256.png'/>
                </div>
            </div>
            {
                //Info Box
            }
            <div className='quest-container skill-quest-container'>
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
            <div className='avatar-container'  style={{right: '0px', bottom: '0px'}}>
                <img className='avatar-image' src = '/react-portfolio/Avatar-150-450.png'/>
            </div>
        </div>
    );

};

SkillsView.propTypes = {
    setModalData: PropTypes.func.isRequired,
};