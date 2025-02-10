import { FC } from "react";
import { Search, Plus } from "react-bootstrap-icons";
import JobCard from "@/app/components/JobCard";

const Jobs: FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Recruitment</h1>
          <p className="text-gray-500">Here&apos;s all job list</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              className="border rounded-md p-2 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search what you need"
            />
            <Search className="absolute left-3 top-3 text-gray-500" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm flex items-center">
            <Plus className="mr-2 text-2xl" /> Add New
          </button>
        </div>
      </header>

      <JobCard
        title="3D Designer"
        status="ACTIVE"
        department="Designer"
        location="Cape Coast"
        candidates={0}
        created="Created 3m ago"
      />
      <JobCard
        title="UI UX Designer"
        status="ACTIVE"
        department="Designer"
        location="Kumasi Ghana"
        candidates={10}
        created="Created 3m ago"
      />
      <JobCard
        title="Senior Android Developer"
        status="CLOSED"
        department="IT"
        location="Accra Ghana"
        candidates={115}
        created="Created 3m ago"
      />
      <JobCard
        title="Senior Android Developer"
        status="INACTIVE"
        department="IT"
        location="Accra Ghana"
        candidates={115}
        created="Created 3m ago"
      />
    </div>
  );
};

export default Jobs;
