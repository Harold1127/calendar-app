import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReminderFormData {
  title: string;
  date: string;
  color: string;
  time: string;
  description: string;
}

const initialState: ReminderFormData = {
  title: '',
  date: '',
  color: '',
  time: '',
  description: ''
};

const reminderFormSlice = createSlice({
  name: 'reminderForm',
  initialState,
  reducers: {
    updateField(state, action: PayloadAction<{ field: string; value: string }>) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = reminderFormSlice.actions;
export default reminderFormSlice.reducer;
