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
    <div className="w-52 h-screen bg-gray-50">
      <div className="flex items-center justify-center py-6">
        <Image
          src="/Logo.jpg"
          alt="Logo"
          width={24}
          height={24}
          className="mr-2"
        />
        <span className="text-xl font-bold">Workhubs</span>
      </div>
      <nav className="mt-10">
        <a
          href="#"
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200"
        >
          <Grid className="mr-3 w-5 h-5" />
          <span>DashBoard</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200"
        >
          <Briefcase className="mr-3 w-5 h-5" />
          <span>Jobs</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200"
        >
          <Calendar className="mr-3 w-5 h-5" />
          <span>Schedule</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200"
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
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200"
        >
          <GraphUp className="mr-3 w-5 h-5" />
          <span>Analysis</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200"
        >
          <DoorOpen className="mr-3 w-5 h-5" />
          <span>Log out</span>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
