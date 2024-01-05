import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setColor } from '../../../redux/features/reminderFormSlice';

interface ColorBoxProps {
  color: string;
  onClick: () => void;
  selected: boolean; 
}

const ColorBox: React.FC<ColorBoxProps> = ({ color, onClick, selected  }) => {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state: RootState) => state.reminderForm.color);

  const handleColorSelect = () => {
    dispatch(setColor(color));
  };

  const boxStyle = {
    backgroundColor: color,
    opacity: color === selectedColor ? 0.5 : 1,
  };

  return (
    <button
      type="button"
      style={boxStyle}
      onClick={handleColorSelect}
      className="w-[55px] h-[48px] rounded-md cursor-pointer focus:outline-none border-[1px] border-solid border-gray-300 hover:opacity-50"
    >
    </button>
  );
};

export default ColorBox;
