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
import TaskCards from "./TaskCards";
import TaskDetailsTable from "./TaskDetailsTable";

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
  // Extract counts for TaskCards
  const pendingCount = taskData[taskData.length - 1].pending;
  const inProgressCount = taskData[taskData.length - 1].inProgress;
  const inReviewCount = taskData[taskData.length - 1].inReview;
  const completedCount = taskData[taskData.length - 1].completed;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Greeting Section */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Hi, Fred</h1>
      <p className="text-gray-600 mb-8">This is your task summary so far</p>

      {/* Task Cards Section */}
      <TaskCards
        pending={pendingCount}
        inProgress={inProgressCount}
        inReview={inReviewCount}
        completed={completedCount}
      />

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

      {/* Donut Chart and Task Details Table Section */}
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
        <TaskDetailsTable data={taskData} />
      </div>
    </div>
  );
};

export default Dashboard;
