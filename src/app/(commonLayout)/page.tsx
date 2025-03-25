import AboutElephant from '@/components/Aboutelephant';
import Banner from '@/components/Banner';
import ServicesCategories from '@/components/Categories';
import Team from '@/components/Team';
import Testimonials from '@/components/Testiminials';
import WhyChooseUs from '@/components/WhyChooseUs';
import WorkProcess from '@/components/WorkProcess';
import HomeBlogsSlider from '@/feature/blogs/HomeBlogsSection';

const page = () => {
    return (
        <div>
            <Banner />
            <AboutElephant />
            <ServicesCategories />
            <WhyChooseUs />
            <Testimonials />
            <WorkProcess />
            <Team />
            <HomeBlogsSlider />
        </div>
    );
};

export default page;