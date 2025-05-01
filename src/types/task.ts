export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'Todo' | 'In Progress' | 'Done';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
}
