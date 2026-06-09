import { Link } from "react-router";
import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiStudentFill } from "react-icons/pi";
import { IoPersonAddOutline } from "react-icons/io5";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const menuItems = [
    {
      icon: <LuLayoutDashboard size={30} />,
      label: "Dashboard",
      path: "/",
    },
    {
      icon: <PiStudentFill size={30} />,
      label: "Students",
      path: "/students",
    },
    {
      icon: <IoPersonAddOutline size={30} />,
      label: "Add Student",
      path: "/students/add",
    },
  ];

  return (
    <aside
      className={`bg-gray-900 text-white shadow-md h-screen p-2 flex flex-col duration-300 ${
        open ? "w-60" : "w-16"
      }`}
    >
      {/* Header */}
      <div className="px-3 py-2 h-20 flex justify-between items-center">
        <h2
          className={`font-bold text-lg whitespace-nowrap overflow-hidden duration-300 ${
            !open && "w-0"
          }`}
        >
          SMS Portal
        </h2>

        <button onClick={() => setOpen(!open)} className="cursor-pointer">
          <MdOutlineMenuOpen size={30} />
        </button>
      </div>

      {/* Navigation */}
      <ul className="flex-1">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="px-3 py-3 my-2 hover:bg-gray-800 rounded-md duration-300 flex gap-3 items-center relative group"
            >
              {/* Icon */}
              <div>{item.icon}</div>

              {/* Label */}
              <p
                className={`whitespace-nowrap overflow-hidden duration-300 ${
                  !open && "w-0 translate-x-24"
                }`}
              >
                {item.label}
              </p>

              {/* Tooltip when collapsed */}
              <span
                className={`${
                  open && "hidden"
                } absolute left-32 bg-white text-black shadow-md rounded-md
                w-0 overflow-hidden p-0 duration-200
                group-hover:w-fit group-hover:p-2 group-hover:left-16`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="px-3 py-3 border-t border-gray-700">
        <div className="flex items-center gap-3">
          {/* USER ICON HERE */}

          <div
            className={`overflow-hidden duration-300 ${
              !open && "w-0 translate-x-24"
            }`}
          >
            <p className="font-medium">Class Teacher</p>
            <span className="text-sm text-gray-400">teacher@school.com</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
