import AboutElephant from '@/components/Aboutelephant';
import Banner from '@/components/Banner';
import ServicesCategories from '@/components/Categories';
import GetInTouch from '@/components/GetInTouch';
import Team from '@/components/Team';
import Testimonials from '@/components/Testiminials';
import WhyChooseUs from '@/components/WhyChooseUs';
import WorkProcess from '@/components/WorkProcess';
import HomeBlogsSlider from '@/feature/blogs/HomeBlogsSection';
import bg from "@/assets/others/getInTouch.jpg"
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle';
import PrimaryButton from '@/components/shared/primaryButton/PrimaryButton';


const page = () => {
    return (
<<<<<<< HEAD
        <div className='overflow-hidden'>
=======
        <div>
>>>>>>> origin/main
            <Banner />
            <AboutElephant />
            <ServicesCategories />
            <WhyChooseUs />
            <Testimonials />
            <WorkProcess />
            <Team />
            <HomeBlogsSlider />

            <GetInTouch
                backgroundImage={bg.src}
                height="h-[80vh]"
            >
                <SectionTitle miniTitle="Get In Touch" subtitle="Seeking support for managing stress and anxiety related to work and personal life? Interested in exploring coping strategies and developing a healthier mindset? Please complete the form and our team will get back to you as soon as possible." title="Get In Contact With Us" white />
                {/* Search Bar */}
                <div className="flex items-center gap-2 bg-white rounded-full p-1 lg:p-2 shadow-sm max-w-xl">
                    <input
                        type="text"
                        placeholder="Enter Your email address"
                        className="outline-none px-1 sm:px-2 "
                    />
                    <PrimaryButton text='GET IN TOUCH' />
                </div>
            </GetInTouch>


        </div>
    );
};

export default page;