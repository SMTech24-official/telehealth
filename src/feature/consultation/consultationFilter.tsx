import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { RxMixerHorizontal } from "react-icons/rx";



const ConsultationFilter = ({ activeFilters, toggleFilter, filterCategory, setSearch, search }: { activeFilters: string[], toggleFilter: (keyword: string) => void, filterCategory: string[], setSearch: Dispatch<SetStateAction<string>>, search: string }) => {
    const [showCategories, setShowCategories] = useState(false);


    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4 md:mb-8 lg:mb-12">
                <div className="flex items-center gap-2 bg-white rounded-full  p-1 lg:p-2 shadow-sm w-full max-w-md lg:max-w-xl border">
                    <LuSearch className="w-5 h-5 text-gray-400 ml-2" />
                    <input
                        type="text"
                        placeholder="Search work"
                        className="flex-1 outline-none px-2"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <PrimaryButton onClick={() => { }} text='Search' />
                </div>
            </div>
            <div className="flex items-center gap-4">
                {/* Filter button */}
                <button
                    className="border px-2 text-sm md:px-6 py-2 md:py-3 rounded-xl bg-white z-30 border-primary flex items-center justify-center gap-2"
                    onClick={() => setShowCategories(!showCategories)}
                >
                    <RxMixerHorizontal />
                    <span>Filter</span>
                </button>

                {/* Filter categories with animation (left to right) */}
                {showCategories && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-3 overflow-auto"
                    >
                        {filterCategory.map((data, idx) => (
                            <motion.button
                                key={idx}
                                onClick={() => toggleFilter(data)}
                                className={`border-b pb-1 px-1 hover:text-black text-nowrap transition ${activeFilters.includes(data)
                                    ? "border-primary font-semibold text-black"
                                    : "border-transparent text-gray-500"
                                    }`}
                            >
                                {data}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>

    );
};

export default ConsultationFilter;
