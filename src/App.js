import React, { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [showSidebar, setShowSidebar] = useState(
    window.innerWidth > 600 ? true : false
  );

  return (
    <>
      <div className="hamburger">
        <i
          className="fas fa-bars menu-icon"
          onClick={() => setShowSidebar(!showSidebar)}
        ></i>
      </div>
      <div className="app-container">
        <Navbar />
        <div className="container">
          <Sidebar showSidebar={showSidebar} />

          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
