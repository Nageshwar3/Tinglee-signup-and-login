import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProfileWizard from "./components/ProfileWizard";
import Discovery from "./components/Discovery/Discovery";

import Likes from "./components/Likes/Likes";
import Matches from "./components/Matches/Matches";
import Messages from "./components/Matches/Messages";
import Chat from "./components/Chat/Chat";
import LoveStories from "./components/LoveStories/LoveStories";
import SubmitStory from "./components/LoveStories/SubmitStory";
import AdminPanel from "./components/Admin/AdminPanel";
import Settings from "./components/Settings/Settings";
import NotificationSettings from "./components/Settings/NotificationSettings";
import PrivacySettings from "./components/Settings/PrivacySettings";
import HelpSupport from "./components/Settings/HelpSupport";

import LandingPage from "./pages/LandingPage/LandingPage";

import BlockedUsers from "./components/Settings/BlockedUsers";
import DataControls from "./components/Settings/DataControls";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ADD THIS */}
      <Route path="/profile-wizard" element={<ProfileWizard />} />
      <Route path="/discovery" element={<Discovery />} />
      <Route path="/likes" element={<Likes />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/chat/:id" element={<Chat />} />
      <Route path="/love-stories" element={<LoveStories />} />
      <Route path="/submit-story" element={<SubmitStory />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/notifications" element={<NotificationSettings />} />
      <Route path="/settings/privacy" element={<PrivacySettings />} />
      <Route path="/settings/blocked-users" element={<BlockedUsers />} />
      <Route path="/settings/data-controls" element={<DataControls />} />
      <Route path="/settings/help" element={<HelpSupport />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

