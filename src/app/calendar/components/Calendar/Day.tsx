import React from 'react';

type DayProps = {
  date: Date;
};

const Day: React.FC<DayProps> = ({ date }) => {

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  // Clases de estilo base para todos los días
  let dayClass = 'w-[42px] h-[42px] flex flex-col items-center justify-center p-2.5 text-center text-lg text-white';

  // Agrega una clase de estilo adicional si es el día actual
  if (isToday(date)) {
    dayClass += 'text-white text-base rounded-full bg-gradient-to-r from-[#f00] to-[#ff0] w-8 h-8'; // Ejemplo: fondo azul para el día actual
  }

  return (
    <div className={dayClass}>
      {date.getDate()}
      {/* Aquí podrías agregar componentes o elementos para eventos, recordatorios, etc. */}
    </div>
  );
};

export default Day;
