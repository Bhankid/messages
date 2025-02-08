import React from 'react';
import ScheduleHeader from './ScheduleHeader';
import Scheduler from './Scheduler';
import ScheduleCalendar from './ScheduleCalendar';

const ScheduleSection = () => {
  return (
    <div>
      {/* Schedule Header */}
      <ScheduleHeader />

      {/* Schedule */}
      <Scheduler />

      {/* Schedule Calendar */}
      <ScheduleCalendar />
    </div>
  );
};

export default ScheduleSection;