"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout";
import { useContext } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const MyPlanButton = ({ workout }: { workout: IWorkout }) => {
    const { myPlan, setMyPlan } = useContext(WorkoutContext);

    const alreadyPlan = myPlan.some(
        (plan) => plan.id === workout.id
    );

    const handleMyPlan = () => {
        if (alreadyPlan) {
            toast.error("Already in your plan.");
            return;
        }

        if (myPlan.length >= 5) {
            toast.info("Today's plan can contain a maximum of 5 lifts.");
            return;
        }

        setMyPlan((prev) => [...prev, workout]);

        toast.success("Added to today's plan");
    };

    return (
        <div>
            <button
                onClick={handleMyPlan}
                disabled={myPlan.length >= 5}
                className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#C2F800] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#B7E900] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#C2F800]"
            >
                <FaCalendarPlus />
                Add to today's plan
            </button>

            {myPlan.length >= 5 && (
                <p className="mt-2 text-xs text-[#858B97]">
                    Today's plan is full. Maximum 5 lifts allowed.
                </p>
            )}
        </div>
    );
};

export default MyPlanButton;