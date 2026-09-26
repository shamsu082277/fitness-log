import { IWorkout } from '@/types/workout';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaFire, FaStar } from 'react-icons/fa';

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["600", "700"],
});


interface IWorkoutCardProps {
    workout: IWorkout
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
    return (
        <Link href={`/workouts/${workout.id}`}>
            <div
                key={workout.id}
                className="overflow-hidden rounded-2xl border border-[#292C31] bg-[#15171C] transition duration-300 hover:-translate-y-1 hover:border-[#B7FF00]/40"
            >

                <div className="relative aspect-[1.9/1] w-full overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 hover:scale-105"
                    />
                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-6">

                    {/* ================= MUSCLE GROUPS ================= */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#B7FF00] px-3 py-1 text-[11px] font-black uppercase tracking-wide text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* ================= TITLE ================= */}
                    <h3 className={`text-lg ${oswald.className} font-black uppercase tracking-wide text-white`}>
                        {workout.name}
                    </h3>

                    {/* ================= EQUIPMENT ================= */}
                    <p className="mt-1 text-sm text-[#8B919C]">
                        {workout.equipment}
                    </p>

                    {/*  DIVIDER */}
                    <div className="my-4 h-px bg-[#292C31]" />

                    {/*  STATS  */}
                    <div className="flex items-center gap-5 text-xs text-[#9298A3]">

                        {/* Duration */}
                        <div className="flex items-center gap-2">
                            <FaClock className="text-[#9AA0AA]" />

                            <span>
                                {workout.duration} min
                            </span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-2">
                            <FaFire className="text-[#9AA0AA]" />

                            <span>
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <FaStar className="text-[#9AA0AA]" />

                            <span>
                                {workout.rating}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;