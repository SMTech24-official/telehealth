import Link from 'next/link';
import { LuMail, LuMapPinCheckInside, LuPhone } from 'react-icons/lu';
import Logo from '../navbar/Logo';

type Service = {
    name: string;
    link: string;
};

const services: Service[] = [
    { name: "Virtual Therapy", link: "/services/virtual-therapy" },
    { name: "Virtual", link: "/services/virtual" },
    { name: "EMDR Therapy", link: "/services/emdr-therapy" },
    { name: "EMDR Consultation", link: "/services/emdr-consultation" },
    { name: "Rapid Resolution Therapy", link: "/services/rapid-resolution-therapy" },
    { name: "Sensorimotor Psychotherapy", link: "/services/sensorimotor-psychotherapy" },
    { name: "Somatic Psychotherapy", link: "/services/somatic-psychotherapy" },
    { name: "Brainspotting Therapy", link: "/services/brainspotting-therapy" },
    { name: "Mindfulness Meditation", link: "/services/mindfulness-meditation" },
    { name: "Psychedelic Assisted Therapy", link: "/services/psychedelic-assisted-therapy" },
    { name: "Psychedelic Integration", link: "/services/psychedelic-integration" },
];


export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                    {/* VIP Section */}
                    <div className="flex flex-col gap-4 lg:col-span-2">
                        <Logo />
                        <p className='max-w-sm'>Elephant In The Room LLC, Zina Ortiz and affiliated team of clinicians fully comply with all local and Colorado State cannabis laws, and all federal regulations.</p>
                        <div>
                            <div className="flex space-x-4">
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <g clipPath="url(#clip0_886_2003)">
                                            <path d="M14.9999 0.75C-2.66771 1.2675 -4.46951 26.0589 12.7619 29.25H14.9999H17.2379C34.4732 26.0559 32.6636 1.2657 14.9999 0.75Z" fill="#1877F2" />
                                            <path d="M17.2301 19.2327H20.5676L21.2027 15.0885H17.2301V12.399C17.2301 11.2653 17.7851 10.1601 19.5644 10.1601H21.3707V6.63184C17.5025 5.93494 12.8552 6.14704 12.7541 11.9298V15.0885H9.11719V19.2327H12.7541V29.2515H14.9921H17.2301V19.2327Z" fill="#F1F1F1" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_886_2003">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <g clipPath="url(#clip0_886_2008)">
                                            <path d="M15.9375 0C8.15625 0 1.875 6.28125 1.875 14.0625C1.875 17.25 2.90625 20.25 4.875 22.6875L2.90625 28.6875C2.8125 29.0625 2.90625 29.4375 3.1875 29.7188C3.28125 29.9062 3.5625 30 3.75 30C3.84375 30 4.03125 30 4.125 29.9062L10.5938 27C12.2812 27.75 14.0625 28.125 15.9375 28.125C23.7188 28.125 30 21.8438 30 14.0625C30 6.28125 23.7188 0 15.9375 0Z" fill="#25D366" />
                                            <path d="M24.0938 19.2188C23.7188 20.3438 22.3125 21.2812 21.0938 21.4688C20.8125 21.5625 20.5312 21.5625 20.1562 21.5625C19.4062 21.5625 18.2812 21.375 16.3125 20.5312C14.0625 19.5938 11.8125 17.625 10.0312 15.0938V15C9.46875 14.1562 8.4375 12.5625 8.4375 10.875C8.4375 8.8125 9.46875 7.78125 9.84375 7.3125C10.3125 6.84375 10.9688 6.5625 11.7188 6.5625H12.1875C12.8438 6.5625 13.3125 6.75 13.7812 7.6875L14.1563 8.4375C14.4375 9.1875 14.8125 10.0313 14.9062 10.125C15.1875 10.6875 15.1875 11.1562 14.9062 11.625C14.8125 11.9062 14.625 12.0938 14.4375 12.2813C14.3437 12.4688 14.25 12.5625 14.1563 12.5625C14.0625 12.6562 14.0625 12.6563 13.9687 12.75C14.25 13.2188 14.8125 14.0625 15.5625 14.7188C16.6875 15.75 17.5313 16.0312 18 16.2187C18.1875 16.0312 18.375 15.6562 18.6562 15.375L18.75 15.1875C19.2188 14.5313 19.9688 14.3438 20.7188 14.625C21.0938 14.8125 23.1563 15.75 23.1563 15.75L23.3438 15.8438C23.625 16.0312 24 16.125 24.1875 16.5C24.5625 17.3438 24.2813 18.5625 24.0938 19.2188Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_886_2008">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <g clipPath="url(#clip0_886_2011)">
                                            <path d="M15 0C23.283 0 30 6.717 30 15C30 23.283 23.283 30 15 30C6.717 30 0 23.283 0 15C0 6.717 6.717 0 15 0Z" fill="#1DA1F2" />
                                            <path d="M11.514 22.6198C18.588 22.6198 22.461 16.7578 22.461 11.6728C22.461 11.5078 22.461 11.3398 22.449 11.1748C23.202 10.6288 23.853 9.95678 24.369 9.18278C23.667 9.49478 22.923 9.69878 22.161 9.78878C22.965 9.30878 23.565 8.55278 23.853 7.66178C23.097 8.10878 22.272 8.42678 21.411 8.59478C19.953 7.04678 17.517 6.97178 15.969 8.42678C14.97 9.36578 14.547 10.7668 14.856 12.1018C11.763 11.9458 8.88 10.4848 6.927 8.08178C5.907 9.83978 6.426 12.0868 8.118 13.2178C7.506 13.1998 6.906 13.0348 6.372 12.7378V12.7858C6.372 14.6158 7.662 16.1938 9.459 16.5568C8.892 16.7098 8.298 16.7338 7.722 16.6228C8.226 18.1888 9.669 19.2628 11.316 19.2958C9.954 20.3668 8.271 20.9488 6.54 20.9458C6.234 20.9458 5.928 20.9278 5.625 20.8888C7.377 22.0198 9.426 22.6198 11.514 22.6168" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_886_2011">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <g clipPath="url(#clip0_886_2018)">
                                            <path d="M15 30C6.717 30 0 23.283 0 15C0 6.717 6.717 0 15 0C23.283 0 30 6.717 30 15C30 23.283 23.283 30 15 30Z" fill="#0078B5" />
                                            <path d="M5.52113 11.6202H9.50813V24.4512H5.52113V11.6202ZM7.51613 5.24219C8.79113 5.24219 9.82613 6.27719 9.82613 7.55519C9.82613 8.83319 8.79113 9.86819 7.51613 9.86819C6.23813 9.86819 5.20313 8.83319 5.20313 7.55519C5.20013 6.28019 6.23513 5.24219 7.51613 5.24219Z" fill="white" />
                                            <path d="M12.0078 11.6218H15.8328V13.3738H15.8868C16.4178 12.3658 17.7168 11.3008 19.6608 11.3008C23.6988 11.3008 24.4458 13.9588 24.4458 17.4118V24.4528H20.4588V18.2158C20.4588 16.7248 20.4318 14.8138 18.3858 14.8138C16.3098 14.8138 15.9918 16.4338 15.9918 18.1078V24.4558H12.0078V11.6218Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_886_2018">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Contact Section */}
                    {/* Company Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/aboutUs" className="text-gray-300 hover:text-white transition-colors">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                                    Free Consultation
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                                    Rates & Insurance
                                </Link>
                            </li>
                            <li>
                                <Link href="/contactUs" className="text-gray-300 hover:text-white transition-colors">
                                    Contact us
                                </Link>
                            </li>

                        </ul>
                    </div>
                    {/* services Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Services</h3>
                        <ul className="space-y-2">
                            {
                                services.map((data: Service, idx: number) => <li key={idx}>
                                    <Link href={data.link} className="text-gray-300 hover:text-white transition-colors">
                                        {data.name}
                                    </Link>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className="space-y-4 col-span-2">
                        <h3 className="text-lg font-semibold">Information</h3>

                        <Link href={"/"} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                            <LuPhone size={24} /> (719) 223-3261
                        </Link>
                        <Link href={"/"} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                            <LuMail size={24} /> info@elephantintheroomllc.com
                        </Link>
                        <Link href={"/"} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                            <LuMapPinCheckInside size={25} /> 7596 West Jewell Ave. 1-202, Lakewood CO 80232
                        </Link>
                        <h3 className="text-lg font-semibold">For Providers</h3>
                        <Link href={"/"} className="text-gray-300 hover:text-white transition-colors">
                            Become an affiliate Provider
                        </Link>




                    </div>




                </div>


                {/* Bottom Section */}
                <div className="border-t border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white text-sm">
                        Copyright © 2025 Elephant In The Room LLC All Right Reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/terms" className="text-white text-sm transition-colors">
                            Tearms and condition
                        </Link>
                        <span className="text-white">|</span>
                        <Link href="/privacy" className="text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/privacy" className="text-white text-sm transition-colors">
                            Accessibility Statement
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
