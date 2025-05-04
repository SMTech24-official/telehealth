import Image from "next/image";
import { Tag } from "./Tag";
import { ConsultationCardProps } from "./types";
import { LuBookType } from "react-icons/lu";




export const ConsultationModal = ({
    availability, description, hourlyRate, imageUrl, location, name, onMessage, onVisitProfile, rating, skills, title, bio
}: ConsultationCardProps) => {
    return (
        <div className={`w-full bg-white border-gray-200  p-6 space-y-4 `}>
            {/* Header with avatar and bookmark */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <Image
                        width={100}
                        height={100}
                        src={imageUrl}
                        alt={name}
                        className="w-20 h-20 rounded-full"
                    />
                    {/* Title */}
                    <div>
                        <h2 className="font-medium text-gray-900">{name}</h2>
                        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
                        <div className="text-sm text-gray-500 mt-1 flex flex-wrap items-center gap-2 ">
                            <p className="pr-2 border-r">{location}</p>
                            <p className="pr-1 border-r flex items-center gap-1">
                                <span className={`${availability ? "bg-green-600 border" : 'bg-gray-400'} W-2 h-2 rounded-full p-[3px]`} />
                                <span className={availability ? "text-green-600" : 'text-gray-400'}>{availability ? "Available Now" : 'Offline'}</span>
                            </p>

                        </div>
                    </div>

                </div>
                <button className="text-gray-400 hover:text-gray-500">
                    <LuBookType className="w-6 h-6 hover:text-secondary" />
                </button>
            </div>

            {/* charges  and rating */}
            <div className="flex items-center justify-start gap-6">
                <div>
                    <h3 className="md:text-xl text-lg font-semibold">
                        ${hourlyRate} /hour
                    </h3>
                    <p className="text-sm text-gray-500">Consultation Fee</p>
                </div>
                <div>
                    <h3 className="md:text-xl text-lg font-semibold">{rating} Out of 5</h3>
                    <p className="text-sm text-gray-500">Reviews</p>
                </div>
            </div>


            {/* Tags */}
            <div>
                <div className="min-h-[100px] border-y py-4 ">
                    <div className="flex flex-wrap gap-2 ">
                        {skills.map((skill, index) => (
                            <Tag key={index} name={skill} />
                        ))}
                    </div>
                </div>

                <div className="border-b py-4">
                    <p className="text-gray-600 max-w-lg">
                        <span className="my-1 font-bold">
                            Bio
                        </span>
                        <br />
                        {bio}
                    </p>
                </div>
                {/* Description */}
                <div className="border-b py-4">
                    <p className="text-gray-600 max-w-lg">
                        <span className="my-1 font-bold">
                            Description
                        </span>
                        <br />
                        {description}
                    </p>
                </div>

            </div>


            <div className="grid grid-cols-2 gap-6">
                {/* CTA Button */}
                <button onClick={onMessage} className="w-full sm:w-auto px-6 py-3 border text-black border-black font-medium rounded-xl transition-colors">
                    Messages
                </button>
                {/* CTA Button */}
                <button onClick={onVisitProfile} className="w-full sm:w-auto px-6 py-3 bg-primary/80 hover:bg-primary text-white font-medium rounded-xl transition-colors">
                    Visit Profile
                </button>
            </div>
        </div>
    );
};
