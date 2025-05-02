import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useTasks } from '../context/TaskContext';
import type { Task } from '../context/TaskContext';

const AddTask = () => {
  const navigate = useNavigate();
  const { addTask } = useTasks();
  const [formData, setFormData] = useState<Omit<Task, 'id'>>({
    title: '',
    description: '',
    priority: 'Medium',
    status: 'Todo'
  });

  const handleConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#4f46e5', '#a855f7', '#facc15', '#ffffff'], // Royal blue, violet, gold, white
    });
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      addTask(formData);
      handleConfetti();
      setTimeout(() => navigate('/tasks'), 1200);
    },
    [formData, addTask, navigate]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    },
    []
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-100 via-white to-gray-300 dark:from-[#1e1e1e] dark:via-[#121212] dark:to-black transition-colors duration-500">
      <div className="w-full max-w-3xl rounded-3xl p-10 shadow-2xl bg-blue-500/30 blue:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold font-[Playfair_Display] text-blue-800-800 dark:text-white">
            Add New Task
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-medium">
            Organize your day with elegance.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Title */}
          <div>
            <label htmlFor="title" className="text-gray-800 dark:text-gray-200 font-medium block mb-2">
              Title
            </label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Task title"
              className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="text-gray-800 dark:text-gray-200 font-medium block mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Task details..."
              className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-gray-300 dark:border-gray-600 resize-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Priority & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="priority" className="text-gray-800 dark:text-gray-200 font-medium block mb-2">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="text-gray-800 dark:text-gray-200 font-medium block mb-2">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                <option>Todo</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={() => navigate('/tasks')}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-white/10 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 hover:opacity-90 transition shadow-md"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
