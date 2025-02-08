"use client";
import Image from "next/image";
import { Plus, Chat, Paperclip, ThreeDots } from "react-bootstrap-icons";

// Define TypeScript interfaces for props
interface Task {
  date: string;
  title: string;
  tags: string[];
  avatars: string[];
  comments: number;
  attachments: number;
  imageUrl?: string; 
}

interface ColumnProps {
  title: string;
  tasks: Task[];
}

// Existing TaskCard Component
const TaskCard: React.FC<Task> = ({
  date,
  title,
  tags,
  avatars,
  comments,
  attachments,
}) => (
  <div className="bg-white p-2 rounded-lg shadow-md mb-4">
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
    {/* Avatars and Comments/Attachments */}
    <div className="flex justify-between mb-2">
      <div className="flex items-center">
        {avatars.map((avatar, index) => (
          <Image
            key={index}
            src={avatar}
            alt={`Avatar ${index + 1}`}
            width={24}
            height={24}
            className="w-6 h-6 rounded-lg mr-1"
          />
        ))}
      </div>
      <div className="flex text-gray-500 text-sm">
        <div className="flex items-center">
          <Chat className="mr-1" /> {comments}
        </div>
        <div className="flex items-center">
          <Paperclip className="mr-1" /> {attachments}
        </div>
      </div>
    </div>
  </div>
);

// New TaskCardWithImage Component
const TaskCardWithImage: React.FC<Task> = ({
  date,
  title,
  tags,
  avatars,
  comments,
  attachments,
  imageUrl,
}) => (
  <div className="bg-white p-2 rounded-lg shadow-md mb-4">
    {/* Image */}
    {imageUrl && (
      <div className="mb-4 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt="Task Image"
          width={400}
          height={200}
          className="w-full h-auto rounded-lg"
        />
      </div>
    )}
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
    {/* Avatars and Comments/Attachments */}
    <div className="flex justify-between mb-2">
      <div className="flex items-center">
        {avatars.map((avatar, index) => (
          <Image
            key={index}
            src={avatar}
            alt={`Avatar ${index + 1}`}
            width={24}
            height={24}
            className="w-6 h-6 rounded-lg mr-1"
          />
        ))}
      </div>
      <div className="flex text-gray-500 text-sm">
        <div className="flex items-center">
          <Chat className="mr-1" /> {comments}
        </div>
        <div className="flex items-center">
          <Paperclip className="mr-1" /> {attachments}
        </div>
      </div>
    </div>
  </div>
);

// Column Component
const Column: React.FC<ColumnProps> = ({ title, tasks }) => (
  <div className="w-full md:w-1/4 p-2">
    <div className="bg-white p-4 rounded-lg">
      {/* Column Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <ThreeDots className="text-gray-500 cursor-pointer" />
      </div>
      {/* Task Cards */}
      <div className="space-y-4">
        {tasks.map((task, index) =>
          task.imageUrl ? (
            <TaskCardWithImage key={index} {...task} />
          ) : (
            <TaskCard key={index} {...task} />
          )
        )}
      </div>
      {/* Add New Task Button */}
      <button className="mt-4 w-full bg-blue-200 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-300 transition-colors duration-200">
        <Plus className="mr-2 bg-blue-500 text-3xl rounded-lg text-white" /> Add
        New Task
      </button>
    </div>
  </div>
);

// Community Component
const Community: React.FC = () => {
  const allTasks: Task[] = [
    {
      date: "5 July, 2020",
      title: "HI-Fi wireframes for flora app design",
      tags: ["Design", "Wireframe"],
      avatars: [
        "/Rectangle 2.png",
        "/Rectangle 3.png",
        "/Rectangle 4.png",
        "/Group 6.png",
      ],
      comments: 4,
      attachments: 2,
    },
    {
      date: "5 July, 2020",
      title: "UI/UX improvements for dashboard",
      tags: ["Design", "Design"],
      avatars: [
        "/Rectangle 2.png",
        "/Rectangle 3.png",
        "/Rectangle 4.png",
        "/Group 6.png",
      ],
      comments: 3,
      attachments: 1,
      imageUrl: "/image 3.png",
    },
  ];

  // Randomize task cards for each column
  const backlogTasks: Task[] = [...allTasks];
  const inProgressTasks: Task[] = [allTasks[1], allTasks[0]]; // Image card at the top
  const inReviewTasks: Task[] = [allTasks[0], allTasks[0]]; // Two repeated normal task cards
  const completedTasks: Task[] = [allTasks[0], allTasks[1]]; // Image card at the bottom

  return (
    <div className="container mx-auto p-2">
      <div className="flex flex-wrap -mx-2">
        <Column title="Backlog" tasks={backlogTasks} />
        <Column title="In Progress" tasks={inProgressTasks} />
        <Column title="In Review" tasks={inReviewTasks} />
        <Column title="Completed" tasks={completedTasks} />
      </div>
    </div>
  );
};

export default Community;
