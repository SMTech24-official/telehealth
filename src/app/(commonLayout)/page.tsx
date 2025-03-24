import Banner from '@/components/Banner';
import ServicesCategories from '@/components/Categories';
import Testimonials from '@/components/Testiminials';
import HomeBlogsSlider from '@/feature/blogs/HomeBlogsSection';

const page = () => {
    return (
        <div>
            <Banner />
            <ServicesCategories />
            <Testimonials />
            <HomeBlogsSlider />
        </div>
    );
};

export default page;