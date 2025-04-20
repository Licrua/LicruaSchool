import { courses } from "@/data/courses";
import SecondHeader from "../UI/SecondHeader";
import Card from "../UI/Card";
import Arrow from "../Arrow";

export const OurCourse = () => {
  return (
    <section className="px-4 sm:px-[136px] flex flex-col justify-center mt-[90px]">
      <SecondHeader position="left" text={'Our Courses'} />
      <nav aria-label="Course categories">
        <ul className="flex justify-center flex-wrap items-center mt-5 mb-[59px] gap-6">
          <li>
            <button className="text-purple-700 font-bold underline underline-offset-[6px]">
              Top Rated
            </button>
          </li>
          <li>
            <button className="text-gray-600">Development</button>
          </li>
          <li>
            <button className="text-gray-600">Design</button>
          </li>
          <li>
            <button className="text-gray-600">Music</button>
          </li>

          <li>
            <button className="text-gray-600">Marketing</button>
          </li>
          <li>
            <button className="text-gray-600">Business</button>
          </li>
          <li>
            <button className="text-gray-600">Photography</button>
          </li>
        </ul>
      </nav>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_277px))] w-full  justify-center content- gap-y-[50px] gap-x-5">
        {courses.map((course) => (
          <Card key={course.id} {...course} />
        ))}
      </div>
      <button className="flex group mt-[40px] bg-transparent btnAnimation  justify-center items-center gap-2">
        <p className="text-secondary font-normal group-hover:text-pink-500">
          Show more
        </p>
        <Arrow />
      </button>
    </section>
  );
};
