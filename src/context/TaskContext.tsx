import { createContext, useContext, useState, ReactNode, useEffect, useCallback, useMemo } from 'react';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  status: "Todo" | "In Progress" | "Done";
}

interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  addTask: (task: Omit<Task, 'id'>) => void;
  deleteTask: (id: number) => void;
  updateTaskStatus: (id: number, status: Task['status']) => void;
  getTaskById: (id: number) => Task | undefined;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        if (!response.ok) throw new Error('Failed to fetch tasks');
        
        const data = await response.json();
        const formattedTasks: Task[] = data.map((item: any, index: number) => ({
          id: item.id,
          title: item.title,
          description: `Task description ${index + 1}`,
          priority: index % 3 === 0 ? 'High' : index % 2 === 0 ? 'Medium' : 'Low',
          status: item.completed ? 'Done' : 'Todo'
        }));
        
        setTasks(formattedTasks);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const addTask = useCallback((task: Omit<Task, 'id'>) => {
    setTasks(prev => [...prev, { ...task, id: Date.now() }]);
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  const updateTaskStatus = useCallback((id: number, status: Task['status']) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, status } : task
    ));
  }, []);

  const getTaskById = useCallback((id: number) => {
    return tasks.find(task => task.id === id);
  }, [tasks]);

  const value = useMemo(() => ({
    tasks,
    loading,
    error,
    addTask,
    deleteTask,
    updateTaskStatus,
    getTaskById
  }), [tasks, loading, error, addTask, deleteTask, updateTaskStatus, getTaskById]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
