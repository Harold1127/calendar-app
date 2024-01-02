import React from 'react';

type DayProps = {
  date: Date;
  onDayClick: (date: Date) => void;
};


const Day: React.FC<DayProps> = ({ date, onDayClick }) => {

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  let dayClass = 'w-[42px] h-[42px] flex flex-col items-center justify-center p-2.5 text-center text-lg text-white cursor-pointer hover:bg-[#f0f4f8] rounded-full transition-colors duration-300 eas';

  if (isToday(date)) {
    dayClass += 'text-white text-base rounded-full [background:linear-gradient(90deg,_#ff465d,_#bc46ba)] w-8 h-8 '; // Ejemplo: fondo azul para el día actual
  }

  return (
    <div className={dayClass} onClick={() => onDayClick(date)}>
      {date.getDate()}
    </div>
  );
};

export default Day;
