//Displays a case study.
//
//modalData
//'type': 'case study'
//'data': {OBJECT}
//- name: name of project


import React, { useState, useRef, useEffect } from 'react';
import './case-study-modal.scss';
import '../../styles/styles.scss';
import PropTypes from 'prop-types';
import { caseStudies } from '../../utils/case-studies';

export const CaseStudyModal = ({modalData}) => {

    const caseStudy = caseStudies.find(obj => obj.name === modalData.data.name);
    const [pageIndex, setPageIndex] = useState(0);

    const imageArrayRef = useRef(null);
    const imageArrayContainerRef = useRef(null);

    const maxImageHeight = '50vh';
    const maxImageWidth = '70vw';

    useEffect (() => {
        const container = imageArrayContainerRef.current;
        const imageArray = imageArrayRef.current;

        //onEvent functions

        //When mouseEnter, make full size of image
        const handleMouseEnter = () => {
            if (imageArray && container) {
                container.style.width = `${imageArray.width}px`;
                container.style.height = `${imageArray.height}px`;
            }
        };

        //When mouseLeave, reset
        const handleMouseLeave = () => {
            if(container) {
                container.style.width = '';
                container.style.height = '';
            }
        };

        //Add events to container
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        //Cleanup
        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    let images = {
        'navArrow': 'Nav-Arrow-1024-1024.png',
        'modalBackground': 'Spear-Border-1024-1024.png'
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
                <div className='csm-title-container'>
                    <div className= 'text-box-border' />
                    <div className='text-box-content csm-title' style={{opacity: .95}}>
                        {`${currentPage.title}`}
                    </div>
                </div>
                {/*
                    Content Container
                */}
                
                <div className='csm-info-container'>
                    {/*
                        Background
                    */}
                    <img src={images.modalBackground} />
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
                <div className='csm-img-container' ref={imageArrayContainerRef} style={{backgroundColor:'black'}}>
                    <img ref={imageArrayRef} src={currentPage.images[0]} style={{maxHeight:maxImageHeight, maxWidth:maxImageWidth}}/>
                </div>

            </div>
        </>
    );

};

CaseStudyModal.propTypes = {
    modalData: PropTypes.object.isRequired,
};