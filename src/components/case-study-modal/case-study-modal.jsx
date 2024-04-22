//Displays a case study.
//
//modalData
//'type': 'case study'
//'data': {OBJECT}
//- name: name of project


import React, { useState } from 'react';
import './case-study-modal.scss';
import '../../styles/styles.scss';
import PropTypes from 'prop-types';
import { caseStudies } from '../../utils/case-studies';

export const CaseStudyModal = ({modalData}) => {

    const caseStudy = caseStudies.find(obj => obj.name === modalData.data.name);
    const [pageIndex, setPageIndex] = useState(0);
    
    let images = {
        'navArrow': 'Nav-Arrow-1024-1024.png'
    };

    let currentPage = caseStudy.pages[pageIndex];

    const changeIndex = (change) => {
        const desiredPage = pageIndex + change;
        if(desiredPage >= 0 && desiredPage < caseStudy.pages.length)
            setPageIndex(desiredPage);
    };

    return (
        <>
            <div className='csm-main-container'>
                <div className='csm-info-container' style={{backgroundColor:'red'}}>
                    {`This is a case-study about ${caseStudy.name}`}<br/>
                    {`Title: ${currentPage.title}`}<br/>
                    {currentPage.text}<br/>
                    
                </div>
                <div className='csm-img-container' style={{backgroundColor:'purple'}}>
                    <img src={currentPage.images[0]}/>
                </div>
                <div className={`csm-next-page ${pageIndex===caseStudy.pages.length-1 && 'csm-fade'}`} onClick = {() => changeIndex(1)}>
                    <img src = {images.navArrow}/>
                </div>
                <div className={`csm-previous-page ${pageIndex===0 && 'csm-fade'}`} onClick = {() => changeIndex(-1)}>
                    <img src = {images.navArrow}/>
                </div>
            </div>
        </>
    );

};

CaseStudyModal.propTypes = {
    modalData: PropTypes.object.isRequired,
};