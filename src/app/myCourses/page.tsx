'use client';
import Arrow from '@/components/Arrow';
import { useAppSelector } from '@/store/store';
import Image from 'next/image';
import {
  removeItemFromOrder,
  clearAllOrders,
} from '@/utils/firebase/orderFunctions';
import { useClerk } from '@clerk/nextjs';
import Loading from '../loading';

export default function OrdersPage() {
  const orders = useAppSelector((state) => state.order.orders);
  const { user } = useClerk();
  const ordersArray = Object.values(orders);

	if (ordersArray.length === 0) return <Loading />;
	
  if (!ordersArray.length) {
    return (
      <p className="text-center mt-10 text-gray-500">
        You dont have any orders yet.
      </p>
    );
  }

  

  const handleRemoveOrder = async (orderNumber: string) => {
    try {
      await removeItemFromOrder(user?.id, orderNumber);
      console.log(`Order ${orderNumber} removed`);
    } catch (error) {
      console.error('Error removing order:', error);
    }
  };

  const handleClearAllOrders = async () => {
    try {
      await clearAllOrders(user?.id);
      console.log('All orders cleared');
    } catch (error) {
      console.error('Error clearing all orders:', error);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Arrow />
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      <button onClick={handleClearAllOrders} className="btn btn-error mb-6">
        Clear All Orders
      </button>
      <div className="space-y-6">
        {ordersArray.map((order) => (
          <div
            key={order.orderNumber}
            className="bg-base-100 shadow-md rounded-xl p-5 border border-base-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
              <p className="font-semibold">Order #{order.orderNumber}</p>
              <p className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleString()}
              </p>
              <span className="badge badge-info badge-outline">
                {order.status}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="card bg-base-200 shadow-sm flex-col gap-4 p-4"
                >
                  <figure className="overflow-hidden">
                    <Image
                      width={100}
                      height={100}
                      className="w-full"
                      src={item.image}
                      alt={item.title}
                    />
                  </figure>
                  <div>
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <p className="text-sm text-gray-500">{item.price} $</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-2.5">
              <button
                onClick={() => handleRemoveOrder(order.orderNumber)}
                className="btn btn-sm btn-error mt-2"
              >
                Remove Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
