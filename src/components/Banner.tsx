/* eslint-disable @next/next/no-img-element */
"use client"

import banner from "@/assets/banner/freepik__background__75598 (1).png";
import Image from 'next/image';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { RiProjectorLine, RiUserLine } from 'react-icons/ri';
import PrimaryButton from './shared/primaryButton/PrimaryButton';
import { AnimatePresence, motion } from 'framer-motion';
import { LuSearch, LuStar } from "react-icons/lu";




function Banner() {
    return (
        <AnimatePresence >
            <div className="">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center justify-end ">
                        {/* Left Column - Content */}
                        <motion.div
                            className="space-y-6 md:col-span-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .3 }}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight md:my-0 my-4 capitalize">
                                Healthcare expertise
                                <span className="block text-primary">
                                    in one platform
                                    <br />

                                </span>
                            </h1>

                            <p className="text-gray-600 lg:text-lg">
                                Connect with healthcare experts, offer your expertise, and unlock endless
                                opportunities
                            </p>

                            {/* Search Bar */}
                            <div className="flex items-center gap-2 bg-white rounded-full  p-1 lg:p-2 shadow-sm max-w-xl">
                                <LuSearch className="w-5 h-5 text-gray-400 ml-2" />
                                <input
                                    type="text"
                                    placeholder="Search work"
                                    className="flex-1 outline-none px-2"
                                />
                                <PrimaryButton onClick={() => { }} text='Search' />
                            </div>

                            {/* Rating Section */}
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full  border-white overflow-hidden"
                                        >
                                            <img
                                                src={`https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg?ga=GA1.1.1088808881.1737022066&semt=ais_authors_boost`}
                                                alt="User"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="bg-white rounded-full p-3 aspect-square">
                                        <LuStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    </div>
                                    <div className="flex flex-col items-start gap-[2px]">
                                        <span className="font-semibold text-nowrap text-sm sm:text-base">4.8 / 5.0</span>
                                        <span className="text-text_shadow text-sm">12.5K Reviews</span>
                                    </div>
                                </div>


                            </div>
                        </motion.div>

                        {/* Right Column - Image */}
                        <motion.div
                            className="relative md:col-span-3 flex items-center lg:items-end justify-center lg:justify-end z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .4, duration: 1 }}
                        >
                            <Image
                                src={banner}
                                width={2000}
                                height={1000}
                                alt="Professional woman"
                                className="2xl:w-[1000px] 2xl:h-[832px] xl:w-[739px] xl:h-[788px] lg:w-[600px] lg:h-[589px] sm:w-[640px] sm:h-[583px] md:w-[400px] md:h-[580px] w-[350px] h-[450px]"
                            />

                            {/* Floating Cards */}
                            <motion.div
                                className="absolute max-w-[160px] xl:max-w-[230px] w-full top-1/2 sm:top-1/2 2xl:-right-7 xl:-right-20 right-1 bg-white/80 backdrop-blur-lg rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .6, duration: 1 }}
                            >
                                <div className="bg-primary p-2 rounded-lg">
                                    <RiUserLine className="sm:w-5 w-4 h-4 sm:h-5 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-nowrap text-sm sm:text-base">Total Experts</div>
                                    <div className="text-gray-500 text-sm">1200+</div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .7, duration: 1 }}
                                className="absolute  max-w-[180px] xl:max-w-[230px] w-full top-2/3 sm:top-2/3 2xl:left-10 xl:left-7 lg:left-0 left-0 bg-white/80 backdrop-blur-lg rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-3">
                                <div className="bg-primary p-2 rounded-lg">
                                    <IoBriefcaseOutline className="sm:w-5 w-4 h-4 sm:h-5 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-nowrap text-sm sm:text-base">Available Jobs</div>
                                    <div className="text-gray-500 text-sm">350+</div>
                                </div>
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="absolute  max-w-[200px] xl:max-w-[230px] w-full bottom-4 right-4 bg-white/80 backdrop-blur-lg rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-3">
                                <div className="bg-primary p-2 rounded-lg">
                                    <RiProjectorLine className="sm:w-5 w-4 h-4 sm:h-5 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-nowrap text-sm">Available Projects</div>
                                    <div className="text-gray-500 text-sm">120+</div>
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