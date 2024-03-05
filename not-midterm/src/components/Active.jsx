import React, { useContext, useEffect, useState } from 'react'
import Task from './Task';
import { v4 as uuidv4 } from 'uuid';
import { AppProvider } from '../App';

const Active = () => {
  const taskProvided = useContext(AppProvider);
  if(localStorage.getItem('task') === null) {
    localStorage.setItem('task', JSON.stringify(taskProvided))
  }

  const [input, setInput] = useState('');
  const [task, setTask] = useState(JSON.parse(localStorage.getItem('task')))


  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault();
    setTask(task.concat([{
      id: uuidv4(),
      text: input,
      checked: false
    }]))
    console.log(task)
  }
  localStorage.setItem('task', JSON.stringify(task))

  
  return (
    <div className="home-page">
      <div className="input-field">
        <form>
          <input type="text" placeholder="add details" onChange={handleChange} value={input}/>
          <button type="submit" onClick={handleClick}>ADD</button>
        </form>
      </div>
      <div className="tasks">
        <Task data={task.filter(i => i.checked === false)}></Task>
      </div>
    </div>
  );
}

export default Active