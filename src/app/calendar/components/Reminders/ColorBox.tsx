import React from 'react';

type ColorBoxProps = {
  color: string;
  onClick?: () => void; 
};

const ColorBox: React.FC<ColorBoxProps> = ({ color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
      className="w-[55px] h-[48px] rounded-sm cursor-pointer focus:outline-none border-[1px] border-solid border-gray-300"
    >
    </button>
  );
};

export default ColorBox;
