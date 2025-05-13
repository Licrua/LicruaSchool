'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUser } from '@clerk/nextjs';
import { listenToCart } from '@/utils/firebase/cartFunctions';
import { listenToOrders } from '@/utils/firebase/orderFunctions';
import {  listenToSubscription } from '@/utils/firebase/subscriptionFunctions';

export const FetchData = () => {
  const dispatch = useDispatch();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user?.id) {
      const unsubscribeCart = listenToCart(user.id, dispatch);
      const unsubscribeOrder = listenToOrders(user.id, dispatch);
		const unsubscribeSubscription = listenToSubscription(user.id, dispatch);
      return () => {
        unsubscribeCart();
		  unsubscribeOrder();
		  unsubscribeSubscription();
      };
    }
  }, [isLoaded, user?.id, dispatch]);

  return null;
};
