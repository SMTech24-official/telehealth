import Banner from '@/components/Banner';
import Testimonials from '@/components/Testiminials';
import HomeBlogsSlider from '@/feature/blogs/HomeBlogsSection';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner />
            <Testimonials />
            <HomeBlogsSlider />
        </div>
    );
};

export default page;