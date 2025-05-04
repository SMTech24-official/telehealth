import { FocusSelect } from '../focusSelect/FocusSelect';
import { Modal } from './MainModal';

const focusOptions = [
    { id: 'anxiety', label: 'Anxiety' },
    { id: 'depression', label: 'Depression' },
    { id: 'trauma', label: 'Trauma' },
    { id: 'ptsd', label: 'PTSD' },
    { id: 'grief', label: 'Grief & Loss' },
    { id: 'cultural', label: 'Cultural & Ethnic Issues' },
    { id: 'family', label: 'Family Issues' },
    { id: 'womens', label: "Women's Issues" },
    { id: 'mens', label: "Men's Issues" },
    { id: 'transitions', label: 'Transitions' },
];

const Disease = ({ updateFilter, filters }: {
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
                title={"What would you like to focus on with your provider?"}
                options={focusOptions}
                value={filters.disease}
                onChange={(option) => {
                    updateFilter(Modal.Disease, option, Modal.Gender);
                }}
            />
        </div>
    );
};

export default Disease;