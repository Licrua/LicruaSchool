'use client'
import { Course, courses } from '@/data/courses';
import SecondHeader from '../UI/SecondHeader';
import Card from '../UI/Card';
import { NavCourse } from './NavCourse';
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { addItemToCart, getCartItems } from '@/utils/cartFunctions';
// import { addCart } from '../../slices/CartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { addCart, PayLoadType } from '@/slices/cartSlice';


export const OurCourse = () => {
	const { user, isLoaded } = useUser();
	const [selectedCategory, setSelectedCategory] = useState('Top Rated');

	console.log('loaded', isLoaded);

	// const [cartItems, setCartItems] = useState<Course[]>([]);
	const cart = useSelector((state: RootState) => state.cart);
	console.log('cartttt', cart);
	const timer = new Date();
	console.log('timer', typeof timer);

	let response;
	const pert = async () => {
		response = await fetch('https://jsonplaceholder.typicode.com/posts');
		return response.json()
	};
	pert();

	console.log('response', response);


	const filteredCourses =
		selectedCategory === 'Top Rated'
			? courses
			: courses.filter((card) => card.abbreviation === selectedCategory);



	const onBuy = async (card: Course) => {
		if (user) {
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

			{/* Вывод содержимого корзины */}
			{/* <div className="mt-10">
				<h2 className="text-2xl font-bold mb-4">Товары в корзине:</h2>
				{cartItems.length === 0 ? (
					<p>Корзина пуста</p>
				) : (
					<ul className="space-y-4">
						{cartItems.map((item, index) => (
							<li key={index} className="border p-4 rounded-lg shadow">
								<h3 className="text-lg font-semibold">{item.title}</h3>
								<p>Цена: ${item.price}</p>
							</li>
						))}
					</ul>
				)}
			</div> */}
		</section>
	);
};
