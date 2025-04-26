import { categories } from '@/data/navCategories';

export const NavCourse = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: any;
  setSelectedCategory: any}) => {
  return (
    <nav aria-label="Course categories">
      <ul className="flex justify-center flex-wrap items-center mt-5 mb-[59px] gap-6">
        {categories.map(({ id, name }) => (
          <li key={id}>
            <button
              onClick={() => setSelectedCategory(name)}
              className={
                name === selectedCategory
                  ? 'text-purple-700 font-bold underline underline-offset-[6px]'
                  : 'text-gray-600'
              }
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
