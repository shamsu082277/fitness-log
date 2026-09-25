'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkout } from '@/types/workout';
import React, { useContext } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SavedButton = ({ workout }: { workout: IWorkout }) => {

    const { savedPlan, setSavedPlan } = useContext(WorkoutContext)

    const alreadyPlan = savedPlan.some(
        (plan) => plan.id === workout.id
    );

    const handleSavedPlan = () => {

        if (alreadyPlan) {
            toast.error(`Already in your saved list.`);
            return;
        }

        setSavedPlan((prev) => [...prev, workout]);

        toast.success(`Saved for later.`);
    }


    return (
        <button onClick={handleSavedPlan} className="flex items-center gap-2 rounded-lg border border-[#343841] bg-transparent px-5 py-2.5 text-xs font-medium text-[#D1D5DB] transition hover:border-[#C2F800] hover:text-[#C2F800] cursor-pointer">
            <FaBookmark />
            Save for later
        </button>
    );
};

export default SavedButton;