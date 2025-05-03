import { PayLoadType } from '@/slices/cartSlice';
import React from 'react';

const OrderList = ({ cart }: { cart: PayLoadType[] }) => {
  return (
    <div className="lg:w-2/3 bg-base-100 shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Ваши заказы</h2>
      <ul className="space-y-3 overflow-scroll h-52">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-base-200 p-3 rounded-lg"
          >
            <img
              src={item.image}
              className="w-20 me-2 sm:me-0 rounded"
              alt="prod"
            />
            <div>
              <h3 className="font-medium">{item.title}</h3>
            </div>
				{/* <p className="font-bold">{prod.productPrice * prod.quantity} ₽</p> */}
				<p>1000$</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
