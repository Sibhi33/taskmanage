import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

const AllTasks = () => {
  const { tasks, loading, error } = useTasks();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <div className="text-red-600 mb-4 text-lg font-medium">Error: {error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          All Tasks
        </h1>
        <Link 
          to="/tasks/add" 
          className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300"
          aria-label="Add New Task"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </Link>
      </div>

      {/* Task List Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Link to={`/tasks/${task.id}`} key={task.id}>
              <TaskCard
                id={task.id}
                title={task.title}
                description={task.description}
                priority={task.priority}
                status={task.status}
              />
            </Link>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 col-span-full text-center text-lg mt-10">
            No tasks found. Why not add one?
          </p>
        )}
      </div>
    </div>
  );
};

export default AllTasks;
