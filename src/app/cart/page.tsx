'use client';

import Arrow from '@/components/Arrow';
import { useAppSelector } from '@/store/store';
import { clearCartInFirestore, removeItemFromCart } from '@/utils/cartFunctions';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';

export default function CartPage() {
	const cart = useAppSelector(state => state.cart);
	const jopa = true;
	const { user, isLoaded } = useUser();
	const userId = user?.id;

	const handleRemove = async (id: string | number) => {
		await removeItemFromCart(userId, id);
		toast.success('Cart item removed');
	};

	const handleClearCart = async () => {
		await clearCartInFirestore(userId);
	};

	const totalPrice = cart.reduce((sum, course) => sum + course.price, 0);

	if (!isLoaded ) {
		return (
			<div className="max-w-5xl mx-auto p-6">
				<Arrow />
				<h1 className="text-4xl font-bold text-center mb-8">Cart of courses</h1>
				<div className="flex flex-col gap-6">
					{Array.from({ length: cart.length || 3 }).map((_, idx) => (
						<div key={idx} className="bg-base-100 shadow-lg relative p-5 flex items-center gap-4">
							<Skeleton width={300} height={250} />
							<div className="flex-1">
								<Skeleton height={40} width="60%" />
								<Skeleton height={40} width="40%" />
								<div className="absolute top-2 right-2">
									<Skeleton className='rounded-4xl' height={35} width={50} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}

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
								<Image
									width={300}
									height={250}
									src={item.image}
									alt={item.title} />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{item.title}</h2>
								<span>Price: {item.price} $</span>
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
								className="btn btn-outline btn-error text-lg"
								onClick={() => handleClearCart()}
							>
								Delete the cart
							</button>
							<button className="btn btn-primary text-lg">
								Make the order
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
