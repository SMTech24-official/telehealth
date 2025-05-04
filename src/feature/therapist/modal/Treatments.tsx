import React from 'react';
import { FocusSelect } from '../focusSelect/FocusSelect';
import { Modal } from './MainModal';


const focusOptions = [
    { id: 'psychotherapy', label: 'Psychotherapy' },
    { id: 'medication-management', label: 'Medication management' },
];


const Treatments = ({ updateFilter, filters }: {
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
                title={"What would you like to focus on with your provider?"}
                options={focusOptions}
                value={filters.treatments}
                onChange={(option) => {
                    updateFilter(Modal.Treatments, option, Modal.PayMethod);
                }}
            />
        </div>
    );
};

export default Treatments;