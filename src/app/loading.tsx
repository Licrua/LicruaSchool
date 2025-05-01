
export default function Loading() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] gap-3 text-gray-600 text-lg">
			<div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
			<p className="opacity-80">Загружаем данные, пожалуйста подождите...</p>
		</div>
	);
}
