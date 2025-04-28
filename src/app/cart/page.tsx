'use client'
import Arrow from '@/components/Arrow';
import { useAppSelector } from '@/store/store';
import React, { useState } from 'react';

interface Course {
	id: number;
	title: string;
	price: number;
}

const initialCourses: Course[] = [
	{ id: 1, title: 'Next.js для начинающих', price: 4900 },
	{ id: 2, title: 'React Продвинутый', price: 6900 },
	{ id: 3, title: 'TypeScript Мастер', price: 5900 },
];

export default function CartPage() {
	const [courses, setCourses] = useState<Course[]>(initialCourses);
	const cart = useAppSelector(state => state.cart)

	// const removeCourse = (id: number) => {
	// 	setCourses(courses.filter(course => course.id !== id));
	// };

	// const clearCart = () => {
	// 	setCourses([]);
	// };

	const totalPrice = courses.reduce((sum, course) => sum + course.price, 0);

	return (
		<div className="max-w-5xl mx-auto p-6">
			<Arrow />
			<h1 className="text-4xl font-bold text-center mb-8">Корзина курсов</h1>
			{courses.length === 0 ? (
				<div className="text-center text-gray-500 text-xl">
					🛒 Ваша корзина пуста
				</div>
			) : (
				<div className="flex flex-col gap-6">
					{courses.map(course => (
						<div key={course.id} className="card bg-base-100 shadow-lg p-5 flex flex-row items-center justify-between">
							<div>
								<h2 className="text-2xl font-semibold">{course.title}</h2>
								<p className="text-gray-500">{course.price.toLocaleString()} ₽</p>
							</div>
							<button
								className="btn btn-outline btn-error btn-sm"
								onClick={() => removeCourse(course.id)}
							>
								Удалить
							</button>
						</div>
					))}
					<div className="card bg-base-200 p-6 shadow-md">
						<div className="flex justify-between items-center text-2xl font-bold mb-6">
							<span>Итого:</span>
							<span>{totalPrice.toLocaleString()} ₽</span>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<button className="btn btn-primary flex-1 text-lg">
								Оформить заказ
							</button>
							<button
								className="btn btn-outline btn-error flex-1 text-lg"
								onClick={clearCart}
							>
								Очистить корзину
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
