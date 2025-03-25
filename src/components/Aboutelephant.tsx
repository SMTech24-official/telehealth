"use client"
import React from 'react';
import { LuShield, LuUsers } from 'react-icons/lu';
import SectionTitle from './shared/sectionTitle/SectionTitle';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import framer motion

export default function AboutElephant() {
    return (
        <div className="container section-gap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left side with image */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of element is visible
                    className="grid grid-cols-2 grid-rows-4 gap-6 "
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="row-span-4 col-span-1 h-full relative rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                            alt="Therapy session"
                            width={400}
                            height={700}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="row-span-3 col-start-2 col-span-1 h-full relative rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                            alt="Professional therapist"
                            width={400}
                            height={700}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="row-start-4 col-start-2 bg-card p-6 rounded-xl text-center"
                    >
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="text-4xl font-bold text-gray-900">28</div>
                            <div className="text-gray-600 mt-2">Years Of Experience</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right side content */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <SectionTitle
                        miniTitle="About Elephant In The Room!"
                        subtitle="My team specializes in trauma, PTSD, anxiety, and depression using EMDR, Psychedelic Therapy, Somatic Experiencing, and more. Each clinician is trained and supervised by me for expert care."
                        title="Expert therapy for trauma, PTSD, anxiety, and depression with 28+ years of experience."
                    />

                    {/* Features Section */}
                    <div className="flex space-x-8">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                                <LuUsers className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Expert Therapists</h3>
                            <p className="text-gray-600">
                                Skilled and compassionate care from experienced therapists.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                                <LuShield className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Safe Space</h3>
                            <p className="text-gray-600">
                                We provide a safe space for healing and personal growth.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
