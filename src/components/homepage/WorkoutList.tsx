import type { IWorkout } from "@/types/workout";
import Image from "next/image";

import {
    FaClock,
    FaFire,
    FaStar,
} from "react-icons/fa";
import WorkoutCard from "../shared/WorkoutCard";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const getWorkouts = async () => {
    try {
        const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching books data:", error);
        return []
    }
}


const WorkoutList = async () => {
    const workouts = await getWorkouts();

    return (
        <section id="library" className="bg-[#090A0D] py-10 sm:px-6 lg:px-8">
            <div className="mx-auto px-6 max-w-7xl">

                {/* ================= TITLE ================= */}
                <h2 className={`${oswald.className} font-bold mb-4 text-3xl tracking-tight text-white`}>
                    THE LIBRARY
                </h2>
                <p className="max-w-xl mx-auto md:mx-0 mb-10 text-base text-[#9CA3AF] sm:text-[16px]">
                    Twelve lifts covering every major muscle group
                </p>

                {/* ================= CARDS ================= */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {workouts.map((workout: IWorkout) => (
                        <WorkoutCard key={workout.id} workout={workout} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkoutList;