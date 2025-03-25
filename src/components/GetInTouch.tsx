"use client"
import React from "react";
import first from "@/assets/getInTouch/first.png"
import second from "@/assets/getInTouch/second.png"
import third from "@/assets/getInTouch/third.png"
import fourth from "@/assets/getInTouch/fourth.png"
import Image from "next/image";

interface HeaderProps {
    backgroundImage: string;
    height: string;
    children: React.ReactNode
}

const GetInTouch = ({
    backgroundImage,
    height,
    children
}: HeaderProps) => {
    return (
        <div className=" container section-gap relative mb-20">
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${backgroundImage}")`,
                }}
                className={`w-full ${height} relative bg-cover bg-center bg-no-repeat flex flex-col items-start justify-center text-white px-4 rounded-xl`}
            >
                {children}
            </div>
            <div className="flex items-center justify-center container">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 bg-primary xl:py-10 lg:py-8 py-5 px-5 sm:px-10 lg:px-16 xl:px-20 mx-auto md:absolute sm:w-[calc(100%-10px)] md:w-[calc(100%-62px)] lg:w-[calc(100%-160px)] xl:w-[calc(100%-200px)] mt-7 sm:mt-0">
                    <Image
                        src={first}
                        alt=""
                        width={400}
                        height={400}
                        className="w-[70px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[110px] lg:h-[120px] xl:w-[150px] xl:h-[150px]"
                    />
                    <Image
                        src={second}
                        alt=""
                        width={400}
                        height={400}
                        className="w-[160px] h-[100px] sm:w-[200px] sm:h-[120px] lg:w-[220px] lg:h-[130px] xl:w-[250px] xl:h-[150px]"
                    />
                    <Image
                        src={third}
                        alt=""
                        width={400}
                        height={400}
                        className="w-[140px] h-[80px] sm:w-[180px] sm:h-[100px] lg:w-[220px] lg:h-[110px] xl:w-[350px] xl:h-[150px]"
                    />
                    <Image
                        src={fourth}
                        alt=""
                        width={400}
                        height={400}
                        className="w-[70px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[110px] lg:h-[120px] xl:w-[150px] xl:h-[150px]"
                    />
                </div>
            </div>


        </div>
    );
};

export default GetInTouch;
