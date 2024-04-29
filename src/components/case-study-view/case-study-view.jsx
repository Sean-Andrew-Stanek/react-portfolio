import {React} from 'react';
import './case-study-view.scss';
import PropTypes from 'prop-types';
import { projects } from '../../utils/porfolio-projects';

export const CaseStudyView = ({setModalData}) => {

    //Image References
    let images = {
        'modalBackground': 'Spear-Border-1024-1024.png'
    };

    //Filter projects with case studies.  
    //While it can handle more than four, it will only display four
    //TODO:  Change from capstone (testing purpose)
    const caseStudyProjects = projects.filter(project => project.caseStudy==='true');
    const locations = ['csv-upper-left',  'csv-upper-right', 'csv-lower-left', 'csv-lower-right'];
    
    const createButtons = () => {
        const returnJSX = [];
        for(let i = 0; i < Math.min(caseStudyProjects.length, locations.length); i++) {
            returnJSX.push(
                <div className={`csv-button ${locations[i]}`} key={`${caseStudyProjects[i].name}i`} onClick={() => setModalData({'type': 'case study', 'data': {'name': 'Personal Portfolio - React'}})}>
                    <img src={images.modalBackground}/>
                    <div className='csv-text-holder'>
                        {caseStudyProjects[i].name}
                    </div>
                </div>
            );
        }
        return returnJSX;
    };

    return (
        <>

            <div  className='main-container csv-main-contianer' style={{}}>
                {
                    //Display Case Study: upper limit 4
                }
                {
                    <>
                        {createButtons()}
                    </>
                }
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