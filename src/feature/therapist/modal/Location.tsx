import React from 'react';
import { FocusSelect } from '../focusSelect/FocusSelect';
import { Modal } from './MainModal';


const focusOptions = [
    { id: 'asian_black', label: 'Asian, Black/African Descent' },
    { id: 'caucasian', label: 'Caucasian' },
    { id: 'latinx_native', label: 'LatinX/Latino/a, Native American' },
    { id: 'pacific_islander', label: 'Pacific Islander' },
    { id: 'south_asian', label: 'South Asian' },
];



const Location = ({ updateFilter, filters }: {
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
                title={"Where are you located ?     "}
                options={focusOptions}
                value={filters.location}
                onChange={(option) => {
                    updateFilter(Modal.Location, option, Modal.Treatments);
                }}
            />
        </div>
    );
};

export default Location;