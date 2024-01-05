"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'; 
import EditReminder from "./EditReminder";
import CurrentDateDisplay from "../common/CurrentDateDisplay";
import AddReminderButton from "../common/AddReminderButton";

export default function Reminder() {
  const reminderToEdit = useSelector((state: RootState) => {
    return state.reminders.find(r => r.id === selectedReminderId);
  });

  return (
    <div className="pl-6 pr-14 w-3/5">
      <div className="absolute top-[50px] w-3/5 flex items-center">
        <CurrentDateDisplay />
        <AddReminderButton href="/calendar/add-reminder" />
      </div>
      <div className="absolute top-[130px] w-[567px]">
        {reminderToEdit && <EditReminder reminder={reminderToEdit} />}
      </div>
    </div>
  );
}
