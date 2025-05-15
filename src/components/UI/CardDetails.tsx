import Link from 'next/link';

function CardDetails({id }: {id: number}) {
  return (
    <div className="flex justify-center items-center h-full">
      <Link
        href={`/courses/${id}`}
        className="px-6 py-2 bg-blue-500 border-2 border-amber-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
      >
        Details
      </Link>
    </div>
  );
}

export default CardDetails;
