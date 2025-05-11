'use client';
import React, { useEffect } from 'react';
import OrderList from '@/components/orderPage/OrderList';
import PaymentMethod from '@/components/orderPage/Payment';
import { useAppDispatch, useAppSelector } from '@/store/store';
import PurchaseSteps from '@/components/UI/PurchaseSteps';
import { setCartStatus } from '@/slices/cartStatusSlice';
import Arrow from '@/components/Arrow';
import Loading from '../loading';

const OrderPage = () => {
	const cart = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setCartStatus('makeOrder'));
	}, [dispatch]);

	console.log('cartClause', Boolean(cart.length === 0));
	
	if(!cart || cart.length === 0) return <Loading/>

	return (
		<div className="flex relative flex-col w-full items-center h-[100vh] justify-center  sm:p-2">
			<div className='absolute top-10 left-10'>
				<Arrow />
			</div>
			<PurchaseSteps />
			<div className="flex flex-col lg:flex-row gap-6">
				<OrderList cart={cart} />
				<PaymentMethod />
			</div>
		</div>
	);
};

export default OrderPage;
