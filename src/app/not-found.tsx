import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0C0D10] px-5 text-white">
      <div className="w-full max-w-lg text-center">

        {/* 404 */}
        <p className="font-[var(--font-oswald)] text-8xl font-bold tracking-tight text-[#C2F800] sm:text-9xl">
          404
        </p>

        {/* Title */}
        <h1 className="mt-4 font-[var(--font-oswald)] text-3xl font-bold uppercase sm:text-4xl">
          Workout Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#858B97]">
          The page or workout you are looking for doesn&apos;t exist.
          It may have been removed or the URL may be incorrect.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-7 inline-flex cursor-pointer items-center rounded-lg bg-[#C2F800] px-6 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#B7E900]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;