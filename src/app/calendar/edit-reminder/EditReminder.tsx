import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  updateField,
  resetForm,
  setFormData,
} from "../../../redux/features/reminderFormSlice";
import { addReminder } from "../../../redux/features/remindersSlice";
import ColorBox from "../common/ColorBox";
import BackButton from "../common/BackButton";
import { useRouter } from "next/navigation";

interface Reminder {
  title: string;
  date: string;
  time: string;
  color: string;
  description: string;
  [key: string]: string;
}

interface EditReminderProps {
  reminder: Reminder;
}

const EditReminder: React.FC<EditReminderProps> = ({ reminder }) => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const formData = useSelector((state: RootState) => state.reminderForm);

  useEffect(() => {
    dispatch(setFormData(reminder));
  }, [reminder, dispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Datos actualizados:", formData);
    router.push("/calendar/list-reminders");
    dispatch(resetForm());
  };

  const colors = [
    "#C8E6C9",
    "#F5DD29",
    "#FFCC80",
    "#EF9A9A",
    "#CD8DE5",
    "#5BA4CF",
    "#29CCE5",
    "#6DECA9",
    "#FF8ED4",
    "#BCAAA4",
  ];

  return (
    <div className="w-[602px] h-3/4 absolute top-28">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col pb-8">
          <label className="text-darkslategray-100 font-normal text-lg">
            Title
          </label>
          <input
            className=" text-darkslategray-100 rounded-md bg-white box-border w-[602px] h-12 border-[1px] border-solid border-gray-300 text-lg p-4  font-normal text-lg p-4"
            type="text"
            name="title"
            placeholder="Title"
            maxLength={30}
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col pb-8">
          <label className="text-darkslategray-100 font-normal text-lg ">
            Description
          </label>
          <input
            className=" text-darkslategray-100 rounded-md bg-white box-border w-[602px] h-[76px] border-[1px] border-solid border-gray-300 text-lg p-4"
            type="text"
            name="description"
            placeholder="Description"
            maxLength={130}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-row items-center justify-between m-auto pb-8">
          <div className="flex flex-col">
            <label className="text-darkslategray-100 font-normal text-lg ">
              Date
            </label>
            <input
              className=" text-darkslategray-100 rounded-md  box-border w-[281px] h-12 border-[1px] border-solid border-gray-300 text-lg p-4"
              type="text"
              name="date"
              placeholder="DD/MM/YYYY"
              onFocus={(event) => {
                (event.currentTarget as HTMLInputElement).type = "date";
              }}
              onBlur={(event) => {
                (event.currentTarget as HTMLInputElement).type = "text";
              }}
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-darkslategray-100 font-normal text-lg ">
              Time
            </label>
            <input
              className=" text-darkslategray-100 rounded-md bg-white box-border w-[281px] h-12 border-[1px] border-solid border-gray-300 text-lg p-4"
              type="text"
              name="time"
              placeholder="HH:MM"
              onFocus={(event) => {
                (event.currentTarget as HTMLInputElement).type = "time";
              }}
              onBlur={(event) => {
                (event.currentTarget as HTMLInputElement).type = "text";
              }}
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col pb-8">
          <label className="text-darkslategray-100 font-normal text-lg">
            Color
          </label>
          <div className="flex space-x-2">
            {colors.map((color, index) => (
              <ColorBox
                key={index}
                color={color}
                selected={formData.color === color}
                onClick={() =>
                  dispatch(updateField({ field: "color", value: color }))
                }
              />
            ))}
          </div>
        </div>
        <div className="absolute top-[485px] left-[293px]">
          <BackButton />
        </div>
        <button
          type="submit"
          className="absolute top-[485px] left-[494px] text-base font-semibold text-center rounded bg-slateblue shadow-[0px_4px_28px_2px_#d1dcf0] w-[108px] h-[49px] cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditReminder;
