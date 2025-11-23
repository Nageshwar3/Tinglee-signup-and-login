import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProfileWizard from "./components/ProfileWizard";
import Discovery from "./components/Discovery/Discovery";

import Likes from "./components/Likes/Likes";
import Matches from "./components/Matches/Matches";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ADD THIS */}
      <Route path="/profile-wizard" element={<ProfileWizard />} />
      <Route path="/discovery" element={<Discovery />} />
      <Route path="/likes" element={<Likes />} />
      <Route path="/matches" element={<Matches />} />
    </Routes>
  );
}