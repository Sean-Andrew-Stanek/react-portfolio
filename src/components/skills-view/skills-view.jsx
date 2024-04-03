import {React, useState} from 'react';
import './skills-view.scss';
import { skills } from '../../utils/strings';
import PropTypes from 'prop-types';
import { projects } from '../../utils/strings';

export const SkillsView = ({setModalData}) => {

    const [frontEndVisible, setFrontEndVisible] = useState(true);
    const [backEndVisible, setBackEndVisible] = useState(true);
    const [dataVisible, setDataVisible] = useState(true);
    const [devVisible, setDevVisible] = useState(true);

    const skillTree = (skillList, visibilityToggle, setVisibilityToggle, skillListHeaderText) => {
        return (
            <>
                <div className = 'skill-tree-header'>
                    {skillListHeaderText}
                    <div className = 'skill-tree-expander' onClick={() => setVisibilityToggle(!visibilityToggle)} >
                        <div className='skill-plus-sign' />
                    </div>
                </div>
                {
                    skillList.map((skill, index) => {
                        return visibilityToggle && 
                            <div key={`${skill}+${index}`} onClick={() => setModalData({'type': 'skills', 'data': {projects}})} >
                                <div className= 'text-box-border' style={{position:'relative'}}/>
                                <div className='text-box-content' style={{position:'relative'}}>
                                    <div className='skill-tree-skill'>
                                        {skill}
                                    </div>
                                </div>
                            </div>;
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
            <div className='skill-container'>
                <div className='text-box-container' 
                    style={{
                        width: '100%',
                        height: '100%',
                    }}>
                    <div className= 'text-box-border' />
                    <div className='text-box-content' style={{alignItems:'flex-start'}}>
                        <div style={{display:'flex', flexFlow:'column', alignItems:'flex-start', overflow: 'hidden'}}>
                            {skillTree(skills.frontEndSkills, frontEndVisible, setFrontEndVisible, 'Front End Skills')}
                            {skillTree(skills.backEndSkills, backEndVisible, setBackEndVisible, 'Back End Skills')}
                            {skillTree(skills.dataSkills, dataVisible, setDataVisible, 'Data Skills')}
                            {skillTree(skills.devSkills, devVisible, setDevVisible, 'Development Skills')}
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
                <img className='quest-background' src='Drake-Quest-Border-700-650.png'/>
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
                <img className='avatar-above-image'  src = '/react-portfolio/Exclaim-200-350.png' />
                <img className='avatar-image' src = '/react-portfolio/Avatar-150-450.png'/>
            </div>
        </div>
    );

};

SkillsView.propTypes = {
    setModalData: PropTypes.func.isRequired,
};