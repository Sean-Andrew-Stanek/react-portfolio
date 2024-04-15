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
import './skills-modal.scss';
import { projects } from '../../utils/porfolio-projects';

export const SkillsModal = ({modalData, setModalData}) => {

    
    

    const filteredList = projects.filter(project =>
        project.skills.frontend.includes(modalData.data) ||
        project.skills.backend.includes(modalData.data) ||
        project.skills.other.includes(modalData.data)
    );

    return (

        <div className='skill-modal-container'>
            {filteredList.map((project, index) =>{
                return <SkillProjectSummary setModalData={setModalData} project={project} key={`${project.name}${index}`}/>;
            })}

        </div>

    );

};

SkillsModal.propTypes = {
    modalData: PropTypes.object.isRequired,
    setModalData: PropTypes.func.isRequired
};

