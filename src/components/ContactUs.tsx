"use client"
import React from 'react';
import { LuClock, LuMapPin, LuPhone } from 'react-icons/lu';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
    agreed: boolean;
};

function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        reset();
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {/* Left Column */}
                    <div className="space-y-8 ">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 className="text-lg font-outfit font-medium text-gray-600">Get in touch</h2>
                            <h1 className="text-3xl font-outfit font-bold text-gray-900 mt-2">Get in contact with us</h1>
                        </motion.div>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600"
                        >
                            Seeking support for managing stress and anxiety related to work and personal life? Interested in exploring coping strategies and developing a healthier mindset? Please complete the form and our team will get back to you as soon as possible.
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            {[
                                {
                                    icon: <LuPhone className="w-5 h-5 text-emerald-600" />,
                                    title: "Phone number",
                                    content: "(719) 223-3261"
                                },
                                {
                                    icon: <LuMapPin className="w-5 h-5 text-emerald-600" />,
                                    title: "Clinic Address",
                                    content: "7566 West Jewell Ave. | 202, Lakewood CO 80232"
                                },
                                {
                                    icon: <LuClock className="w-5 h-5 text-emerald-600" />,
                                    title: "Opening Hours",
                                    content: (
                                        <>
                                            Monday - Friday ( 08:00am - 05:00pm )<br />
                                            Saturday-Sunday ( Closed )
                                        </>
                                    )
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center space-x-4"
                                >
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{item.title}</p>
                                        <p className="text-gray-600">{item.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ scale: 0.98, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-secondary/20 rounded-2xl shadow-sm p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact us</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name :
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="text"
                                    id="name"
                                    placeholder="Enter Your Name"
                                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="mt-1 text-sm text-red-600"
                                    >
                                        {errors.name.message}
                                    </motion.p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email :
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="email"
                                        id="email"
                                        placeholder="Enter Your Email"
                                        className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-1 text-sm text-red-600"
                                        >
                                            {errors.email.message}
                                        </motion.p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone number :
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="tel"
                                        id="phone"
                                        placeholder="Enter Your Phone"
                                        className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
                                        {...register('phone', {
                                            required: 'Phone number is required',
                                            pattern: {
                                                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                                                message: 'Invalid phone number',
                                            },
                                        })}
                                    />
                                    {errors.phone && (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-1 text-sm text-red-600"
                                        >
                                            {errors.phone.message}
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    How can we help you?
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.01 }}
                                    id="message"
                                    rows={4}
                                    placeholder="Message"
                                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
                                    {...register('message', {
                                        required: 'Message is required',
                                        minLength: {
                                            value: 10,
                                            message: 'Message must be at least 10 characters',
                                        },
                                    })}
                                />
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="mt-1 text-sm text-red-600"
                                    >
                                        {errors.message.message}
                                    </motion.p>
                                )}
                            </div>

                            <div className="flex items-start space-x-2">
                                <motion.input
                                    whileTap={{ scale: 0.95 }}
                                    type="checkbox"
                                    id="terms"
                                    className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                                    {...register('agreed', {
                                        required: 'You must agree to the terms and conditions',
                                    })}
                                />
                                <label htmlFor="terms" className="text-sm text-gray-500">
                                    I Agree To Terms & Conditions Provided By The Company. By Providing My Phone Number Or Email Address, I Agree To Receive Messages Regarding My Inquiry That May Be Promotional In Nature. I Understand That I Can Opt-Out At Any Time By Clicking The Unsubscribe Link At The Bottom Of An Email Or Replying STOP To A Text Message.
                                </label>
                            </div>
                            {errors.agreed && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-1 text-sm text-red-600"
                                >
                                    {errors.agreed.message}
                                </motion.p>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors duration-200"
                            >
                                SUBMIT
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default ContactUs;