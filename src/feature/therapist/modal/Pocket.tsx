import React from 'react';
import { FocusSelect } from '../focusSelect/FocusSelect';
import { Modal } from './MainModal';

const focusOptions = [
    { id: 'price_80', label: '$80' },
    { id: 'price_80_140', label: '$80-$140' },
    { id: 'price_140_200', label: '$140-$200' },
    { id: 'price_200_260', label: '$200-$260' },
];


const Pocket = ({ updateFilter, filters }: {
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
                title={"How much can you pay for out of pocket sessions ?"}
                options={focusOptions}
                value={filters.pocket}
                onChange={(option) => {
                    updateFilter(Modal.Pocket, option, Modal.DayOfWeek);
                }}
            />
        </div>
    );
};

export default Pocket;