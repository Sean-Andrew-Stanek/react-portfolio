import {React, useState} from 'react';
import './skills-view.scss';
import { skills } from '../../utils/strings';

export const SkillsView = () => {

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
                        {return visibilityToggle && <div key={`${skill}+${index}`}>{skill}</div>;}
                    })
                }
            </>
        );
    };

    return (
        <div className='main-container'>
            <div className='skill-container'>
                {skillTree(skills.frontEndSkills, frontEndVisible, setFrontEndVisible, 'Front End Skills')}
                {skillTree(skills.backEndSkills, backEndVisible, setBackEndVisible, 'Back End Skills')}
                {skillTree(skills.dataSkills, dataVisible, setDataVisible, 'Data Skills')}
                {skillTree(skills.devSkills, devVisible, setDevVisible, 'Development Skills')}
            </div>
        </div>
    );

};