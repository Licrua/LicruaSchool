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
      const status = 'pending';

      // Собираем все товары в массив
      const items = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
        };
      });

      // Создаем документ с номером заказа как ключом
      const orderData = {
        orderNumber,
        status,
        createdAt: new Date(),
        items, // Массив товаров
      };

      console.log('dadasd', orderData);

      await setDoc(doc(ordersRef, orderNumber), orderData);

      console.log(`Заказ создан. Номер заказа: ${orderNumber}`);
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
      const orders = snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
          orderNumber: doc.id, // Номер заказа (ключ документа)
          ...data,
          createdAt: data.createdAt?.toDate().toISOString(), // Форматируем дату
          items: data.items || [], // Убедитесь, что items всегда есть
        };
      });
      console.log('Полученные заказы:', orders);
      dispatch(setOrder(orders)); // Отправляем заказы в Redux
    },
    (error) => {
      console.error('Ошибка при получении заказов:', error);
    }
  );
};
