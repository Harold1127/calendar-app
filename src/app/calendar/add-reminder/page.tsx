"use client";
import ReminderForm from "../add-reminder/ReminderForm";
import CurrentDateDisplay from "../common/CurrentDateDisplay";
export default function AddReminder() {
  return (
    <div className="pl-9 w-[669px]">
      <div className="absolute top-[50px] w-3/5 flex items-center">
        <h1 className="text-5xl font-semibold text-gray-700">Add reminder-</h1>
        <CurrentDateDisplay />
      </div>
      <ReminderForm />
    </div>
  );
}
