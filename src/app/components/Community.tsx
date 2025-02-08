"use client";
import Image from "next/image";
import { Plus, Chat, Paperclip, ThreeDotsVertical } from "react-bootstrap-icons";
import React from "react";

// Define TypeScript interfaces for props
interface Task {
  date: string;
  title: string;
  tags: string[];
  avatars: string[];
  comments: number;
  attachments: number;
}

interface ColumnProps {
  title: string;
  tasks: Task[];
}

const TaskCard: React.FC<Task> = ({
  date,
  title,
  tags,
  avatars,
  comments,
  attachments,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    {/* Date */}
    <div className="text-gray-500 text-sm mb-2">{date}</div>
    {/* Title */}
    <div className="text-lg font-semibold mb-2">{title}</div>
    {/* Tags */}
    <div className="flex flex-wrap mb-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
    {/* Avatars */}
    <div className="flex items-center mb-2">
      {avatars.map((avatar, index) => (
        <Image
          key={index}
          src={avatar}
          alt={`Avatar ${index + 1}`}
          width={24}
          height={24}
          className="w-6 h-6 rounded-full mr-1"
        />
      ))}
    </div>
    {/* Comments and Attachments */}
    <div className="flex justify-between text-gray-500 text-sm">
      <div className="flex items-center">
        <Chat className="mr-1" /> {comments}
      </div>
      <div className="flex items-center">
        <Paperclip className="mr-1" /> {attachments}
      </div>
    </div>
  </div>
);

const Column: React.FC<ColumnProps> = ({ title, tasks }) => (
  <div className="w-full md:w-1/4 p-2">
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      {/* Column Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <ThreeDotsVertical className="text-gray-500" />
      </div>
      {/* Task Cards */}
      {tasks.map((task, index) => (
        <TaskCard key={index} {...task} />
      ))}
      {/* Add New Task Button */}
      <button className="w-full bg-blue-100 text-blue-500 py-2 rounded-lg mt-4 flex items-center justify-center">
        <Plus className="mr-2" /> Add New Task
      </button>
    </div>
  </div>
);

const Community: React.FC = () => {
  const tasks: Task[] = [
    {
      date: "5 July, 2020",
      title: "HI-Fi wireframes for flora app design",
      tags: ["Design", "Wireframe"],
      avatars: [
        "/image 3.png",
        "/image 3.png",
        "/image 3.png",
        "/image 3.png",
      ],
      comments: 4,
      attachments: 2,
    },
    {
      date: "5 July, 2020",
      title: "UI/UX improvements for dashboard",
      tags: ["UI", "UX"],
      avatars: [
        "/image 3.png",
        "/image 3.png",
        "/image 3.png",
        "/image 3.png",
      ],
      comments: 3,
      attachments: 1,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-2">
        <Column title="Backlog" tasks={tasks} />
        <Column title="In Progress" tasks={tasks} />
        <Column title="In Review" tasks={tasks} />
        <Column title="Completed" tasks={tasks} />
      </div>
    </div>
  );
};

export default Community;
