//Displays a case study.
//
//modalData
//'type': 'case study'
//'data': {OBJECT}
//- name: name of project


import React, { useState, useRef } from 'react';
import './case-study-modal.scss';
import '../../styles/styles.scss';
import PropTypes from 'prop-types';
import { caseStudies } from '../../utils/case-studies';


export const CaseStudyModal = ({modalData}) => {

    const caseStudy = caseStudies.find(obj => obj.name === modalData.data.name);
    const [pageIndex, setPageIndex] = useState(0);

    const [expandedImage, setExpandedImage] = useState(false);

    const imageArrayRef = useRef(null);
    const imageArrayContainerRef = useRef(null);

    const maxImageHeight = '50vh';
    const maxImageWidth = '70vw';

    let toggleExpandImage = (() => {
        setExpandedImage(!expandedImage);

        const container = imageArrayContainerRef.current;
        const imageArray = imageArrayRef.current;

        if(expandedImage) {
            if (imageArray && container) {
                container.style.width = `${imageArray.width}px`;
                container.style.height = `${imageArray.height}px`;
            }
        } else {
            if(container) {
                container.style.width = '';
                container.style.height = '';
            }
        }
    });


    let images = {
        'navArrow': 'Nav-Arrow-512-512.svg',
        'modalBackground': 'Spear-Border-1024-1024.png'
    };

    let currentPage = caseStudy.pages[pageIndex];

    const changeIndex = (change) => {
        const desiredPage = pageIndex + change;
        if(desiredPage >= 0 && desiredPage < caseStudy.pages.length)
            setPageIndex(desiredPage);
    };

    return (
        <div className='csm-main-container' style={{pointerEvents:'none'}}>
            <div className='csm-title-container'>
                <div className= 'text-box-border' />
                <div className='text-box-content csm-title' style={{opacity: .95}}>
                    {`${currentPage.title}`}
                </div>
            </div>
            {/*
                Content Container
            */}
            
            <div className='csm-info-container' style={{pointerEvents:'none'}}>
                {/*
                    Background
                */}
                <img src={images.modalBackground} style={{pointerEvents:'none'}}/>
                <div className='csm-information'>
                    {currentPage.text}
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
            {/*
                Image Array frame
            */}
            <div className={`csm-img-container ${expandedImage ? '':'csm-expand-info'}`} ref={imageArrayContainerRef} onClick={() => toggleExpandImage()} style={{backgroundColor:'black'}}>
                <img ref={imageArrayRef} src={currentPage.images[0]} style={{maxHeight:maxImageHeight, maxWidth:maxImageWidth}}/>
            </div>

        </div>
    );

};

CaseStudyModal.propTypes = {
    modalData: PropTypes.object.isRequired,
};