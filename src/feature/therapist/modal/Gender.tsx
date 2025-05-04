import React from 'react';
import { FocusSelect } from '../focusSelect/FocusSelect';
import { Modal } from './MainModal';

const focusOptions = [
    { id: 'female', label: 'Female' },
    { id: 'male', label: 'Male' },
    { id: 'non_binary', label: 'Non Binary' },
    { id: 'transgender', label: 'Transgender' },
];


const Gender = ({ updateFilter, filters }: {
    updateFilter: (key: Modal, value: string, nextModal: Modal) => void, filters: {
        disease: string;
        gender: string;
        method: string;
        location: string;
        treatments: string;
        payMethod: string;
        insurance: string;
        pocket: string;
        dayOfWeek: string;
        time: string;
    }
}) => {
    return (
        <div>
            <FocusSelect
                title={"What gender do you prefer for your provider?"}
                options={focusOptions}
                value={filters.gender}
                onChange={(option) => {
                    updateFilter(Modal.Gender, option, Modal.Method);
                }}
            />
        </div>
    );
};

export default Gender;