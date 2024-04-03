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
                        return visibilityToggle && <div key={`${skill}+${index}`} onClick={() => setModalData({'type': 'skills', 'data': {projects}})} >
                            {skill}
                        </div>;
                    })
                }
            </>
        );
    };

    return (
        <div className='main-container'>
            <div className='text-box-container' 
                style={{
                    top: '10%',
                    width: '50%',
                    height: '80%',
                }}>
                <div className= 'text-box-border' />
                <div className='text-box-content'>
                    <div className='skill-container'>
                        {skillTree(skills.frontEndSkills, frontEndVisible, setFrontEndVisible, 'Front End Skills')}
                        {skillTree(skills.backEndSkills, backEndVisible, setBackEndVisible, 'Back End Skills')}
                        {skillTree(skills.dataSkills, dataVisible, setDataVisible, 'Data Skills')}
                        {skillTree(skills.devSkills, devVisible, setDevVisible, 'Development Skills')}
                    </div>
                </div>
                <img className='text-box-charm' src='/react-portfolio/Drake-Corner-256-256.png'/>
            </div>
        </div>
    );

};

SkillsView.propTypes = {
    setModalData: PropTypes.func.isRequired,
};