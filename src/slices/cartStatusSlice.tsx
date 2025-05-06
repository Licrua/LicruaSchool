import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type cartStage = 'authorization' | 'formCart' | 'makeOrder';

const initialState: { cartStatus: cartStage } = {
	cartStatus:'authorization',
};

export const cartStatusSlice = createSlice({
	name: 'cartStatus',
	initialState,
	reducers: {
		setCartStatus: (state, action: PayloadAction<cartStage>) => {
			state.cartStatus = action.payload;
		},
	},
});

export const { setCartStatus } = cartStatusSlice.actions;
export default cartStatusSlice.reducer;
