import { useState } from 'react';
import './App.css' // o './App.css' según cómo lo hayas llamado
import type { Task } from './types/Task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  }

  const handleToggleTask = (id: string) => {
    
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };


return (
  <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-12 px-4">
    <main className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Lista de Tareas
      </h1>

      <TaskForm
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        onAddTask={handleAddTask}
      />

      <TaskList
        tasks={tasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </main>
  </div>
)

}

export default App;
