"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'; // Asegúrate de que la ruta sea correcta
import EditReminder from "./EditReminder";
import CurrentDateDisplay from "../common/CurrentDateDisplay";
import AddReminderButton from "../common/AddReminderButton";

export default function Reminder() {
  const reminderToEdit = useSelector((state: RootState) => {
    // Obtén el recordatorio que deseas editar del estado de Redux
    // Por ejemplo, si tienes un ID de recordatorio seleccionado, úsalo aquí para obtener ese recordatorio
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
