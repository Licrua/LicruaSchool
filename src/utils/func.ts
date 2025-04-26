import { db } from '../lib/firebase'; // Импортируем Firestore
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Функция для добавления товара
export const addProductToFirestore = async () => {
  try {
    const product = {
      id: 'product_001',  // Идентификатор товара (можно использовать строку или число)
      title: 'Awesome Product',
      price: 19.99,
    };

    // Создаём ссылку на документ
    const productRef = doc(db, 'products', product.id);

    // Добавляем товар в Firestore
    await setDoc(productRef, product);
    console.log('Товар добавлен в Firestore');
  } catch (error) {
    console.error('Ошибка при добавлении товара:', error);
  }
};

// Функция для получения товара из Firestore
const getProductFromFirestore = async () => {
  try {
    const productRef = doc(db, 'products', 'product_001'); // Используем id товара

    // Получаем данные из Firestore
    const docSnap = await getDoc(productRef);

    if (docSnap.exists()) {
      console.log('Товар из Firestore:', docSnap.data());
    } else {
      console.log('Товар не найден');
    }
  } catch (error) {
    console.error('Ошибка при получении товара:', error);
  }
};

// Вызовем функции
addProductToFirestore().then(() => getProductFromFirestore());
