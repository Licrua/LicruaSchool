import { Course } from '@/data/courses';
import { db } from '../../lib/firebase'; // Путь к твоей инициализации Firebase
import {
  doc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore'; // объедини все импорты firestore сюда
import { setCart } from '@/slices/cartSlice';
import { AppDispatch } from '@/store/store';


export const addItemToCart = async (userId: string, card: Course) => {
  try {
    const cardId = String(card.id); // Преобразуем в строку, если это число

    const cartItemRef = doc(db, 'carts', userId, 'items', cardId);

    console.log('cartItemRef:', cartItemRef); // Для дебага

    // Добавляем товар в корзину пользователя
    await setDoc(cartItemRef, {
      title: card.title,
      price: card.price,
      image: card.image,
    });

    console.log('Товар добавлен в корзину!');
  } catch (error) {
    console.error('Ошибка при добавлении товара в корзину:', error);
  }
};

export const listenToCart = (userId: string, dispatch: AppDispatch) => {
  const cartRef = collection(doc(db, 'carts', userId), 'items');

  return onSnapshot(
    cartRef,
    (snapshot) => {
      const items = snapshot.docs.map((doc) => {
        const data = doc.data();
        console.log('data', data);
        return {
          id: doc.id,
          ...data,
        };
      });

      dispatch(setCart(items));
    },
    (error) => {
      console.error('Ошибка при подписке на корзину:', error);
    }
  );
};

export const removeItemFromCart = async (
  userId: string | undefined,
  cardId: string | number
) => {
  if (typeof userId === 'string') {
    try {
      // Ссылка на документ товара в корзине пользователя
      const itemRef = doc(db, 'carts', userId, 'items', String(cardId));
      // Удаление документа
      await deleteDoc(itemRef);
      console.log(`Товар с id ${cardId} удалён из корзины`);
    } catch (error) {
      console.error('Ошибка при удалении товара:', error);
    }
  }
};

export const clearCartInFirestore = async (userId: string | undefined) => {
  if (userId) {
    try {
      // Получаем все товары в корзине
      const itemsRef = collection(doc(db, 'carts', userId), 'items');

      const snapshot = await getDocs(itemsRef);

      // Удаляем каждый товар
      const deletions = snapshot.docs.map(
        (docSnap) => deleteDoc(doc(db, 'carts', userId, 'items', docSnap.id)) // Удаляем по ID
      );

      await Promise.all(deletions);

      console.log('Все товары удалены из корзины');
    } catch (error) {
      console.error('Ошибка при очистке корзины:', error);
    }
  }
  return null;
};
