import Image from "next/image";

interface ChatMessageProps {
  text?: string;
  time: string;
  isSender: boolean;
  isAudio: boolean;
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
        className={`max-w-xs p-2 rounded-lg ${
          isSender ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        {isAudio ? (
          <div className="flex items-center">
            <button className="mr-2">
              <i className="fas fa-play text-blue-500"></i>
            </button>
            <Image
              src="/sef.jpg"
              alt="Audio waveform"
              width={100}
              height={20}
              className="mr-2"
            />
            <span>01:24</span>
          </div>
        ) : (
          <p>{text}</p>
        )}
      </div>
      <span className="text-xs text-gray-500 ml-2 self-end">{time}</span>
    </div>
  );
};

const Chat: React.FC<object> = () => {
  return (
    <div className="p-2">
      <div className="text-center text-gray-500 text-xs mb-4">
        Today | 06:32 PM
      </div>
      <ChatMessage
        text="Oh, hello! All perfectly. I will check it and get back to you soon"
        time="04:45 PM"
        isSender={false}
        isAudio={false}
      />
      <ChatMessage
        text="Oh, hello! All perfectly. I will check it and get back to you soon"
        time="04:45 PM"
        isSender={true}
        isAudio={false}
      />
      <ChatMessage
        text="Oh, hello! All perfectly. I will check it and get back to you soon"
        time="04:45 PM"
        isSender={false}
        isAudio={false}
      />
      <ChatMessage
        text="Oh, hello! All perfectly. I will check it and get back to you soon"
        time="04:45 PM"
        isSender={true}
        isAudio={false}
      />
      <ChatMessage isAudio={true} time="04:45 PM" isSender={false} />
    </div>
  );
};

export default Chat;
