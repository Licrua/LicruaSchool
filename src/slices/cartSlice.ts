import { Course } from '@/data/courses';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface ExampleState {
//   value: number;
// }

// const initialState: ExampleState = {
//   value: 0,
// };

type PayLoadType = {
	createdAt: new Date().type,
	image: string, 
	price: number, 
	title: string
}

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
	reducers: {
		addCart: (state, payload: PayLoadType) => {
			state.push(payload)
		}
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
