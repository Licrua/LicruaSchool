import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PayLoadType = {
  id: string;
  image: string;
  price: number;
  title: string;
};

const initialState: PayLoadType[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
	  setCart: (_, action: PayloadAction<PayLoadType[]>) => {
      return action.payload;
    },
  },
});

export const {  setCart } = cartSlice.actions;
export default cartSlice.reducer;
