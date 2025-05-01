import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

const AllTasks = () => {
  const { tasks, loading, error } = useTasks();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <div className="text-red-600 mb-4">Error: {error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">All Tasks</h1>
        <Link 
          to="/add" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          Add New Task
        </Link>
      </div>
      <div className="grid gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
