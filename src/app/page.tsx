"use client";
import { useState, useEffect } from "react";
import Sidebar from "../app/components/Sidebar";
import Header from "../app/components/Header";
import MessageSection from "../app/components/MessageSection";
import CommunitySection from "../app/components/CommunitySection";
import Jobs from "@/app/components/Jobs";
import ScheduleSection from "../app/components/ScheduleSection";
import Dashboard from "./components/Dashboard";

export default function Home() {
  // Initialize state for the active tab
  const [activeTab, setActiveTab] = useState<string>(() => {
    // Retrieve the active tab from localStorage or default to "dashboard"
    if (typeof window !== "undefined") {
      const savedTab = localStorage.getItem("activeTab");
      return savedTab || "dashboard";
    }
    return "dashboard";
  });

  // Update localStorage whenever the active tab changes
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed on the Left */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header - Fixed on Top */}
        <Header />

        {/* Dynamic Content Based on Active Tab */}
        <div className="p-6 overflow-y-auto">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "messages" && <MessageSection />}
          {activeTab === "community" && <CommunitySection />}
          {activeTab === "jobs" && <Jobs />}
          {activeTab === "schedule" && <ScheduleSection />}
          {/* {activeTab === "analysis" && <AnalysisSection />} */}
        </div>
      </div>
    </div>
  );
}
