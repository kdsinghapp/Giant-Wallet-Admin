import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import img from "../../public/assets/img/logo-small.png"

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: "250px", minWidth: "220px" }}>
        <img src={img} alt="Logo" style={{ width: "20%", height: "auto" , marginLeft: "16px" }} />
        <Sidebar />
      </div>
      <div style={{ flex: 1, padding: "24px", background: "#f8f9fa" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;