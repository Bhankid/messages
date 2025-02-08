"use client";

import { useState } from "react";
import Sidebar from "../app/components/Sidebar";
import Header from "../app/components/Header";
import MessageSection from "../app/components/MessageSection";
import CommunitySection from "../app/components/CommunitySection";
// import JobsSection from "../components/JobsSection";
import ScheduleSection from "../app/components/ScheduleSection";
// import AnalysisSection from "../components/AnalysisSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("messages");

  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed on the Left */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header - Fixed on Top */}
        <Header />

        {/* Dynamic Content Based on Active Tab */}
        <div className="p-6">
          {activeTab === "messages" && <MessageSection />}
          {activeTab === "community" && <CommunitySection />}
          {/* {activeTab === "jobs" && <JobsSection />} */}
          {activeTab === "schedule" && <ScheduleSection />}
          {/* {activeTab === "analysis" && <AnalysisSection />} */}
        </div>
      </div>
    </div>
  );
}
