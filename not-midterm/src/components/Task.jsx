import React, { useContext, useState } from "react";
import "./Task.css";
import { AppProvider } from "../App";

const Task = ({ data }) => {
  const [check, setCheck] = useState(false);
  const handleChange = (e) => {
      e.target.checked = !e.target.checked
      console.log(e)
  }

  return !!data ? (
    data.map((i) => (
      <div className="task-component" key={i.id}>
        <input type="checkbox" checked={i.checked} onChange={handleChange}/>
        <h1 className={i.checked ? 'checked' : ''}>{i.text}</h1>
      </div>
    ))
  ) : (
    <p>lmao</p>
  );
};

export default Task;
