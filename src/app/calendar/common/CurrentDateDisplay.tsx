import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const CurrentDateDisplay: React.FC = () => {
  const selectedDateString = useSelector((state: RootState) => state.calendar.selectedDate);
  
  // Determina qué fecha mostrar: la seleccionada o la actual
  const dateToShow = selectedDateString ? new Date(selectedDateString) : new Date();
  const displayString = dateToShow.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
      <h1 className="text-5xl text-open_sans font-semibold text-gray-700 pl-3">
        {displayString}
      </h1>
  );
};

export default CurrentDateDisplay;
