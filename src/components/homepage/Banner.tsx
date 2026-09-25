import React from "react";
import Image from "next/image";

import bannerImg from "@/assets/banner.png";
import { Oswald } from "next/font/google";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["600", "700"],
});

const Banner = () => {
    return (
        <section className="min-h-screen bg-[#0C0D10] py-12 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 overflow-hidden rounded-3xl bg-[#15171D] shadow-sm sm:px-10 lg:flex-row lg:px-14 lg:py-14">

                {/* Content */}
                <div className="w-full text-center  lg:w-2/3 lg:text-left">
                    <span className="mb-4 inline-block px-4 py-2 text-sm font-semibold text-[#C2F800]">
                        WORKOUT LIBRARY
                    </span>

                    <h1 className={`${oswald.className} text-4xl font-os font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl`}>
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-7 text-[#9CA3AF] sm:text-[16px]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        {/* <button className="btn rounded-lg border-none bg-[#C2F800] px-7 py-6 text-base font-bold text-black shadow-md transition-all duration-300 hover:bg-[#24be0f] hover:shadow-lg hover:-translate-y-0.5">
             BROWSE WORKOUTS
            </button> */}
                        <Link
                            href="#library"
                            className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-[#C2F800] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B7E900] hover:shadow-lg"
                        >
                            BROWSE WORKOUTS
                            <FaArrowDown className="text-[10px]" />
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="relative w-full lg:w-1/2">
                    <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#24be0f]/20 blur-2xl"></div>
                    <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#24be0f]/10 blur-3xl"></div>

                    <Image
                        src={bannerImg}
                        alt="Books Banner"
                        priority
                        className="relative mx-auto w-full max-w-84 rounded-2xl object-cover transition duration-500 hover:scale-[1.02]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;