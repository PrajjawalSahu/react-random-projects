import React, { useState, useEffect } from "react";
import "./App.css";

import InputText from "./components/InputText";
import TodoList from "./components/TodoList";

function App() {

  //states
  const [inputText, setInputText] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //run once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todoArray]);
  useEffect(() => {
  let circle1 = document.querySelector(".circle1");
    
    setInterval(function () {
      circle1.style.left = Math.floor(Math.random() * 80) + "%";
      circle1.style.top = Math.floor(Math.random() * 100) + "%";
    }, 6000);
  }, [])
  //functions
  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todoArray.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todoArray.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todoArray);
        break;
    }
  };

  //save to local storage
const saveLocalTodos = () => {
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
};
const getLocalTodos = () => {
  if(localStorage.getItem('todoArray') == null) {
    localStorage.setItem('todoArray', JSON.stringify([]));
  }
  else {
    let todoLocal = JSON.parse(localStorage.getItem('todoArray', JSON.stringify(todoArray)));
    setTodoArray(todoLocal)
  }
}
  return (
    <div className="App">
      <header>
        <div className="strokes-h1"><h1>Yet another notes taking web app</h1></div>
        <div className="circle1"></div>
        <div className="solid-h1"><h1>Yet another notes taking web app</h1></div>
      </header>

      <InputText
        inputText={inputText}
        todoArray={todoArray}
        setTodoArray={setTodoArray}
        setInputText={setInputText}
        setFilter={setFilter}
      ></InputText>
      
      <TodoList todoArray={todoArray} setTodoArray={setTodoArray}></TodoList>

      <a href="#"><div className="scroll-to-top todo-button" href="#"> ^ </div></a>
    </div>
  );
}

export default App;
