// import consultationImage from "@/assets/consultation/consultation.png"
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton"
import Image from "next/image"
import { LuShare2 } from "react-icons/lu"




export default function ProfileCard({ availability, handleBook }: { availability: boolean, handleBook: () => void }) {



    return (
        <div className="border-b">
            <div className="bg-white rounded-xl shadow-sm py-6">
                <div className="flex sm:flex-row flex-col  lg:items-center justify-between gap-6">
                    <div className="relative flex  lg:items-start gap-6">
                        <Image
                            width={200}
                            height={170}
                            // src={"https://randomuser.me/api/portraits/men/1.jpg" || consultationImage}
                            src={"https://randomuser.me/api/portraits/men/1.jpg"}
                            alt={`image of `}
                            className="object-cover h-28 w-28 rounded-full border"
                        />
                        <div className="space-y-4">
                            <p className="pr-1 border-r flex items-center gap-1">
                                <span className={`${availability ? "bg-green-600 border" : 'bg-gray-400'} W-2 h-2 rounded-full p-[3px]`} />
                                <span className={availability ? "text-green-600" : 'text-gray-400'}>{availability ? "Available Now" : 'Offline'}</span>
                            </p>
                            <h1 className="text-2xl font-semibold text-gray-900">Leslie Alexander</h1>
                            <div className="flex flex-col sm:flex-row lg:items-center gap-3">
                                <div className="flex items-center gap-2 text-gray-600 sm:border-r-2 pr-2">
                                    <span className="text-sm">Bangladesh, Dhaka</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <span className="text-sm">8:16 am local time</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row lg:items-center gap-3">
                                <div className="flex items-center gap-2 text-gray-600 sm:border-r-2 pr-2">
                                    <span className="text-sm">4.8 out of 5.0</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <span className="text-sm">$15/Hour</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Left Column */}
                    <div className="space-y-4">
                        <div className="w-fit ml-auto">
                            <PrimaryButton onClick={handleBook} >
                                Book Now
                            </PrimaryButton>
                        </div>
                        <button className="px-5 text-primary py-2 bg-primary/20 border-primary border rounded-full flex items-center justify-end text-sm ml-auto gap-2">
                            <LuShare2 size={15} />
                            share
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

