import Image from "next/image";

type CardProps = {
    image: string;
    name: string;
    location: string;
}

export default function LocationProfilePage({
    image,
    name,
    location,
}: CardProps) {

    return (
        <div className=" bg-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
                <div className="relative w-52 h-52 rounded-full">
                    <Image
                        src={image}
                        alt="Profile picture"
                        width={200}
                        height={200}
                        className="object-cover rounded-full"
                    />
                </div>
                <div>
                    <h1 className="md:text-3xl text-lg sm:text-xl lg:text-5xl font-semibold text-gray-900">{name}</h1>
                    <p className="text-gray-600">{location}</p>
                </div>
            </div>

            <div className="space-y-12">
                {/* About Section */}
                <section className="border-b pb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-medium w-fit pb-2 border-b-2 border-black">About</h2>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{"Tessa was born on March 20, 2006, in Peoria, IL..."}</p>
                </section>
            </div>
        </div>
    );
}