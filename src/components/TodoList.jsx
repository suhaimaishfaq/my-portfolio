import { FaClipboardList } from "react-icons/fa";
import TodoItem from "./TodoItem.jsx";

// Displays all tasks, or a friendly message when there are none
function TodoList({ tasks, onToggle, onDelete }) {
  // Conditional rendering: show the empty state if the array is empty
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <FaClipboardList className="empty-icon" />
        <h3>No tasks yet</h3>
        <p>Add your first task above to get started.</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
