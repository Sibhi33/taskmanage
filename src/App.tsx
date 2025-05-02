import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar';
import AppRoutes from './router';
import './App.css';



const App: React.FC = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <main className="container mx-auto px-4 py-8 pt-24">
              <AppRoutes />
            </main>
          </div>
          
        </Router>
      </TaskProvider>
    </ThemeProvider>
  );
};

export default App;
