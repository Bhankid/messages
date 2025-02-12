import React from "react";
import CountUp from "react-countup";

interface TaskCardProps {
  title: string;
  count: number;
  color: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, count, color }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center 
                 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
    >
      {/* Use CountUp for animated number counting */}
      <CountUp
        end={count} // The final value to count up to
        duration={2} // Duration of the animation in seconds
        className={`text-4xl font-bold ${color}`}
      />
      <p className="text-gray-600 mt-2">{title}</p>
    </div>
  );
};

interface TaskCardsProps {
  pending: number;
  inProgress: number;
  inReview: number;
  completed: number;
}

const TaskCards: React.FC<TaskCardsProps> = ({
  pending,
  inProgress,
  inReview,
  completed,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <TaskCard title="Pending" count={pending} color="text-red-500" />
      <TaskCard title="In Progress" count={inProgress} color="text-blue-500" />
      <TaskCard title="In Review" count={inReview} color="text-yellow-500" />
      <TaskCard title="Completed" count={completed} color="text-green-500" />
    </div>
  );
};

export default TaskCards;
