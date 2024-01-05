import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Reminder {
  title: string;
  date: string;
  time: string;
  color: string;
  description: string;
  [key: string]: string;
}

const initialState: Reminder[] = [];

const remindersSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    addReminder: (state, action: PayloadAction<Reminder>) => {
      state.push(action.payload);
    },
  },
});

export const { addReminder } = remindersSlice.actions;
export default remindersSlice.reducer;
