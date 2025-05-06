import { clearCartInFirestore } from '@/utils/cartFunctions';
import { addItemToOrders } from '@/utils/orderFunctions';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const PaymentMethod = () => {
  const { user } = useUser();
  console.log('ussse', user);

  const onSumbitHandler = () => {
    addItemToOrders(user?.id);
    clearCartInFirestore(user?.id);
    redirect('checkout');
  };

  return (
    <div className="bg-base-100 ring-1 shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text ">Choose payment method</span>
        </label>
        <select className="select mt-3 select-bordered">
          <option>Card</option>
          <option>Cash</option>
        </select>
      </div>
      <button onClick={onSumbitHandler} className="btn btn-success w-full">
        Make the order
      </button>
    </div>
  );
};

export default PaymentMethod;
