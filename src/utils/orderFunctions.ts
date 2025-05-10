import { db } from '@/lib/firebase';
import { setOrder } from '@/slices/orderSlice';
import { AppDispatch } from '@/store/store';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
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
        console.log('data', data);
        return {
          orderNumber: doc.id, // Номер заказа (ключ документа)
          ...data,
          createdAt: data.createdAt?.toDate().toISOString() || null, // Форматируем дату
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

export const removeItemFromOrder = async (
  userId: string,
  orderNumber: string
) => {
  try {
    const orderRef = doc(db, 'orders', userId, 'items', orderNumber);

    // Удаляем весь документ заказа
    await deleteDoc(orderRef);

    console.log(`Заказ с номером ${orderNumber} удален`);
  } catch (error) {
    console.error('Ошибка при удалении заказа:', error);
  }
};

export const clearAllOrders = async (userId: string) => {
  try {
    const ordersRef = collection(doc(db, 'orders', userId), 'items');
    const snapshot = await getDocs(ordersRef);

    const deletePromises = snapshot.docs.map((docSnap) =>
      deleteDoc(docSnap.ref)
    );

    await Promise.all(deletePromises);

    console.log(`Все заказы пользователя ${userId} удалены`);
  } catch (error) {
    console.error('Ошибка при удалении всех заказов:', error);
  }
};
