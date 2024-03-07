import Banner from "./Banner";
import Filter from "./Filter";
import { MdFilterListAlt } from "react-icons/md";
import { useState } from "react";
import JobList from "./Jobs/JobList";
import "./index.css";

export default function AllJobs() {
  const [clicked, setClicked] = useState("All Jobs");
  const toggleClick = (value) => {
    setClicked(value);
  };

  const filterItems = [
    { value: "All Jobs", label: "All Jobs" },
    { value: "TAships", label: "Coding Ninjas TAships" },
    { value: "Eligible", label: "Eligible" },
    { value: "Applied", label: "Applied" },
  ];

  return (
    <div className="pt-16 flex flex-col items-center apply-font">
      <div className="flex flex-col w-[1024px] max-lg:w-[512px] max-[500px]:w-[380px]  max-[500px]:px-2">
        {/* banner */}
        <div className="flex w-full">
          <Banner />
        </div>
        {/* filters */}
        <div className="flex w-full flex-row my-2 border-b border-gray-300">
          {/* filters carousel */}
          <div className="w-full flex max-lg:overflow-x-scroll">
            {filterItems.map((item) => (
              <div
                key={item.value}
                className=""
                onClick={() => toggleClick(item.value)}
              >
                <Filter value={item.label} isClicked={clicked === item.value} />
              </div>
            ))}
          </div>
        </div>
        {/* filter button */}
        <div className="flex w-full border-gray-300 border-b">
          <button className="flex flex-row items-center text-sm text-orange-500 py-1 px-3 border-2 border-orange-500 rounded-md mt-2 mb-4 hover:bg-orange-500 hover:text-white">
            <div className="mr-1">
              <MdFilterListAlt size={20} />
            </div>
            ADD FILTER
          </button>
        </div>
        {/* jobs list */}
        <div className="flex w-full">
          <JobList category={clicked} />
        </div>
      </div>
    </div>
  );
}
