import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalendarState {
  currentMonth: string;
  selectedDate: string;
  isDateSelected: boolean;
}

const initialState: CalendarState = {
  currentMonth: new Date().toISOString(),
  selectedDate: '',
  isDateSelected: false,
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
      state.isDateSelected = true;
    },
    
  },
});

export const { setCurrentMonth, setSelectedDate } = calendarSlice.actions;
export default calendarSlice.reducer;
