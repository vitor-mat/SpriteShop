import { configureStore } from '@reduxjs/toolkit';

import messagesReducer from '../features/messagesSlice';
import cartReducer from '../features/cartSlice';

export const store = configureStore({
  reducer:{
    messages: messagesReducer,
    cartProducts: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;