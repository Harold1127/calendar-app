import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReminderState {
  showReminderForm: boolean;
}

const initialState: ReminderState = {
  showReminderForm: false,
};

const reminderSlice = createSlice({
  name: 'reminder',
  initialState,
  reducers: {
    setShowReminderForm(state, action: PayloadAction<boolean>) {
      state.showReminderForm = action.payload;
    },
  },
});

export const { setShowReminderForm } = reminderSlice.actions;
export default reminderSlice.reducer;
