import { FaCheck, FaTrashAlt } from "react-icons/fa";

// Shows a single task with a "complete" button and a "delete" button
function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? "todo-item completed" : "todo-item"}>
      <button
        className="todo-check"
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? "Mark as not completed" : "Mark as completed"}
      >
        {task.completed && <FaCheck />}
      </button>

      <span className="todo-text">{task.text}</span>

      <button
        className="todo-delete"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}

export default TodoItem;
