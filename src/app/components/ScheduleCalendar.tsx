import { ChevronLeft, ChevronRight, Plus, Bell } from "react-bootstrap-icons";

const ScheduleCalendar = () => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md flex-[1] flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">March, 2020</h1>
        <div className="flex items-center">
        <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-l-md">
          <ChevronLeft className="text-gray-500" />
        </button>
        <button className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-r-md">
          <ChevronRight className="text-white" />
        </button>
      </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>
        <div className="grid grid-cols-7 text-center text-sm">
          {[...Array(31)].map((_, i) => (
            <div
              key={i}
              className={`py-1 ${
                i === 16 ? "bg-red-500 text-white rounded-full" : ""
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <button className="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center mb-4">
        <Plus className="text-white text-3xl bg-red-200 rounded-lg mr-2" />
        Add New Task
      </button>
      <div className="flex justify-between mb-4">
        <div className="bg-gray-100 p-2 rounded-lg w-1/2 mr-2">
          <h2 className="text-sm font-semibold">Your Best Month</h2>
          <p className="text-xs text-gray-500">March</p>
          <p className="text-xs text-gray-500">205 file via mail</p>
        </div>
        <div className="bg-blue-500 text-white p-2 rounded-lg w-1/2 ml-2">
          <h2 className="text-sm font-semibold">Active Project</h2>
          <p className="text-xs">March</p>
          <p className="text-xs">205 file via mail</p>
          <i className="fas fa-ellipsis-h float-right"></i>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-semibold">Reminders</h2>
          <Bell className="text-blue-500" />
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <div className="bg-red-100 p-2 rounded-full mr-2">
                <i className="fas fa-microphone text-red-500"></i>
              </div>
              <div>
                <p className="text-sm font-semibold">Your Subscription</p>
                <p className="text-xs text-blue-500">Review Now</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">6:38 PM</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCalendar;
