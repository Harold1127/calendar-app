import React from "react";
import CurrentDateDisplay from "../common/CurrentDateDisplay";
import Banner from "./Banner";
import AddReminderButton from "../common/AddReminderButton";

const HomeView: React.FC = () => {
  return (
    <div className="p-10 w-3/5">
      <div className="absolute top-[50px] w-3/5 flex items-center">
        <CurrentDateDisplay />
        <AddReminderButton href="/calendar/add-reminder" />
      </div>
      <Banner />
    </div>
  );
};

export default HomeView;
