'use client';
import { Course, courses } from '@/data/courses';
import SecondHeader from '../UI/SecondHeader';
import Card from '../UI/Card';
import { NavCourse } from './NavCourse';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { addItemToCart } from '@/utils/firebase/cartFunctions';
import SearchInput from '../UI/SearchInput';

export const OurCourse = () => {
  const { user } = useUser();
  const [selectedCategory, setSelectedCategory] = useState('Top Rated');
  const [searchText, setSearchText] = useState(''); // Состояние для текста поиска
  console.log('searchText', searchText);

  const filteredCourses = courses.filter((card) => {
    const matchesCategory =
      selectedCategory === 'Top Rated' ||
      card.abbreviation === selectedCategory;
    const matchesSearch =
      card.category.toLowerCase().includes(searchText.toLowerCase()) ||
      card.title.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const onBuy = async (card: Course) => {
    if (user) {
      await addItemToCart(user.id, card);
    } else {
      console.log('Пользователь не авторизован');
    }
  };

  return (
    <section id='courses' className="px-4 sm:px-[136px] flex flex-col justify-center mt-[90px]">
      <SecondHeader position="left" text={'Our Courses'} />
      <NavCourse
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SearchInput
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_277px))] w-full justify-center content- gap-y-[50px] gap-x-5">
        {filteredCourses.map((card) => (
          <Card key={card.id} {...card} onBuy={() => onBuy(card)} />
        ))}
      </div>
    </section>
  );
};
