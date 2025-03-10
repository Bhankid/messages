import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

function ScheduleHeader() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-black">Schedule Task</h1>
        <span className="mx-2 border-l h-6"></span>
        <span className="text-blue-600">March, 2020</span>
      </div>
      <div className="flex items-center">
        <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-l-md">
          <ChevronLeft className="text-gray-500" />
        </button>
        <button className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-r-md">
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default ScheduleHeader;
