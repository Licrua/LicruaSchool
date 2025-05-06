
'use client'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUser } from '@clerk/nextjs';
import { listenToCart } from '@/utils/cartFunctions';
import { listenToOrders } from '@/utils/orderFunctions';

export const FetchData = () => {
	const dispatch = useDispatch();
	const { user, isLoaded } = useUser();

	useEffect(() => {
		if (isLoaded && user?.id) {
			const unsubscribeCart = listenToCart(user.id, dispatch);
			const unsubscribeOrder = listenToOrders(user.id, dispatch);
			
			return () => {
				unsubscribeCart();
				unsubscribeOrder();
			};
		}
	}, [isLoaded, user?.id, dispatch]);

	return null; 
};
