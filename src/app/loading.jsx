export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center gap-4 text-white">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

        <p className="text-sm opacity-80">Loading, please wait...</p>
      </div>
    </div>
  );
}
