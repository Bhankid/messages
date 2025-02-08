import React from "react";
import ScheduleHeader from "./ScheduleHeader";
import Scheduler from "./Scheduler";
import ScheduleCalendar from "./ScheduleCalendar";

const ScheduleSection = () => {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex flex-col flex-[3]">
        <ScheduleHeader />
        <Scheduler />
      </div>

      <div className="flex-[1] flex">
        <ScheduleCalendar />
      </div>
    </div>
  );
};

export default ScheduleSection;
