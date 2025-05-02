import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  const productivityQuotes = [
    "Stay focused, stay productive.",
    "Productivity is never an accident.",
    "Plan your work and work your plan.",
    "Success is the sum of small efforts.",
    "Don't watch the clock; do what it does. Keep going."
  ];

  return (
    <nav className="fixed top-10 left-0 right-0 z-40 bg-white dark:bg-gray-800 shadow-lg">

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              𝙏 𝙖 𝙨 𝙠 𝙞 𝙯 𝙢 𝙤 '
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`${
                  isActive('/')
                    ? 'border-primary-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-primary-500 hover:text-gray-700 dark:hover:text-white'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Home
              </Link>
          

              <Link
                to="/tasks"
                className={`${
                  isActive('/tasks')
                    ? 'border-primary-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-primary-500 hover:text-gray-700 dark:hover:text-white'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Tasks
              </Link>
              <Link
                to="/tasks/add"
                className={`${
                  isActive('/tasks/add')
                    ? 'border-primary-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-primary-500 hover:text-gray-700 dark:hover:text-white'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Add Task
              </Link>
              <Link
  to="/focuscat"
  className={`${
    isActive('/focuscat')
      ? 'border-yellow-300 text-yellow-400 dark:text-yellow-400'
      : 'border-transparent text-green-600 dark:text-green-300 hover:border-green-500 hover:text-green-800 dark:hover:text-green-200'
  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
>
  FocusCat
</Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-300 via-purple-500 to-orange-500 text-white-400 py-2 z-50 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee px-6 text-sm sm:text-base font-semibold">
          {productivityQuotes.map((quote, idx) => (
            <span key={idx} className="mx-8">{quote}</span>
          ))}
        </div>
        <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 40s linear infinite; /* Slowed down */
          }
        `}
      </style>
      </div>
      
    </nav>
    
  );
};

export default Navbar; 