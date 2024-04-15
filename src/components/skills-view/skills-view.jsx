import {React, Fragment, useState} from 'react';
import './skills-view.scss';
import PropTypes from 'prop-types';
import { projects } from '../../utils/porfolio-projects';
import { skillViewStrings as strings} from '../../utils/strings';
import TypeWriter from '../../utils/typewriter';

export const SkillsView = ({setModalData}) => {

    const [typeWriterIndex, setTypeWriterIndex] = useState(0);

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
                        {/* <div className = 'skill-tree-expander' onClick={() => setVisibilityToggle(!visibilityToggle)} >
                            <div className='skill-plus-sign' />
                        </div> */}
                    </div>
                    <div className='skill-list'>
                        {skillsMasterList[key].map((skill, index) => { 
                            return (
                                <div className='skill-tree-skill' key={`${skill}+${index}`} onClick={() => setModalData({'type': 'skills', 'data': skill})} >
                                    {skill}
                                </div>
                            );
                        })}
                    </div>
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
                    <div className='text-box-content' style={{justifyContent:'flex-start', padding:'10px', display:'flex', flexFlow:'column', alignItems:'flex-start', overflow: 'hidden'}}>
                        {skillTree()}
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
                    <TypeWriter text={strings.greeting} speed={50}  onComplete={()=>setTypeWriterIndex(1)} />
                </div>
                {
                // Text Body
                }
                <div className='quest-text-body'>
                    <div>
                        {typeWriterIndex>=1 && <TypeWriter text={strings.body} speed={5} onComplete={()=>setTypeWriterIndex(2)} />}
                    </div>
                    <div>
                        {typeWriterIndex>=2 && <TypeWriter text={strings.closing}  speed={5}/>}
                    </div>
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