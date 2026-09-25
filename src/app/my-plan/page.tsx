"use client";

import PlanList from "@/components/shared/PlanList";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout";
import { useContext, useState } from "react";

type SortOption = "duration" | "calories" | "rating";

const MyPlan = () => {
  const { myPlan, savedPlan } = useContext(WorkoutContext);

  // Active tab
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  // Sorting option
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const [searchTerm, setSearchTerm] = useState("");

  // Handle sorting
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption);
  };

  const searchPlans = (plans: IWorkout[]) => {
  if (!searchTerm.trim()) {
    return plans;
  }

  const query = searchTerm.toLowerCase().trim();

  return plans.filter((plan) => {
    const workoutName = plan.name.toLowerCase();

    const tags = plan.muscleGroups.some((tag) =>
      tag.toLowerCase().includes(query)
    );

    return workoutName.includes(query) || tags;
  });
};

  // Sort workouts
  const sortPlans = (plans: IWorkout[]) => {
    const sortedPlans = [...plans];

    if (sortBy === "duration") {
      // Shortest → Longest
      sortedPlans.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      // Highest → Lowest
      sortedPlans.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      // Highest → Lowest
      sortedPlans.sort((a, b) => b.rating - a.rating);
    }

    return sortedPlans;
  };

  // Get current list
  const planList: IWorkout[] =
    activeTab === "plan" ? myPlan : savedPlan;

  // Sort current list
  const searchedPlans = searchPlans(planList);
  const allPlan = sortPlans(searchedPlans);

  // Total minutes
  const totalMinutes = allPlan.reduce(
    (total, plan) => total + plan.duration,
    0
  );

  // Total calories
  const totalCalories = allPlan.reduce(
    (total, plan) => total + plan.caloriesBurned,
    0
  );

  return (
    <section className="min-h-screen bg-[#0C0D10] px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto px-6 max-w-7xl">

        {/* ================= HEADER ================= */}
        <div>
          <h1 className="font-[var(--font-oswald)] text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-1 text-sm text-[#858B97]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#292C31] bg-[#15171D] sm:grid-cols-3">

          {/* Exercises */}
          <div className="px-6 py-7 sm:border-r sm:border-[#292C31]">
            <p className="text-xs text-[#858B97]">
              Exercises
            </p>

            <p className="mt-1 font-[var(--font-oswald)] text-4xl font-semibold text-[#C2F800]">
              {allPlan.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-t border-[#292C31] px-6 py-7 sm:border-t-0 sm:border-r">
            <p className="text-xs text-[#858B97]">
              Minutes
            </p>

            <p className="mt-1 font-[var(--font-oswald)] text-4xl font-semibold text-white">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="border-t border-[#292C31] px-6 py-7 sm:border-t-0">
            <p className="text-xs text-[#858B97]">
              Calories
            </p>

            <p className="mt-1 font-[var(--font-oswald)] text-4xl font-semibold text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* ================= TABS + SORT ================= */}
        <div className="mt-8 mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Tabs */}
          <div className="flex w-fit rounded-xl border border-[#292C31] bg-[#15171D] p-1">

            {/* Today's Plan */}
            <button
              onClick={() => setActiveTab("plan")}
              className={`cursor-pointer rounded-lg px-5 py-2 text-xs transition ${
                activeTab === "plan"
                  ? "border border-[#30343B] bg-[#20232A] font-medium text-[#C2F800]"
                  : "text-[#858B97] hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            {/* Saved */}
            <button
              onClick={() => setActiveTab("saved")}
              className={`cursor-pointer rounded-lg px-6 py-2 text-xs transition ${
                activeTab === "saved"
                  ? "border border-[#30343B] bg-[#20232A] font-medium text-[#C2F800]"
                  : "text-[#858B97] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          

          {/* Sort */}
          <div className="flex items-center gap-3">
              <div className="relative">
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search workouts..."
    className="w-full rounded-lg border border-[#292C31] bg-[#15171D] px-4 py-2 pl-10 text-xs text-white outline-none placeholder:text-[#858B97] focus:border-[#C2F800] sm:w-64"
  />

  <svg
    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#858B97]"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
</div>
            <span className="text-xs text-[#858B97]">
              Sort By
            </span>

            <div className="relative">

              <select
                value={sortBy}
                onChange={handleSort}
                className="cursor-pointer appearance-none rounded-lg border border-[#292C31] bg-[#15171D] py-2 pl-4 pr-9 text-xs text-white outline-none transition hover:border-[#3A3E46] focus:border-[#C2F800]"
              >
                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>
              </select>

              {/* Chevron */}
              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#858B97]"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </div>
          </div>
        </div>

        {/* ================= WORKOUT LIST ================= */}

        {allPlan.length > 0 ? (
          <div className="space-y-3">
            {allPlan.map((plan) => (
              <PlanList
                key={plan.id}
                plan={plan}
                active={activeTab}
              />
            ))}
          </div>
        ) : (

          /* ================= EMPTY STATE ================= */

          <div className="mt-6 flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-[#292C31] bg-[#0F1014] px-5">

            <div className="text-center">

              <h2 className="font-[var(--font-oswald)] text-xl font-bold uppercase text-white">
                Nothing Here Yet
              </h2>

              <p className="mt-1 text-xs text-[#858B97]">
                Browse the library and add a lift to get today moving.
              </p>

              <button
                className="mt-6 cursor-pointer rounded-full bg-[#C2F800] px-6 py-2.5 text-xs font-bold text-black shadow-[0_8px_25px_rgba(194,248,0,0.12)] transition hover:bg-[#B7E900]"
              >
                Go to workouts
              </button>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyPlan;