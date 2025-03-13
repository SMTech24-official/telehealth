"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./Logo";

export const navItems = [
    {
        name: "Our Team",
        link: "/",
    },
    {
        name: "Our Services",
        subLink: [
            { name: "EMDR Therapy", link: "/project" },
            { name: "Somatic Psychotherapy", link: "/consultation" },
            { name: "Brain spotting Therapy", link: "/consultation" },
            { name: "Psychedelic Assisted Therapy", link: "/consultation" },
            { name: "Sensorimotor Psychotherapy", link: "/consultation" },
            { name: "Rapid Resolution Therapy", link: "/consultation" },
            { name: "Virtual Therapy", link: "/consultation" },
            { name: "Psychedelic Integration", link: "/consultation" },
            { name: "Guided Meditation", link: "/consultation" },
            { name: "EMDR Consultation", link: "/consultation" },
        ],
    },
    {
        name: "Locations",
        subLink: [
            { name: "Lakewood", link: "/project" },
            { name: "Colorado Springs", link: "/project" },
            { name: "Denver", link: "/project" },
            { name: "Aurora", link: "/project" },
            { name: "Broomfield", link: "/project" },
            { name: "Boulder", link: "/project" },
            { name: "Glenwood Springs", link: "/project" },
            { name: "Cherry Creek", link: "/project" },

        ],
    },
    {
        name: "Rates & Insurance ",
        link: "/messaging",
    },

    {
        name: "Telehealth",
        link: "/blog",
    },
    {
        name: "Affiliate",
        link: "/faq",
    },
    {
        name: "Blog",
        link: "/faq",
    },
    {
        name: "Contact",
        link: "/faq",
    },
];



const Navbar = () => {
    const pathname = usePathname();

    const getLinkClass = (path: string) =>
        pathname === path
            ? "max-lg:border-b max-lg:py-3 max-lg:px-2 relative lg:after:absolute lg:after:bg-white lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300 text-white text-nowrap  text-nowrap font-semibold"
            : "max-lg:border-b max-lg:py-3 max-lg:px-2 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300 hover:text-white text-white text-nowrap  text-nowrap ";

    const getLinkClassTwo = (path: string) =>
        pathname === path
            ? "lg:after:transition-all lg:after:duration-300 text-black text-nowrap px-4 py-2 font-semibold "
            : "hover:bg-modelSelect lg:after:transition-all lg:after:duration-300 hover:text-black text-black text-nowrap px-4 py-2  ";

    return (
        <div className="bg-primary">
            <div className="container py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Logo />

                    {/* Navigation */}
                    <nav className="lg:flex flex-1 items-center justify-center lg:gap-12 xl:gap-16 2xl:gap-20 hidden">
                        <ul className="flex items-center lg:gap-12 xl:gap-6 md:gap-3 relative">
                            {navItems.map((item, idx) => (
                                <li key={idx} className="relative group">
                                    {item.subLink ? (
                                        <>
                                            <span className="cursor-pointer text-white text-lg flex items-center ">{item.name} <IoIosArrowDown className="w-4 h-4 mt-1 group-hover:rotate-180 transition-all duration-300 text-nowrap" /></span>

                                            <div className="absolute transform origin-top-left scale-0 group-hover:scale-100  transition-transform  top-4 -left-2/3 flex flex-col gap-2 p-4 min-w-44 rounded-lg bg-transparent z-50 ">
                                                <div className=" navSubLinkTwo  bg-slate-200 p-[1px] ">
                                                    <div className=" navSubLinkTwo  bg-slate-100 p-[1px]">
                                                        <div className=" navSubLinkTwo  bg-slate-50 p-[1px]">
                                                            <ul className=" bg-white !text-black navSubLinkTwo ">
                                                                <div className="pt-12 pb-2">
                                                                    {item.subLink.map((sub, subIdx) => (
                                                                        <li key={subIdx} className="mt-1 text-black w-full">
                                                                            <Link href={sub.link} className={` flex items-start justify-start w-full ${getLinkClassTwo(sub.link)}`}>
                                                                                {sub.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </div>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link href={item.link} className={getLinkClass(item.link)}>
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* User Dropdown */}
                    <div className="flex items-center justify-end gap-4">

                        <Link href={"/signIn"}>
                            <button className="flex items-center gap-2 text-white pb-1 border-dashed border-b-2">
                                <span>MAKE AN APPOINTMENT</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.511 6.55489C14.8561 8.20986 11.8407 8.21122 10.1844 6.55489L9.50557 5.87607L8.14793 7.23372L8.82675 7.91254C10.031 9.11677 11.6887 9.71821 13.347 9.71888L4.97104 18.0949L6.32869 19.4525L14.7047 11.0765C14.7054 12.7349 15.3068 14.3926 16.511 15.5968L17.1898 16.2756L18.5475 14.918L17.8687 14.2392C16.213 12.5835 16.2137 9.56751 17.8687 7.91254L18.5475 7.23372L17.1898 5.87607L16.511 6.55489Z" fill="white" />
                                </svg>
                            </button>
                        </Link>

                    </div >
                </div >
            </div >
        </div>

    );
};

export default Navbar;
