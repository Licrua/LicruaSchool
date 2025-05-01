
'use client'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUser } from '@clerk/nextjs';
import { listenToCart } from '@/utils/cartFunctions';

export const FetchDataCart = () => {
	const dispatch = useDispatch();
	const { user, isLoaded } = useUser();

	useEffect(() => {
		if (isLoaded && user?.id) {
			const unsubscribe = listenToCart(user.id, dispatch);
			return () => unsubscribe();
		}
	}, [isLoaded, user?.id, dispatch]);

	return null; 
};
