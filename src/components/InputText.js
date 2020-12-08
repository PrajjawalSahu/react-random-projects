import React from "react";

const InputText = ({ inputText, setInputText, todoArray, setTodoArray, setFilter }) => {
  //here we can write javascript code
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler =(e) => {
      e.preventDefault();
      setTodoArray([
        ...todoArray, 
        {text: inputText, completed: false, id: Math.random()*10000}
      ]);
      setInputText('');
  }
  const filterHandler = (e) => {
    setFilter(e.target.value);
  }
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default InputText;
