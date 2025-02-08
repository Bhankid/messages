import Image from "next/image";
import { Star, Search, ThreeDotsVertical } from "react-bootstrap-icons";

function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 border-b border-gray-300">
      <div className="flex items-center">
        <Image
          src="/self.jpg"
          alt="Profile picture of Ammi Watts"
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="ml-2 text-gray-800">Ammi Watts</span>
      </div>
      <div className="flex items-center space-x-4">
        <Star className="text-blue-500 w-4 h-4" />
        <Search className="text-gray-600 w-4 h-4" />
        <ThreeDotsVertical className="text-gray-600 w-5 h-5" />
      </div>
    </div>
  );
}

export default ChatHeader;
