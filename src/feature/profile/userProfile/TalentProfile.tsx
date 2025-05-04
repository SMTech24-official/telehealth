"use client"
import React from 'react';
import ProfileCard from './card/ProfileCard';
import SkillAndEarn from './card/SkillnEarn';
import ConsultationReviewCard from '@/feature/consultation/card/ConcultationReviewCard';
import Education from './card/Education';
import PrimaryButton from '@/components/shared/primaryButton/PrimaryButton';
import { RiDriveFill } from 'react-icons/ri';
import ProfileConsultation from '@/feature/consultation/card/ProfileConsultation';


const doctors =
{
    name: "Dr. John Smith",
    title: "Cardiologist & Heart Specialist",
    location: "New York, USA",
    availability: true,
    hourlyRate: "20",
    rating: 4.9,
    maxRating: 5.0,
    skills: ["Cardiology", "Heart Surgery", "Patient Care"],
    description:
        "Dr. John Smith has over 15 years of experience specializing in heart diseases and cardiac surgery. He has successfully performed numerous life-saving procedures and is recognized for his expertise in heart disease management and prevention.",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Dr. John Smith is known for his compassionate approach to patient care and his extensive expertise in heart surgery. He takes pride in making complex medical information accessible to patients and their families.",
}
const review = [
    {
        title: "I will do UX UI design for your mobile app design",
        rating: 5.0,
        started: '20/01/2025',
        finished: '03/02/2025',
        testimonial: "He is very professional, great at meeting deadlines and excellent communication.",
        response: "Working with you was a fantastic experience! I truly appreciate your professionalism.",
        price: 800
    },
    {
        title: "I will develop a full-stack web application",
        rating: 4.8,
        started: '10/02/2025',
        finished: '25/02/2025',
        testimonial: "Delivered an outstanding project with clean code and great UI.",
        response: "Thank you! It was a pleasure working on your project.",
        price: 1200
    },
    {
        title: "I will create a custom eCommerce website",
        rating: 5.0,
        started: '05/03/2025',
        finished: '20/03/2025',
        testimonial: "The best developer I have worked with! Highly recommended.",
        response: "Appreciate your kind words! Looking forward to future projects.",
        price: 1500
    }
];

const fakeEducationData = [
    {
        institution: "Harvard University",
        degree: "Bachelor of Science in Computer Science",
        startYear: "2015",
        endYear: "2019",
        description: "Studied core concepts of programming, algorithms, and software development.",
        imageSrc: "/images/harvard.png"
    },
    {
        institution: "Stanford University",
        degree: "Master of Science in AI & ML",
        startYear: "2020",
        endYear: "2022",
        description: "Focused on artificial intelligence, machine learning, and data science applications.",
        imageSrc: "/images/stanford.png"
    }
];

const consultation = {
    title: "General Health Checkup",
    fee: 50,
    nextConsultation: "3:00 PM",
    services: ["Blood Pressure Check", "BMI Calculation", "Basic Consultation"],
    timeSlots: ["10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM"]
}



const TalentProfile = () => {

    const handleBook = () => {
        console.log("object");
    }


    return (
        <div className='container space-y-6 mb-10'>
            <ProfileCard availability={doctors.availability} handleBook={handleBook} />
            <div className='grid lg:grid-cols-2 lg:gap-10 md:gap-7 gap-6'>
                <div className='space-y-6'>
                    <SkillAndEarn earn skills={doctors.skills} />
                    <div>
                        <p className='md:text-2xl text-lg font-semibold mb-4'>Education</p>
                        <div className='space-y-6'>
                            {fakeEducationData.map((edu, index) => (
                                <Education
                                    key={index}
                                    institution={edu.institution}
                                    degree={edu.degree}
                                    startYear={edu.startYear}
                                    endYear={edu.endYear}
                                    description={edu.description}
                                    imageSrc={edu.imageSrc}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className='md:text-2xl text-lg font-semibold mb-4'>CV / Resume</p>
                        <div className='w-fit'>
                            <PrimaryButton onClick={() => { }}>
                                <div className='flex items-center gap-2 w-fit'>
                                    Download Resume <RiDriveFill />
                                </div>
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                <div>
                    <ProfileConsultation
                        title={consultation.title}
                        fee={consultation.fee}
                        nextConsultation={consultation.nextConsultation}
                        services={consultation.services}
                    />
                    <p className='text-lg md:text-2xl font-semibold'>Reviews</p>
                    {review.map((project, index) => (
                        <ConsultationReviewCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TalentProfile;