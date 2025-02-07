import Image from "next/image";
import {
  Grid,
  Briefcase,
  Calendar,
  People,
  Chat,
  GraphUp,
  DoorOpen,
} from "react-bootstrap-icons";

function Sidebar() {
  return (
    <div className="w-44 bg-gray-50 flex flex-col h-screen">
      {/* Logo Section */}
      <div className="flex items-center justify-center py-6 border-b border-gray-200">
        <Image
          src="/Logo.jpg"
          alt="Logo"
          width={24}
          height={24}
          className="mr-2"
        />
        <span className="text-xl font-bold">Workhubs</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-4 space-y-4 overflow-y-auto">
        <a
          href="#"
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200 rounded-md"
        >
          <Grid className="mr-3 w-5 h-5" />
          <span>DashBoard</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200 rounded-md"
        >
          <Briefcase className="mr-3 w-5 h-5" />
          <span>Jobs</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200 rounded-md"
        >
          <Calendar className="mr-3 w-5 h-5" />
          <span>Schedule</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200 rounded-md"
        >
          <People className="mr-3 w-5 h-5" />
          <span>Community</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-8 text-white bg-blue-500 rounded-lg"
        >
          <Chat className="mr-3 w-5 h-5" />
          <span>Messages</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200 rounded-md"
        >
          <GraphUp className="mr-3 w-5 h-5" />
          <span>Analysis</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200 rounded-md"
        >
          <DoorOpen className="mr-3 w-5 h-5" />
          <span>Log out</span>
        </a>
      </nav>

    </div>
  );
}

export default Sidebar;
