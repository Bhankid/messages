import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface TaskData {
  month: string;
  pending: number;
  inProgress: number;
  inReview: number;
  completed: number;
}

const taskData: TaskData[] = [
  { month: "Jan", pending: 50, inProgress: 30, inReview: 20, completed: 10 },
  { month: "Feb", pending: 45, inProgress: 35, inReview: 25, completed: 15 },
  { month: "Mar", pending: 40, inProgress: 40, inReview: 30, completed: 20 },
  { month: "Apr", pending: 35, inProgress: 45, inReview: 35, completed: 25 },
  { month: "May", pending: 30, inProgress: 50, inReview: 40, completed: 30 },
  { month: "Jun", pending: 25, inProgress: 55, inReview: 45, completed: 35 },
  { month: "Jul", pending: 20, inProgress: 60, inReview: 50, completed: 40 },
];

const pieData = [
  { name: "Pending", value: 20 },
  { name: "InProgress", value: 60 },
  { name: "InReview", value: 50 },
  { name: "Completed", value: 40 },
];

const COLORS = ["#FF8042", "#00C49F", "#FFBB28", "#8884d8"];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Greeting Section */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Hi, Fred</h1>
      <p className="text-gray-600 mb-8">This is your task summary so far</p>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Pending Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-red-500">20</span>
          <p className="text-gray-600 mt-2">Pending</p>
        </div>
        {/* InProgress Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-blue-500">60</span>
          <p className="text-gray-600 mt-2">In Progress</p>
        </div>
        {/* InReview Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-yellow-500">50</span>
          <p className="text-gray-600 mt-2">In Review</p>
        </div>
        {/* Completed Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-green-500">40</span>
          <p className="text-gray-600 mt-2">Completed</p>
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Task Trends
        </h2>
        <LineChart
          width={800}
          height={300}
          data={taskData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pending"
            stroke="#FF8042"
            name="Pending"
          />
          <Line
            type="monotone"
            dataKey="inProgress"
            stroke="#00C49F"
            name="In Progress"
          />
          <Line
            type="monotone"
            dataKey="inReview"
            stroke="#FFBB28"
            name="In Review"
          />
          <Line
            type="monotone"
            dataKey="completed"
            stroke="#8884d8"
            name="Completed"
          />
        </LineChart>
      </div>

      {/* Donut Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Donut Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Task Distribution
          </h2>
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Task Details Table */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Task Details
          </h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Month</th>
                <th className="py-2">Pending</th>
                <th className="py-2">In Progress</th>
                <th className="py-2">In Review</th>
                <th className="py-2">Completed</th>
              </tr>
            </thead>
            <tbody>
              {taskData.map((task, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{task.month}</td>
                  <td className="py-2">{task.pending}</td>
                  <td className="py-2">{task.inProgress}</td>
                  <td className="py-2">{task.inReview}</td>
                  <td className="py-2">{task.completed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
