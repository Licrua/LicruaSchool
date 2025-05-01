import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PayLoadType = {
	id:string,
	createdAt: string,
	image: string, 
	price: number, 
	title: string
}

const initialState: PayLoadType[] = [];

console.log('dasda', initialState);


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
	reducers: {
		addCart: (state, action: PayloadAction<PayLoadType[]>) => {
			console.log('action', action.payload);
			state.push(...action.payload)
		},
		setCart: (state_, action: PayloadAction<PayLoadType[]>) => {
				return action.payload
		}
  },
});

export const { addCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
