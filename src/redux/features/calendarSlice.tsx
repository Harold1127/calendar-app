// store/features/calendarSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalendarState {
  currentMonth: string;
  selectedDate: string;
}

const initialState: CalendarState = {
  currentMonth: new Date().toISOString(),
  selectedDate: new Date().toISOString(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCurrentMonth(state, action: PayloadAction<string>) {
      state.currentMonth = action.payload;
    },
    setSelectedDate(state, action: PayloadAction<string>) {
      state.selectedDate = action.payload;
    },
  },
});

export const { setCurrentMonth, setSelectedDate } = calendarSlice.actions;
export default calendarSlice.reducer;
