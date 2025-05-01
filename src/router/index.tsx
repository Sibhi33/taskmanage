import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllTasks from '../pages/AllTasks';
import AddTask from '../pages/AddTask';

// Lazy-loaded component for TaskDetails
const TaskDetails = lazy(() => import('../pages/TaskDetails'));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AllTasks />} />
    <Route path="/add" element={<AddTask />} />
    <Route 
      path="/task/:id" 
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <TaskDetails />
        </Suspense>
      } 
    />
  </Routes>
);

export default AppRoutes;
