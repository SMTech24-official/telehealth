"use client"

import PrimaryButton from '@/components/shared/primaryButton/PrimaryButton';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import BlogsSlider from './BlogsSlider';
import BlogCard from './card/BlogCard';
import { blogs } from './fakeData';
=======
import BlogsSlider from './BlogsSlider';
import { useState } from 'react';
import { blogs } from './fakeData';
import BlogCard from './card/BlogCard';
import { motion } from 'framer-motion';
import { LuSearch } from 'react-icons/lu';
>>>>>>> origin/main


const AllBlogs = () => {
    const [search, setSearch] = useState<string>("")
    return (
        <div>

            <BlogsSlider />
<<<<<<< HEAD
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between my-4 md:my-8 lg:my-12">
=======
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4 md:mb-8 lg:mb-12">
>>>>>>> origin/main
                <div className="flex items-center gap-2 bg-white rounded-full  p-1 lg:p-2 shadow-sm w-full max-w-md lg:max-w-xl border">
                    <LuSearch className="w-5 h-5 text-gray-400 ml-2" />
                    <input
                        type="text"
                        placeholder="Search work"
                        className="flex-1 outline-none px-2"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <PrimaryButton onClick={() => { }} text='Search' />
                </div>
            </div>

            <div className='grid sm:grid-cols-3 gap-4 xl:gap-8 mb-10 lg:mb-20'>
                <div className='grid md:grid-cols-2 col-span-2 w-full gap-8 '>
                    {
                        blogs?.map((data, idx) => <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.1 * (idx + 1), ease: "easeIn" }}>
                            <BlogCard key={idx} imageUrl={data.imageUrl} title={data.title} />
                        </motion.div>)
                    }
                </div>
<<<<<<< HEAD
=======
                <div>
                    <h1 className='text-2xl font-semibold mb-1'>Categories</h1>
                    <p className='border-b py-2 max-w-sm '> Blogs (5) </p>
                    <p className='border-b py-2 max-w-sm '> Blogs (5) </p>
                    <p className='border-b py-2 max-w-sm '> Blogs (5) </p>
                    <p className='border-b py-2 max-w-sm '> Blogs (5) </p>
                    <p className='border-b py-2 max-w-sm '> Blogs (5) </p>
                </div>
>>>>>>> origin/main
            </div>
        </div>
    );
};

export default AllBlogs;