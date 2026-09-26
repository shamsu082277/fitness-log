'use client'
import { useContext } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";
import { usePathname } from "next/navigation";
import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["600", "700"],
});

const Navbar = () => {
    const { myPlan, savedPlan } = useContext(WorkoutContext);
    const pathname = usePathname();
    return (
        <header className="sticky top-0 z-50  bg-[#0C0D10] backdrop-blur-md">
            <div className="navbar mx-auto w-full max-w-7xl px-6 py-3">

                {/* Left sie menu*/}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <button tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 w-56 rounded-2xl bg-[#0C0D10] p-3 shadow-lg"
                        >
                            <li>
                            <Link
                                href="/"
                                className={`rounded-full px-4 py-2 transition ${pathname === "/"
                                        ? "bg-[#1a2310] text-[#CCFF00]"
                                        : "text-white hover:bg-[#1a2310] hover:text-[#CCFF00]"
                                    }`}
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-plan"
                                className={`rounded-full px-4 py-2 transition ${pathname === "/my-plan"
                                        ? "bg-[#1a2310] text-[#CCFF00]"
                                        : "text-white hover:bg-[#1a2310] hover:text-[#CCFF00]"
                                    }`}
                            >
                                My Plan
                            </Link>
                        </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 cursor-pointer">
                        <Image src={logo} alt="FitLog Logo" className="h-10 w-10" />
                        <span className={`${oswald.className} text-2xl font-bold text-[#FFFFFF]`}>
                            FITLOG
                        </span>
                    </Link>
                </div>

                {/* Center Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 px-1">
                        <li>
                            <Link
                                href="/"
                                className={`rounded-full px-4 py-2 transition ${pathname === "/"
                                        ? "bg-[#1a2310] text-[#CCFF00]"
                                        : "text-white hover:bg-[#1a2310] hover:text-[#CCFF00]"
                                    }`}
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-plan"
                                className={`rounded-full px-4 py-2 transition ${pathname === "/my-plan"
                                        ? "bg-[#1a2310] text-[#CCFF00]"
                                        : "text-white hover:bg-[#1a2310] hover:text-[#CCFF00]"
                                    }`}
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Buttons */}
                <div className="navbar-end gap-3">

                    <Link href={"/my-plan"} className="flex items-center gap-3">
                        <span className="text-base font-medium text-[#9CA3AF]">
                            Plan
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
                            {myPlan.length}
                        </span>
                    </Link>

                    <Link href={"/my-plan"} className="flex items-center gap-3">
                        <span className="text-base font-medium text-[#9CA3AF]">
                            Saved
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D1D5DB] text-sm font-bold text-white">
                            {savedPlan.length}
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar