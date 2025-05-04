import React from 'react';
import { FocusSelect } from '../focusSelect/FocusSelect';
import { Modal } from './MainModal';


const focusOptions = [
    { id: 'mornings', label: 'Mornings (Before 12pm)' },
    { id: 'noon', label: 'Noon (12pm-2pm)' },
    { id: 'afternoons', label: 'Afternoons (2pm-5pm)' },
    { id: 'evenings', label: 'Evenings (After 5pm)' },
];



const Time = ({ updateFilter, filters }: {
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
                title={"When and what time works for you?"}
                options={focusOptions}
                value={filters.time}
                onChange={(option) => {
                    updateFilter(Modal.Time, option, Modal.Time);
                }}
            />
        </div>
    );
};

export default Time;