import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './features/calendarSlice';
import reminderReducer from './features/reminderSlice';
import reminderFormReducer from './features/reminderFormSlice';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    reminder: reminderReducer,
    reminderForm: reminderFormReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
