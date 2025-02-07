import ChatHeader from "../app/components/ChatHeader";
import MessagesPreview from "../app/components/MessagesPreview";
import Chat from "../app/components/Chat";
import ChatInput from "../app/components/ChatInput";
import Sidebar from "../app/components/Sidebar";
import Header from "../app/components/Header";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed on the Left */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header - Fixed on Top */}
        <Header />

        {/* Chat Section */}
        <div className="flex flex-1">
          {/* Messages Preview - Left Side */}
          <div className="w-1/4 bg-white border-r p-4">
            <MessagesPreview />
          </div>

          {/* Chat Area - Right Side */}
          <div className="flex flex-col flex-1">
            {/* Chat Header Below Main Header */}
            <ChatHeader />

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-2">
              <Chat />
            </div>

            {/* Chat Input at the Bottom */}
            <div className="p-2">
              <ChatInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
