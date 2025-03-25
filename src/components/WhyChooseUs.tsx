import Image from 'next/image';
import SectionTitle from './shared/sectionTitle/SectionTitle';


const Listicon = () => {
    return <svg className='min-w-6 min-h-6' xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 20 26" fill="none">
        <path d="M8.0197 18.3851C11.7693 18.3851 14.8089 15.3455 14.8089 11.5959C14.8089 7.84628 11.7693 4.80664 8.0197 4.80664C4.27011 4.80664 1.23047 7.84628 1.23047 11.5959C1.23047 15.3455 4.27011 18.3851 8.0197 18.3851Z" fill="#5FA380" />
        <path d="M8.09597 16.8443L8.00986 16.6976C6.69447 14.4564 3.19901 9.70035 3.1637 9.65258L3.11328 9.58408L4.30417 8.40716L8.07386 11.0394C10.4474 7.95947 12.6617 5.844 14.1061 4.60866C15.6861 3.25731 16.7146 2.6352 16.725 2.62923L16.7484 2.61523H18.7684L18.5755 2.78708C13.6128 7.20731 8.23382 16.6021 8.18024 16.6965L8.09597 16.8443Z" fill="white" />
    </svg>
}

export default function WhyChooseUs() {
    return (
        <div className="container section-gap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between">
                {/* Left side with image */}
                <div className="">
                    {/* Stats and features */}
                    <div className="">
                        <SectionTitle miniTitle='Why Choose Elephant In The Room LLC' subtitle='At Elephant In The Room LLC, led by Zina Ortiz and a dedicated team of clinicians, we stand as a beacon of responsible and ethical psychedelic harm reduction services and education. Committed to compliance with all local, state, and federal regulations regarding cannabis and psychedelics, we advocate for intentional, sacred, and non-habitual usage.' title='Taking Care of Your Mental Health' />


                        {/* Expert Therapists */}
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="space-y-4">
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Our Mission</h3>
                                <p className="text-gray-600 flex " >
                                    <Listicon />
                                    <span>Promoting Responsible Exploration</span>
                                </p>
                                <p className="text-gray-600 flex " >
                                    <Listicon />
                                    <span>Providing Harm Reduction</span>
                                </p>
                                <p className="text-gray-600 flex " >
                                    <Listicon />
                                    <span>Advancing Education</span>
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Our Vision</h3>
                                <p className="text-gray-600 flex " >
                                    <Listicon />
                                    <span>Cultivating Conscious Communities</span>
                                </p>
                                <p className="text-gray-600 flex " >
                                    <Listicon />
                                    <span>Fostering Ethical Practices</span>
                                </p>
                                <p className="text-gray-600 flex " >
                                    <Listicon />
                                    <span>Leading by Example</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side content */}

                <div className=" flex items-end justify-end relative mb-20">
                    {/* Div1: Taking up most of the left side */}
                    <div className="h-full relative rounded-2xl overflow-hidden ">
                        <Image
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                            alt="Therapy session"
                            width={600}
                            height={700}
                            className="lg:w-[680px] w-[500px] h-[500px] lg:h-[580px]  object-cover"
                        />
                    </div>

                    {/* Div3: Top-right image section */}
                    <div className=" absolute -bottom-28 border-4 border-white left-0 rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                            alt="Professional therapist"
                            width={600}
                            height={700}
                            className="w-72 h-72 object-cover rounded-2xl"
                        />
                    </div>
                </div>


            </div>
        </div>
    );
}
