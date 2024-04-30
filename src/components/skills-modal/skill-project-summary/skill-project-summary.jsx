//modalData
//type: skill
//data: filtered object array of projects matching skill
//-image: image-src 
//-name: name of project
//-skills: array of skills
//-summary: short project summary
//-links: object with key being the name of the link and the value being the address

import {React, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import './skill-project-summary.scss';

export const SkillProjectSummary = ({project, setModalData}) => {

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
    * Single set of skills with links to another modal with projects with those skills
    * The list can be scrolled
    */
    const skillButtons = (skills) => {

        const skillSet = new Set();
        
        for(const skillCategory of Object.values(skills))
            skillCategory.forEach(skill => skillSet.add(skill));

        const skillDivs = Array.from(skillSet).sort().map((skill, index) => {
            return (
                <div className='sps-skill'  style={{backgroundImage: 'url(/Skill-Button-175-50.png)'}} key={`${skill}${index}`} 
                    onClick={(e) => {
                        e.stopPropagation();
                        setModalData({'type': 'skills', 'data': skill});
                    }}>
                    <span>
                        {skill}
                    </span>
                    
                </div>
            );
        });

        return skillDivs;

    };


    /* 
    * Links to repositories and live sites.  Not scrollable
    */

    const linkButton = (text, target, index) => {
        
        return (
            <div className='sps-link' style={{backgroundImage: 'url(/Link-Button-379-54.png)'}} key={`${index}${text}`} onClick={() => window.open(target, '_blank')}>
                <span>
                    {text}
                </span>
            </div>
        );

    };

    return (
        <div className='sps-container' onClick={() => setModalData({'type':'project', 'data':{'name':project.name}})}>
            <div className='sps-image-container'>
                <img src={`${project.image}`} className='sps-image' />
            </div>
            <div className='sps-project-name' >
                {project.name}
            </div>
            <div className='sps-details'>
                <div className='sps-skill-container' ref={horizontalScrollRef}>
                    {skillButtons(project.skills)}
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
    setModalData: PropTypes.func.isRequired,
};