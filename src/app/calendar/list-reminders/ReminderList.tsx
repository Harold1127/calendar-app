import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ReminderItem from "./ReminderItem";
import Banner from "../home/Banner";

const ReminderList: React.FC = () => {
  const reminders = useSelector((state: RootState) => state.reminders);
  const selectedDateISO = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );

  const selectedDateFormatted = selectedDateISO.split("T")[0];

  const filteredReminders = reminders.filter((reminder) => {
    const reminderDateFormatted = reminder.date.split("T")[0];
    return reminderDateFormatted === selectedDateFormatted;
  });

  return (
    <div
      className="overflow-y-auto w-[600px] reminder-list p-3 pl-5"
      style={{ height: "522px", scrollbarWidth: "none" }}
    >
      {filteredReminders.length > 0 ? (
        filteredReminders.map((reminder, index) => (
          <div key={index} className="mb-3">
            <ReminderItem
              id={reminder.id}
              title={reminder.title}
              date={reminder.date}
              time={reminder.time}
              color={reminder.color}
              description={reminder.description}
            />
          </div>
        ))
      ) : (
        <Banner />
      )}
    </div>
  );
};

export default ReminderList;
