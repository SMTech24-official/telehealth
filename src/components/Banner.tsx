"use client";

import banner from "@/assets/banner/banner.png";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  FaClinicMedical,
  FaHeartbeat,
  FaMapMarkerAlt,
  FaUserShield,
} from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuArrowRight } from "react-icons/lu";
import { RiProjectorLine, RiUserLine } from "react-icons/ri";
import PrimaryButton from "./shared/primaryButton/PrimaryButton";
import { Modal } from "./modal/Modal";
import MainModal from "@/feature/therapist/modal/MainModal";
import { useState } from "react";

function Banner() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  return (
    <AnimatePresence>
      <div className=" relative">
        <div className="bg-gradient-to-b from-secondary/30 to-white  w-full h-full absolute -z-10"></div>
        <div className="container z-20">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-end justify-end">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-6 md:col-span-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-3xl font-outfit tracking-wider sm:text-4xl md:text-3xl lg:text-3xl xl:text-6xl font-bold text-[#333] lg:leading-[140%] leading-[120%] md:my-0 my-4  capitalize">
                Denver’s top clinic for trauma-focused{" "}
                <span className="text-secondary">Psychedelic Therapy</span>,
                EMDR, and{" "}
                <span className="text-secondary">Somatic Therapy</span>.
              </h1>

              <p className="text-gray-600 xl:text-lg">
                Offering a spectrum of personalized therapies for complex
                trauma, anxiety and depression! Start your journey of trauma
                resolution today.
              </p>

              {/* Search Bar */}
              <PrimaryButton
                onClick={() => {}}
                text="FREE THERAPY CONSULTATION"
              />
              <p className="xl:text-2xl lg:text-xl font-medium">
                Find therapy covered by insurance, for:
              </p>
              <div className="w-[80%] space-y-3">
                <button
                  onClick={() => SetIsOpen(true)}
                  className="flex items-center justify-between px-6 py-4 bg-white w-full rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>Location</span>
                  </div>
                  <LuArrowRight className="group-hover:animate-ping" />
                </button>

                <button
                  onClick={() => SetIsOpen(true)}
                  className="flex items-center justify-between px-6 py-4 bg-white w-full rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2">
                    <FaHeartbeat />
                    <span>Concerns</span>
                  </div>
                  <LuArrowRight className="group-hover:animate-ping" />
                </button>

                <button
                  onClick={() => SetIsOpen(true)}
                  className="flex items-center justify-between px-6 py-4 bg-white w-full rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2">
                    <FaUserShield />
                    <span>Insurance Carrier</span>
                  </div>
                  <LuArrowRight className="group-hover:animate-ping" />
                </button>

                <button
                  onClick={() => SetIsOpen(true)}
                  className="flex items-center justify-between px-6 py-4 bg-white w-full rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                >
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
              className="relative md:col-span-3 flex items-center justify-center z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              {/* Responsive Image */}
              <Image
                src={banner}
                width={2000}
                height={1000}
                alt="Professional woman"
                className="w-full h-auto object-cover scale-150 m-12
                 max-w-[350px] mx-auto       
                 xs:max-w-[400px]            
                 sm:max-w-[500px]            
                 md:max-w-[600px] md:mr-0    
                 lg:max-w-[800px]            
                 xl:max-w-[1000px]           
                 2xl:max-w-[1200px]          
                 3xl:max-w-[1400px]          
              "
              />

              {/* Floating Card 1 */}
              <motion.div
                className="absolute max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[240px] xl:max-w-[270px] w-full
                top-[40%] sm:top-[45%] md:top-[40%] lg:top-[45%]
                right-2 sm:right-4 md:right-8 lg:right-12 xl:right-20 2xl:right-24
                bg-white/80 backdrop-blur-lg rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-2 sm:gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <div className="bg-secondary p-1.5 sm:p-2 rounded-lg">
                  <RiUserLine className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm md:text-base text-[#2E2E2E] whitespace-nowrap">
                    Personalized Treatments
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">98%</div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                className="absolute max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[230px] w-full
      top-[55%] sm:top-[60%] md:top-[55%] lg:top-[60%]
      left-2 sm:left-4 md:left-6 lg:left-8 xl:left-12 2xl:left-16
      bg-white/80 backdrop-blur-lg rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-2 sm:gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                <div className="bg-secondary p-1.5 sm:p-2 rounded-lg">
                  <IoBriefcaseOutline className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm md:text-base text-[#2E2E2E] whitespace-nowrap">
                    Healing Journeys
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">1111+</div>
                </div>
              </motion.div>

              {/* Floating Card 3 */}
              <motion.div
                className="absolute max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[240px] xl:max-w-[250px] w-full
      bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12
      right-2 sm:right-4 md:right-6 lg:right-8 xl:right-12 2xl:right-16
      bg-white/80 backdrop-blur-lg rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-2 sm:gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <div className="bg-secondary p-1.5 sm:p-2 rounded-lg">
                  <RiProjectorLine className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm md:text-base text-[#2E2E2E] whitespace-nowrap">
                    Transforming seasons
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">8,888+</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => SetIsOpen(false)}>
        <MainModal />
      </Modal>
    </AnimatePresence>
  );
}

export default Banner;
