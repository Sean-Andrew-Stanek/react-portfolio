import { React, Fragment, useState, useRef, useEffect } from 'react';
import './skills-view.scss';
import PropTypes from 'prop-types';
import { projects } from '../../utils/porfolio-projects';
import { skillViewStrings as strings } from '../../utils/strings';
import TypeWriter from '../../utils/typewriter';
import { images } from '../../utils/images';

export const SkillsView = ({ setModalData }) => {
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

    const getSkills = () => {
        const returnObject = {};

        projects.forEach((project) => {
            Object.keys(project.skills).forEach((key) => {
                if (!returnObject[key]) {
                    returnObject[key] = [...project.skills[key]];
                } else {
                    returnObject[key] = returnObject[key].concat(
                        project.skills[key],
                    );
                }
            });
        });

        Object.keys(returnObject).forEach((key) => {
            const uniqueSet = new Set(returnObject[key]);

            returnObject[key] = Array.from(uniqueSet).sort((a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
            });
        });

        return returnObject;
    };

    const toggleVisibility = (key) => {
        setVisibilityToggle((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const initialVisibilityState = Object.keys(getSkills()).reduce(
        (acc, key) => {
            acc[key] = true;
            return acc;
        },
        {},
    );

    const [typeWriterIndex, setTypeWriterIndex] = useState(0);
    const [visibilityToggle, setVisibilityToggle] = useState(
        initialVisibilityState,
    );

    const skillTree = () => {
        const skillsMasterList = getSkills();

        return Object.keys(skillsMasterList).map((key, index) => (
            <Fragment key={`${key}-${index}`}>
                <div className="skill-tree-header">
                    <div
                        className="skill-tree-expander"
                        onClick={() => toggleVisibility(key)}
                    >
                        <div
                            className={`skill-plus-sign ${!visibilityToggle[key] && 'minus'}`}
                        />
                    </div>
                    {key}
                </div>
                {visibilityToggle[key] && (
                    <div className="skill-list">
                        {skillsMasterList[key].map((skill, index) => {
                            return (
                                <div
                                    className="skill-tree-skill"
                                    key={`${skill}+${index}`}
                                    onClick={() =>
                                        setModalData({
                                            type: 'skills',
                                            data: skill,
                                        })
                                    }
                                >
                                    {skill}
                                </div>
                            );
                        })}
                    </div>
                )}
            </Fragment>
        ));
    };

    return (
        <div className="main-container">
            {
                //Skill Container
            }
            <div className="skill-container">
                <div
                    className="text-box-container"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <div className="text-box-border" />
                    <div
                        className="text-box-content skill-content scrollable"
                        ref={scrollListener}
                        onScroll={handleScroll}
                    >
                        {skillTree()}
                    </div>
                    <img className="text-box-charm" src={images.textBoxCharm} />
                    <img
                        className={`text-box-nav-up ${isTop && 'nav-fade'}`}
                        src={images.navArrow}
                    />
                    <img
                        className={`text-box-nav-down ${isBottom && 'nav-fade'}`}
                        src={images.navArrow}
                    />
                </div>
            </div>
            {
                //Quest Box
            }
            <div className="quest-container skill-quest-container">
                {
                    // Background Image
                }
                <img
                    alt=""
                    className="quest-background"
                    src={images.questBackground}
                />
                {
                    // Text Intro
                }
                <div className="quest-text-intro">
                    <TypeWriter
                        text={strings.greeting}
                        speed={40}
                        onComplete={() => setTypeWriterIndex(1)}
                    />
                </div>
                {
                    // Text Intro
                }
                <div className="quest-text-intro">
                    <TypeWriter
                        text={strings.greeting}
                        speed={15}
                        onComplete={() => setTypeWriterIndex(1)}
                    />
                </div>
                {
                    // Text Body
                }
                <div className="quest-text-body">
                    {typeWriterIndex >= 1 && (
                        <TypeWriter
                            text={strings.body}
                            speed={10}
                            onComplete={() => setTypeWriterIndex(2)}
                        />
                    )}
                </div>
                {
                    // Text End
                }
                <div className="quest-text-end">
                    {typeWriterIndex >= 2 && (
                        <TypeWriter text={strings.closing} speed={5} />
                    )}
                </div>
            </div>
            {
                //Avatar
            }
            <div
                className="avatar-container"
                style={{ right: '0px', bottom: '0px' }}
            >
                <img className="avatar-image" src={images.avatar} />
            </div>
        </div>
    );
};

SkillsView.propTypes = {
    setModalData: PropTypes.func.isRequired,
};
