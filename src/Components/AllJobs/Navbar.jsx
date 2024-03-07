import { GoArrowUpRight } from "react-icons/go";
import { BiHelpCircle } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState("placement");
  const toggleClick = (value) => {
    setClicked(value);
  };
  return (
    <div className="flex flex-row items-center justify-between w-full border-b border-gray-200 shadow-sm text-sm font-medium fixed z-10 bg-white">
      {/* navbar left icons */}
      <div className="flex items-center">
        {/* logo */}
        <div className="flex items-center p-2 mx-4 cursor-pointer">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHkxOjORwGaavmrHY-65MxuA-g7jUYXeJdg&usqp=CAU"
              alt="logo"
              className="rounded-full w-7 h-7"
            />
          </div>
          <div className="font-bold ml-2">Classroom</div>
        </div>
        {/* navbar left toggles */}
        <div
          className={`flex items-center px-4 pt-4 pb-3 cursor-pointer max-lg:hidden ${
            clicked === "placement"
              ? "border-b-4 border-black"
              : "hover:border-gray-200 border-b-4 border-transparent"
          }`}
          onClick={() => toggleClick("placement")}
        >
          <div>Placement cell</div>
          <div className="pl-2">
            <GoArrowUpRight style={{ strokeWidth: 0.2 }} size={20} />
          </div>
        </div>
        <div
          className={`flex items-center px-4 pt-4 pb-3 cursor-pointer max-lg:hidden ${
            clicked === "studio"
              ? "border-b-4 border-black"
              : "hover:border-gray-200 border-b-4 border-transparent"
          }`}
          onClick={() => toggleClick("studio")}
        >
          <div>Coding Ninjas Studio</div>
          <div className="pl-2">
            <GoArrowUpRight style={{ strokeWidth: 0.2 }} size={20} />
          </div>
        </div>
      </div>
      {/* navbar right icons */}
      <div className="flex items-center">
        <div className="p-1 mx-1 cursor-pointer hover:bg-gray-200 rounded-full max-lg:hidden">
          <BiHelpCircle size={24} />
        </div>
        <div className="p-1 mx-1 cursor-pointer hover:bg-gray-200 rounded-full max-lg:hidden">
          <TbMessage size={24} />
        </div>
        <div className="relative p-1 mx-1 cursor-pointer hover:bg-gray-200 rounded-full">
          <IoMdNotificationsOutline size={24} />
          <div className="absolute h-[6px] w-[6px] rounded-full bg-orange-500 top-1 right-1"></div>
        </div>
        <div className="px-3 mr-3 cursor-pointer relative">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/514/340/original/ninja-mascot-esport-logo-template-creative-ninja-logo-design-concepts-vector.jpg"
            alt="img"
            className="w-8 h-8 rounded-lg"
          />
          <div className="absolute top-6 left-[21px] bg-white rounded-sm">
            <FiMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
