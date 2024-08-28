import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full h-12 flex gap-20 items-center  justify-between px-10  text-white bg-[#2F2F2F] text-xl fixed ">
      <div className="flex items-center gap-3">
        <img className="h-16" src="/logo.png" alt="" />
        sign translotar
      </div>
      <ul className="flex gap-10 ">
        <NavLink className={`text-blue-600 border-b-[1px] border-blue-600`}>
          Home
        </NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </ul>
      <div className="h-full flex items-center gap-5">
        <span className="text-2xl text-red-500">
          <i class="ri-notification-fill"></i>
        </span>
        <img className="h-[80%]" src="/profile.png" alt="" />
      </div>
    </div>
  );
}

export default NavBar;
