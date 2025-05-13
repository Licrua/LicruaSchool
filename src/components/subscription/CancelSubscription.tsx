'use client'
import React from 'react';
import {  useAppSelector } from '@/store/store';
import { deleteSubscriptionFromUser } from '@/utils/firebase/subscriptionFunctions';
import { useClerk } from '@clerk/nextjs';
import toast from 'react-hot-toast/headless';

const CancelSubscription: React.FC = () => {
  const { user } = useClerk();
	const subscriptions = useAppSelector(state => state.subscription.subscriptions[0]);
    const subscriptionType = subscriptions?.type;
//   const activeSubscription = subscriptions.find((sub) => {
//     const now = new Date();
//     return new Date(sub.startDate) <= now && new Date(sub.endDate) >= now;
//   });

  const handleCancelSubscription = async () => {
    if (subscriptions) {
      try {
        if (user) {
          await deleteSubscriptionFromUser(user.id, subscriptionType);
        } else {
          toast.error('User is not logged in. Please log in and try again.');
        }
        toast.success('Subscription canceled successfully!');
      } catch (error) {
        console.error('Error canceling subscription:', error);
        toast.error('Failed to cancel subscription. Please try again.');
      }
    }
  };

  if (!subscriptions) {
    return null; // Не отображать компонент, если активной подписки нет
  }

  return (
	  <div className="flex justify-center mt-8">
		  <div className='flex flex-col gap-2 items-center'>
      <strong>You can unsubscribe any time you want</strong>
      <strong className='underline'>Button with cancellation appears below if you are subscribed!</strong>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        onClick={handleCancelSubscription}
      >
        Cancel Subscription
      </button>
		  </div>
    </div>
  );
};

export default CancelSubscription;
