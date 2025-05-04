"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLaptopMedical, FaBrain, FaPrayingHands, FaPeopleArrows, FaHeartbeat } from "react-icons/fa";
import { GiMeditation, GiBrain, GiMuscleUp } from "react-icons/gi";
import { MdPsychology } from "react-icons/md";
import { TbVaccine } from "react-icons/tb";
import SectionTitle from "./shared/sectionTitle/SectionTitle";
import GradientBg from './others/GradientBg';


export default function ServicesCategories() {

    const categories = [
        {
            icon: <FaLaptopMedical className="w-6 h-6" />,
            title: "Virtual Therapy",
            description: "Access therapy from the comfort of your home.",
        },
        {
            icon: <MdPsychology className="w-6 h-6" />,
            title: "EMDR Therapy",
            description: "Transform trauma through eye movement.",
        },
        {
            icon: <FaBrain className="w-6 h-6" />,
            title: "EMDR Consultation",
            description: "Work with Zina to become EMDR certified.",
        },
        {
            icon: <GiMuscleUp className="w-6 h-6" />,
            title: "Rapid Resolution Therapy",
            description: "Swift resolution of emotional and behavioral patterns.",
        },
        {
            icon: <GiBrain className="w-6 h-6" />,
            title: "Sensorimotor Psychotherapy",
            description: "Trauma therapy through movement of the body.",
        },
        {
            icon: <FaHeartbeat className="w-6 h-6" />,
            title: "Somatic Psychotherapy",
            description: "Connect body & mind for comprehensive healing.",
        },
        {
            icon: <TbVaccine className="w-6 h-6" />,
            title: "Brainspotting Therapy",
            description: "Access and process deep-seated traumatic experiences.",
        },
        {
            icon: <GiMeditation className="w-6 h-6" />,
            title: "Mindfulness Meditation",
            description: "Direct attention to body, breath, thoughts and emotions.",
        },
        {
            icon: <FaPrayingHands className="w-6 h-6" />,
            title: "Psychedelic Assisted Therapy",
            description: "Psychedelic Somatic Interactive Psychotherapy.",
        },
        {
            icon: <FaPeopleArrows className="w-6 h-6" />,
            title: "Psychedelic Integration",
            description: "Integrate profound experiences and emotions.",
        },
    ];


    return (
        <section className=" section-gap relative">
            <div className="container relative">
                <SectionTitle miniTitle="Our Services" subtitle="Our mission is to provide efficient service, within a safe and supportive environment for our clients, where they can feel a real difference, overcome their challenges, and achieve their goals with confidence and authenticity." title="Denver’s top clinic for Psychedelic Therapy, EMDR, and Somatic Therapy." sideText />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8 items-center justify-center ">

                    {categories.map((category, index) => (
                        <motion.div
                            initial={{ opacity: 0 }} // Start slightly below
                            animate
                            whileInView={{ opacity: 1 }} // Animate when in viewport
                            viewport={{ once: true, amount: 0.2, }} // Trigger once when 20% visible
                            transition={{ duration: 0.7, ease: "easeIn" }}


                            key={index} className="bg-card p-4 sm:p-6 rounded-lg hover:bg-secondary/10 transition-all duration-300 cursor-pointer group flex flex-col w-full h-full" >
                            <div className="mb-4">{category.icon}</div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-2">{category.title}</h3>
                            <p className="text-gray-600 sm:text-lg text-sm leading-relaxed flex-1">{category.description}</p>

                            <div className="flex items-center justify-start gap-4">

                                <Link href={"/signIn"}>
                                    <button className="flex items-center gap-2 text-secondary pb-1 border-dashed border-b-2 border-secondary">
                                        <span className='uppercase'>Learn More</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" className='fill-primary'>
                                            <path className='fill-primary' fillRule="evenodd" clipRule="evenodd" d="M16.511 6.55489C14.8561 8.20986 11.8407 8.21122 10.1844 6.55489L9.50557 5.87607L8.14793 7.23372L8.82675 7.91254C10.031 9.11677 11.6887 9.71821 13.347 9.71888L4.97104 18.0949L6.32869 19.4525L14.7047 11.0765C14.7054 12.7349 15.3068 14.3926 16.511 15.5968L17.1898 16.2756L18.5475 14.918L17.8687 14.2392C16.213 12.5835 16.2137 9.56751 17.8687 7.91254L18.5475 7.23372L17.1898 5.87607L16.511 6.55489Z" />
                                        </svg>
                                    </button>
                                </Link>

                            </div >

                        </motion.div>
                    ))}
                </div>
            </div>
            <GradientBg extraClass='absolute top-2/3 -z-10 -left-40' />
        </section>
    )

}