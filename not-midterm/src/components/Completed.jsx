import React, { useContext, useState } from "react";
import { AppProvider } from '../App';
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid';

const Completed = () => {
  const taskProvided = useContext(AppProvider);
  if (localStorage.getItem("task") === null) {
    localStorage.setItem("task", JSON.stringify(taskProvided));
  }
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("task")));
  localStorage.setItem("task", JSON.stringify(task));
  const handleDelete = () => {
    localStorage.setItem('task', JSON.stringify(task.filter(i => i.checked === false)))
    setTask(JSON.parse(localStorage.getItem('task')))
  }

  return (
    <div className="home-page">
      <div className="tasks">
        <Task data={task.filter((i) => i.checked === true)}></Task>
      </div>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Completed;
