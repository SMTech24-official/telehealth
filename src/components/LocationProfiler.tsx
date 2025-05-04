"use client"
import ContactCard from '@/feature/profile/contactCard';
import LocationProfilePage from '@/feature/profile/locationProfile/LoationProfile';
import React from 'react';

const LocationProfiler = () => {
    return (
        <div className='grid lg:grid-cols-3 container section-gap gap-4'>
            <div className='col-span-2'>
                <LocationProfilePage image='https://randomuser.me/api/portraits/women/2.jpg' name='John Doe' location='Counselor, MA, LPCC' />
            </div>
            <ContactCard
                phone="(719) 223-3261"
                primaryButton={{
                    text: "BOOK A CONSULTATION",
                    onClick: () => console.log("Book consultation clicked")
                }}
                secondaryButton={{
                    text: "EMAIL ME",
                    onClick: () => console.log("Email me clicked")
                }}
                website={{
                    url: "https://example.com",
                    label: "VISIT MY SITE"
                }}
                location="Lakewood, CO"
                telehealthAvailable={true}
                mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28005.328334180218!2d77.27341537910156!3d28.67447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0f8f99c59b%3A0x6db044e71b9c7037!2sNorth%20Shahdara%2C%20Shahdara%2C%20Delhi!5e0!3m2!1sen!2sin!4v1712089344035!5m2!1sen!2sin"
            />
        </div>
    );
};

export default LocationProfiler;