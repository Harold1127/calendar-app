
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store'; 


type CurrentDateDisplayProps = {
    onAddReminderClick: () => void;
  };

  const CurrentDateDisplay: React.FC<CurrentDateDisplayProps> = ({ onAddReminderClick }) => {
  const selectedDateString = useSelector((state: RootState) => state.calendar.selectedDate);
  const selectedDate = new Date(selectedDateString);
  const displayString = selectedDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });



  return (
    <div className="absolute top-[50px] w-3/5 flex items-center">
      <h1 className="text-5xl font-semibold text-gray-700">
      {displayString}
      </h1>
      <button
        className="rounded [background:linear-gradient(90deg,_#ff465d,_#bc46ba)] shadow-[0px_4px_28px_2px_#d1dcf0] w-[180px] h-[49px] cursor-pointer absolute left-[415px]"
        type="button"
        onClick={onAddReminderClick}
      >
        Add reminder
      </button>
    </div>
  );
};

export default CurrentDateDisplay;
