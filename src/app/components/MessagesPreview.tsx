import Image from "next/image";
import { Star, Search, ThreeDotsVertical } from "react-bootstrap-icons";

interface Message {
  id: number;
  name: string;
  message: string;
  time: string;
  date: string;
  img: string;
  alt: string;
}

const messages: Message[] = [
  {
    id: 1,
    name: "Jennifer Markus",
    message: "Hey! Did you finish the Hi-FI wireframes for flora app design?",
    time: "05:30 PM",
    date: "Today",
    img: "/self.jpg",
    alt: "Profile picture of Jennifer Markus",
  },
  {
    id: 2,
    name: "Iva Ryan",
    message: "Hey! Did you finish the Hi-FI wireframes for flora app design?",
    time: "05:30 PM",
    date: "Today",
    img: "/self.jpg",
    alt: "Profile picture of Iva Ryan",
  },
  {
    id: 3,
    name: "Jerry Helfer",
    message: "Hey! Did you finish the Hi-FI wireframes for flora app design?",
    time: "05:30 PM",
    date: "Today",
    img: "/self.jpg",
    alt: "Profile picture of Jerry Helfer",
  },
  {
    id: 4,
    name: "David Elson",
    message: "Hey! Did you finish the Hi-FI wireframes for flora app design?",
    time: "05:30 PM",
    date: "Today",
    img: "/self.jpg",
    alt: "Profile picture of David Elson",
  },
  {
    id: 5,
    name: "Mary Freund",
    message: "Hey! Did you finish the Hi-FI wireframes for flora app design?",
    time: "05:30 PM",
    date: "Today",
    img: "/self.jpg",
    alt: "Profile picture of Mary Friend",
  },
];

function MessagesPreview() {
  return (
    <div className="max-w-md mx-auto bg-white overflow-hidden">
      <div className="flex justify-between items-center p-2 border-b">
        <h1 className="text-lg font-semibold">All Messages</h1>
        <ThreeDotsVertical className="text-gray-500 w-6 h-6" />
      </div>
      <div className="p-2">
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search or start a new chat"
          />
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        </div>
      </div>
      <div>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex items-center p-4 border-b hover:bg-gray-100"
          >
            <Image
              src={msg.img}
              alt={msg.alt}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold">{msg.name}</h2>
                <Star className="text-blue-500 w-5 h-5" />
              </div>
              <p className="text-sm text-gray-600">{msg.message}</p>
              <div className="flex items-center text-xs text-gray-400 mt-1">
                <i className="fas fa-circle text-blue-500 mr-1"></i>
                <span>{msg.date}</span>
                <span className="mx-1">|</span>
                <span>{msg.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessagesPreview;
