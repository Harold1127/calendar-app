import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalendarState {
  currentMonth: string; 
}

const initialState: CalendarState = {
  currentMonth: new Date().toISOString(), 
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCurrentMonth(state, action: PayloadAction<string>) {
      state.currentMonth = action.payload; 
    },

  },
});

export const { setCurrentMonth } = calendarSlice.actions;
export default calendarSlice.reducer;
