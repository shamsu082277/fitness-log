const WorkoutLoading = () => {
  return (
    <div className="grid w-full min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="overflow-hidden rounded-2xl border border-[#292C31] bg-[#15171D]"
        >
          {/* Image */}
          <div className="relative h-52 overflow-hidden bg-[#20232A]">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-4 p-5">
            {/* Title */}
            <div className="relative h-6 w-3/4 overflow-hidden rounded-md bg-[#20232A]">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              <div className="relative h-6 w-16 overflow-hidden rounded-full bg-[#20232A]">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
              </div>

              <div className="relative h-6 w-20 overflow-hidden rounded-full bg-[#20232A]">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="relative h-3 w-full overflow-hidden rounded bg-[#20232A]">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
              </div>

              <div className="relative h-3 w-5/6 overflow-hidden rounded bg-[#20232A]">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </div>

            {/* Info */}
            <div className="flex gap-4">
              <div className="relative h-3 w-14 overflow-hidden rounded bg-[#20232A]">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
              </div>

              <div className="relative h-3 w-14 overflow-hidden rounded bg-[#20232A]">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
              </div>

              <div className="relative h-3 w-14 overflow-hidden rounded bg-[#20232A]">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </div>

            {/* Button */}
            <div className="relative h-10 w-32 overflow-hidden rounded-lg bg-[#20232A]">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutLoading;