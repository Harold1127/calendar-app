// src/app/components/ReminderForm.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../redux/store";
import {
  updateField,
  resetForm,
} from "../../../../redux/features/reminderFormSlice";

const ReminderForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.reminderForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Maneja el envío del formulario aquí
    console.log(formData);
    dispatch(resetForm());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="text-black absolute top-[167px] left-[199px]">
          Title
        </label>
        <input
          className="absolute top-[193px] left-[199px] rounded-md bg-white box-border w-[602px] h-12 border-[1px] border-solid border-gray-300 text-black p-4"
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="text-black absolute top-[271px] left-[199px]">
          Description
        </label>
        <input
          className="absolute top-[297px] left-[199px] rounded-md bg-white box-border w-[602px] h-[76px] border-[1px] border-solid border-gray-300"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="text-black absolute top-[403px] left-[200px]">Date</label>
        <input
          className="absolute top-[429px] left-[200px] rounded-md bg-white box-border w-[281px] h-12 border-[1px] border-solid border-gray-300"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-black absolute top-[403px] left-[521px]">Time</label>
        <input
        className="absolute top-[429px] left-[521px] rounded-md bg-white box-border w-[281px] h-12 border-[1px] border-solid border-gray-300"
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="text-black">Color</label>
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReminderForm;
