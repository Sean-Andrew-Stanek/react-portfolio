//A centralized modal manager that will only allow one modal to be displayed at a time.
//It manages all modal requests from the website

import { React } from 'react';
import { SkillsModal } from '../skills-modal/skills-modal';
import { PortfolioModal } from '../portfolio-modal/portfolio-modal';
import PropTypes from 'prop-types';
import { CaseStudyModal } from '../case-study-modal/case-study-modal';
import './modal-manager.scss';

export const ModalManager = ({ modalData, setModalData }) => {
    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            setModalData({});
        }
    };

    const modalContent = () => {
        switch (modalData.type) {
            case 'skills':
                return (
                    <SkillsModal
                        modalData={modalData}
                        setModalData={setModalData}
                    />
                );
            case 'project':
                return (
                    <PortfolioModal
                        modalData={modalData}
                        setModalData={setModalData}
                    />
                );
            case 'case study':
                return <CaseStudyModal modalData={modalData} />;
            default:
                console.error(`Modal Type Not Found: ${modalData.type}`);
                return <div>Something went wrong!</div>;
        }
    };

    return (
        <div className="modal-manager" onClick={closeModal}>
            {modalContent()}
        </div>
    );
};

ModalManager.propTypes = {
    modalData: PropTypes.object.isRequired,
    setModalData: PropTypes.func.isRequired,
};
