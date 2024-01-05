"use client";
import ReminderList from "./ReminderList";
import CurrentDateDisplay from "../common/CurrentDateDisplay";
import AddReminderButton from "../common/AddReminderButton";
export default function Reminder() {
  return (
    <div className="pl-6 pr-14 w-3/5">
      <div className="absolute top-[50px] w-3/5 flex items-center">
        <CurrentDateDisplay />
        <AddReminderButton href="/calendar/add-reminder" />
      </div>
      <div className="absolute top-[130px] w-[567px]">
        <ReminderList />
      </div>
    </div>
  );
}
