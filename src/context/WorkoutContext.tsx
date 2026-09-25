'use client'
import { IWorkout } from '@/types/workout';
import React, { createContext, ReactNode, useState } from 'react';

interface IWorkoutContext {
    myPlan: IWorkout[];
    setMyPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    savedPlan: IWorkout[];
    setSavedPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<IWorkoutContext>({
    myPlan: [],
    setMyPlan: () => {},
    savedPlan:[],
    setSavedPlan: () => {}
})

const WorkoutProvider = ({children}: {children: ReactNode}) => {
    const [myPlan, setMyPlan] = useState<IWorkout[]>([]);
    const [savedPlan, setSavedPlan] = useState<IWorkout[]>([]);

    const sharedData = {
        myPlan, 
        setMyPlan,
        savedPlan,
        setSavedPlan
    }

   return <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
};

export default WorkoutProvider;