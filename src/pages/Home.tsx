import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const productivityQuotes = [
  "Stay focused, stay productive.",
  "Productivity is never an accident.",
  "Plan your work and work your plan.",
  "Success is the sum of small efforts.",
  "Don't watch the clock; do what it does. Keep going."
];

const Home: React.FC = () => {
  const [dateInfo, setDateInfo] = useState({
    date: '',
    day: '',
    minutesLeft: 0,
    daysLeft: 0,
  });

  useEffect(() => {
    const updateInfo = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      const dateStr = now.toLocaleDateString();
      const dayStr = days[now.getDay()];

      const totalMinutes = 24 * 60;
      const minutesPassed = now.getHours() * 60 + now.getMinutes();
      const minutesLeft = totalMinutes - minutesPassed;

      const start = new Date(now.getFullYear(), 0, 0);
      const diff = now.getTime() - start.getTime();
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay);
      const isLeap = (now.getFullYear() % 4 === 0 && now.getFullYear() % 100 !== 0) || (now.getFullYear() % 400 === 0);
      const totalDays = isLeap ? 366 : 365;
      const daysLeft = totalDays - dayOfYear;

      setDateInfo({ date: dateStr, day: dayStr, minutesLeft, daysLeft });
    };

    updateInfo();
    const interval = setInterval(updateInfo, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Marquee at the top */}
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-300 via-purple-500 to-orange-500 text-white py-2 z-50 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee px-6 text-sm sm:text-base font-semibold">
          {productivityQuotes.map((quote, idx) => (
            <span key={idx} className="mx-8">{quote}</span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-6 lg:px-12 pt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-7xl">
          {/* Left Text Centered */}
          <div className="w-full lg:w-1/2 text-left flex flex-col items-center lg:items-start justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight text-center lg:text-left">
              <span className="block">Cut to the chase</span>
              <span className="block text-blue-600 dark:text-blue-400">with ease and style</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center lg:text-left">
              A modern task manager to stay organized, efficient, and in control of your day.
            </p>
            <div className="mt-6">
              <Link
                to="/tasks"
                className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Task management visual"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Glassmorphism Neon Footer */}
      <footer className="fixed bottom-0 left-0 w-full px-6 py-5 z-50 font-extrabold backdrop-blur-md bg-white/10 dark:bg-black/10 text-blue-300 text-base sm:text-lg tracking-widest shadow-inner border-t border-white/20">
  <div className="flex flex-wrap justify-center gap-x-10 gap-y-4  text-center text-">
    <span>Date: {dateInfo.date}</span>
    <span>Day: {dateInfo.day}</span>
    <span>Minutes Left Today: {dateInfo.minutesLeft}</span>
    <span>Days Left in Year: {dateInfo.daysLeft}</span>
  </div>
</footer>


      {/* Tailwind Custom Animation and Neon Glow */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 40s linear infinite;
          }
          .text-neon-glow {
            text-shadow:
              0 0 0px #00ffcc,
              0 0 10px #00ffcc,
              0 0 20px #00ffcc,
              0 0 30px #00ffcc;
          }
        `}
      </style>
    </>
  );
};

export default Home;
