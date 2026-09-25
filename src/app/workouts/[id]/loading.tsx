const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0C0D10] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-11">

        {/* Image Skeleton */}
        <div className="h-[520px] animate-pulse rounded-xl bg-[#20232A] sm:h-[580px] lg:h-[563px]" />

        {/* Content Skeleton */}
        <div className="flex flex-col">

          {/* Title */}
          <div className="h-9 w-3/4 animate-pulse rounded-md bg-[#20232A]" />

          {/* Description */}
          <div className="mt-4 space-y-2">
            <div className="h-3 w-full animate-pulse rounded bg-[#20232A]" />
            <div className="h-3 w-5/6 animate-pulse rounded bg-[#20232A]" />
          </div>

          {/* Tags */}
          <div className="mt-4 flex gap-2">
            <div className="h-6 w-16 animate-pulse rounded-full bg-[#20232A]" />
            <div className="h-6 w-20 animate-pulse rounded-full bg-[#20232A]" />
          </div>

          {/* Info Card */}
          <div className="mt-6 overflow-hidden rounded-xl border border-[#292C31] bg-[#15171D]">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5 last:border-b-0"
              >
                <div className="h-3 w-20 animate-pulse rounded bg-[#292C31]" />

                <div className="h-3 w-24 animate-pulse rounded bg-[#292C31]" />
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <div className="h-4 w-28 animate-pulse rounded bg-[#20232A]" />

            <div className="mt-4 space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="h-4 w-4 animate-pulse rounded bg-[#20232A]" />

                  <div className="h-3 flex-1 animate-pulse rounded bg-[#20232A]" />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">
            <div className="h-10 w-40 animate-pulse rounded-lg bg-[#20232A]" />
            <div className="h-10 w-32 animate-pulse rounded-lg bg-[#20232A]" />
          </div>

        </div>
      </div>
    </main>
  );
};

export default Loading;