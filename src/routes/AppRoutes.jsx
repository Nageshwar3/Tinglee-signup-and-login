import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotificationSettings from "../components/Settings/NotificationSettings";
import PrivacySettings from "../components/Settings/PrivacySettings";
import HelpSupport from "../components/Settings/HelpSupport";

import BlockedUsers from "../components/Settings/BlockedUsers";
import DataControls from "../components/Settings/DataControls";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/settings/notifications" element={<NotificationSettings />} />
      <Route path="/settings/privacy" element={<PrivacySettings />} />
      <Route path="/settings/blocked-users" element={<BlockedUsers />} />
      <Route path="/settings/data-controls" element={<DataControls />} />
      <Route path="/settings/help" element={<HelpSupport />} />
    </Routes>
  );
}

export default AppRoutes;
