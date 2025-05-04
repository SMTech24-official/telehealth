"use client"
import React from 'react';
import ConsultationBook from './card/ConsultationBook';
import { motion } from 'framer-motion';


const consultations = [
    {
        title: "General Health Checkup",
        fee: 50,
        nextConsultation: "2025-03-01",
        services: ["Blood Pressure Check", "BMI Calculation", "Basic Consultation"],
        timeSlots: ["10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM"]
    },
    {
        title: "Dental Consultation",
        fee: 75,
        nextConsultation: "2025-03-05",
        services: ["Teeth Cleaning", "Cavity Check", "Oral Health Advice"],
        timeSlots: ["9:00 AM - 10:00 AM", "1:00 PM - 2:00 PM"]
    },
    {
        title: "Mental Health Counseling",
        fee: 100,
        nextConsultation: "2025-03-10",
        services: ["Stress Management", "Anxiety Therapy", "Depression Counseling"],
        timeSlots: ["11:00 AM - 12:00 PM", "4:00 PM - 5:00 PM"]
    },
    {
        title: "Physiotherapy Session",
        fee: 80,
        nextConsultation: "2025-03-07",
        services: ["Posture Correction", "Muscle Relaxation Therapy", "Pain Relief Exercises"],
        timeSlots: ["3:00 PM - 4:00 PM", "5:00 PM - 6:00 PM"]
    },
    {
        title: "Nutrition Consultation",
        fee: 60,
        nextConsultation: "2025-03-02",
        services: ["Diet Plan", "Weight Management", "Nutritional Advice"],
        timeSlots: ["8:00 AM - 9:00 AM", "12:00 PM - 1:00 PM"]
    }
];

const ConsultationHistory = () => {
    return (
        <div>
            {consultations.map((consultation, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.1 * (index + 1), ease: "easeIn" }}>
                    <ConsultationBook
                        history={false}
                        key={index}
                        title={consultation.title}
                        fee={consultation.fee}
                        nextConsultation={consultation.nextConsultation}
                        services={consultation.services}
                    />
                </motion.div>

            ))}
        </div>
    );
};

export default ConsultationHistory;
