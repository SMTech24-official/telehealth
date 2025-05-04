"use client"
import Pagination from '@/components/shared/pagination/Pagination';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ConsultationCard } from './card/ConsultationCard';
import ConsultationFilter from './consultationFilter';
import doctors from './fakeConcultation';
import { Modal } from '@/components/modal/Modal';
import { ConsultationModal } from './card/ConsultationModal';
import { useRouter } from 'next/navigation';



const healthProjectKeywords = [
    "Patient Tracker",
    "Meal Planning",
    "Physiotherapy Guide",
    "Medication Reminder",
    "Telemedicine",
    "Vitals Monitoring",
    "Symptom Checker",
    "Hospital Sanitation",
    "Healthcare Networking",
    "Sleep Tracker"
];


const AllConsultation = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 5


    const router = useRouter()

    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const toggleFilter = (keyword: string) => {
        setActiveFilters((prev) =>
            prev.includes(keyword) ? prev.filter((item) => item !== keyword) : [...prev, keyword]
        );
    };
    const filterCategory = ["All", ...healthProjectKeywords]

    const [search, setSearch] = useState<string>("")
    const [isModalOpen, setIsModalOpen] = useState<number | null>(null);
    return (
        <div className=''>

            <ConsultationFilter search={search} setSearch={setSearch} activeFilters={activeFilters} filterCategory={filterCategory} toggleFilter={toggleFilter} />

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 md:mt-6">

                {doctors.map((doctor, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.1 * (index + 1), ease: "easeIn" }}
                        className={`border-t lg:odd:border-r ${index >= doctors.length - 2 ? "border-b" : ""
                            }`}>
                        <ConsultationCard
                            bio={doctor.bio}
                            name={doctor.name}
                            title={doctor.title}
                            location={doctor.location}
                            availability={doctor.availability}
                            hourlyRate={doctor.hourlyRate}
                            rating={doctor.rating}
                            skills={doctor.skills}
                            description={doctor.description}
                            imageUrl={doctor.imageUrl}
                            onMessage={() => console.log(`Messaging ${doctor.name}`)}
                            onVisitProfile={() => setIsModalOpen(index)}
                        />
                        {
                            <Modal isOpen={isModalOpen === index} onClose={() => setIsModalOpen(null)}>
                                <ConsultationModal
                                    bio={doctor.bio}
                                    name={doctor.name}
                                    title={doctor.title}
                                    location={doctor.location}
                                    availability={doctor.availability}
                                    hourlyRate={doctor.hourlyRate}
                                    rating={doctor.rating}
                                    skills={doctor.skills}
                                    description={doctor.description}
                                    imageUrl={doctor.imageUrl}
                                    onMessage={() => router.push(`/messaging?${doctor.name}`)}
                                    onVisitProfile={() => router.push(`/consultation/${doctor.name}`)}
                                />
                            </Modal>
                        }
                    </motion.div>
                ))}
            </div>

            <div className='my-6 md:my-12'>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </div>
    );
};

export default AllConsultation;
