import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '@/slices/cartSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export const store = configureStore({
  reducer: {
    cart: cardReducer, // используем cartReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

