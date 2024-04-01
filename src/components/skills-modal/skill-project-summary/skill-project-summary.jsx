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

export const SkillProjectSummary = (projectData) => {

    
    return (
        <div className='sps-container'>
            <div className='sps-image'></div>
            <div className='sps-details'>
                <div className='sps-subdetails'>
                    {projectData.name}
                </div>
                <div className='sps-subdetails'>
                    {projectData.skills}
                </div>
                <div className='sps-subdetails'>
                    {projectData.links[0]}
                </div>
            </div>
        </div>
    );
};

SkillProjectSummary.propTypes = {
    projectData: PropTypes.object.isRequired,
};