import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type OrderStage = 'authorization' | 'formCart' | 'makeOrder';

const initialState: { cartStatus: OrderStage } = {
	cartStatus: 'authorization',
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setCartStatus: (state, action: PayloadAction<OrderStage>) => {
			state.cartStatus = action.payload;
		},
	},
});

export const { setCartStatus } = orderSlice.actions;
export default orderSlice.reducer;
