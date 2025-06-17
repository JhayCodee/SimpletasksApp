import type { Task } from "../types/Task"
import TaskItem from "./TaskItem"

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <div className="space-y-3">
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="text-gray-500 text-center">No hay tareas registradas.</p>
      )}
    </div>
  )
}

export default TaskList
