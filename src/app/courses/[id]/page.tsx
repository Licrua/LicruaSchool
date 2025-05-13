import { courses } from '@/data/courses';


interface CourseDetailsProps {
  params: {
    id: string;
  };
}

const CourseDetails = ({ params }: CourseDetailsProps) => {
	const { id } = params;
	const course = courses.find((course) => course.id === Number(id));

  // Извлекаем данные курсов из Redux
//   const course = useAppSelector((state) =>
//     state.courses.find((course) => course.id === id)
	//   );


  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.category}</p>
      <p>Price: ${course.price}</p>
      <p>Author: {course.author}</p>
    </div>
  );
};

export default CourseDetails;
