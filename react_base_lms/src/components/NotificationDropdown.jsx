// components/NotificationDropdown.js
import React from 'react';

const NotificationDropdown = ({ notifications, showDropdown }) => {
  if (!showDropdown) return null;

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden">
      <ul className="list-none p-4">
        {notifications.map((notification, index) => (
          <li key={index} className="flex items-start mb-4">
            <div className={`text-white px-2 py-1 rounded-full text-xs font-bold mr-3 ${notification.type === 'comment' ? 'bg-blue-500' : notification.type === 'task' ? 'bg-red-500' : 'bg-green-500'}`}>
              {notification.icon}
            </div>
            <div>
              <p className="text-sm text-gray-700">{notification.text}</p>
              <p className="text-xs text-gray-400">{notification.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationDropdown;
