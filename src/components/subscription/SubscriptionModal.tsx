import { useAppSelector } from '@/store/store';
import { addSubscriptionToUser } from '@/utils/firebase/subscriptionFunctions';
import { useClerk } from '@clerk/nextjs';
import { Timestamp } from 'firebase/firestore';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

interface SubscriptionModalProps {
  title: string;
  price: string | number;
  period: string;
  closeModal: () => void;
}

export default function SubscriptionModal({
  title,
  price,
  period,
  closeModal,
}: SubscriptionModalProps) {
	const { user } = useClerk();
	const subscriptions = useAppSelector(state => state)
	const dispatch = useDispatch();
	console.log('subscriptions', subscriptions);
	
	
  const data = {
    type: title, // Тип подписки
    price: String(price), // Преобразование цены в число
    startDate: Timestamp.now(),
    endDate: Timestamp.fromDate(
      new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // +30 дней
    ),
    period: period,
  };

	
	console.log('data', data);
	
	
  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const confirmSubscription = async () => {
    try {
      if (user) {
        await addSubscriptionToUser(user.id, data, dispatch);
        toast('Subscription confirmed successfully!');
        closeModal(); 
      }
    } catch (error) {
      console.error('Error confirming subscription:', error);
      toast('Failed to confirm subscription. Please try again.');
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white border-2 border-amber-300 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Subscription Details
        </h3>
        <p className="mb-4 text-gray-700 text-center">
          🎉 You have selected the <b className="text-blue-600">{title}</b> plan
          with a <b>7-day free trial</b> promotion.
        </p>
        <p className="mb-6 text-gray-700 text-center">
          After the trial period, you will be charged{' '}
          <b className="text-green-600">{price}</b> per <b>{period}</b>.
        </p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={confirmSubscription}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
