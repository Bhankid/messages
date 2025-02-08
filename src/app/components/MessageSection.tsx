import React from "react";
import MessagesPreview from "./MessagesPreview";
import ChatHeader from "./ChatHeader";
import Chat from "./Chat";
import ChatInput from "./ChatInput";

const MessageSection = () => {
  return (
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
  );
};

export default MessageSection;
