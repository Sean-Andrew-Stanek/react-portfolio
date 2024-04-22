//Displays a case study.
//
//modalData
//'type': 'case study'
//'data': {OBJECT}
//- name: name of project


import React from 'react';
import './case-study-modal.scss';
import '../../styles/styles.scss';
import PropTypes from 'prop-types';

export const CaseStudyModal = ({modalData}) => {

    return (
        <>
            <div className='csm-main-container' style={{backgroundColor:'white'}}>
                This is a case-study. 
            </div>
        </>
    );

};

CaseStudyModal.propTypes = {
    modalData: PropTypes.object.isRequired,
};