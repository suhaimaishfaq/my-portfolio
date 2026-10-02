import { useState, useEffect } from "react";
import { FaBroom } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle.jsx";
import TodoInput from "../components/TodoInput.jsx";
import TodoList from "../components/TodoList.jsx";

// Read saved tasks from localStorage (returns an empty array if nothing is saved)
function loadTasks() {
  try {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch {
    return [];
  }
}

function Todo() {
  // The task list lives here, in the parent component
  const [tasks, setTasks] = useState(loadTasks);

  // Save tasks to localStorage every time the tasks array changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    const newTask = {
      id: Date.now(), // simple unique id
      text: text,
      completed: false,
    };
    setTasks([newTask, ...tasks]); // new task appears at the top
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    setTasks(tasks.filter((task) => !task.completed));
  }

  // Values calculated from state (no extra state needed)
  const totalCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
  const remainingCount = totalCount - completedCount;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <section className="section page-section">
      <div className="container todo-container">
        <SectionTitle
          label="To-Do App"
          title="My task list"
          subtitle="Plan your study tasks. Your list is saved in this browser."
        />

        <div className="todo-card card">
          <TodoInput onAddTask={addTask} />

          {/* Task counter */}
          <div className="todo-stats">
            <div className="stat">
              <strong>{totalCount}</strong>
              <span>Total</span>
            </div>
            <div className="stat">
              <strong>{remainingCount}</strong>
              <span>Remaining</span>
            </div>
            <div className="stat">
              <strong>{completedCount}</strong>
              <span>Completed</span>
            </div>
          </div>

          <div className="progress-bar" aria-label={`${progress}% completed`}>
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>

          <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />

          {completedCount > 0 && (
            <button className="btn btn-light clear-btn" onClick={clearCompleted}>
              <FaBroom /> Clear completed
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Todo;
