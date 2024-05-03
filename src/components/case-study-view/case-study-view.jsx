import {React} from 'react';
import '../../styles/styles.scss';
import './case-study-view.scss';
import PropTypes from 'prop-types';
import { projects } from '../../utils/porfolio-projects';

export const CaseStudyView = ({setModalData}) => {

    /*****************/
    // Images
    /*****************/
    let images = {
        'buttonBackground': 'Spear-Border-1024-1024.png',
        'avatar': '/Avatar-150-450.png',
        'avatarAbove': '/Exclaim-200-350.png',
    };

    //Filter projects with case studies.  
    //While it can handle more than four, it will only display four
    const caseStudyProjects = projects.filter(project => project.caseStudy==='true');
    const locations = ['csv-upper-left',  'csv-upper-right', 'csv-lower-left', 'csv-lower-right'];
    

    //Creates the buttons for each case study and places them appropriately around the screen.
    const createButtons = () => {
        const returnJSX = [];
        for(let i = 0; i < Math.min(caseStudyProjects.length, locations.length); i++) {
            returnJSX.push(
                <div className={`csv-button ${locations[i]}`} key={`${caseStudyProjects[i].name}i`} onClick={() => setModalData({'type': 'case study', 'data': {'name': caseStudyProjects[i].name}})}>
                    <img src={images.buttonBackground}/>
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

            <div  className='main-container' style={{}}>
                {
                    //Display Case Study: upper limit 4
                }
                {
                    <>
                        {createButtons()}
                    </>
                }
                <div className='csv-nav-title'>
                    <div className= 'text-box-border' />
                    <div className='text-box-content'>
                        Case Studies
                    </div>
                    {/* <img className='text-box-charm cv-charm' src={`/${info[0]}-Icon-300-300.png`}/> */}
                </div>
                {
                    //Avatar
                }
                <div className='csv-avatar'>
                    <img className='csv-avatar-image' src = {images.avatar}/>
                </div>
            </div>
        </>
    );

};


CaseStudyView.propTypes = {
    setModalData: PropTypes.func.isRequired,
};