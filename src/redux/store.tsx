import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './features/calendarSlice';
import remindersReducer from './features/remindersSlice';
import reminderFormReducer from './features/reminderFormSlice';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    reminders: remindersReducer,
    reminderForm: reminderFormReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
