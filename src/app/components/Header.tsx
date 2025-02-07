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
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold">Messages</h1>
        <span className="ml-2 text-blue-500">6 Running Projects</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-4 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
        </div>
        <button className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full">
          <Plus className="w-6 h-6" />
        </button>
        <button className="relative">
          <Bell className="w-6 h-6 text-blue-500" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <Image
            src="/self.jpg"
            alt="Profile picture of Ammi Watts"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-sm">
            <p className="font-semibold">Ammi Watts</p>
            <p className="text-gray-500">My settings</p>
          </div>
        </div>
        <button>
          <ThreeDotsVertical className="w-6 h-6 text-gray-500" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Header;
