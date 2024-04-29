import {React} from 'react';
import './case-study-view.scss';
import PropTypes from 'prop-types';

export const CaseStudyView = ({setModalData}) => {

    //TODO: Import projects, filter by case studies, make button for each said projects.
    let images = {
        'modalBackground': 'Spear-Border-1024-1024.png'
    };

    return (
        <>

            <div  className='main-container csv-main-contianer' style={{}}>
                {
                    //Upper Left
                }
                <div className='csv-button csv-upper-left' onClick={() => setModalData({'type': 'case study', 'data': {'name': 'Personal Portfolio - React'}})}>
                    <img src={images.modalBackground}/>
                    <div className='csv-text-holder'>
                        React Portfolio - Case Study
                    </div>
                </div>
                {
                    //Upper Right
                }
                <div className='csv-button csv-upper-right' onClick={() => setModalData({'type': 'case study', 'data': {'name': 'Personal Portfolio - React'}})}>
                    <img src={images.modalBackground}/>
                    <div className='csv-text-holder'>
                        React Portfolio - Case Study
                    </div>
                </div>
                {
                    //Lower Left
                }
                <div className='csv-button csv-lower-left' onClick={() => setModalData({'type': 'case study', 'data': {'name': 'Personal Portfolio - React'}})}>
                    <img src={images.modalBackground}/>
                    <div className='csv-text-holder'>
                        React Portfolio - Case Study
                    </div>
                </div>
                {
                    //Lower Right
                }
                <div className='csv-button csv-lower-right' onClick={() => setModalData({'type': 'case study', 'data': {'name': 'Personal Portfolio - React'}})}>
                    <img src={images.modalBackground}/>
                    <div className='csv-text-holder'>
                        React Portfolio - Case Study
                    </div>
                    
                </div>
                {
                    //Avatar
                }
                <div className='avatar-container'  style={{right: '50%', bottom: '10px', transform: 'translateX(50%)'}}>
                    <img className='avatar-above-image'  src = '/react-portfolio/Exclaim-200-350.png' />
                    <img className='avatar-image' src = '/react-portfolio/Avatar-150-450.png' />
                </div>
            </div>
        </>
    );

};


CaseStudyView.propTypes = {
    setModalData: PropTypes.func.isRequired,
};