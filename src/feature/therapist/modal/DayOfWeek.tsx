import React from 'react';
import { FocusSelect } from '../focusSelect/FocusSelect';
import { Modal } from './MainModal';


const filterOptions = [
    { id: 'monday', label: 'Monday' },
    { id: 'tuesday', label: 'Tuesday' },
    { id: 'wednesday', label: 'Wednesday' },
    { id: 'thursday', label: 'Thursday' },
    { id: 'friday', label: 'Friday' },
    { id: 'saturday', label: 'Saturday' },
    { id: 'sunday', label: 'Sunday' },
];



const DayOfWeek = ({ updateFilter, filters }: {
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
        <div className=''>
            <FocusSelect
                title={"Day of the week ."}
                options={filterOptions}
                value={filters.dayOfWeek}
                onChange={(option) => {
                    updateFilter(Modal.DayOfWeek, option, Modal.Time);
                }}
            />
        </div>
    );
};

export default DayOfWeek;