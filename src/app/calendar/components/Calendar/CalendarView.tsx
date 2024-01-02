import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../redux/store"; 
import { setCurrentMonth, setSelectedDate } from "../../../../redux/features/calendarSlice"; 
import Day from "./Day"; 
import MonthNavigation from "./MonthNavigation";  
import MonthYearHeader from "./MonthYearHeader"; 

const CalendarView: React.FC = () => {
  const dispatch = useDispatch();

  const currentMonthString = useSelector((state: RootState) => state.calendar.currentMonth);
  const currentMonth = new Date(currentMonthString);

  const daysInMonth = (year: number, month: number): Date[] => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const days = daysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const startDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const goToPreviousMonth = () => {
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    dispatch(setCurrentMonth(prevMonth.toISOString()));
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    dispatch(setCurrentMonth(nextMonth.toISOString()));
  };

  const onDayClick = (date: Date) => {
    dispatch(setSelectedDate(date.toISOString()));
  };

  return (
    <div className="flex flex-col rounded-2xl">
      <div className="flex flex-col items-center p-4">
        <MonthYearHeader currentMonth={currentMonth} />
        <MonthNavigation
          currentMonth={currentMonth}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
        />
      </div>
      <div className="p-10">
        <div className="grid grid-cols-7 gap-2.5 p-0 mb-2.5">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((dayName) => (
            <div
              key={dayName}
              className="w-[42px] h-[42px] flex items-center justify-center p-2.5 text-center text-xs text-white"
            >
              {dayName}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2.5 p-0">
          {Array.from({ length: startDay }).map((_, index) => (
            <div key={`placeholder-${index}`} className="p-2.5 "></div>
          ))}
          {days.map((date, index) => (
           <Day key={index} date={date} onDayClick={onDayClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
