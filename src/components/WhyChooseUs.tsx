import React from 'react';
import { LuShield, LuUsers } from 'react-icons/lu';
import SectionTitle from './shared/sectionTitle/SectionTitle';
import Image from 'next/image';

export default function WhyChooseUs() {
    return (
        <div className="container section-gap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left side with image */}
                <div className="grid grid-cols-2 grid-rows-4 gap-6 ">
                    {/* Div1: Taking up most of the left side */}
                    <div className="row-span-4 col-span-1 h-full relative rounded-2xl overflow-hidden ">
                        <Image
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                            alt="Therapy session"
                            width={400}
                            height={700}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Div3: Top-right image section */}
                    <div className="row-span-3 col-start-2 col-span-1 h-full relative rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                            alt="Professional therapist"
                            width={400}
                            height={700}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* Div2: Experience card at the bottom-right */}
                    <div className="row-start-4 col-start-2 bg-card p-6 rounded-xl text-center ">
                        <div className='flex flex-col items-center justify-center h-full '>
                            <div className="text-4xl font-bold text-gray-900">28</div>
                            <div className="text-gray-600 mt-2">Years Of Experience</div>
                        </div>
                    </div>
                </div>

                {/* Right side content */}
                <div className="">
                    {/* Stats and features */}
                    <div className="">
                        <SectionTitle miniTitle='About Elephant In The Room!' subtitle='My team specializes in trauma, PTSD, anxiety, and depression using EMDR, Psychedelic Therapy, Somatic Experiencing, and more. Each clinician is trained and supervised by me for expert care.' title='Expert therapy for trauma, PTSD, anxiety, and depression with 28+ years of experience.' />


                        {/* Expert Therapists */}
                        <div className="flex">
                            <div className="space-y-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                                    <LuUsers className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Expert Therapists</h3>
                                <p className="text-gray-600">
                                    Skilled and compassionate care from experienced therapists.
                                </p>
                            </div>

                            {/* Safe Space */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                                    <LuShield className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Safe Space</h3>
                                <p className="text-gray-600">
                                    We provide a safe space for healing and personal growth
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
