import React from 'react';
import { LayoutDashboard, ClipboardList, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate =  useNavigate()
  const buttons = [
    { icon: <LayoutDashboard size={24} />, text: 'Dashboard', link: '/dashboard', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: <ClipboardList size={24} />, text: 'Task Management', link: '/task', color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: <Users size={24} />, text: 'User Management', link: '/user-management', color: 'bg-blue-400 hover:bg-blue-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Welcome Back
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {buttons.map(({ icon, text, color , link }) => (
            <button
              onClick={() => navigate(link)}
              key={text}
              className={`${color} text-white p-6 rounded-lg shadow-lg 
                transform transition-all duration-200 hover:scale-105
                flex flex-col items-center justify-center space-y-3
                min-h-[160px]`}
            >
              {icon}
              <span className="text-lg font-semibold text-center">{text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;