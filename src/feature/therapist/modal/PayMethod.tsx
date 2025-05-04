import React from 'react';
import { FocusSelect } from '../focusSelect/FocusSelect';
import { Modal } from './MainModal';


const focusOptions = [
    { id: 'insurance', label: 'Insurance' },
    { id: 'out-of-pocket', label: 'Out of pocket' },
];



const PayMethod = ({ updateFilter, filters }: {
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
                title={"How are you planning to pay ? "}
                options={focusOptions}
                value={filters.payMethod}
                onChange={(option) => {
                    updateFilter(Modal.PayMethod, option, option === Modal.Insurance ? Modal.Insurance : Modal.Pocket);
                }}
            />
        </div>
    );
};

export default PayMethod;