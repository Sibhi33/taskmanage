import React from 'react';
import { Link } from 'react-router-dom';

const keywords = ['productivity', 'workspace', 'planning', 'notebook', 'teamwork', 'calendar'];

const imageUrls = keywords.map(
  (keyword, i) => `https://source.unsplash.com/800x400/?${keyword}&sig=${i}`
);

console.log("Generated Unsplash URLs:", imageUrls);

const Home: React.FC = () => {
  return (
    <>
      {/* Navbar with Logo */}
      <nav className="w-full flex items-center justify-between px-6 lg:px-12 py-4 bg-white dark:bg-gray-900 shadow">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Taskizmo
        </div>
        <div>
          <Link to="/tasks" className="text-gray-700 dark:text-gray-200 hover:underline">
            Tasks
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-start px-6 lg:px-12 pt-16 gap-10">

        {/* Hero Text */}
        <div className="w-full lg:w-3/5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            <span className="block">Cut to the chase</span>
            <span className="block text-primary-600 dark:text-blue-400">with ease and style</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            A modern task manager to stay organized, efficient, and in control of your day.
          </p>
          <div className="mt-6">
            <Link
              to="/tasks"
              className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Horizontal Carousel Below Get Started */}
        <div className="w-full overflow-hidden mt-10">
          <div className="flex animate-scroll-x space-x-6">
            {imageUrls.concat(imageUrls).map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`carousel-${idx}`}
                referrerPolicy="no-referrer"
                className="rounded-xl shadow-lg w-80 h-52 object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tailwind Animation Style */}
      <style>
        {`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 40s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </>
  );
};

export default Home;
