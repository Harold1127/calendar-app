import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ReminderItemProps = {
  id: string;
  title: string;
  date: string;
  time: string;
  color: string;
  description: string;
  [key: string]: string;
};

const ReminderItem: React.FC<ReminderItemProps> = ({
  id,
  title,
  date,
  time,
  color,
  description,
}) => {
  const router = useRouter();

  const handleEditClick = () => {
    router.push(`/calendar/edit-reminder?id=${id}`);
  };
  return (
    <div className="flex flox-row p-3 rounded-xl shadow-[0px_4px_18px_2px_#d1dcf0] w-[567px] h-[134px] bg-white h[134px] mb-8">
      <span
        className="w-3 h-28 rounded-xl "
        style={{ backgroundColor: color }}
      ></span>
      <div className="w-[412px] h-[100px] mx-3 flex flex-col justify-center ">
        <span className="text-sm font-semibold text-gray-100">{title}</span>
        <p className="text-lg text-darkslategray-100 font-semibold">
          {description}
        </p>
      </div>
      <span className="w-px h-28  bg-lavender "></span>
      <div className="ml-4 w-28 flex flex-col justify-center items-center">
        <Image
          src="/time.svg"
          alt=""
          width="0"
          height="0"
          className="w-[30px] overflow-hidden h-[30px] object-cover "
        />
        <p className="text-16xl text-gray-100 font-semibold "> {time}</p>
      </div>
      <button onClick={handleEditClick}>
        <Image
          src="/edit.svg"
          alt=""
          width="0"
          height="0"
          className="w-[40px] overflow-hidden h-[40px] object-cover absolute z-50  top-[125px] left-[566px] cursor-pointer"
        />
      </button>
    </div>
  );
};

export default ReminderItem;
