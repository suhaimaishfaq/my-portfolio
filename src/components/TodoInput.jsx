import { useState } from "react";
import { FaPlus } from "react-icons/fa";

// Input box + button for adding a new task.
// onAddTask is a function sent by the parent (Todo page) through props.
function TodoInput({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stop the form from reloading the page

    const trimmedText = taskText.trim();
    if (trimmedText === "") return; // ignore empty tasks

    onAddTask(trimmedText); // send the text up to the parent
    setTaskText(""); // clear the input
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do? e.g. Revise DSA notes"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        maxLength={120}
      />
      <button type="submit" className="btn btn-primary" disabled={taskText.trim() === ""}>
        <FaPlus /> <span>Add</span>
      </button>
    </form>
  );
}

export default TodoInput;
