import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer
  },
});

// Infer types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
