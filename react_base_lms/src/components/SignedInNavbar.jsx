// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">EduLearn</div>

        {/* Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/my-learning" className="text-gray-700 hover:text-blue-600">My Learning</Link>
          <Link to="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
          <Link to="/calendar" className="text-gray-700 hover:text-blue-600">Calendar</Link>
          <Link to="/assignments" className="text-gray-700 hover:text-blue-600">Assignments</Link>
          <Link to="/announcements" className="text-gray-700 hover:text-blue-600">Announcements</Link>
        </div>

        {/* Profile */}
        <div className="flex space-x-4">
          <Link to="/profile" className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
