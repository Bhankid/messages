"use client";
import Image from "next/image";
import { Star, Search, Plus, ThreeDotsVertical } from "react-bootstrap-icons";
import React from "react";

const CommunityHeader: React.FC = () => {
  return (
    <div className="flex items-center p-4 bg-white shadow-sm border-b border-gray-300">
      {/* Title Section */}
      <div className="flex items-center">
        <span className="text-lg font-medium">Design Task</span>
        <button className="ml-2 focus:outline-none">
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

      {/* Avatars Section */}
      <div className="flex items-center ml-4">
        {/* Avatar Images */}
        <Image
          src="/Rectangle 2.png"
          alt="Avatar 1"
          width={32}
          height={32}
          className="rounded-lg mx-1"
        />
        <Image
          src="/Rectangle 3.png"
          alt="Avatar 2"
          width={32}
          height={32}
          className="rounded-lg mx-1"
        />
        <Image
          src="/Rectangle 4.png"
          alt="Avatar 3"
          width={32}
          height={32}
          className="rounded-lg mx-1"
        />

        {/* Add Avatar Button */}
        <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center mx-1">
          <Plus className="text-white text-2xl" />
        </div>
      </div>

      {/* Action Icons Section */}
      <div className="flex items-center ml-auto">
        <Star className="text-blue-500 mx-2 cursor-pointer" />
        <Search className="text-gray-500 mx-2 cursor-pointer" />
        <ThreeDotsVertical className="text-gray-500 mx-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default CommunityHeader;
