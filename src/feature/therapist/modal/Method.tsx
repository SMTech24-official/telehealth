import React from 'react';
import { FocusSelect } from '../focusSelect/FocusSelect';
import { Modal } from './MainModal';

const focusOptions = [
    { id: 'in-person', label: 'In person' },
    { id: 'virtual', label: 'Virtual' },
];


const Method = ({ updateFilter, filters }: {
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
                title={"How would you prefer to meet with your provider?"}
                options={focusOptions}
                value={filters.method}
                onChange={(option) => {
                    updateFilter(Modal.Method, option, Modal.Location);
                }}
            />
        </div>
    );
};

export default Method;