import type { Task } from "../types/Task"

interface TaskItemProps {
  task: Task
  onToggle: (taskId: string) => void
  onDelete: (taskId: string) => void
}

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between bg-white shadow-sm rounded-md px-4 py-3 mb-3">
      
      <label className="flex items-center gap-3 cursor-pointer w-full">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />

        <span
          className={`text-gray-800 flex-1 ${
            task.completed ? "line-through opacity-50" : ""
          }`}
        >
          {task.title}
        </span>
      </label>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 text-sm font-medium transition"
      >
        Eliminar
      </button>
    </div>
  )
}

export default TaskItem
