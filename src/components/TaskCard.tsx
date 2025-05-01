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
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-red-100 text-red-800'
  };

  const statusColors = {
    Todo: 'bg-gray-100 text-gray-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    Done: 'bg-green-100 text-green-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <Link to={`/task/${id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600">
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
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex justify-end space-x-2">
        <Link 
          to={`/task/${id}`}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default React.memo(TaskCard);