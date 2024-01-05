import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReminderFormData {
  title: string;
  date: string;
  color: string;
  time: string;
  description: string;
  [key: string]: string;
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
      if (field in state) {
        state[field] = value;
      }
    },
    setFormData(state, action: PayloadAction<ReminderFormData>) {
      return action.payload;
    },
    resetForm: () => initialState,
    setSelectedDate(state, action: PayloadAction<string>) {
      state.selectedDate = action.payload;
    },
    saveFormData: (state, action: PayloadAction<ReminderFormData>) => {
      // Procesar los datos del formulario
      // Por ejemplo, podrías hacer una solicitud HTTP aquí o actualizar otro estado en Redux
      console.log("Datos del formulario para guardar:", action.payload);
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { updateField, setFormData, resetForm, setSelectedDate, saveFormData, setColor  } = reminderFormSlice.actions;
export default reminderFormSlice.reducer;
