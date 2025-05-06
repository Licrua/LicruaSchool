import { db } from '@/lib/firebase';
import { setOrder } from '@/slices/orderSlice';
import { AppDispatch } from '@/store/store';
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';

export const addItemToOrders = async (userId: string | undefined) => {
  if (typeof userId === 'string') {
    try {
      const cartItemsRef = collection(doc(db, 'carts', userId), 'items');
      const snapshot = await getDocs(cartItemsRef);

      if (snapshot.empty) {
        console.log('Корзина пуста');
        return;
      }

      const ordersRef = collection(doc(db, 'orders', userId), 'items');

      const orderNumber = `ORD-${Date.now()}`; // Пример уникального номера заказа
      const status = 'pending'; // Или 'paid', 'shipped', и т.д.

      // Добавляем каждый товар в заказы
      const promises = snapshot.docs.map(async (docSnap) => {
        const data = docSnap.data();
        const itemId = docSnap.id;

        const orderItemRef = doc(ordersRef, itemId);

        await setDoc(orderItemRef, {
          ...data,
          orderNumber,
          status,
          createdAt: new Date(),
        });
      });
      await Promise.all(promises);

      console.log(`Товары перенесены в заказы. Номер заказа: ${orderNumber}`);
    } catch (error) {
      console.error('Ошибка при добавлении товаров в заказы:', error);
    }
  }
};


// получение

export const listenToOrders = (userId: string, dispatch: AppDispatch) => {
  const ordersRef = collection(doc(db, 'orders', userId), 'items');

  return onSnapshot(
    ordersRef,
    (snapshot) => {
      const items = snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate().toISOString(), // форматируем дату
        };
      });
	  console.log('itemser', items);
      dispatch(setOrder(items));
    },
    (error) => {
      console.error('Ошибка при получении заказов:', error);
    }
  );
};
