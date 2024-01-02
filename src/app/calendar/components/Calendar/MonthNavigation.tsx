import React from 'react';

type MonthNavigationProps = {
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
  currentMonth: Date;
};

const MonthNavigation: React.FC<MonthNavigationProps> = ({ goToPreviousMonth, goToNextMonth, currentMonth }) => {
  const today = new Date();
  const isCurrentMonth = currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear();

  return (
    <div className="flex justify-between">
      <button
        onClick={goToPreviousMonth}
        disabled={isCurrentMonth}
        className={`text-white text-base rounded-full bg-gradient-to-r from-[#f00] to-[#ff0] w-8 h-8 ${isCurrentMonth ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {'<'}
      </button>

      <button
        onClick={goToNextMonth}
        className="text-white text-base rounded-full bg-gradient-to-r from-[#f00] to-[#ff0] w-8 h-8"
      >
        {'>'}
      </button>
    </div>
  );
};

export default MonthNavigation;
