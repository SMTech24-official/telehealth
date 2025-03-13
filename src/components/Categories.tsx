"use client"
import { motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";
import { LuBookText, LuBrain, LuClipboardCheck, LuFileText, LuFlaskConical, LuMegaphone, LuMic, LuScale, LuStethoscope } from 'react-icons/lu';
import SectionTitle from "./shared/sectionTitle/SectionTitle";


export default function JobCategories() {

    const categories = [
        {
            icon: <LuStethoscope className="w-6 h-6" />,
            title: "Consulting",
            description: "Get expert medical advice from certified healthcare professionals.",
        },
        {
            icon: <LuBrain className="w-6 h-6" />,
            title: "Coaching",
            description: "Access professional mentorship for career growth and personal development.",
        },
        {
            icon: <LuScale className="w-6 h-6" />,
            title: "Expert Witness",
            description: "Obtain expert legal and medical opinions for case evaluations.",
        },
        {
            icon: <LuFileText className="w-6 h-6" />,
            title: "Medical Writing / Content Creation",
            description: "Receive high-quality medical content crafted by professional writers.",
        },
        {
            icon: <LuClipboardCheck className="w-6 h-6" />,
            title: "Resume Review",
            description: "Get professional feedback to improve your resume and job applications.",
        },
        {
            icon: <LuBookText className="w-6 h-6" />,
            title: "Tutoring / Test Prep",
            description: "Prepare for exams with expert-led tutoring sessions and study materials.",
        },
        {
            icon: <LuFlaskConical className="w-6 h-6" />,
            title: "Product Testing & Reviewing",
            description: "Evaluate and review healthcare and wellness products with expert insights.",
        },
        {
            icon: <LuMic className="w-6 h-6" />,
            title: "Mock Interviews",
            description: "Practice and refine your interview skills with professional guidance.",
        },
        {
            icon: <LuMegaphone className="w-6 h-6" />,
            title: "Brand Ambassadors",
            description: "Collaborate with brands to promote healthcare and wellness products.",
        },
    ];


    return (
        <section className="bg-primary/10 section-gap">
            <div className="container">
                <SectionTitle miniTitle="Our Categories" subtitle="Discover the perfect job opportunity tailored to your skills and interests across a wide range of industries.." title="Explore Job By Category" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">

                    {categories.map((category, index) => (
                        <motion.div
                            initial={{ opacity: 0 }} // Start slightly below
                            animate
                            whileInView={{ opacity: 1 }} // Animate when in viewport
                            viewport={{ once: true, amount: 0.2, }} // Trigger once when 20% visible
                            transition={{ duration: 0.7, ease: "easeIn" }}

                            key={index} className="bg-white p-4 sm:p-6 rounded-lg border border-gray-100 hover:border-primary transition-all duration-300 cursor-pointer group">
                            <div className="mb-4">{category.icon}</div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-2">{category.title}</h3>
                            <p className="text-gray-600 sm:text-lg text-sm leading-relaxed">{category.description}</p>
                            <div className="py-2 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <FaArrowRightLong className='text-primary' />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )

}