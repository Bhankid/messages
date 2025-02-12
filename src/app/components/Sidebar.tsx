"use client";
import Image from "next/image";
import {
  FaHome,
  FaBriefcase,
  FaCalendarAlt,
  FaUsers,
  FaComments,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa"; 
import React from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const getActiveClass = (tab: string) =>
    activeTab === tab
      ? "bg-blue-500 text-white"
      : "text-blue-500 hover:bg-gray-200";

  return (
    <div className="w-44 bg-gray-50 flex flex-col h-screen">
      {/* Logo Section */}
      <div className="flex items-center justify-center py-6 border-b border-gray-200">
        <Image
          src="/Logo.jpg"
          alt="Logo"
          width={24}
          height={24}
          className="mr-2"
        />
        <span className="text-xl font-bold">Workhubs</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-4 space-y-4 overflow-y-auto">
        {/* Dashboard */}
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`flex items-center py-3 px-8 rounded-lg w-full ${getActiveClass(
            "dashboard"
          )}`}
        >
          <FaHome className="mr-3 w-5 h-5" />
          <span>Dashboard</span>
        </button>

        {/* Jobs */}
        <button
          onClick={() => setActiveTab("jobs")}
          className={`flex items-center py-3 px-8 rounded-lg w-full ${getActiveClass(
            "jobs"
          )}`}
        >
          <FaBriefcase className="mr-3 w-5 h-5" />
          <span>Jobs</span>
        </button>

        {/* Schedule */}
        <button
          onClick={() => setActiveTab("schedule")}
          className={`flex items-center py-3 px-8 rounded-lg w-full ${getActiveClass(
            "schedule"
          )}`}
        >
          <FaCalendarAlt className="mr-3 w-5 h-5" />
          <span>Schedule</span>
        </button>

        {/* Community */}
        <button
          onClick={() => setActiveTab("community")}
          className={`flex items-center py-3 px-8 rounded-lg w-full ${getActiveClass(
            "community"
          )}`}
        >
          <FaUsers className="mr-3 w-5 h-5" />
          <span>Community</span>
        </button>

        {/* Messages */}
        <button
          onClick={() => setActiveTab("messages")}
          className={`flex items-center py-3 px-8 rounded-lg w-full ${getActiveClass(
            "messages"
          )}`}
        >
          <FaComments className="mr-3 w-5 h-5" />
          <span>Messages</span>
        </button>

        {/* Analysis */}
        <button
          onClick={() => setActiveTab("analysis")}
          className={`flex items-center py-3 px-8 rounded-lg w-full ${getActiveClass(
            "analysis"
          )}`}
        >
          <FaChartLine className="mr-3 w-5 h-5" />
          <span>Analysis</span>
        </button>

        {/* Log Out */}
        <button
          onClick={() => setActiveTab("logout")}
          className={`flex items-center py-3 px-8 text-red-500 rounded-lg w-full ${getActiveClass(
            "logout"
          )}`}
        >
          <FaSignOutAlt className="mr-3 w-5 h-5" />
          <span>Log out</span>
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
