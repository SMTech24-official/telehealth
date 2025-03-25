"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';
import SectionTitle from './shared/sectionTitle/SectionTitle';

// Fake data
const teamMembers = [
    {
        id: 1,
        name: 'Zina Ortiz',
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&h=800',
    },
    {
        id: 2,
        name: 'John Doe',
        imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=800&h=800',
    },
    {
        id: 3,
        name: 'Anna Smith',
        imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=800&h=800',
    },
    {
        id: 4,
        name: 'Michael Lee',
        imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=800&h=800',
    },
    {
        id: 5,
        name: 'Emily Johnson',
        imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=800&h=800',
    },
];

const Team = () => {
    return (
        <div className='container section-gap'>
            <SectionTitle
                miniTitle='Our Clinicians'
                subtitle='Experienced psychotherapists possess advanced skills in understanding behavioral patterns, emotions, and mental processes. With extensive training and clinical expertise, we offer personalized assessments and therapy to individuals and groups.'
                title='The Experienced Therapists'
                sideText
            />

            <div className="flex items-center justify-center flex-wrap gap-6">
                {teamMembers.map((member) => (
                    <motion.div
                        key={member.id}
                        className="relative group w-[320px] sm:w-[300px] lg:w-[400px] 2xl:w-[500px] h-[320px] lg:h-[400px] 2xl:h-[491px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * member.id }}
                        viewport={{ once: true, amount: 0.2 }}  // Trigger animation when 30% of the component is in view
                    >
                        <Image
                            src={member.imageUrl}
                            alt={`${member.name}'s Profile`}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />

                        <div className="absolute bottom-3 left-0 right-0 translate-y-80 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                            <div className="flex items-center justify-between text-white bg-primary/90 rounded-md px-6 py-4 w-[calc(100%-40px)] mx-auto h-fit">
                                <span className="text-[19px] font-medium tracking-wide">{member.name}</span>
                                <button className="flex items-center gap-1.5 text-[13px] font-medium tracking-wide opacity-80 hover:opacity-100 transition-opacity">
                                    LEARN MORE <BsArrowUpRight className="w-[14px] h-[14px]" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Team;
