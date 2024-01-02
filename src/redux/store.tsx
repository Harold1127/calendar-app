import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './features/calendarSlice';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;