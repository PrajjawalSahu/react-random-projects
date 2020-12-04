import React from "react";

const TodoItem = ({text, id, todoItem, todoArray, setTodoArray}) => {
//Events
    const deleteHandler = () => {
        setTodoArray(todoArray.filter((el) => el.id !== todoItem.id));
    }

    const completeHandler = () => {
        setTodoArray(todoArray.map((item) => {
          if(item.id === todoItem.id){
            return{
              ...item, completed: !item.completed
            };
          }
          return item;
        }))
    }
  return (
    <div className="todo">
      <li className={`todo-item ${todoItem.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
