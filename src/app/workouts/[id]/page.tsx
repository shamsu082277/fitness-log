import { IWorkout } from "@/types/workout";
import Image from "next/image";
import { notFound } from "next/navigation";
import MyPlanButton from "@/components/workoutDetails/MyPlanBtn";
import SavedButton from "@/components/workoutDetails/SavedBtn";

interface IWorkoutDetailsProps {
    params: Promise<{
        id: string;
    }>;
}

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


const WorkoutDetails = async ({ params }: IWorkoutDetailsProps) => {

    const { id } = await params;
    const workoutData = await getWorkouts();

    const workout = workoutData.find(
        (excercise: IWorkout) => excercise.id === Number(id)
    );


    // If book doesn't exist
    if (!workout) {
        notFound();
    }


    return (
        <main className="min-h-screen bg-[#0C0D10] px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto px-6 grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-11">

                {/* ================= IMAGE ================= */}
                <div className="relative h-[520px] overflow-hidden rounded-xl sm:h-[580px] lg:h-[563px]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* ================= CONTENT ================= */}
                <div className="flex flex-col">

                    {/* Title */}
                    <h1 className="font-[var(--font-oswald)] text-3xl font-bold uppercase leading-none tracking-tight sm:text-4xl">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 max-w-2xl text-sm leading-5 text-[#9CA3AF]">
                        {workout.description}
                    </p>

                    {/* Muscle Groups */}
                    {/* Muscle Groups */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle:string) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>
                    {/* ================= INFO CARD ================= */}
                    <div className="mt-6 overflow-hidden rounded-xl border border-[#292C31] bg-[#15171D]">

                        {/* Equipment */}
                        <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                                Equipment
                            </span>

                            <span className="text-xs text-[#E5E7EB]">
                                {workout.equipment}
                            </span>
                        </div>

                        {/* Difficulty */}
                        <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                                Difficulty
                            </span>

                            <span className="text-xs text-[#E5E7EB]">
                                {workout.difficulty}
                            </span>
                        </div>

                        {/* Sets */}
                        <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                                Sets
                            </span>

                            <span className="text-xs text-[#E5E7EB]">
                                {workout.sets}
                            </span>
                        </div>

                        {/* Reps */}
                        <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                                Reps
                            </span>

                            <span className="text-xs text-[#E5E7EB]">
                                {workout.reps}
                            </span>
                        </div>

                        {/* Duration */}
                        <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                                Duration
                            </span>

                            <span className="text-xs text-[#E5E7EB]">
                                {workout.duration} min
                            </span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                                Calories
                            </span>

                            <span className="text-xs text-[#E5E7EB]">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-between px-5 py-3.5">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                                Rating
                            </span>

                            <span className="text-xs text-[#E5E7EB]">
                                {workout.rating}
                            </span>
                        </div>
                    </div>

                    {/* ================= INSTRUCTIONS ================= */}
                    <div className="mt-6">
                        <h2 className="font-[var(--font-oswald)] text-sm font-bold uppercase tracking-wide text-white">
                            Instructions
                        </h2>

                        <ol className="mt-3 space-y-3">
                            {
                                workout.instructions.map((instruction: string, index: number) =>
                                    <div key={index}>
                                        <li className="flex gap-3 text-xs leading-5 text-[#B0B5BF]">
                                            <span>{index + 1}.</span>
                                            <span>
                                                {instruction}
                                            </span>
                                        </li>
                                    </div>
                                )
                            }
                        </ol>
                    </div>

                    {/* ================= BUTTONS ================= */}
                    <div className="mt-7 flex flex-wrap gap-3">
                        <MyPlanButton workout={workout} />
                        <SavedButton workout={workout} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WorkoutDetails;