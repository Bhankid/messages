import React from "react";

interface TaskData {
  month: string;
  pending: number;
  inProgress: number;
  inReview: number;
  completed: number;
}

interface TaskDetailsTableProps {
  data: TaskData[];
}

const TaskDetailsTable: React.FC<TaskDetailsTableProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Details</h2>
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
          {data.map((task, index) => (
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
  );
};

export default TaskDetailsTable;
