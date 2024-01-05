import React from "react";

interface DayProps {
  date: Date;
  onDayClick: (date: Date) => void;
  isSelected: boolean;
}

const Day: React.FC<DayProps> = ({ date, onDayClick, isSelected }) => {
  const isToday = (dateToCheck: Date): boolean => {
    const today = new Date();
    return dateToCheck.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isPast = date < today;

  let dayClass =
    "w-[42px] h-[42px] flex flex-col items-center justify-center p-2.5 text-center text-lg rounded-full transition-colors duration-300 ease-in-out";

  if (isPast) {
    dayClass += " text-gray-500 cursor-default";
  } else if (isToday(date) && isSelected) {
    dayClass += " bg-[#0a6dc2] text-white cursor-pointer";
  } else if (isToday(date)) {
    dayClass +=
      " bg-[#ff465d] [background:linear-gradient(90deg,_#ff465d,_#bc46ba)] cursor-pointer";
  } else if (isSelected) {
    dayClass += " bg-[#0a6dc2] text-white cursor-pointer";
  } else {
    dayClass += " hover:bg-[#f0f4f8] hover:text-[#0a6dc2] cursor-pointer";
  }

  const handleDayClick = () => {
    if (!isPast) {
      onDayClick(date);
    }
  };

  return (
    <div className={dayClass} onClick={handleDayClick}>
      {date.getDate()}
    </div>
  );
};

export default Day;
