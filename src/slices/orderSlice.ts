import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type OrderItem = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export type Order = {
  orderNumber: string;
  status: 'onConfirmation' | 'paid' | 'shipped' | 'completed';
  createdAt: string;
  items: OrderItem[]; 
};

type OrderState = {
  orders: Record<string, Order>; 
};

const initialState: OrderState = {
  orders: {},
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<Record<string, Order>>) => {
      state.orders = action.payload; 
    },
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
