import React from 'react';

const SectionTitle = ({ miniTitle, title, subtitle, white = false, sideText = false }: { miniTitle: string, title: string, subtitle: string, white?: boolean, sideText?: boolean }) => {
    return (
        <div className="mb-12">
            <p className={`text-sm sm:text-lg mb-3 sm:mb-5 ${white ? "text-white/60" : "text-primary"}`}>{miniTitle}</p>
            <div className={`grid ${sideText ? "lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"} `}>
                <h2 className={`md:text-3xl ${sideText ? "col-span-1 xl:col-span-2" : "col-span-1"} text-xl sm:text-2xl xl:text-6xl font-medium text-black mb-2 sm:mb-4 font-outfit ${white ? "text-white" : "text-black"}`}>{title}</h2>
                <p className={` max-w-[1000px] font-poppins text-sm sm:text-lg ${white ? "text-white/60" : "text-gray-600"}`}>
                    {subtitle}
                </p>
            </div>

        </div>
    );
};

export default SectionTitle;