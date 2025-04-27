import cartReducer from '@/slices/cartSlice'; // импортируем дефолтный экспорт (reducer)
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    cart: cartReducer, // используем cartReducer
  },
});

// Типы для использования в проекте
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
