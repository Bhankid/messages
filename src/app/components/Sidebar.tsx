"use client";

import Image from "next/image";
import {
  Grid,
  Briefcase,
  Calendar,
  People,
  Chat,
  GraphUp,
  DoorOpen,
} from "react-bootstrap-icons";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const getActiveClass = (tab: string) =>
    activeTab === tab
      ? "bg-blue-500 text-white"
      : "text-gray-700 hover:bg-gray-200";

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
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`flex items-center py-2 px-8 rounded-md w-full ${getActiveClass(
            "dashboard"
          )}`}
        >
          <Grid className="mr-3 w-5 h-5" />
          <span>Dashboard</span>
        </button>
        <button
          onClick={() => setActiveTab("jobs")}
          className={`flex items-center py-2 px-8 rounded-md w-full ${getActiveClass(
            "jobs"
          )}`}
        >
          <Briefcase className="mr-3 w-5 h-5" />
          <span>Jobs</span>
        </button>
        <button
          onClick={() => setActiveTab("schedule")}
          className={`flex items-center py-2 px-8 rounded-md w-full ${getActiveClass(
            "schedule"
          )}`}
        >
          <Calendar className="mr-3 w-5 h-5" />
          <span>Schedule</span>
        </button>
        <button
          onClick={() => setActiveTab("community")}
          className={`flex items-center py-2 px-8 rounded-md w-full ${getActiveClass(
            "community"
          )}`}
        >
          <People className="mr-3 w-5 h-5" />
          <span>Community</span>
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`flex items-center py-2 px-8 rounded-md w-full ${getActiveClass(
            "messages"
          )}`}
        >
          <Chat className="mr-3 w-5 h-5" />
          <span>Messages</span>
        </button>
        <button
          onClick={() => setActiveTab("analysis")}
          className={`flex items-center py-2 px-8 rounded-md w-full ${getActiveClass(
            "analysis"
          )}`}
        >
          <GraphUp className="mr-3 w-5 h-5" />
          <span>Analysis</span>
        </button>
        <button
          onClick={() => setActiveTab("logout")}
          className={`flex items-center py-2 px-8 rounded-md w-full ${getActiveClass(
            "logout"
          )}`}
        >
          <DoorOpen className="mr-3 w-5 h-5" />
          <span>Log out</span>
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
