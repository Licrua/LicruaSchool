'use client'
import { Course, courses } from '@/data/courses';
import SecondHeader from '../UI/SecondHeader';
import Card from '../UI/Card';
import { NavCourse } from './NavCourse';
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { addItemToCart, getCartItems } from '@/utils/cartFunctions';


export const OurCourse = () => {
	const { user, isLoaded } = useUser();
	const [cartItems, setCartItems] = useState<Course[]>([]);
	console.log('cartItems', cartItems);

	const [selectedCategory, setSelectedCategory] = useState('Top Rated');


	const filteredCourses =
		selectedCategory === 'Top Rated'
			? courses
			: courses.filter((card) => card.abbreviation === selectedCategory);

	const onBuy = (card: Course) => {
		if (user) {
			addItemToCart(user.id, card); // Добавляем товар в корзину
		} else {
			console.log('Пользователь не авторизован');
		}
	};

	const loadCart = async () => {
		if (user) {
			console.log('dasdasd');
			const items = await getCartItems(user.id); // Загружаем товары из корзины
			console.log('items', items);
			setCartItems(items as Course[]);
		}
	};

	useEffect(() => {
		if (isLoaded && user) {
			loadCart();
		}
	}, [isLoaded, user]);


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
