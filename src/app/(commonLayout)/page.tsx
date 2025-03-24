import Banner from '@/components/Banner';
import ServicesCategories from '@/components/Categories';
import Team from '@/components/Team';
import Testimonials from '@/components/Testiminials';
import HomeBlogsSlider from '@/feature/blogs/HomeBlogsSection';

const page = () => {
    return (
        <div>
            <Banner />
            <ServicesCategories />
            <Testimonials />
            <Team />
            <HomeBlogsSlider />
        </div>
    );
};

export default page;