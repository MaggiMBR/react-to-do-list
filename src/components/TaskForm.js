import React, { useState } from "react";
import "../style-sheets/TaskForm.css";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const HanddleChange = (e) => {
    setInput(e.target.value);
  };

  const HanddleDispatch = (e) => {
    e.preventDefault();

    const NewTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    props.onSubmit(NewTask);
  };

  return (
    <form className="task-form" onSubmit={HanddleDispatch}>
      <input
        className="task-input"
        type="text"
        placeholder="Write a task"
        name="text"
        onChange={HanddleChange}
      />
      <button className="task-button">Add task</button>
    </form>
  );
}

export default TaskForm;
