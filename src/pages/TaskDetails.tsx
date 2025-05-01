import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getTaskById, updateTaskStatus, deleteTask } = useTasks();
  
  const task = getTaskById(Number(id));

  if (!task) {
    return (
      <div className="text-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Task Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Tasks
        </button>
      </div>
    );
  }

  const handleStatusChange = (newStatus: typeof task.status) => {
    updateTaskStatus(task.id, newStatus);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
      navigate('/');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
          <div className="flex space-x-2">
            <span className={`px-2 py-1 text-xs rounded-full ${
              task.priority === 'High' ? 'bg-red-100 text-red-800' :
              task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {task.priority} Priority
            </span>
            <span className={`px-2 py-1 text-xs rounded-full ${
              task.status === 'Done' ? 'bg-green-100 text-green-800' :
              task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {task.status}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
          <p className="text-gray-600">{task.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Update Status</h2>
          <div className="flex space-x-2">
            {['Todo', 'In Progress', 'Done'].map((status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(status as typeof task.status)}
                className={`px-3 py-1 rounded ${
                  task.status === status
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Back to Tasks
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
