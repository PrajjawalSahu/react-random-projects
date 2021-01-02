import React from "react";

//Importing Components
import Todo from './Todo';
const TodoList = ({todoArray, setTodoArray}) => {
  return (
    <div className="todo-container">
      <div className="todo-list">
        {todoArray.map(todo => (
          <Todo todoItem={todo} todoArray={todoArray} setTodoArray={setTodoArray} id={todo.id} text={todo.text}></Todo>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
