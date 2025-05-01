import { useTaskForm } from '../hooks/useTaskForm';

const TaskForm = () => {
  const { title, description, priority, handleChange, handleSubmit } = useTaskForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input name="title" value={title} onChange={handleChange} placeholder="Title" className="border p-2 w-full" />
      <input name="description" value={description} onChange={handleChange} placeholder="Description" className="border p-2 w-full" />
      <select name="priority" value={priority} onChange={handleChange} className="border p-2 w-full">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Task</button>
    </form>
  );
};

export default TaskForm;