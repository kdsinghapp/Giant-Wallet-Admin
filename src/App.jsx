import { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./component/DashboardLayout";
import ProtectedRoute from "./component/ProtectedRoute";
import UserList from "./pages/UserList";
import Tokens from "./pages/Tokens";
import Charities from "./pages/Charities";
import BannerAndNews from "./pages/BannerAndNews";
import Settings from "./pages/Settings";
import EmergencyControls from "./pages/EmergencyControls";
import Dashboard from "./pages/Dashboard";
import Foundation from "./pages/Foundation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="user-list" element={<UserList />} />
            <Route path="tokens" element={<Tokens />} />
            <Route path="foundation" element={<Foundation />} />
            <Route path="charities" element={<Charities />} />
            <Route path="banner-and-news" element={<BannerAndNews />} />
            <Route path="settings" element={<Settings />} />
            <Route path="emergency-controls" element={<EmergencyControls />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
