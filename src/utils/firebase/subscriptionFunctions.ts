import { setSubscriptions } from '@/slices/subscriptionSlice';
import { AppDispatch } from '@/store/store';
import {
  getFirestore,
  doc,
  setDoc,
  Timestamp,
  collection,
  QuerySnapshot,
  DocumentData,
  onSnapshot,
  deleteDoc,
} from 'firebase/firestore';

export interface Subscription {
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
 * Удаляет подписку пользователя из Firestore.
 * @param userId ID пользователя.
 * @param subscriptionType Тип подписки для удаления.
 * @returns Promise<void>
 */
export async function deleteSubscriptionFromUser(
  userId: string,
  subscriptionType: string
): Promise<void> {
  try {
    const subscriptionRef = doc(
      db,
      'subscriptions',
      userId,
      'items',
      subscriptionType
    );
    await deleteDoc(subscriptionRef);
    console.log(
      `Subscription of type ${subscriptionType} deleted successfully!`
    );
  } catch (error) {
    console.error('Error deleting subscription:', error);
    throw error;
  }
}

/**
 * Подписывается на изменения подписок пользователя в Firestore.
 * @param userId ID пользователя.
 * @param dispatch Redux dispatch для обновления состояния.
 * @returns Функция для отписки от изменений.
 */
export function listenToSubscription(userId: string, dispatch: AppDispatch) {
  const subscriptionsRef = collection(db, 'subscriptions', userId, 'items');

  const unsubscribe = onSnapshot(
    subscriptionsRef,
    (querySnapshot: QuerySnapshot<DocumentData>) => {
      const subscriptions: Subscription[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          type: data.type,
          startDate: data.startDate.toDate().toISOString() || null,
          endDate: data.endDate.toDate().toISOString() || null,
          price: data.price,
          period: data.period,
        } as Subscription;
      });
      dispatch(setSubscriptions(subscriptions));
    },
    (error) => {
      console.error('Error listening to subscriptions:', error);
    }
  );

  return unsubscribe;
}
