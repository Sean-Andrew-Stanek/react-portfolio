//This modal expands a skill clicked on in the skills-view component
//It displays all projects which contain the skill
//
//modalData
//'type': 'project'
//'data': {OBJECT}
//- name: name of project

import { React, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { projects } from '../../utils/porfolio-projects';
import './portfolio-modal.scss';

export const PortfolioModal = ({modalData, setModalData}) => {

    const horizontalScrollRef = useRef(null);

    /*
    *  Horizontal content scroll for skills
    */
    useEffect(() => {
        const scrollContainer = horizontalScrollRef.current;

        const handleWheel = (e) => {
            //prevent vertical scrolling
            e.preventDefault();

            //horizontal scroll
            scrollContainer.scrollLeft += e.deltaY;
        };

        if(scrollContainer) {
            scrollContainer.addEventListener('wheel', handleWheel);
        }
        

        return () => {
            if(scrollContainer)
                scrollContainer.removeEventListener('wheel', handleWheel);
        };
    }, []);

    /*
    *  Target project
    */
    const project = projects.find(obj => obj.name === modalData.data.name);

    /*
    *  Each skill can open a skill modal
    */
    const skillButtons = (skills) => {

        const skillSet = new Set();
        
        for(const skillCategory of Object.values(skills))
            skillCategory.forEach(skill => skillSet.add(skill));

        const skillDivs = Array.from(skillSet).sort().map((skill, index) => {
            return (
                <div className='portfolio-skill' style={{backgroundImage: 'url(/Skill-Button-175-50.png)'}} key={`${skill}${index}`} onClick={() => setModalData({'type': 'skills', 'data': skill})}>
                    <span>
                        {skill}
                    </span>
                </div>
            );
        });

        return skillDivs;

    };

    /*
    *  Creates a clickable link to a repo / live
    */
    const linkButton = (text, target, index) => {

        return (
            <div className='portfolio-link' style={{backgroundImage: 'url(/Link-Button-379-54.png)'}} key={`${index}${text}`} onClick={() => window.open(target, '_blank')}>
                <span>
                    {text}
                </span>
            </div>
        );
    };

    return (
        
        <div className='portfolio-modal-container'>
            <div className='portfolio-modal-image-container'>
                <img src={project.image}/>
            </div>
            <div className = 'portfolio-modal-title'>
                {project.name}    
            </div>
            <div className='portfolio-modal-info'>
                <div ref={horizontalScrollRef} className='portfolio-modal-hbuttons portfolio-modal-skills'>
                    {skillButtons(project.skills)}
                </div>
                <div className='portfolio-modal-summary scrollable'>
                    {project.summary}
                </div>
                <div className='portfolio-modal-hbuttons portfolio-modal-links'>
                    {Object.entries(project.links).map(([text, target], index) => { return linkButton(text, target, index);})}
                </div>

                
            </div>

            
        </div>
    );
};

PortfolioModal.propTypes = {
    modalData: PropTypes.object.isRequired,
    setModalData: PropTypes.func.isRequired
};