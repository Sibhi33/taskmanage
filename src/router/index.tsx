import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AllTasks from '../pages/AllTasks';
import AddTask from '../pages/AddTask';
import FocusCatPage from '../pages/FocusCatPage';

// Lazy-loaded components
const TaskDetails = lazy(() => import('../pages/TaskDetails'));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tasks" element={<AllTasks />} />
    <Route path="/tasks/add" element={<AddTask />} />
    <Route path="/focuscat" element={<FocusCatPage />} />
    <Route 
      path="/tasks/:id" 
      element={
        <Suspense fallback={<div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>}>
          <TaskDetails />
        </Suspense>
      } 
    />
  </Routes>
);

export default AppRoutes;
