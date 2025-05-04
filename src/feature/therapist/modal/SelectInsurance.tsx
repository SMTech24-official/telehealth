import React from 'react';
import { FocusSelect } from '../focusSelect/FocusSelect';
import { Modal } from './MainModal';


const focusOptions = [
    { id: 'aetna', label: 'Aetna' },
    { id: 'united_healthcare', label: 'United Healthcare' },
    { id: 'kaiser', label: 'Kaiser' },
    { id: 'carelon', label: 'Carelon' },
    { id: 'medicaid', label: 'Medicaid' },
    { id: 'anthem_bcbs', label: 'Anthem BCBS' },
];



const SelectInsurance = ({ updateFilter, filters }: {
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

                title={"Who is your insurance provider?"}
                options={focusOptions}
                value={filters.insurance}
                onChange={(option) => {
                    updateFilter(Modal.Insurance, option, Modal.DayOfWeek);
                }}
            />
        </div>
    );
};

export default SelectInsurance;