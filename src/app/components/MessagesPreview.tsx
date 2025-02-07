"use client";
import Image from "next/image";
import { Star, Search, ThreeDotsVertical, ClockFill } from "react-bootstrap-icons";
import { useState } from "react";

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
    alt: "Profile picture of Mary Freund",
  },
];

function MessagesPreview() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Messages");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="max-w-md mx-auto bg-white overflow-hidden shadow-sm rounded-lg sm:max-w-full">
      {/* Header with Dropdown */}
      <div className="flex justify-between items-center p-4 border-b relative">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold">{selectedOption}</h1>
          <button
            onClick={toggleDropdown}
            className="ml-2 focus:outline-none"
            aria-label="Toggle dropdown"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-12 left-2 bg-white shadow-md rounded-lg overflow-hidden z-10 w-40">
            <ul>
              <li
                onClick={() => handleOptionClick("All Messages")}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                All Messages
              </li>
              <li
                onClick={() => handleOptionClick("Unread")}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                Unread
              </li>
              <li
                onClick={() => handleOptionClick("Starred")}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                Starred
              </li>
            </ul>
          </div>
        )}
        {/* Three Dots Icon */}
        <ThreeDotsVertical className="text-gray-500 w-6 h-6 cursor-pointer" />
      </div>

      {/* Search Bar */}
      <div className="p-2 border-b">
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search or start a new chat"
          />
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Messages List */}
      <div className="overflow-y-auto max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-250px)]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex items-center p-2 border-b hover:bg-gray-50 transition-colors duration-200"
          >
            <Image
              src={msg.img}
              alt={msg.alt}
              width={30}
              height={30}
              className="rounded-full"
            />
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold">{msg.name}</h2>
                <Star className="text-blue-500 w-4 h-4 cursor-pointer hover:text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 mt-1">{msg.message}</p>
              <div className="flex items-center text-xs text-gray-400 mt-1">
                <ClockFill className="mr-1 w-3 h-3" />
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