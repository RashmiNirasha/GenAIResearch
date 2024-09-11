// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import LandingPage from './components/LandingPage';
import CoursesPage from './components/CoursesPage';
import AnnouncementsPage from './components/AnnouncementsPage';
import AnnouncementDetail from './components/AnnouncementDetail';
import AssignmentsPage from './components/AssignmentsPage';
import SubmittedAssignments from './components/SubmittedAssignments';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/announcements/ai-for-everyone" element={<AnnouncementDetail />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/submitted-assignments" element={<SubmittedAssignments />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
