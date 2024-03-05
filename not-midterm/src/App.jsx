import { createContext, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Active from "./components/Active";
import All from "./components/All";
import Completed from "./components/Completed";
import Header from "./Header";
import { v4 as uuidv4 } from 'uuid';

export const AppProvider = createContext();

function App() {
  const [task, setTask] = useState([{
    id: uuidv4(),
    checked: true,
    text: 'sss'
  },
  {
    id: uuidv4(),
    checked: false,
    text: 'aaa'
  }]);

  return (
    <AppProvider.Provider value={task}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<All />}></Route>
        <Route path="/completed" element={<Completed />}></Route>
        <Route path="/active" element={<Active />}></Route>
      </Routes>
    </AppProvider.Provider>
  );
}

export default App;
