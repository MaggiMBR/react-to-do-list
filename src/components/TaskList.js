import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "../style-sheets/TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const AddTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const TasksUpdated = [task, ...tasks];
      setTasks(TasksUpdated);
    }
  };

  const DeleteTask = (id) => {
    const TasksUpdated = tasks.filter((task) => task.id !== id);
    setTasks(TasksUpdated);
  };

  const CompleteTask = (id) => {
    const TasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(TasksUpdated);
  };

  return (
    <>
      <TaskForm onSubmit={AddTask} />
      <div className="task-list-container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={CompleteTask}
            deleteTask={DeleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
