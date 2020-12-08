import React, { useState } from "react";
import './App.css';

import InputText from "./components/InputText";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [filter, setFilter] = useState("All");
  return (
    <div className="App">
      <header>
      <h1>React To Do List</h1>
      </header>
      <InputText inputText={inputText} todoArray={todoArray} setTodoArray={setTodoArray} setInputText={setInputText} setFilter={setFilter}></InputText>
      <TodoList todoArray={todoArray} setTodoArray={setTodoArray}></TodoList>
    </div>
  );
}

export default App;
