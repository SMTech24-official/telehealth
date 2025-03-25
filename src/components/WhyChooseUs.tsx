"use client";
import Image from 'next/image';
import SectionTitle from './shared/sectionTitle/SectionTitle';
import { motion } from 'framer-motion';

const Listicon = () => (
    <svg className='min-w-6 min-h-6' xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 20 26" fill="none">
        <path d="M8.0197 18.3851C11.7693 18.3851 14.8089 15.3455 14.8089 11.5959C14.8089 7.84628 11.7693 4.80664 8.0197 4.80664C4.27011 4.80664 1.23047 7.84628 1.23047 11.5959C1.23047 15.3455 4.27011 18.3851 8.0197 18.3851Z" fill="#5FA380" />
        <path d="M8.09597 16.8443L8.00986 16.6976C6.69447 14.4564 3.19901 9.70035 3.1637 9.65258L3.11328 9.58408L4.30417 8.40716L8.07386 11.0394C10.4474 7.95947 12.6617 5.844 14.1061 4.60866C15.6861 3.25731 16.7146 2.6352 16.725 2.62923L16.7484 2.61523H18.7684L18.5755 2.78708C13.6128 7.20731 8.23382 16.6021 8.18024 16.6965L8.09597 16.8443Z" fill="white" />
    </svg>
);

export default function WhyChooseUs() {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
    };

    return (
        <div className="container section-gap">
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between"
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInVariants}
            >
                {/* Left side content */}
                <motion.div>
                    <SectionTitle
                        miniTitle="Why Choose Elephant In The Room LLC"
                        subtitle="At Elephant In The Room LLC, led by Zina Ortiz and a dedicated team of clinicians..."
                        title="Taking Care of Your Mental Health"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div className="space-y-4">
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Our Mission</h3>
                            {["Promoting Responsible Exploration", "Providing Harm Reduction", "Advancing Education"].map((item, index) => (
                                <motion.p
                                    key={index}
                                    className="text-gray-600 flex"
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <Listicon />
                                    <span>{item}</span>
                                </motion.p>
                            ))}
                        </motion.div>

                        <motion.div className="space-y-4">
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Our Vision</h3>
                            {["Cultivating Conscious Communities", "Fostering Ethical Practices", "Leading by Example"].map((item, index) => (
                                <motion.p
                                    key={index}
                                    className="text-gray-600 flex"
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <Listicon />
                                    <span>{item}</span>
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right side image animations */}
                <motion.div className="flex items-end justify-end relative mb-20">
                    <motion.div
                        className="h-full relative rounded-2xl overflow-hidden"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                            alt="Therapy session"
                            width={600}
                            height={700}
                            className="lg:w-[680px] w-[500px] h-[500px] lg:h-[580px] object-cover"
                        />
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-28 border-4 border-white left-0 rounded-2xl overflow-hidden"
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                            alt="Professional therapist"
                            width={600}
                            height={700}
                            className="w-72 h-72 object-cover rounded-2xl"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
