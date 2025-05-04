import { LuBuilding, LuExternalLink, LuMapPin, LuPhone } from "react-icons/lu";

interface ContactCardProps {
    phone: string;
    primaryButton: {
        text: string;
        onClick: () => void;
    };
    secondaryButton: {
        text: string;
        onClick: () => void;
    };
    website: {
        url: string;
        label?: string;
    };
    location: string;
    telehealthAvailable: boolean;
    mapUrl: string;
}

export default function ContactCard({
    phone,
    primaryButton,
    secondaryButton,
    website,
    location,
    telehealthAvailable,
    mapUrl
}: ContactCardProps) {
    return (
        <div className="">
            {/* Contact Information Card */}
            <div className="bg-white p-5 rounded-lg shadow-sm mb-4 border border-gray-200">
                <div className="space-y-4">
                    <h3 className="text-gray-700 font-medium">Let&apos;s connect</h3>

                    <div className="flex items-center">
                        <LuPhone className="h-5 w-5 text-secondary/70 mr-2" />
                        <span className="text-gray-700 font-medium">
                            <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={primaryButton.onClick}
                            className="bg-secondary/70 hover:bg-secondary text-white rounded-md font-medium py-2 px-4 transition-colors"
                        >
                            {primaryButton.text}
                        </button>
                        <button
                            onClick={secondaryButton.onClick}
                            className="bg-white border border-secondary/70 text-secondary/70 hover:bg-green-50 rounded-md font-medium py-2 px-4 transition-colors"
                        >
                            {secondaryButton.text}
                        </button>
                    </div>
                </div>
            </div>

            {/* Location and Map Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="p-5 border-b border-gray-200">
                    <a
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                    >
                        <span className="text-gray-700 font-medium mr-1">
                            {website.label || "MY WEBSITE"}
                        </span>
                        <LuExternalLink className="h-4 w-4 text-secondary/70" />
                    </a>
                </div>

                <div className="p-5 flex items-center space-x-6">
                    <div className="flex items-center">
                        <LuBuilding className="h-5 w-5 text-secondary/70 mr-2" />
                        <span className="text-gray-700">{location}</span>
                    </div>

                    <div className="flex items-center">
                        {
                            telehealthAvailable && <div className="pr-2 border-r flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <g clip-path="url(#clip0_191_2836)">
                                        <path d="M19.7924 5.7195C19.6637 5.64319 19.5044 5.64022 19.373 5.71189L14.7842 8.21751V6.7141C14.7828 5.54455 13.8351 4.59678 12.6655 4.59546H2.11864C0.949086 4.59678 0.00132415 5.54455 0 6.7141V15.0794C0.00132415 16.249 0.949086 17.1968 2.11864 17.1981H12.6655C13.8351 17.1968 14.7828 16.249 14.7842 15.0794V13.6033L19.3732 16.109C19.5044 16.1806 19.6638 16.1778 19.7924 16.1015C19.9212 16.025 20 15.8865 20 15.737V6.08381C20 5.93418 19.921 5.7958 19.7924 5.7195ZM13.9364 15.0796C13.9357 15.7814 13.367 16.35 12.6652 16.3508H2.11864C1.41684 16.35 0.848285 15.7814 0.847458 15.0796V6.7141C0.848285 6.01247 1.41684 5.44374 2.11864 5.44292H12.6655C13.3672 5.44374 13.9359 6.01247 13.9367 6.7141L13.9364 15.0796ZM19.1525 15.023L14.7842 12.6379V9.18299L19.1525 6.79802V15.023Z" className="fill-secondary" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_191_2836">
                                            <rect width="20" height="20" fill="white" transform="translate(0 0.908936)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                {
                                    telehealthAvailable && <span> Telehealth Only</span>
                                }
                            </div>
                        }
                    </div>
                </div>

                <div className="relative h-64 w-full">
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                    />
                    <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                        <button className="bg-white h-8 w-8 rounded-sm shadow-md border border-gray-200 flex items-center justify-center">
                            <LuMapPin className="h-4 w-4" />
                        </button>
                        <button className="bg-white h-8 w-8 rounded-sm shadow-md border border-gray-200 flex items-center justify-center">
                            +
                        </button>
                        <button className="bg-white h-8 w-8 rounded-sm shadow-md border border-gray-200 flex items-center justify-center">
                            -
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}