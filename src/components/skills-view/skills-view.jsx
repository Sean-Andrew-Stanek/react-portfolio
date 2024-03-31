import {React, useState} from 'react';
import './skills-view.scss';
import { skills } from '../../utils/strings';

export const SkillsView = () => {

    const [frontEndVisible, setFrontEndVisible] = useState(true);
    const [backEndVisible, setBackEndVisible] = useState(true);
    const [dataVisible, setDataVisible] = useState(true);
    const [devVisible, setDevVisible] = useState(true);

    const mapSkills = (skillList, visibilityToggle) => {
        return (
            skillList.map((skill, index) => {
                {return visibilityToggle && <div key={skillList+index+''}>{skill}</div>;}
            })
        );
    };

    return (
        <div className='main-container'>
            <div className='skill-container'>
                <div className = 'skill-tree-header'>
                    Front End Skills
                    <div className = 'skill-tree-expander' onClick={() => setFrontEndVisible(!frontEndVisible)} style={{backgroundColor: 'black', width:'10px', height: '10px', color: 'white'}}>+</div>
                </div>
                {mapSkills(skills.frontEndSkills, frontEndVisible)}
                <div className = 'skill-tree-header'>
                    Back End Skills
                    <div className = 'skill-tree-expander' onClick={() => setBackEndVisible(!backEndVisible)}></div>
                </div>
                {mapSkills(skills.backEndSkills, backEndVisible)}
                <div className = 'skill-tree-header'>
                    Data Skills
                    <div className = 'skill-tree-expander' onClick={() => setDataVisible(!dataVisible)}></div>
                </div>
                {mapSkills(skills.dataSkills, dataVisible)}
                <div className = 'skill-tree-header'>
                    Development Skills
                    <div className = 'skill-tree-expander' onClick={() => setDevVisible(!devVisible)}></div>
                </div>
                {mapSkills(skills.devSkills, devVisible)}
            </div>
        </div>
    );

};