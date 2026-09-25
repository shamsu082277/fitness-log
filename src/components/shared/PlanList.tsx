"use client";

import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkout } from '@/types/workout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

interface IPlanListProps {
    plan: IWorkout,
    active: "plan" | "saved";
}

const PlanList = ({ plan, active }: IPlanListProps) => {
    const { myPlan, savedPlan, setMyPlan, setSavedPlan } = useContext(WorkoutContext);

    const allPlan: IWorkout[] =
        active === "plan" ? myPlan : savedPlan;

    const handleRemovePlan = () => {
        const remainingPlans = allPlan.filter((todayPlan) => todayPlan.id !== plan.id);
        if (active === "plan") {
            setMyPlan(remainingPlans);
            toast.info("Removed from today's plan");
        } else {
            setSavedPlan(remainingPlans);
            toast.info("Removed from saved");
        }
    }

    const handleMarkAsDone = () => {
        // add to completed workouts
        toast.success("Workout logged - nice work");
        // remove from myPlan
        const remainingMyPlan = allPlan.filter((todayPlan) => todayPlan.id !== plan.id);
        setMyPlan(remainingMyPlan);
    };
    return (
        <div className="flex items-center justify-between rounded-xl border border-[#292C31] bg-[#15171D] px-3 py-3">
            {/* Left side */}
            <div className="flex items-center gap-3">

                {/* Image */}
                <div className="h-14 w-28 overflow-hidden rounded-lg">
                    <Image
                        src={plan.image}
                        alt={plan.name}
                        width={144}
                        height={80}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Workout Info */}
                <div>
                    <h3 className="font-[var(--font-oswald)] text-sm font-bold uppercase text-white">
                        {plan.name}
                    </h3>

                    <p className="mt-0.5 text-[10px] text-[#858B97]">
                        {plan.equipment}
                    </p>

                    <div className="mt-1.5 flex items-center gap-3 text-[10px] text-[#C4C8D0]">

                        <span className="flex items-center gap-1">
                            <span className="text-[#C2F800]">◷</span>
                            {plan.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            <span className="text-[#C2F800]">♨</span>
                            {plan.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                            <span className="text-[#C2F800]">★</span>
                            {plan.rating}
                        </span>

                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">

                <Link href={`/workouts/${plan.id}`} className="cursor-pointer rounded-full border border-white px-4 py-2 text-[10px] text-white transition hover:border-[#C2F800] hover:text-white">
                    View Details
                </Link>

                {
                    active === "plan" && <button onClick={handleMarkAsDone} className="flex cursor-pointer items-center gap-1.5 rounded-full bg-[#C2F800] px-4 py-2 text-[10px] font-bold text-black transition hover:bg-[#B7E900]">
                        <span>✓</span>
                        Mark as Done
                    </button>
                }

                <button onClick={handleRemovePlan} className="cursor-pointer px-2 text-lg text-[#6B7280] transition hover:text-white">
                    ×
                </button>

            </div>
        </div>
    );
};

export default PlanList;