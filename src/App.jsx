import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "remixicon/fonts/remixicon.css";
import Content from "./components/content/Content";
import NavBar from "./components/NavBars/NavBar";
function App() {
  document.title = "Dashboard";
  return (
    <div className="w-full h-screen bg-[#212121] flex  text-white overflow-hidden">
      <Sidebar />
      <div className="w-full ">
        <NavBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
