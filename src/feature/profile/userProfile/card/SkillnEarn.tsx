import React from 'react';
import { Tag } from './Tag';

const SkillAndEarn = ({ skills, earn }: { skills: string[], earn?: boolean }) => {
    return (
        <div className='space-y-6'>
            <p className='font-semibold text-lg md:text-2xl'>Skills</p>
            <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill, index) => (
                    <Tag key={index} name={skill} />
                ))}
            </div>
            {
                earn && <div className='border-y py-4 w-full'>
                    <div className="grid grid-cols-3 gap-4 max-w-sm">
                        <div className='space-y-2'>
                            <h3 className="md:text-xl text-xl font-semibold">$900K+</h3>
                            <p className="text-sm text-gray-500">Total earnings</p>
                        </div>
                        <div className='space-y-2'>
                            <h3 className="md:text-xl text-xl font-semibold">759</h3>
                            <p className="text-sm text-gray-500">Total jobs</p>
                        </div>
                        <div className='space-y-2'>
                            <h3 className="md:text-xl text-xl font-semibold">750</h3>
                            <p className="text-sm text-gray-500">4.8 out of 5.0</p>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default SkillAndEarn;