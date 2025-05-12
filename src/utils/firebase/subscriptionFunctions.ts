import { setSubscriptions } from '@/slices/subscriptionSlice';
import { AppDispatch } from '@/store/store';
import {
  getFirestore,
  doc,
  setDoc,
  Timestamp,
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from 'firebase/firestore';

interface Subscription {
  type: string; // Тип подписки (например, "Basic", "Premium")
  startDate: Timestamp; // Дата оформления подписки
  endDate: Timestamp; // Дата окончания подписки
  price: string; // Стоимость подписки
  period: string; // Период подписки (например, "month", "year")
}

const db = getFirestore();

/**
 * Добавляет подписку к пользователю в Firestore.
 * @param userId ID пользователя.
 * @param subscription Данные подписки.
 * @returns Promise<void>
 */
export async function addSubscriptionToUser(
  userId: string,
  subscription: Subscription
): Promise<void> {
  try {
    const userRef = doc(
      db,
      'subscriptions',
      userId,
      'items',
      subscription.type
    );
    await setDoc(userRef, {
      ...subscription,
    });
    console.log('Subscription added successfully!');
  } catch (error) {
    console.error('Error adding subscription:', error);
    throw error;
  }
}

/**
 * Получает подписки пользователя из Firestore.
 * @param userId ID пользователя.
 * @returns Promise<Subscription[]> Массив подписок.
 */
export async function getUserSubscriptions(
	userId: string,
	dispatch: AppDispatch,
): Promise<Subscription[]> {
  try {
    const subscriptionsRef = collection(db, 'subscriptions', userId, 'items');
    const querySnapshot: QuerySnapshot<DocumentData> =
      await getDocs(subscriptionsRef);

    const subscriptions: Subscription[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        type: data.type,
        startDate: data.startDate,
        endDate: data.endDate,
        price: data.price,
        period: data.period,
      } as Subscription;
    });
	dispatch(setSubscriptions(subscriptions));
    return subscriptions;
  } catch (error) {
    console.error('Error retrieving subscriptions:', error);
    throw error;
  }
}
