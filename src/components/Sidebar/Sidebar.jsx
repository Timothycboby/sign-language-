import React, { useState } from "react";

function Sidebar() {
  const data = [
    "HELLO",
    " HOW ARE YOU?",
    "NICE TO MEET YOU",
    "WHAT YOUR NAME?",
    " MY NAME IS XYZ",
    "THANK YOU",
    " DEAF",
    " HEARING",
    "HARD OF HEARING",
    " GOOD-BYE",
    "SEE YOU LATER",
    "SEE YOU TOMORROW",
    " MY SIGN NAME IS…",
    "PLEASE",
    "SORRY",
    "GOOD",
    "FINE",
    "BAD",
    "EXCUSE ME",
    "GOOD MORNING",
    "GOOD NIGHT",
    "HUNGRY",
    "TIRED",
    "HELP",
    "BUSY",
  ];
  const [value, setvalue] = useState(false);
  return (
    <div
      className={`w-56 h-screen border-r-[1px] border-r-zinc-700 flex flex-col px-3 duration-300 py-2 items-center absolute bg-black/40 backdrop-blur-sm ${
        value ? "left-0 z-50" : "left-[-17%] duration-300"
      }`}
    >
      <span
        className="text-5xl absolute right-[-20%] top-[45%] cursor-pointer  hover:text-blue-600 duration-300"
        onClick={() => setvalue(!value)}
      >
        {value ? (
          <i class="ri-arrow-left-s-line"></i>
        ) : (
          <i class="ri-arrow-right-s-line"></i>
        )}
      </span>
      <h1 className="text-xl font-mono opacity-80 text-blue-600 font-bold">
        Sign Language
      </h1>
      <div className="h-[90%]">
        <ul className="flex flex-col gap-3 mt-5 h-full overflow-auto">
          {data.map((item, index) => (
            <li
              key={index}
              className="text-sm px-3 py-3 hover:bg-blue-500 bg-zinc-800  rounded-xl duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
