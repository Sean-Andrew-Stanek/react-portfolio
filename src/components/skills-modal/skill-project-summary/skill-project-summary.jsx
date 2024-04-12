//modalData
//type: skill
//data: filtered object array of projects matching skill
//-image: image-src 
//-name: name of project
//-skills: array of skills
//-summary: short project summary
//-links: object with key being the name of the link and the value being the address

import {React} from 'react';
import PropTypes from 'prop-types';
import './skill-project-summary.scss';

export const SkillProjectSummary = ({project}) => {

    const setModalData = () => {
        console.log('TODO: This will open to the new modal target.');
    };

    const skillButton = (skills) => {

        const skillSet = new Set();
        
        for(const skillCategory of Object.values(skills))
            skillCategory.forEach(skill => skillSet.add(skill));

        const skillDivs = Array.from(skillSet).sort().map((skill, index) => {
            return (
                <div className='sps-skill' key={`${skill}${index}`} onClick={() => setModalData()}>
                    {skill}
                </div>
            );
        });

        return skillDivs;

    };

    const linkButton = (text, target, index) => {
        
        return (
            <div className='sps-skill' key={`${index}${text}`} onClick={() => window.open(target, '_blank')}>
                {text}
            </div>
        );

    };

    return (
        <div className='sps-container'>
            <div className='sps-image-container'>
                <img src={`${project.image}`} className='sps-image' />
            </div>
            <div className='sps-project-name'>
                {project.name}
            </div>
            <div className='sps-details'>

                <div className='sps-skill-container'>
                    {skillButton(project.skills)}
                </div>
                <div className='sps-links'>
                    {Object.entries(project.links).map(([text, target], index) => { return linkButton(text, target, index);})}
                </div>
            </div>
        </div>
    );
};

SkillProjectSummary.propTypes = {
    project: PropTypes.object.isRequired,
};