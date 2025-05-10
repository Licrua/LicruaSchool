function LoadingProgress() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3 text-gray-600 text-lg">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
      <span className="loading loading-ring loading-md"></span>
      <p className="opacity-80">Data has been loading...</p>
    </div>
  );
}

export default LoadingProgress;
