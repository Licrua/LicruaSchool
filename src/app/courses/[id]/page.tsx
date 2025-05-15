import Arrow from '@/components/Arrow';
import { courses } from '@/data/courses';
import Link from 'next/link';

interface coursesDetailsProps {
  params: {
    id: string;
  };
}

const coursesDetails = ({ params }: coursesDetailsProps) => {
  const { id } = params;
  const course = courses.find((c) => String(c.id) === id);

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-red-500">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="card border-1 border-black/60 flex-row p-4 bg-base-100 shadow-xl">
        <Arrow />
        <figure>
          <img
            src={course.image}
            alt={course.title}
            className="h-[200px] lg:w-[500px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold">{course.title}</h1>
          <p className="text-sm text-gray-500">{course.category}</p>
          <p className="text-lg font-semibold text-green-600">
            Price: ${course.price}
          </p>
          <p className="text-sm text-gray-700">Author: {course.author}</p>
          <div className="divider"></div>
          <p className="text-gray-800">{course.info?.description}</p>
          <div className="mt-4">
            <p className="text-sm">
              <span className="font-bold">Duration:</span>{' '}
              {course.info?.duration}
            </p>
            <p className="text-sm">
              <span className="font-bold">Level:</span> {course.info?.level}
            </p>
            <p className="text-sm">
              <span className="font-bold">Language:</span>{' '}
              {course.info?.language}
            </p>
            <p className="text-sm">
              <span className="font-bold">Audience:</span>{' '}
              {course.info?.audience}
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Highlights:</h3>
            <p className="text-sm text-gray-700">{course.info?.highlights}</p>
          </div>
          <div className="card-actions justify-end mt-6">
            <Link href="/courses">
              <button className="btn btn-primary">Enroll Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default coursesDetails;
