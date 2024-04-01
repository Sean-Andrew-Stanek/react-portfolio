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

    console.log(project);
    return (
        <div className='sps-container'>
            <img src={project.image} className='sps-image' />
            <div className='sps-details'>
                <div className='sps-subdetails'>
                    {project.name}
                </div>
                <div className='sps-subdetails'>
                    {project.skills}
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