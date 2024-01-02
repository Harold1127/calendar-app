"use client";
import CalendarView from "./components/Calendar/CalendarView";
import ReminderList from "./components/Reminders/ReminderList";
import Copy from "./components/Common/Copy";
import RemindersView from "./components/Reminders/RemindersView";
import Image from "next/image";
export default function Calendar() {
  return (
    <div className="absolute  rounded-21xl bg-white shadow-[0px_4px_28px_2px_#d1dcf0] w-[1119px] h-[686px] flex">
      <div>
        <Image
          src="/codelitt.svg"
          alt=""
          width="0"
          height="0"
          className="absolute h-[4.36%] w-[18.44%] top-[8.81%] right-[70.45%] bottom-[86.82%] left-[11.11%] max-w-full overflow-hidden max-h-full object-cover"
        />
      </div>
      <RemindersView />
      <div className=" absolute  left-[668px] rounded-tl-none rounded-tr-21xl rounded-br-21xl rounded-bl-none [background:linear-gradient(180deg,_#101277,_#421f91)] w-[450px] h-[686px]">
        <CalendarView />
        <Copy />
      </div>
    </div>
  );
}
