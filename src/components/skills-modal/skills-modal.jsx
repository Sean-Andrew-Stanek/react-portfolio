//This modal expands a skill clicked on in the skills-view component
//It displays all projects which contain the skill
//
//modalData
//type: skill
//data: filtered array of objects for projects matching skill
//-image: image-src 
//-name: name of project
//-skills: array of skills
//-summary: short project summary

import {React} from 'react';
import PropTypes from 'prop-types';
import { SkillProjectSummary } from './skill-project-summary/skill-project-summary';

export const SkillsModal = ({modalData}) => {

    return (

        <div className='skill-modal-container'>
            {modalData.data.projects.map((project, index) =>{
                return <SkillProjectSummary project={project} key={`${project.name}${index}`}/>;
            })}

        </div>

    );

};

SkillsModal.propTypes = {
    modalData: PropTypes.object.isRequired,
};

