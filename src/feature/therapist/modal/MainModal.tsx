"use client"
import { useState } from 'react';
import DayOfWeek from './DayOfWeek';
import Disease from './Disease';
import Gender from './Gender';
import Location from './Location';
import Method from './Method';
import PayMethod from './PayMethod';
import Pocket from './Pocket';
import SelectInsurance from './SelectInsurance';
import Time from './Time';
import Treatments from './Treatments';
import { ModalTransition } from '@/components/modal/ModalTransition';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export enum Modal {
    Disease = "disease",
    Gender = "gender",
    Method = "method",
    Location = "location",
    Treatments = "treatments",
    PayMethod = "payMethod",
    Insurance = "insurance",
    Pocket = "pocket",
    DayOfWeek = "dayOfWeek",
    Time = "time"
}

// Define the order of modals
const modalOrder: Modal[] = [
    Modal.Disease,
    Modal.Gender,
    Modal.Method,
    Modal.Location,
    Modal.Treatments,
    Modal.PayMethod,
    Modal.Insurance,
    Modal.Pocket,
    Modal.DayOfWeek,
    Modal.Time
];

const MainModal = () => {
    const [currentModalIndex, setCurrentModalIndex] = useState(0);
    const modalState = modalOrder[currentModalIndex];
    const router = useRouter()


    const [filters, setFilters] = useState({
        disease: "",
        gender: "",
        method: "",
        location: "",
        treatments: "",
        payMethod: "",
        insurance: "",
        pocket: "",
        dayOfWeek: "",
        time: "",
    });

    // Function to update state dynamically
    const updateFilter = (key: Modal, value: string) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const isFirstModal = currentModalIndex === 0;
    const isLastModal = currentModalIndex === modalOrder.length - 1;


    const goToNext = () => {
        const currentModal = modalOrder[currentModalIndex];
        const currentValue = filters[currentModal];

        if (isLastModal) {
            // Create an object with only non-empty filter values
            const activeFilters = Object.fromEntries(
                Object.entries(filters).filter(([, value]) => value !== "")
            );

            // Convert to URL query string
            const queryString = new URLSearchParams(activeFilters).toString();

            // Push to route with query params if any exist
            router.push(`/my-therapist${queryString ? `?${queryString}` : ''}`);
        }
        if (!currentValue) {
            toast.error(`Please select a ${currentModal} before proceeding.`);
            // You could also set some state to show a visual error
            // setError(`Please select a ${currentModal} before proceeding.`);
            return;
        }

        if (filters.payMethod === "out-of-pocket" && currentModalIndex === 5) {
            setCurrentModalIndex(7);
            return;

        }


        if (filters.insurance && currentModalIndex === 6) {
            setCurrentModalIndex(currentModalIndex + 2);
            return;

        }
        if (currentModalIndex === 6) {
            setCurrentModalIndex(currentModalIndex + 2);
            return;

        }


        if (currentModalIndex < modalOrder.length - 1) {
            setCurrentModalIndex(currentModalIndex + 1);
            // Clear any previous errors
            // setError('');
        }
    };



    const goToPrev = () => {

        if (currentModalIndex > 0) {
            setCurrentModalIndex(currentModalIndex - 1);
        }
        if (filters.payMethod === "out-of-pocket" && currentModalIndex === 7) {
            setCurrentModalIndex(currentModalIndex - 2);
            return;

        }
        if (filters.payMethod === "insurance" && currentModalIndex === 8) {
            setCurrentModalIndex(currentModalIndex - 2);
            return;

        }
        if (filters.insurance) {
            setCurrentModalIndex(currentModalIndex - 1);
            return;
        }

    };

    // Check if current modal is the first or last for button disabling


    console.log(filters);
    return (
        <div className="lg:min-w-[950px] xl:min-w-[1000px] lg:min-h-[650px] h-full w-full md:min-h-[650px] xl:min-h-[770px] lg:p-10 md:p-6 p-4 flex flex-col">
            <div className='flex-1 md:overflow-hidden overflow-y-scroll overflow-x-hidden w-full ' >
                {modalState === Modal.Disease && (
                    <ModalTransition key={Modal.Disease}>
                        <Disease filters={filters} updateFilter={updateFilter} />
                    </ModalTransition>
                )}
                {modalState === Modal.Gender && (
                    <ModalTransition key={Modal.Gender}>
                        <Gender filters={filters} updateFilter={updateFilter} />
                    </ModalTransition>
                )}
                {modalState === Modal.Method && (
                    <ModalTransition key={Modal.Method}>
                        <Method filters={filters} updateFilter={updateFilter} />
                    </ModalTransition>
                )}
                {modalState === Modal.Location && (
                    <ModalTransition key={Modal.Location}>
                        <Location filters={filters} updateFilter={updateFilter} />
                    </ModalTransition>
                )}
                {modalState === Modal.Treatments && (
                    <ModalTransition key={Modal.Treatments}>
                        <Treatments filters={filters} updateFilter={updateFilter} />
                    </ModalTransition>
                )}
                {modalState === Modal.PayMethod && (
                    <ModalTransition key={Modal.PayMethod}>
                        <PayMethod filters={filters} updateFilter={updateFilter} />
                    </ModalTransition>
                )}
                {(modalState === Modal.Insurance) && (
                    <ModalTransition key={Modal.Insurance}>
                        <SelectInsurance filters={filters} updateFilter={updateFilter} />
                    </ModalTransition>
                )}
                {(modalState === Modal.Pocket) && (
                    <ModalTransition key={Modal.Pocket}>
                        <Pocket filters={filters} updateFilter={updateFilter} />
                    </ModalTransition>
                )}
                {modalState === Modal.DayOfWeek && (
                    <ModalTransition key={Modal.DayOfWeek}>
                        <DayOfWeek filters={filters} updateFilter={updateFilter} />
                    </ModalTransition>
                )}
                {modalState === Modal.Time && (
                    <ModalTransition key={Modal.Time}>
                        <Time filters={filters} updateFilter={updateFilter} />
                    </ModalTransition>
                )}
            </div>
            <div className='flex items-center justify-between'>
                <button
                    onClick={goToPrev}
                    disabled={isFirstModal}
                    className={`rounded-full px-8 py-4 text-secondary border border-secondary uppercase ${isFirstModal ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                >
                    Previous
                </button>
                <button
                    onClick={goToNext}
                    // disabled={isLastModal}
                    className={`rounded-full px-8 py-4 text-white bg-secondary uppercase ${isLastModal ? '' : 'hover:bg-secondary-dark'
                        }`}
                >
                    {isLastModal ? 'Finish' : 'Next'}
                </button>
            </div>
        </div>
    );
};

export default MainModal;