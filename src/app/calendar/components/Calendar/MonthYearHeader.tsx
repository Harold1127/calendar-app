// components/Calendar/MonthYearHeader.tsx
import { open_sans } from '../../../styles/fonts';
import React from 'react';

type MonthYearHeaderProps = {
  currentMonth: Date;
};

const MonthYearHeader: React.FC<MonthYearHeaderProps> = ({ currentMonth }) => {
  // Format year
  const yearFormat = (date: Date): string => {
    return date.getFullYear().toString();
  };

  // formar month
  const monthFormat = (date: Date): string => {
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    return month.charAt(0).toUpperCase() + month.slice(1);
  };

  return (
    <div className= {`${open_sans.className}antialiased text-center text-61xl font-semibold text-white font-extrabold mt-5`}>
      <div >
        {yearFormat(currentMonth)} 
      </div>
      <div className="text-26xl font-semibold -mt-9">
        {monthFormat(currentMonth)} 
      </div>
    </div>
  );
};

export default MonthYearHeader;
