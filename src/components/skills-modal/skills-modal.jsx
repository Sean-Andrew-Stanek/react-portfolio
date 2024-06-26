//This modal expands a skill clicked on in the skills-view component
//It displays all projects which contain the skill
//
//modalData
//type: skill
//data: filtered array of objects for projects matching skill
//-image: image-src
//-name: name of project
//-skills: array of skills
//-summary: short project summary

import { React, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { SkillProjectSummary } from './skill-project-summary/skill-project-summary';
import './skills-modal.scss';
import { projects } from '../../utils/porfolio-projects';
import '../../styles/styles.scss';
import { images } from '../../utils/images';

export const SkillsModal = ({ modalData, setModalData }) => {
    /*
     *   Filters projects with requested skill
     */
    const filteredList = projects.filter(
        (project) =>
            project.skills.frontend.includes(modalData.data) ||
            project.skills.backend.includes(modalData.data) ||
            project.skills.other.includes(modalData.data),
    );

    /*
     *   Nav Arrow Functionality
     */

    const scrollListener = useRef(null);
    const [isTop, setIsTop] = useState(true);
    const [isBottom, setIsBottom] = useState(true);

    /*
     *   Controls nav helper opacity
     */
    const handleScroll = () => {
        const capstoneScroller = scrollListener.current;

        setIsTop(capstoneScroller.scrollTop === 0);

        setIsBottom(
            capstoneScroller.scrollTop >=
                capstoneScroller.scrollHeight - capstoneScroller.clientHeight,
        );
    };

    /*
     *   onLoad calls
     */
    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <div className="skill-modal-container">
            <div
                className="text-box-container"
                style={{ width: '100%', height: '100%' }}
            >
                <div className="text-box-border" />
                <div
                    className="text-box-content skill-modal-projects scrollable"
                    ref={scrollListener}
                    onScroll={handleScroll}
                >
                    {filteredList.map((project, index) => {
                        return (
                            <SkillProjectSummary
                                setModalData={setModalData}
                                project={project}
                                key={`${project.name}${index}`}
                            />
                        );
                    })}
                </div>
                <img
                    className={`text-box-nav-up ${isTop && 'nav-fade'}`}
                    style={{ width: '10%' }}
                    src={images.navArrow}
                />
                <img
                    className={`text-box-nav-down ${isBottom && 'nav-fade'}`}
                    style={{ width: '10%' }}
                    src={images.navArrow}
                />
            </div>
        </div>
    );
};

SkillsModal.propTypes = {
    modalData: PropTypes.object.isRequired,
    setModalData: PropTypes.func.isRequired,
};
