"use client";
import Image from "next/image";
import CalendarView from "./calendar/CalendarView";
import Copy from "./calendar/Copy";
import { open_sans } from "../styles/fonts";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${open_sans.className}antialiased relative bg-aliceblue w-[1119px] h-[976px] overflow-hidden text-left text-xs text-white flex justify-center items-center`}
    >
      <div className="absolute top-20 w-full h-full ">
        <Image
          src="/codelitt.svg"
          alt=""
          width="0"
          height="0"
          className="w-[265px] overflow-hidden h-[42px] object-cover "
        />
      </div>
      <div className="absolute  rounded-21xl bg-white shadow-[0px_4px_28px_2px_#d1dcf0] w-[1119px] h-[686px] flex mt-10">
        {children}
        <div className=" absolute  left-[668px] rounded-tl-none rounded-tr-21xl rounded-br-21xl rounded-bl-none [background:linear-gradient(180deg,_#101277,_#421f91)] w-[450px] h-[686px]">
          <CalendarView />
          <Copy />
        </div>
      </div>
    </div>
  );
}
