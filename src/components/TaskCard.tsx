import React from 'react';
import { Link } from 'react-router-dom';

interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  status: "Todo" | "In Progress" | "Done";
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, description, priority, status }) => {
  const priorityColors = {
    Low: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    Medium: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100',
    High: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
  };

  const statusColors = {
    Todo: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100',
    'In Progress': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
    Done: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <Link to={`/tasks/${id}`} className="text-lg font-semibold text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
          {title}
        </Link>
        <div className="flex space-x-2">
          <span className={`px-2 py-1 text-xs rounded-full ${priorityColors[priority]}`}>
            {priority}
          </span>
          <span className={`px-2 py-1 text-xs rounded-full ${statusColors[status]}`}>
            {status}
          </span>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex justify-end">
        <Link 
          to={`/tasks/${id}`}
          className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default React.memo(TaskCard);