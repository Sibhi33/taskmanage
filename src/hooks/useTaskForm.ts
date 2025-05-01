import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { Task } from '../types/task';

export const useTaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    if (name === 'description') setDescription(value);
    if (name === 'priority') setPriority(value as any);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      priority,
      status: 'Todo',
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  return { title, description, priority, handleChange, handleSubmit };
};