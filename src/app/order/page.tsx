// 'use client';

// import { useState } from 'react';

// export default function OrderPage() {
// 	const [step, setStep] = useState(1);

// 	const handleSubmit = (e: React.FormEvent) => {
// 		e.preventDefault();
// 		alert('Order placed!');
// 	};

// 	return (
// 		<div className="max-w-4xl mx-auto p-6 space-y-8">
// 			{/* Steps */}
// 			<div className="flex justify-between items-center">
// 				{['Cart', 'Shipping', 'Payment', 'Confirm'].map((label, i) => (
// 					<div
// 						key={i}
// 						className={`flex-1 text-center p-2 border-b-2 ${i < step ? 'border-green-500 text-green-600' : 'border-gray-300 text-gray-400'
// 							}`}
// 					>
// 						{label}
// 					</div>
// 				))}
// 			</div>

// 			{/* Form */}
// 			<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-lg">
// 				<div className="space-y-4">
// 					<h2 className="text-xl font-semibold mb-2">Shipping Info</h2>
// 					<input type="text" placeholder="Full Name" className="input input-bordered w-full" required />
// 					<input type="email" placeholder="Email" className="input input-bordered w-full" required />
// 					<input type="text" placeholder="Address" className="input input-bordered w-full" required />
// 					<input type="text" placeholder="City" className="input input-bordered w-full" required />
// 					<input type="text" placeholder="Postal Code" className="input input-bordered w-full" required />
// 				</div>

// 				{/* Order Summary */}
// 				<div className="space-y-4">
// 					<h2 className="text-xl font-semibold mb-2">Your Order</h2>
// 					<div className="border p-4 rounded-xl">
// 						<div className="flex justify-between mb-2">
// 							<span>Course 1</span>
// 							<span>$49</span>
// 						</div>
// 						<div className="flex justify-between mb-2">
// 							<span>Course 2</span>
// 							<span>$29</span>
// 						</div>
// 						<div className="border-t mt-2 pt-2 flex justify-between font-bold">
// 							<span>Total</span>
// 							<span>$78</span>
// 						</div>
// 					</div>
// 					<button type="submit" className="btn btn-primary w-full mt-4">
// 						Place Order
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	);
// }

'use client';
import React, { useEffect } from 'react';
import OrderList from '@/components/orderPage/OrderList';
import PaymentMethod from '@/components/orderPage/Payment';
import { useAppSelector } from '@/store/store';
import PurchaseSteps from '@/components/UI/PurchaseSteps';

const OrderPage = () => {
	const cart = useAppSelector((state) => state.cart);


	return (
		<div className=" flex flex-col items-center mx-auto p-1 sm:p-2">
			<PurchaseSteps stage='makeOrder' />
			<div className="flex flex-col lg:flex-row gap-6">
				<OrderList cart={cart} />
				<PaymentMethod />
			</div>
			{/* <OrderSummary cartTotalSumm={cartTotalSumm} /> */}
		</div>
	);
};

export default OrderPage;
