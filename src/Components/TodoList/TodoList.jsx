import React from "react";
import "./TodoList.css";
const TodoList = (props) => {
  let style = {
    color: "red",
    listStyleType: "none",
  };
  return (
    <ul style={style}>
      {props.todos.map((item, index) => (
        <li key={item.id} className={item.status === true ? "completed" : ""}>
          <input onChange={() => props.changeStatus(item.id)} type="checkbox" />
          {item.task}
          <button onClick={() => props.handleDelete(item.id)}>Delete</button>
          <button
            onClick={() => props.handleEdit(index)}
            disabled={item.status === true ? true : false}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
