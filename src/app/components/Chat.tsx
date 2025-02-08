"use client";
import { PlayFill, ClockFill } from "react-bootstrap-icons";

interface ChatMessageProps {
  text?: string;
  time: string;
  isSender: boolean;
  isAudio?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  text,
  time,
  isSender,
  isAudio,
}) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`relative max-w-[75%] md:max-w-[60%] lg:max-w-[50%] p-4 rounded-2xl shadow-lg ${
          isSender
            ? "bg-blue-500 text-white shadow-blue-500/30 hover:shadow-blue-500/50"
            : "bg-gray-200 text-gray-900 shadow-gray-400/20 hover:shadow-gray-400/40"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Audio Message */}
        {isAudio ? (
          <div className="flex items-center space-x-3">
            <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
              <PlayFill className="w-6 h-6 text-blue-500" />
            </button>
            <div className="flex-grow h-2 bg-gray-300 rounded-full relative overflow-hidden">
              <div
                className="h-2 bg-blue-500 rounded-full w-2/5"
                style={{ animation: "progress 2s ease-in-out infinite" }}
              ></div>
            </div>
            <span className="text-sm font-medium">01:24</span>
          </div>
        ) : (
          <p className="text-sm leading-relaxed font-medium">{text}</p>
        )}

        {/* Timestamp */}
        <span
          className={`absolute text-xs flex items-center space-x-1 ${
            isSender
              ? "right-2 bottom-1 text-gray-200"
              : "left-2 bottom-1 text-gray-500"
          }`}
        >
          <ClockFill className="w-3 h-3" />
          <span>{time}</span>
        </span>
      </div>
    </div>
  );
};

const Chat: React.FC = () => {
  return (
    <div className="p-2 h-full overflow-y-auto bg-gray-50">
      <div className="text-center text-gray-500 text-xs mb-4">
        Today | 06:32 PM
      </div>

      {/* Sample Messages */}
      <ChatMessage
        text="Hey there! Just checking in, let me know if you need anything."
        time="04:45 PM"
        isSender={false}
      />
      <ChatMessage
        text="Oh, hello! All perfectly. I will check it and get back to you soon."
        time="04:47 PM"
        isSender={true}
      />
      <ChatMessage
        text="Got it, thanks! Looking forward to your feedback."
        time="04:50 PM"
        isSender={false}
      />
      <ChatMessage
        text="Sure! I'll review everything and send my thoughts by tomorrow morning."
        time="04:52 PM"
        isSender={true}
      />
      <ChatMessage
        text="That sounds great! Thanks for your help."
        time="04:55 PM"
        isSender={false}
      />
      <ChatMessage isAudio={true} time="04:58 PM" isSender={true} />
    </div>
  );
};

export default Chat;
