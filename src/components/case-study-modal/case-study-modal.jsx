//Displays a case study.
//
//modalData
//'type': 'case study'
//'data': {OBJECT}
//- name: name of project


import React, { useState, useEffect } from 'react';
import './case-study-modal.scss';
import '../../styles/styles.scss';
import PropTypes from 'prop-types';
import { caseStudies } from '../../utils/case-studies';
import { images } from '../../utils/images';


export const CaseStudyModal = ({modalData}) => {

    const caseStudy = caseStudies.find(obj => obj.name === modalData.data.name);
    const [pageIndex, setPageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const [expandedImage, setExpandedImage] = useState(false);


    let currentPage = caseStudy.pages[pageIndex];

    // Initial background
    useEffect(() => {

        setIsLoading(false);

    }, []);

    const changeIndex = (change) => {
        const desiredPage = pageIndex + change;
        if(desiredPage >= 0 && desiredPage < caseStudy.pages.length)
            setPageIndex(desiredPage);
    };

    return (
        
        <div className={`csm-main-container ${isLoading ? 'csm-loading' : ''}`} style={{pointerEvents:'none'}}>
            {/*
                    The main div will not be clickable as there is a lot of alpha
            */}

            {/*
                Expanded Image
            */}
            <div className='csm-expanded-image-container' style={expandedImage ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => setExpandedImage(!expandedImage)}>
                <div>
                    <img src={`${images.caseStudyImagePath}${currentPage.images[0]}`}/>
                </div>
            </div>
            {/*
                Content Container
            */}
            
            <div className='csm-info-container' style={{pointerEvents:'none'}}>
                {/*
                        Title
                */}
                <div className='csm-title-container'>
                    <div className= 'text-box-border csm-text-box-border' />
                    <div className='text-box-content csm-title' style={{opacity: '.95'}}>
                        {`${currentPage.title}`}
                    </div>
                </div>

                {/*
                    Background
                */}
                <img src={images.modalBackground} style={{pointerEvents:'none'}}/>
                {/*
                    Text
                */}
                <div className='csm-text-container'  style={{pointerEvents:'auto'}}>
                    <div className='csm-text'>
                        {currentPage.text}
                    </div>
                </div>
                {/*
                    Image
                    TODO:  ACCESIBILITY
                */}
                <div className='csm-image-container' style={{pointerEvents:'auto'}}>
                    <div className='csm-image-wrapper'>
                        <img src={`${images.caseStudyImagePath}${currentPage.images[0]}`} className='csm-image' onClick = {() => setExpandedImage(!expandedImage)}/>
                    </div>
                    <div>
                        Click to expand
                    </div>
                </div>
                {/*
                    Navigation Arrows
                */}
                <div className={`csm-next-page ${pageIndex===caseStudy.pages.length-1 ? 'csm-fade' : 'csm-animate'}`} onClick = {() => changeIndex(1)}>
                    <img src = {images.navArrow}/>
                </div>
                <div className={`csm-previous-page ${pageIndex===0 ? 'csm-fade' : 'csm-animate'}`} onClick = {() => changeIndex(-1)}>
                    <img src = {images.navArrow}/>
                </div>


            </div>
        </div>
    );

};

CaseStudyModal.propTypes = {
    modalData: PropTypes.object.isRequired,
};