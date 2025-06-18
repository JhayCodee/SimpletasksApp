import type { Task } from "../types/Task";

interface TaskFormProps {
  newTaskTitle: string;
  setNewTaskTitle: (title: string) => void;
  onAddTask: (task: Task) => void;
}

function TaskForm({ newTaskTitle, setNewTaskTitle, onAddTask }: TaskFormProps) {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: newTaskTitle.trim(),
      completed: false,
      createdAt: new Date()
    };

    onAddTask(newTask);
    setNewTaskTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Nueva tarea"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
      >
        Agregar
      </button>
    </form>
  )
}

export default TaskForm;
