import consultationImage from "@/assets/consultation/consultation.png";
import Image from "next/image";
import { Tag } from "./Tag";
import Link from "next/link";



const ProfileConsultation = ({ title, fee, nextConsultation, services }: { title: string, fee: number, nextConsultation: string, services: string[] }) => {
    return (
        <div>
            <p className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold '>Case Reviews & Expert Opinions</p>
            <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cumque nostrum labore laboriosam aliquam quaerat quidem inventore officia voluptatibus obcaecati alias deserunt modi quisquam neque, debitis perferendis! Ipsum, dolorem quia necessitatibus voluptatem nisi dolore et adipisci? Ab similique tempora assumenda repudiandae sunt dolores praesentium, eaque officiis consequatur error, quis quisquam perspiciatis natus voluptatem, cum odio in explicabo sapiente rem unde? Quisquam nihil laboriosam officiis unde numquam esse. Voluptatum ex quibusdam cupiditate quisquam porro asperiores molestiae necessitatibus. Ut ipsum dolores nisi, distinctio quaerat obcaecati vero eveniet error possimus, aspernatur esse ducimus veritatis est aut aliquid corrupti doloribus harum enim id culpa. <span className='text-primary'>See More</span></p>
            <div className='border-t lg:my-8 my-6 2xl:my-10'>
                <ConsultationBook
                    title={title}
                    fee={fee}
                    nextConsultation={nextConsultation}
                    services={services}
                />
            </div>
        </div>
    );
};

export default ProfileConsultation;






function ConsultationBook({ title, fee, nextConsultation, services }: { title: string, fee: number, nextConsultation: string, services: string[] }) {
    return (
        <div className="border-b">
            <div className="bg-white rounded-xl shadow-sm py-6">
                <div className="relative flex flex-row lg:items-center gap-4 p-3 rounded-lg shadow-lg w-full">
                    <Image
                        width={150}
                        height={100}
                        src={consultationImage}
                        alt={`image of ${title}`}
                        className="object-contain h-28 w-20 2xl:w-28"
                    />

                    <div className="flex flex-col xl:space-y-4 space-y-3   w-full">

                        <div className="flex flex-col sm:flex-row items-start w-full justify-between">
                            <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
                            <Link href={"/book-consultation/12"} className="px-2 text-nowrap text-primary py-2 bg-primary/20 border-primary border rounded-full  text-xs  gap-2">
                                Book a consultation
                            </Link>
                        </div>


                        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                            <div className="flex items-center gap-2 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 512 117"><path fill="#0b5cff" d="M107.472 114.706H16.348c-5.968 0-11.791-3.203-14.557-8.589C-1.41 99.858-.247 92.434 4.702 87.63L68.17 24.164H22.607C10.088 24.164.044 13.974.044 1.6h83.992c5.968 0 11.79 3.203 14.556 8.589c3.203 6.259 2.038 13.683-2.911 18.486L32.214 92.143h52.55c12.518 0 22.708 10.19 22.708 22.563M468.183 0c-13.1 0-24.746 5.677-32.898 14.702C427.134 5.677 415.488 0 402.388 0c-24.164 0-43.961 20.67-43.961 44.834v69.872c12.518 0 22.562-10.19 22.562-22.563V44.689c0-11.646 9.025-21.544 20.67-21.98c12.228-.437 22.272 9.315 22.272 21.397v48.037c0 12.519 10.19 22.563 22.563 22.563V44.543c0-11.645 9.025-21.544 20.67-21.98c12.228-.437 22.272 9.316 22.272 21.398v48.036c0 12.52 10.19 22.563 22.563 22.563V44.69C512.144 20.67 492.347 0 468.183 0M221.595 58.226c0 32.17-26.056 58.226-58.226 58.226s-58.226-26.056-58.226-58.226S131.199 0 163.369 0s58.226 26.056 58.226 58.226m-22.563 0c0-19.651-16.012-35.663-35.663-35.663s-35.664 16.012-35.664 35.663c0 19.652 16.013 35.664 35.664 35.664s35.663-16.012 35.663-35.664m148.04 0c0 32.17-26.056 58.226-58.226 58.226S230.62 90.396 230.62 58.226S256.676 0 288.846 0s58.227 26.056 58.227 58.226m-22.562 0c0-19.651-16.012-35.663-35.664-35.663c-19.65 0-35.663 16.012-35.663 35.663c0 19.652 16.012 35.664 35.663 35.664c19.652 0 35.664-16.012 35.664-35.664" /></svg>
                                <span className="text-sm">${fee} per Hour Zoom meeting</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17 17" fill="none">
                                    <g clipPath="url(#clip0_281_12689)">
                                        <path d="M8.7832 0.594376C7.01264 0.594376 5.33055 1.16847 3.94852 2.22778V2.00063C3.94852 1.74175 3.73864 1.53188 3.47977 1.53188C3.22089 1.53188 3.01102 1.74175 3.01102 2.00063C3.01102 2.00384 3.01105 3.26397 3.01105 3.26078C3.01145 3.67563 3.51598 3.88719 3.8113 3.59169C5.13933 2.26341 6.90502 1.53188 8.7832 1.53188C12.6602 1.53188 15.8145 4.68609 15.8145 8.56313C15.8145 12.4402 12.6602 15.5944 8.7832 15.5944C4.90617 15.5944 1.75195 12.4402 1.75195 8.56313C1.75195 7.48422 1.9897 6.44931 2.45861 5.48725C2.57205 5.25453 2.47533 4.97391 2.24264 4.8605C2.00992 4.74694 1.7293 4.84375 1.61589 5.07647C1.08411 6.16763 0.814453 7.34069 0.814453 8.56313C0.814453 12.9673 4.37848 16.5319 8.7832 16.5319C13.1873 16.5319 16.752 12.9678 16.752 8.56313C16.752 4.159 13.1879 0.594376 8.7832 0.594376Z" fill="#333333" />
                                        <path d="M8.7832 14.1881C11.8848 14.1881 14.4082 11.6648 14.4082 8.56313C14.4082 5.4615 11.8848 2.93813 8.7832 2.93813C5.68158 2.93813 3.1582 5.4615 3.1582 8.56313C3.1582 11.6648 5.68158 14.1881 8.7832 14.1881ZM6.14664 10.0721L8.31445 8.33784V5.75063C8.31445 5.49175 8.52433 5.28188 8.7832 5.28188C9.04208 5.28188 9.25195 5.49175 9.25195 5.75063V8.56313C9.25195 8.70553 9.18723 8.84019 9.07602 8.92916L6.73227 10.8042C6.53073 10.9655 6.23561 10.9337 6.07342 10.7309C5.9117 10.5288 5.94448 10.2338 6.14664 10.0721Z" fill="#333333" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_281_12689">
                                            <rect width="16" height="16" fill="white" transform="translate(0.783203 0.563126)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="text-sm">Next consultation time: {nextConsultation}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {services.map((service, index) => (
                                <Tag key={index} name={service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

