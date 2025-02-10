import React from 'react';
import { ThreeDotsVertical } from "react-bootstrap-icons";
import { FC } from 'react';
import Image from 'next/image';

interface JobCardProps {
  title: string;
  status: 'ACTIVE' | 'CLOSED' | 'INACTIVE';
  department: string;
  location: string;
  candidates: number;
  created: string;
}

const JobCard: FC<JobCardProps> = ({ 
  title, 
  status, 
  department, 
  location, 
  candidates, 
  created 
}) => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'ACTIVE':
        return 'bg-green-100 text-green-600';
      case 'CLOSED':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-red-100 text-red-600';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all ease-in-out flex justify-between items-center mb-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center mt-2">
          <span
            className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {department} • {location}
        </p>
        <div className="flex items-center mt-2">
          {candidates > 0 && (
            <div className="flex -space-x-2">
              <Image
                className="w-6 h-6 rounded-full border-2 border-white"
                src="/self.jpg"
                alt="Candidate 2"
                width={24}
                height={24}
              />
              <Image
                className="w-6 h-6 rounded-full border-2 border-white"
                src="/self.jpg"
                alt="Candidate 2"
                width={24}
                height={24}
              />
              <Image
                className="w-6 h-6 rounded-full border-2 border-white"
                src="/self.jpg"
                alt="Candidate 3"
                width={24}
                height={24}
              />
            </div>
          )}
          <p className="text-sm text-gray-500 ml-2">
            {candidates} Candidates Applied
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <select className="border border-gray-300 rounded-md p-2 text-sm">
          <option>{status}</option>
          <option>CLOSED</option>
          <option>INACTIVE</option>
        </select>
        <span className="text-sm text-gray-500">{created}</span>
        <ThreeDotsVertical className="text-gray-500" />
      </div>
    </div>
  );
};

export default JobCard;
