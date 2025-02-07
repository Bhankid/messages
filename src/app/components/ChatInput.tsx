import { EmojiSmile, Plus, Mic, HandThumbsUp } from "react-bootstrap-icons";

function ChatInput() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center bg-white rounded-full shadow-md p-2 w-full max-w-2xl">
        <button className="text-blue-500 text-xl p-2">
          <EmojiSmile className="w-6 h-6" />
        </button>
        <input
          type="text"
          placeholder="Type your message here ..."
          className="flex-grow px-4 py-2 text-gray-500 bg-transparent outline-none"
        />
        <button className="text-blue-500 text-xl p-2">
          <Plus className="w-6 h-6" />
        </button>
        <button className="text-blue-500 text-xl p-2">
          <Mic className="w-6 h-6" />
        </button>
        <button className="text-blue-500 text-xl p-2">
          <HandThumbsUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
