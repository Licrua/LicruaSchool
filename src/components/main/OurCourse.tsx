'use client'
import { Course, courses } from '@/data/courses';
import SecondHeader from '../UI/SecondHeader';
import Card from '../UI/Card';
import { NavCourse } from './NavCourse';
import { useState} from 'react';
import { useUser } from '@clerk/nextjs';
import { addItemToCart } from '@/utils/cartFunctions';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';


export const OurCourse = () => {
	const { user, isLoaded } = useUser();
	const [selectedCategory, setSelectedCategory] = useState('Top Rated');

	console.log('loaded', isLoaded);

	const cart = useSelector((state: RootState) => state.cart);
	console.log('cartttt', cart);
	const timer = new Date();
	console.log('timer', typeof timer);



	const filteredCourses =
		selectedCategory === 'Top Rated'
			? courses
			: courses.filter((card) => card.abbreviation === selectedCategory);



	const onBuy = async (card: Course) => {
		if (user) {
			console.log('yest user');
		await	addItemToCart(user.id, card);
		} else {
			console.log('Пользователь не авторизован');
		}
	};


	return (
		<section className="px-4 sm:px-[136px] flex flex-col justify-center mt-[90px]">
			<SecondHeader position="left" text={'Our Courses'} />
			<NavCourse
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_277px))] w-full justify-center content- gap-y-[50px] gap-x-5">
				{filteredCourses.map((card) => (
					<Card key={card.id} {...card} onBuy={() => onBuy(card)} />
				))}
			</div>
		</section>
	);
};
