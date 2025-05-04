import React, { useState } from 'react';
import { LuCheck, LuChevronDown } from 'react-icons/lu';

interface FocusOption {
    id: string;
    label: string;
}

interface FocusSelectProps {
    options: FocusOption[];
    onChange: (selectedOption: string) => void;
    title: string;
    value: string;
}

export function FocusSelect({ options, onChange, title, value }: FocusSelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (optionId: string) => {
        onChange(optionId);
        setIsOpen(false);
    };

    return (
        <div className="w-full mx-auto">
            <h2 className="text-[2rem] font-semibold text-gray-900 mb-6 mt-2">
                {title}
            </h2>

            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg flex items-center justify-between"
                >
                    <span className="text-gray-700">
                        {value
                            ? options.find(opt => opt.id === value)?.label
                            : 'Select focus area'}
                    </span>
                    <LuChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                </button>

                {isOpen && (
                    <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleSelect(option.id)}
                                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-blue-50 transition-colors
                  ${value === option.id ? 'bg-blue-50' : ''}`}
                            >
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center
                  ${value === option.id
                                        ? 'border-green-500 bg-green-500'
                                        : 'border-gray-300'}`}
                                >
                                    {value === option.id && (
                                        <LuCheck className="w-3 h-3 text-white" />
                                    )}
                                </div>
                                <span className="text-gray-700">{option.label}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}