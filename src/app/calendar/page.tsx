"use client";
import CalendarView from "./components/Calendar/CalendarView";
import ReminderList from "./components/Reminders/ReminderList";
import Copy from "./components/Common/Copy";
export default function Calendar() {
  return (
    <div className="bg-white shadow-lg rounded-[40px]  h-full w-full mt-11 flex flex-row">
      <div className="flex items-center justify-between mb-4 w-3/5">
        <h1 className="text-xl font-bold text-gray-700">
          Friday, August 26, 2022
        </h1>
        <button
          className="text-white text-base rounded [background:linear-gradient(90deg,_#ff465d,_#bc46ba)] shadow-[0px_4px_28px_2px_#d1dcf0] w-[180px] h-[49px] cursor-pointer"
          type="button"
        >
          Add reminder
        </button>
        <ReminderList />
      </div>

      <div className=" w-2/5 min-h-[686px]  rounded-r-[40px]  inset-y-0 right-0  bg-gradient-to-b from-[#101277] to-[#421F91]">
        <CalendarView />
        <Copy />
      </div>
    </div>
  );
}
