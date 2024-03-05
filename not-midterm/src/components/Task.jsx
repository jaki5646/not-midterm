import React, { useContext, useState } from "react";
import "./Task.css";
import { AppProvider } from "../App";
import Input from "./Input";

const Task = ({ data }) => {
  const [check, setCheck] = useState(false);
  const onWork = (e) => {
    // chiu
}

  return !!data ? (
    data.map((i) => (
      <div className="task-component" key={i.id}>
        <Input data={i} onWork={onWork}></Input>
        <h1 className={i.checked ? "checked" : ""}>{i.text}</h1>
      </div>
    ))
  ) : (
    <p>lmao</p>
  );
};

export default Task;
