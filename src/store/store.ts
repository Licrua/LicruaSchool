import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '@/slices/cartSlice';
import cartStatusReducer from '@/slices/cartStatusSlice';
// import orderReducer from '@/slices/orderSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    cart: cardReducer,
    cartStatus: cartStatusReducer,
    // order: orderReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  console.log('State changed:', state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
