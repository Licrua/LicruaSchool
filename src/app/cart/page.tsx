'use client'
import Arrow from '@/components/Arrow';
import { useAppSelector } from '@/store/store';
import { clearCartInFirestore, removeItemFromCart } from '@/utils/cartFunctions';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


export default function CartPage() {
	// const [courses, setCoursses] = useState<Course[]>(initialCourses);
	const cart = useAppSelector(state => state.cart);
	const { user } = useUser();
	const userId = user?.id;

	console.log('usersss', typeof userId);


	// const removeCourse = (id: number) => {
	// 	setCourses(courses.filter(course => course.id !== id));
	// };

	// const clearCart = () => {
	// 	setCourses([]);
	// };


	const handleRemove = async (id: string | number) => {
		await removeItemFromCart(userId, id);
		toast.success('Cart has been deleted')
	}

	const handleClearCart = async () => {
		await clearCartInFirestore('userId'); 
	};

	const totalPrice = cart.reduce((sum, course) => sum + course.price, 0);

	return (
		<div className="max-w-5xl mx-auto p-6">
			<Arrow />
			<h1 className="text-4xl font-bold text-center mb-8">Cart of courses</h1>
			{cart.length === 0 ? (
				<div className="text-center text-gray-500 text-xl">
					🛒 The cart is empty
				</div>
			) : (
				<div className="flex flex-col gap-6">
					{cart.map((item, index) => (
						<div key={index} className="bg-base-100 relative shadow-lg p-5 flex flex-row items-center justify-between">
							<figure>
								<img
									src={item.image}
									alt="Shoes" />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{item.title}</h2>
								<span>Price: {item.price} $
								</span>
								<div className="card-actions justify-end">
									<button onClick={() => handleRemove(item.id)} className="btn absolute top-1 right-3 btn-error">X</button>
								</div>
							</div>
						</div>
					))}
					<div className="card bg-base-200 p-6 shadow-md">
						<div className="flex justify-between items-center text-2xl font-bold mb-6">
							<span>Total:</span>
							<span>{totalPrice.toLocaleString()} $</span>
						</div>
						<div className="flex flex-col justify-between md:flex-row gap-4">
							<button
								className="btn btn-outline btn-error  text-lg"
							// onClick={clearCart}
							>
								Delete the cart
							</button>
							<button className="btn btn-primary  text-lg">
								Make the order
							</button>

						</div>
					</div>
				</div>
			)}
		</div>
	);
}
