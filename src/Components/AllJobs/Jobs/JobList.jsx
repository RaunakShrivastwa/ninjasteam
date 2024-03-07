import React from "react";
import JobCard from "./JobCard";
import { jobs } from "../utils/jobs";

const JobList = ({ category }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col">
        {category === "All Jobs" ? (
          <div className="flex font-semibold mt-4 mb-2">All Jobs</div>
        ) : null}
        <div className="flex flex-col bg-gray-100">
          {jobs.map(
            (job) =>
              job.category === category && (
                <div className="flex">
                  <JobCard job={job} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;
