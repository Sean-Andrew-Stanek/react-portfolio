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
import { caseStudies } from '../../utils/case-studies';

export const CaseStudyModal = ({modalData}) => {

    const caseStudy = caseStudies.find(obj => obj.name === modalData.data.name);

    return (
        <>
            <div className='csm-main-container' style={{backgroundColor:'white'}}>
                {`This is a case-study about ${caseStudy.name}`}
            </div>
        </>
    );

};

CaseStudyModal.propTypes = {
    modalData: PropTypes.object.isRequired,
};