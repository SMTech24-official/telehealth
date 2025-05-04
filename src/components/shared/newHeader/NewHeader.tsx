import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface BreadcrumbItem {
    label: string
    href: string
}

interface HeroHeaderProps {
    title: string
    breadcrumbs: BreadcrumbItem[]
}


const NewHeader = ({
    title,
    breadcrumbs,
}: HeroHeaderProps) => {
    return (
        < div className="relative h-full w-full" >
            <div className="container mx-auto h-full pb-4 flex flex-col justify-end">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-black">{title}</h1>
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mt-4">
                    <ol className="flex items-center space-x-1 text-gray-800">
                        {breadcrumbs.map((item, index) => (
                            <li key={item.href} className="flex items-center">
                                {index > 0 && <FaChevronRight className="h-4 w-4 mx-2" />}
                                <Link href={item.href} className="hover:text-black transition-colors">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>


            </div>
        </div>
    );
};

export default NewHeader;