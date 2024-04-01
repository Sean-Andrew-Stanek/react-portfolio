//A centralized modal manager that will only allow one modal to be displayed at a time.
//It manages all modal requests from the website

import {React} from 'react';
import { SkillsModal } from '../skills-modal/skills-modal';
import PropTypes from 'prop-types';

export const ModalManager = (modalData, setModalData) => {

    const closeModal = (e) => {
        if(e.target === e.currentTarget) {
            setModalData({});
        }
    };

    const modalContent = () => {
        switch(modalData.type) {
            case 'skills':
                return <SkillsModal modalTarget={modalData}/>;
            default:
                console.error(`Modal Type Not Found: ${modalData.type}`);
                setModalData({});
                return null;
        }
    };

    return (
        <div 
            style={{
                position: 'absolute',
                inset: 0,
                zIndex: 9999
            }}
            onClick={closeModal}
        >
            {modalContent}            
        </div>
    );

};

ModalManager.propTypes = {
    modalTarget: PropTypes.object.isRequired,
    setModalTarget: PropTypes.func.isRequired,
};