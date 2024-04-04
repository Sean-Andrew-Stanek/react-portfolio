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

    const skillButton = (skill) => {
        return (
            <div className='sps-skill' onClick={() => setModalData()}>
                {skill}
            </div>
        );
    };

    return (
        <div className='sps-container'>
            <div className='sps-image-container'>
                <img src={`${project.image}`} className='sps-image' />
            </div>
            
            <div className='sps-details'>
                <div className='sps-project-name'>
                    {project.name}
                </div>
                <div className='sps-skill-container'>
                    {project.skills.map((skill) => { return skillButton(skill);})}
                </div>
                <div className='sps-subdetails'>
                    {`${project.links.repository}`}
                </div>
            </div>
        </div>
    );
};

SkillProjectSummary.propTypes = {
    project: PropTypes.object.isRequired,
};