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

    /*****************/
    // Images
    /*****************/
    const images = {
        'skillButton': 'Skill-Button-175-50.png',
        'linkButton': 'Link-Button-379-54.png',
    };

    /*****************/
    // Horizontal Scrolling
    /*****************/

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

    /*****************/
    // Modal Project Info
    /*****************/
    const project = projects.find(obj => obj.name === modalData.data.name);

    /*****************/
    // Links to Skill Modal
    /*****************/
    const skillButtons = (skills) => {

        const skillSet = new Set();
        
        for(const skillCategory of Object.values(skills))
            skillCategory.forEach(skill => skillSet.add(skill));

        const skillDivs = Array.from(skillSet).sort().map((skill, index) => {
            return (
                <div className='portfolio-skill' key={`${skill}${index}`} onClick={() => setModalData({'type': 'skills', 'data': skill})}>
                    <img src = {images.skillButton} />
                    <span>
                        {skill}
                    </span>
                </div>
            );
        });

        return skillDivs;

    };

    /*****************/
    // Repos / Live Anchors
    /*****************/
    const linkButton = (text, target, index) => {

        return (
            <div className='portfolio-link' key={`${index}${text}`} onClick={() => window.open(target, '_blank')}>
                <img src={images.linkButton}/>
                <span>
                    {text}
                </span>
            </div>
        );
    };

    /*****************/
    // Return Component
    /*****************/

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