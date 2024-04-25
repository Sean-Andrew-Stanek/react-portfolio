import {React} from 'react';
import './case-study-view.scss';
import PropTypes from 'prop-types';

export const CaseStudyView = ({setModalData}) => {

    //TODO: Import projects, filter by case studies, make button for each said projects.

    return (
        <>
            <div  className='main-container' style={{}}>
                <div className='csv-button' onClick={() => setModalData({'type': 'case study', 'data': {'name': 'Personal Portfolio - React'}})}>
                    React Portfolio - Case Study
                </div>
                {
                    //Avatar
                }
                <div className='avatar-container'  style={{right: '50%', bottom: '10px'}}>
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