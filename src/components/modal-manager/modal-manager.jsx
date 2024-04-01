//A centralized modal manager that will only allow one modal to be displayed at a time.
//It manages all modal requests from the website

import {React} from 'react';
import { SkillsModal } from '../skills-modal/skills-modal';

export const ModalManager = (modalTarget, setModalTarget) => {

    const closeModal = (e) => {
        if(e.target === e.currentTarget) {
            setModalTarget('');
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
            <SkillsModal modalTarget={modalTarget}/>
        </div>
    );
};