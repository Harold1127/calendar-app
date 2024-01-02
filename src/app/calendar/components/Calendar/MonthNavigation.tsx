import React from 'react';
import BackIcon from '../../../../../public/Vector.svg';
import NextIcon from '../../../../../public/Vector1.svg';
import PointNav from '../../../../../public/point-navigation.svg';
import Image from 'next/image';

type MonthNavigationProps = {
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
  currentMonth: Date;
};

const MonthNavigation: React.FC<MonthNavigationProps> = ({ goToPreviousMonth, goToNextMonth, currentMonth }) => {
  const today = new Date();
  const isCurrentMonth = currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear();

  return (
    <div className="flex justify-between text-white text-lg items-center">
      <button
        onClick={goToPreviousMonth}
        disabled={isCurrentMonth}
        className={`flex items-center justify-center w-8 h-8 ${isCurrentMonth ? 'opacity-50 cursor-not-allowed' : ''}`}
      > 
        <Image src="/Vector.svg" alt="Previous Month" width="0" height="0" className="w-1.5 h-3" />
      </button>
      <Image src="/point-navigation.svg" alt="Previous Month" width="0" height="0" className="w-1.5 h-1.5" />
      <button
        onClick={goToNextMonth}
        className="flex items-center justify-center w-8 h-8"
      >
        <Image src="/Vector1.svg" alt="Previous Month" width="0" height="0" className="w-1.5 h-3" />
 
      </button>
    </div>
  );
};

export default MonthNavigation;
