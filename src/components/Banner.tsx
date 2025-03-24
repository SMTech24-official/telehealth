"use client"

import banner from "@/assets/banner/banner.png";
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FaClinicMedical, FaHeartbeat, FaMapMarkerAlt, FaUserShield } from "react-icons/fa";
import { IoBriefcaseOutline } from 'react-icons/io5';
import { LuArrowRight } from "react-icons/lu";
import { RiProjectorLine, RiUserLine } from 'react-icons/ri';
import PrimaryButton from './shared/primaryButton/PrimaryButton';




function Banner() {
    return (
        <AnimatePresence >
            <div className=" relative">
                <div className="bg-gradient-to-b from-secondary/30 to-white  w-full h-full absolute -z-10"></div>
                <div className="container z-20">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-end justify-end">
                        {/* Left Column - Content */}
                        <motion.div
                            className="space-y-6 md:col-span-3 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .3 }}
                        >
                            <h1 className="text-3xl font-outfit tracking-wider sm:text-4xl md:text-3xl lg:text-3xl xl:text-6xl font-bold text-[#333] lg:leading-[140%] leading-[120%] md:my-0 my-4  capitalize">
                                Denver’s top clinic for trauma-focused <span className="text-secondary">Psychedelic Therapy</span>, EMDR, and <span className="text-secondary">Somatic Therapy</span>.
                            </h1>

                            <p className="text-gray-600 xl:text-lg">
                                Offering a spectrum of personalized therapies for complex trauma, anxiety and depression! Start
                                your journey of trauma resolution today.
                            </p>

                            {/* Search Bar */}
                            <PrimaryButton onClick={() => { }} text='FREE THERAPY CONSULTATION' />
                            <p className="xl:text-2xl lg:text-xl font-medium">Find therapy covered by insurance, for:</p>
                            <div className="w-[80%] space-y-3">
                                <button className="flex items-center justify-between px-6 py-4 bg-white w-full rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt />
                                        <span>Location</span>
                                    </div>
                                    <LuArrowRight className="group-hover:animate-ping" />
                                </button>

                                <button className="flex items-center justify-between px-6 py-4 bg-white w-full rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                                    <div className="flex items-center gap-2">
                                        <FaHeartbeat />
                                        <span>Concerns</span>
                                    </div>
                                    <LuArrowRight className="group-hover:animate-ping" />
                                </button>

                                <button className="flex items-center justify-between px-6 py-4 bg-white w-full rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                                    <div className="flex items-center gap-2">
                                        <FaUserShield />
                                        <span>Insurance Carrier</span>
                                    </div>
                                    <LuArrowRight className="group-hover:animate-ping" />
                                </button>

                                <button className="flex items-center justify-between px-6 py-4 bg-white w-full rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                                    <div className="flex items-center gap-2">
                                        <FaClinicMedical />
                                        <span>Find Care</span>
                                    </div>
                                    <LuArrowRight className="group-hover:animate-ping" />
                                </button>

                            </div>

                        </motion.div>

                        {/* Right Column - Image */}
                        <motion.div
                            className="relative md:col-span-3 flex items-center lg:items-end justify-center lg:justify-end z-10 "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .4, duration: 1 }}
                        >
                            <Image
                                src={banner}
                                width={2000}
                                height={1000}
                                alt="Professional woman"
                                className="2xl:w-[800px] 2xl:h-[832px] xl:w-[700px] xl:h-[878px] lg:w-[700px] lg:h-[650px] sm:w-[640px] sm:h-[683px] md:w-[550px] md:h-[650px] w-[400px] h-[550px] mx-auto"
                            />

                            {/* Floating Cards */}
                            <motion.div
                                className="absolute max-w-[270px] xl:max-w-[270px] w-full top-1/2 sm:top-1/2 2xl:right-5 xl:right-20 right-1 bg-white/80 backdrop-blur-lg rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .6, duration: 1 }}
                            >
                                <div className="bg-secondary p-2 rounded-lg">
                                    <RiUserLine className="sm:w-5 w-4 h-4 sm:h-5 text-white" />
                                </div>
                                <div>
                                    <div className=" text-nowrap text-sm sm:text-base text-[#2E2E2E]">Personalized Treatments</div>
                                    <div className="text-gray-500 text-sm">98%</div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .7, duration: 1 }}
                                className="absolute  max-w-[220px] xl:max-w-[230px] w-full top-2/3 sm:top-[65%] 2xl:-left-7 xl:-left-7 lg:-left-14 left-0 bg-white/80 backdrop-blur-lg rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-3">
                                <div className="bg-secondary p-2 rounded-lg">
                                    <IoBriefcaseOutline className="sm:w-5 w-4 h-4 sm:h-5 text-white" />
                                </div>
                                <div>
                                    <div className=" text-nowrap text-sm sm:text-base text-[#2E2E2E]">Healing Journeys</div>
                                    <div className="text-gray-500 text-sm">1111+</div>
                                </div>
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="absolute  max-w-[250px] xl:max-w-[250px] w-full xl:bottom-12 lg:bottom-6 bottom-4 2xl:right-4 right-4 lg:right-18 bg-white/80 backdrop-blur-lg rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-3">
                                <div className="bg-secondary p-2 rounded-lg">
                                    <RiProjectorLine className="sm:w-5 w-4 h-4 sm:h-5 text-white" />
                                </div>
                                <div>
                                    <div className=" text-nowrap text-sm sm:text-base text-[#2E2E2E]">Transforming seasons</div>
                                    <div className="text-gray-500 text-sm">8,8888+</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default Banner;