//This modal expands a skill clicked on in the skills-view component
//It displays all projects which contain the skill
//
//modalData
//'type': 'project'
//'data': {OBJECT}
//- name: name of project

import { React } from 'react';
import PropTypes from 'prop-types';
import { projects } from '../../utils/porfolio-projects';

export const PortfolioModal = ({modalData}) => {

    const project = projects.find(obj => obj.name === modalData.data.name);

    return (
        <div className='portfolio-modal-container'>
            {project.name}
        </div>
    );
};

PortfolioModal.propTypes = {
    modalData: PropTypes.object.isRequired,
};