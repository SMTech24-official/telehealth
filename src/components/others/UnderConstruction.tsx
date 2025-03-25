/* eslint-disable @next/next/no-img-element */
"use client";
import Head from "next/head";
import { motion } from "framer-motion"; // Import Framer Motion

export default function UnderConstruction() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Head>
                <title>Coming Soon | [Therapist Name] Therapy Services</title>
                <meta name="description" content="Professional therapy services coming soon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex-1 flex flex-col justify-center items-center p-6 md:p-8 text-center">
                <div className="max-w-3xl w-full mx-auto p-6 md:p-8 bg-white rounded-xl shadow-md">
                    {/* Animated Title */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Under Construction
                    </motion.h1>

                    {/* Animated Description */}
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 sm:mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        We&apos;re currently working on creating a welcoming space for your healing journey.
                    </motion.p>

                    {/* Animated Sub-Text */}
                    <motion.p
                        className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.4 }}
                    >
                        Our website will be launching soon with information about our therapy services.
                    </motion.p>

                    {/* Add Animation for Graphics (e.g., SVG) */}
                    <motion.div
                        className="mb-6 sm:mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.6 }}
                    >
                        <img
                            src="https://img.freepik.com/free-vector/empty-banner-with-construction-objects-elements_1308-101731.jpg?uid=R110243807&ga=GA1.1.1088808881.1737022066&semt=ais_hybrid" // Replace with your SVG or image path
                            alt="Under Construction Graphic"
                            className="w-48 sm:w-56 md:w-64 mx-auto"
                        />
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
