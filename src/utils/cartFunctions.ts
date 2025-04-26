import { Course } from '@/data/courses';
import { db } from '../lib/firebase'; // Путь к твоей инициализации Firebase
import { doc, setDoc, collection, getDocs } from 'firebase/firestore'; // объедини все импорты firestore сюда

// Функция для добавления товара в корзину пользователя
export const addItemToCart = async (userId: string, card: Course) => {
  try {
    // Убедись, что card.id является строкой
    const cardId = String(card.id);  // Преобразуем в строку, если это число

    // Получаем ссылку на документ товара в корзине
    const cartItemRef = doc(db, 'carts', userId, 'items', cardId);

    console.log('cartItemRef:', cartItemRef); // Для дебага

    // Добавляем товар в корзину пользователя
    await setDoc(cartItemRef, {
      title: card.title,
      price: card.price,
      image: card.image,
      createdAt: new Date(),
    });

    console.log('Товар добавлен в корзину!');
  } catch (error) {
    console.error('Ошибка при добавлении товара в корзину:', error);
  }
};

// Функция для получения всех товаров из корзины пользователя
export const getCartItems = async (userId: string) => {
  try {
    // Получаем ссылку на коллекцию 'items' внутри корзины пользователя
    const cartRef = collection(doc(db, 'carts', userId), 'items');

	  
	  console.log(cartRef, 'cartRef');
	  
    // Получаем все товары из этой коллекции
    const querySnapshot = await getDocs(cartRef);

	  console.log('snapshot', querySnapshot);
	  
    // Преобразуем результаты в массив
    const items = querySnapshot.docs.map(doc => doc.data());
    console.log('Товары в корзине:', items);
    return items;
  } catch (error) {
    console.error('Ошибка при получении товаров из корзины:', error);
    return [];
  }
};
