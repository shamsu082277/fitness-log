import Banner from "@/components/homepage/Banner";
import WorkoutList from "@/components/homepage/WorkoutList";
import WorkoutLoading from "@/components/shared/WorkoutLoading";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
        <Banner/>
         <Suspense fallback={<WorkoutLoading />}>
          <WorkoutList />
      </Suspense>
        
    </div>
  );
}
