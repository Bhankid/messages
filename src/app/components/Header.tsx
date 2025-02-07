import type { NextPage } from "next";
import { Search, Plus, Bell, ThreeDotsVertical } from "react-bootstrap-icons";
import Image from "next/image";

interface HeaderProps {
  // Add any props you want to pass to the Header component
  children?: React.ReactNode;
}

const Header: NextPage<HeaderProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-semibold">Messages</h1>
        <div className="border-l border-gray-300 h-6 mx-2"></div>
        <span className="text-sm text-blue-500">6 Running Projects</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search Input with Neumorphic Effect */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none 
                       shadow-[inset_4px_4px_6px_rgba(0,0,0,0.1),_inset_-4px_-4px_6px_rgba(255,255,255,0.8)]"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-4 h-4" />
        </div>

        {/* Plus Button (Less Rounded) */}
        <button className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-md">
          <Plus className="w-4 h-4" />
        </button>

        {/* Notification Bell */}
        <button className="relative">
          <Bell className="w-4 h-4 text-blue-500" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Section (Name Before Image) */}
        <div className="flex items-center space-x-2">
          <div className="text-xs text-right">
            <p className="font-semibold">Ammi Watts</p>
            <p className="text-gray-500">My settings</p>
          </div>
          <Image
            src="/self.jpg"
            alt="Profile picture of Ammi Watts"
            width={32}
            height={32}
            className="rounded-lg"
          />
        </div>

        {/* Three Dots Menu */}
        <button>
          <ThreeDotsVertical className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {children}
    </div>
  );
};

export default Header;
