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

    
    
    /*
    *   All projects with the requested skill from modalData.data
    */
    const filteredList = projects.filter(project =>
        project.skills.frontend.includes(modalData.data) ||
        project.skills.backend.includes(modalData.data) ||
        project.skills.other.includes(modalData.data)
    );

    return (

        <div className='skill-modal-container'>
            <div className='text-box-container' style={{width: '100%', height: '100%'}}>
                <div className= 'text-box-border' />
                <div className='text-box-content skill-modal-projects'>
                    {filteredList.map((project, index) =>{
                        return <SkillProjectSummary setModalData={setModalData} project={project} key={`${project.name}${index}`}/>;
                    })}
                </div>
                <img className='text-box-nav-up' src='/react-portfolio/Nav-Arrow-1024-1024.png'/>
                <img className='text-box-nav-down' src='/react-portfolio/Nav-Arrow-1024-1024.png'/>
            </div>
        </div>

    );

};

SkillsModal.propTypes = {
    modalData: PropTypes.object.isRequired,
    setModalData: PropTypes.func.isRequired
};

