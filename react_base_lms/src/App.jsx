// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ForgotPassword from './components/ForgotPassword';
import LandingPage from './components/LandingPage';
import CoursesPage from './components/CoursesPage';
import AnnouncementsPage from './components/AnnouncementsPage';
import AnnouncementDetail from './components/AnnouncementDetail';
import AssignmentsPage from './components/AssignmentsPage';
import SubmittedAssignments from './components/SubmittedAssignments';
import EditAssignment from './components/EditAssignment';
import SubmitAssignment from './components/SubmitAssignment';
import ProfilePage from './components/ProfilePage';
import MyLearning from './components/MyLearningPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/announcements/ai-for-everyone" element={<AnnouncementDetail />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/submitted-assignments" element={<SubmittedAssignments />} />
        <Route path="/submitted-assignments/edit-assignment" element={<EditAssignment />} />
        <Route path="/assignments/submit-assignment" element={<SubmitAssignment />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-learning" element={<MyLearning />} />
      </Routes>
    </Router>
  );
}

export default App;
