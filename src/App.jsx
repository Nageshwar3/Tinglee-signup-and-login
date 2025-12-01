import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProfileWizard from "./components/ProfileWizard";
import Discovery from "./components/Discovery/Discovery";

import Likes from "./components/Likes/Likes";
import Matches from "./components/Matches/Matches";
import Chat from "./components/Chat/Chat";
import LoveStories from "./components/LoveStories/LoveStories";
import SubmitStory from "./components/LoveStories/SubmitStory";
import AdminPanel from "./components/Admin/AdminPanel";
import Settings from "./components/Settings/Settings";

import LandingPage from "./pages/LandingPage/LandingPage";

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
      <Route path="/chat/:id" element={<Chat />} />
      <Route path="/love-stories" element={<LoveStories />} />
      <Route path="/submit-story" element={<SubmitStory />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

