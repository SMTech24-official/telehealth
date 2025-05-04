"use client"
import banner from "@/assets/consultation/banner.png"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { LuCalendar, LuChevronLeft, LuChevronRight } from "react-icons/lu"

const scheduleData = [
    {
        day: "Monday",
        appointments: [
            { time: "09:00 AM", status: "Booked" },
            { time: "10:00 AM", status: "Available" },
            { time: "02:00 PM", status: "Booked" },
            { time: "04:00 PM", status: "Available" }
        ]
    },
    {
        day: "Tuesday",
        appointments: [
            { time: "08:00 AM", status: "Available" },
            { time: "11:00 AM", status: "Booked" },
            { time: "01:30 PM", status: "Available" },
            { time: "03:30 PM", status: "Booked" }
        ]
    },
    {
        day: "Wednesday",
        appointments: [
            { time: "09:00 AM", status: "Available" },
            { time: "11:30 AM", status: "Booked" },
            { time: "02:00 PM", status: "Available" },
            { time: "05:00 PM", status: "Booked" }
        ]
    },
    {
        day: "Thursday",
        appointments: [
            { time: "10:00 AM", status: "Available" },
            { time: "12:00 AM", status: "Booked" },
            { time: "01:00 PM", status: "Available" },
            { time: "03:00 PM", status: "Booked" }
        ]
    },
    {
        day: "Friday",
        appointments: [
            { time: "09:00 AM", status: "Booked" },
            { time: "11:00 AM", status: "Available" },
            { time: "02:00 PM", status: "Booked" },
            { time: "05:30 PM", status: "Available" }
        ]
    }
];

export default function ConsultationDetailsPage() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === scheduleData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? scheduleData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="container section-gap flex flex-col md:flex-row gap-8">
            {/* Left Section */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">UX Consultation by Saifur Rahman</h1>

                <h2 className="text-lg font-medium mb-2">Consultation Description</h2>
                <p className="mb-4 text-sm">
                    Are you launching a new business or struggling with leads and sales, or do you have a thriving business and
                    want to scale up? You&apos;re in the right place.
                </p>
                <p className="mb-4 text-sm">
                    With my consultancy and proven strategies, I can help you achieve your goals. Whether you want to increase
                    brand awareness, drive more traffic, or boost your sales, I&apos;ll create a customized digital marketing plan
                    tailored to your needs.
                </p>

                <p className="mb-4 text-sm font-medium">My 4-Step Process:</p>

                <p className="mb-4 text-sm">
                    <span className="font-medium">In-Depth Discovery:</span> I understand your business, industry, market
                    position, competition, and goals.
                </p>

                <p className="mb-4 text-sm">
                    <span className="font-medium">Comprehensive Audit:</span> I&apos;ll audit your current digital marketing efforts,
                    including website performance, ad campaigns, SEO, and social media presence to identify improvement areas.
                </p>

                <p className="mb-4 text-sm">
                    <span className="font-medium">Strategy Development:</span> Based on the audit, I&apos;ll develop a customized
                    strategy with recommendations for paid media, SEO, content marketing, and email campaigns.
                </p>

                <p className="mb-4 text-sm">
                    <span className="font-medium">Implementation Plan:</span> I&apos;ll provide a detailed plan to execute the
                    strategy. If desired, I can manage the execution to ensure all elements are optimized.
                </p>

                <p className="mb-4 text-sm">During our consultation, you can ask me anything to improve your results.</p>

                <p className="mb-4 text-sm">Contact me today for a consultation, and let&apos;s create a roadmap to your success.</p>

                <div className="mt-6">
                    <Image
                        src={banner}
                        alt="English Grammar Fundamentals by Ayman Sadiq"
                        width={320}
                        height={180}
                        className="rounded-md"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[420px] border border-primary/70 shadow-lg rounded-lg p-4 flex flex-col relative">


                <div className="w-full max-w-md mb-4">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-primary text-white p-5">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold flex items-center">
                                    <LuCalendar className="mr-2" size={20} />
                                    Available Time
                                </h2>
                                <div className="text-sm opacity-80">
                                    {currentIndex + 1} of {scheduleData.length}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <button
                                    onClick={goToPrevious}
                                    className="p-2 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors duration-200"
                                    aria-label="Previous day"
                                >
                                    <LuChevronLeft size={20} />
                                </button>

                                <h3 className="text-lg font-medium text-gray-800">
                                    {scheduleData[currentIndex].day}
                                </h3>

                                <button
                                    onClick={goToNext}
                                    className="p-2 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors duration-200"
                                    aria-label="Next day"
                                >
                                    <LuChevronRight size={20} />
                                </button>
                            </div>

                            <div className="relative h-[320px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="absolute inset-0"
                                    >
                                        <ul className="space-y-3">
                                            {scheduleData[currentIndex].appointments.map((appointment, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center"
                                                >
                                                    <div className="w-24 text-sm font-medium text-gray-600">
                                                        {appointment.time}
                                                    </div>
                                                    <div className={`flex-1 p-3 rounded-lg border transition-all duration-200 ${appointment.status === "Booked"
                                                        ? "bg-red-50 border-red-200 text-red-800"
                                                        : "bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100 cursor-pointer"
                                                        }`}>
                                                        <div className="flex items-center justify-between">
                                                            <span className="font-medium">
                                                                {appointment.status}
                                                            </span>
                                                            {appointment.status === "Available" && (
                                                                <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-1 rounded-full">
                                                                    Book Now
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-50 p-4 border-t border-gray-100 text-center text-sm text-gray-500">
                            Click on any available slot to book your appointment
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-auto space-y-2">
                    <button className="w-full bg-blue-500 hover:bg-blue-600">Continue ($50)</button>
                    <button className="w-full">
                        Message Saifur
                    </button>
                </div>
            </div>
        </div>
    )
}

