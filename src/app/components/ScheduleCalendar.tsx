"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Bell,
  Envelope,
} from "react-bootstrap-icons";
import moment from "moment";

const ScheduleCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white p-2 rounded-lg shadow-sm flex-[1] flex flex-col h-full">
      {/* Header with Month and Navigation */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">
          {moment(date).format("MMMM, YYYY")}
        </h1>
        <div className="flex items-center">
          <button
            onClick={() => setDate(moment(date).subtract(1, "month").toDate())}
            className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-l-md"
          >
            <ChevronLeft className="text-gray-500" />
          </button>
          <button
            onClick={() => setDate(moment(date).add(1, "month").toDate())}
            className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-r-md"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-gray-100 p-2 rounded-lg w-64 mb-4">
        <Calendar
          onChange={(value) => value instanceof Date && setDate(value)}
          value={date}
          tileClassName={({ date, view }) =>
            view === "month" && moment(date).format("D") === "16"
              ? "bg-red-500 text-white rounded-full"
              : ""
          }
          className="w-full border-none shadow-sm rounded-lg"
        />
      </div>

      {/* Add New Task Button */}
      <button className="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center mb-4">
        <Plus className="text-white text-3xl bg-red-200 rounded-lg mr-2" />
        Add New Task
      </button>

      {/* Monthly Stats */}
      <div className="flex justify-between mb-4">
        <div className="bg-gray-100 p-2 rounded-lg w-1/2 mr-2">
          <h2 className="text-sm font-semibold">Your Best Month</h2>
          <p className="text-xs text-gray-500">{moment(date).format("MMMM")}</p>
          <p className="text-xs text-gray-500">205 files via mail</p>
        </div>
        <div className="bg-blue-500 text-white p-2 rounded-lg w-1/2 ml-2">
          <h2 className="text-sm font-semibold">Active Project</h2>
          <p className="text-xs">{moment(date).format("MMMM")}</p>
          <p className="text-xs">205 files via mail</p>
        </div>
      </div>

      {/* Reminders Section */}
      <div className="bg-gray-100 p-2 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-semibold">Reminders</h2>
          <Bell className="text-blue-500" />
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <div className="bg-red-100 p-2 rounded-full mr-2">
               <Envelope className="text-red-500" />
              </div>
              <div>
                <p className="text-sm font-semibold">Your Subscription</p>
                <p className="text-xs text-blue-500">Review Now</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">6:38 PM</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCalendar;
