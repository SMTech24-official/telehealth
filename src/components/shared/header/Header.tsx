import Image from "next/image"
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa6";

interface BreadcrumbItem {
    label: string
    href: string
}

interface HeroHeaderProps {
    title: string
    breadcrumbs: BreadcrumbItem[]
    imageUrl?: string
    className?: string
}

export default function HeroHeader({
    title,
    breadcrumbs,
<<<<<<< HEAD
    imageUrl = "https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?uid=R110243807&ga=GA1.1.1088808881.1737022066&semt=ais_hybrid",
=======
    imageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DUK5MyADrKQ9XdZGpwFiY6IBpTMVfB.png",
>>>>>>> origin/main
    className = "",
}: HeroHeaderProps) {
    return (
        <header className={`relative h-[200px] md:h-[300px] lg:h-[520px] my-2 lg:my-12 w-full overflow-hidden container lg:rounded-lg ${className}`}>
            {/* Background Image */}
            <Image src={imageUrl || "/placeholder.svg"} alt="" fill priority className="object-cover" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />

            {/* Content */}
            <div className="relative h-full w-full">
                <div className="container mx-auto h-full px-4 py-8 flex flex-col justify-end">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="mt-4">
                        <ol className="flex items-center space-x-1 text-gray-200">
                            {breadcrumbs.map((item, index) => (
                                <li key={item.href} className="flex items-center">
                                    {index > 0 && <FaChevronRight className="h-4 w-4 mx-2" />}
                                    <Link href={item.href} className="hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </nav>


                </div>
            </div>
        </header>
    )
}

