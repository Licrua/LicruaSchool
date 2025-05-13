'use client';
import React, { useState } from 'react';
import CheckMark from '../UI/CheckMark';
import SubscriptionModal from './SubscriptionModal';
import { useAppSelector } from '@/store/store';

type Feature = {
  id: string;
  name: string;
}[];

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: Feature;
  buttonLabel: string;
  highlighted?: boolean;
  badgeText?: string;
  badgeIcon?: React.ReactNode;
};

function PricingCard({
  title,
  description,
  price,
  period = '/month',
  features,
  buttonLabel,
  highlighted,
  badgeText,
  badgeIcon,
}: PricingCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const subscription = useAppSelector(
    (state) => state.subscription.subscriptions
  );

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`flex flex-col justify-between items-center p-8 rounded-lg shadow-lg max-w-sm relative ${
        highlighted
          ? 'bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 border-8 border-orange-200'
          : 'bg-slate-100'
      }`}
    >
      {badgeText && (
        <p className="mono text-sm absolute -top-4 bg-red-400 text-white py-0.5 px-2 font-bold tracking-wider rounded">
          {badgeText}
        </p>
      )}
      {badgeIcon && (
        <div className="absolute -top-11 -left-11">{badgeIcon}</div>
      )}
      <h2 className="font-extrabold text-3xl text-center mb-2">{title}</h2>
      <p className="opacity-60 text-center">{description}</p>
      <div className="flex flex-col items-center my-8">
        <p className="font-extrabold text-4xl">{price}</p>
        <p className="text-sm opacity-60">{period}</p>
      </div>
      <div className="flex flex-col gap-1">
        {features.map((feature) => (
          <p key={feature.id} className="flex items-center text-sm">
            <CheckMark />
            <b>{feature.name}</b>
          </p>
        ))}
        <div className="flex justify-center mt-8">
          <div
            className={`tooltip ${subscription.length > 0 ? 'tooltip' : ''} tooltip-top`}
            data-tip="You already have a subscription"
          >
            <button
              className="px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 rounded-xl disabled:line-through disabled:cursor-not-allowed disabled:bg-gray-200"
              onClick={handleButtonClick}
              disabled={subscription.length > 0}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <SubscriptionModal
          closeModal={closeModal}
          title={title}
          price={price}
          period={period}
        />
      )}
    </div>
  );
}

export default PricingCard;
