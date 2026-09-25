const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0C0D10]">
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="h-15 w-15 animate-spin rounded-full border-4 border-[#292C31] border-t-[#C2F800]" />

        {/* Text */}
        <p className="font-[var(--font-oswald)] text-sm font-medium uppercase tracking-wider text-[#858B97]">
        </p>

      </div>
    </main>
  );
};

export default Loading;