"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { LuArrowLeft, LuCalendar, LuClock, LuMapPin, LuMonitor, LuUser } from 'react-icons/lu';

type FormData = {
    name: string;
    phone: string;
    email: string;
    message: string;
    consent: boolean;
};

function MakeAppoinment() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const router = useRouter()
    const onSubmit = (data: FormData) => {
        // Handle form submission
        console.log(data);
        router.push("/confirm-booking")
    };

    return (
        <div className="min-h-screen container section-gap">
            <div className="grid md:grid-cols-2 gap-6 rounded-2xl overflow-hidden">
                {/* Left Column */}
                <div className="p-8 ">
                    <button className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors border p-2 border-secondary md:p-3 rounded-full">
                        <LuArrowLeft className="w-5 h-5 " />
                    </button>

                    <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                        Free 15-Minute Therapy Consultation
                    </h1>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Seeking support for managing stress and anxiety related to work and personal life? Interested in exploring coping strategies and developing a healthier mindset? Please complete the form and our team will get back to you as soon as possible.
                    </p>

                    <div className="space-y-4">
                        <div className='flex items-center gap-5'>
                            <div className="flex items-center text-gray-600">
                                <LuClock className="w-5 h-5 mr-2 text-secondary" />
                                <span>15 Mins</span>
                            </div>

                            <div className="flex items-center text-gray-600">
                                <LuMonitor className="w-5 h-5 mr-2 text-secondary" />
                                <span>Telehealth only</span>
                            </div>
                        </div>
                        k
                        <div className="flex items-center text-gray-600">
                            <LuCalendar className="w-5 h-5 mr-2 text-secondary" />
                            <span>10:15 AM - 10:30 AM, Sat, March 1, 2025</span>
                        </div>

                        <div className="flex items-center text-gray-600 bg-secondary/20 p-2 rounded-full max-w-lg">
                            <LuUser className="w-5 h-5 mr-2 text-secondary" />
                            <span>Zina Ortiz</span>
                        </div>
                        <div className="flex items-center text-gray-600 bg-secondary/20 p-2 rounded-full max-w-lg">
                            <LuMapPin className="w-5 h-5 mr-2 text-secondary" />
                            <span>Asia/Dhaka (GMT +6)</span>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="p-8 bg-secondary/20 rounded-lg ">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                        Enter Details
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-600 mb-2">
                                Name :
                            </label>
                            <input
                                id="name"
                                placeholder="Enter Your Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="phone" className="block text-gray-600 mb-2">
                                    Phone number :
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter Your Phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    {...register('phone', {
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^[0-9+-]+$/,
                                            message: 'Invalid phone number format'
                                        }
                                    })}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-600 mb-2">
                                    Email :
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-600 mb-2">
                                Additional Information?
                            </label>
                            <textarea
                                id="message"
                                placeholder="Message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                                {...register('message')}
                            />
                        </div>

                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="consent"
                                className="mt-1 accent-secondary"
                                {...register('consent', {
                                    required: 'You must agree to the terms'
                                })}
                            />
                            <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                                I Confirm That I Want To Receive Contents From This Company Using Any Contact Information I Provide.
                            </label>
                            {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-fit px-4 bg-secondary/80 cursor-pointer text-white py-3 rounded-full hover:bg-secondary transition-colors font-medium"
                        >
                            SCHEDULE MEETING
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MakeAppoinment;