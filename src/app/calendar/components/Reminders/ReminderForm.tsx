// src/app/components/ReminderForm.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../redux/store";
import {
  updateField,
  resetForm,
} from "../../../../redux/features/reminderFormSlice";
import ColorBox from "./ColorBox";

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
    <div className="w-50 h-3/4  absolute top-40">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col pb-8">
          <label className="text-black">Title</label>
          <input
            className=" rounded-md bg-white box-border w-[602px] h-12 border-[1px] border-solid border-gray-300 text-black p-4"
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col pb-8">
          <label className="text-black ">Description</label>
          <input
            className="rounded-md bg-white box-border w-[602px] h-[76px] border-[1px] border-solid border-gray-300"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row items-center justify-between m-auto pb-8">
          <div className="flex flex-col">
            <label className="text-black ">Date</label>
            <input
              className=" rounded-md bg-white box-border w-[281px] h-12 border-[1px] border-solid border-gray-300"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black ">Time</label>
            <input
              className="rounded-md bg-white box-border w-[281px] h-12 border-[1px] border-solid border-gray-300"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col pb-8">
        <label className="text-black ">Color</label>
        <ColorBox color="#ff0000" onClick={() => console.log('Color box clicked!')} />

        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReminderForm;
