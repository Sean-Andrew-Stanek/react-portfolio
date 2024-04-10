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

export const PortfolioModal = ({modalData}) => {

    const horizontalScrollRef = useRef(null);

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

    const project = projects.find(obj => obj.name === modalData.data.name);

    const setModalData = () => {
        console.log('TODO: This will open to the new modal target.');
    };

    const skillButton = (skill, index) => {
        return (
            <div className='portfolio-skill' key={`${skill}${index}`} onClick={() => setModalData()}>
                {skill}
            </div>
        );
    };

    const linkButton = (text, target, index) => {

        return (
            <div className='portfolio-skill' key={`${index}${text}`} onClick={() => window.open(target, '_blank')}>
                {text}
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
                <div className='portfolio-modal-hbuttons portfolio-modal-links'>
                    {Object.entries(project.links).map(([text, target], index) => { return linkButton(text, target, index);})}
                </div>
                <div className='portfolio-modal-summary'>
                    {project.summary}
                </div>
                <div ref={horizontalScrollRef} className='portfolio-modal-hbuttons portfolio-modal-skills'>
                    {project.skills.map((skill, index) => { return skillButton(skill, index);})}
                </div>
                
            </div>

            
        </div>
    );
};

PortfolioModal.propTypes = {
    modalData: PropTypes.object.isRequired,
};