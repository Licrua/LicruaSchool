import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PayLoadType = {
	createdAt: Date,
	image: string, 
	price: number, 
	title: string
}

const initialState: PayLoadType[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
	reducers: {
		addCart: (state, action: PayloadAction<PayLoadType>) => {
			state.push(action.payload)
		}
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
