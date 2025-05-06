import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Order = {
  id: string;
  title: string;
  price: number;
  image: string;
  createdAt: string;
  orderNumber: string;
  status: 'pending' | 'paid' | 'shipped' | 'completed';
};

type OrderState = {
  items: Order[];
};

const initialState: OrderState = {
  items: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
	  setOrder: (_, action: PayloadAction<OrderState>) => {
      return action.payload;
    },
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
