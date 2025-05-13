import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Subscription } from '@/utils/firebase/subscriptionFunctions';

interface SubscriptionState {
  subscriptions: Subscription[];
}

const initialState: SubscriptionState = {
  subscriptions: [],
};

const subscriptionSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {
    setSubscriptions: (state, action: PayloadAction<Subscription[]>) => {
      state.subscriptions = action.payload;
    },
  },
});

export const { setSubscriptions } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
