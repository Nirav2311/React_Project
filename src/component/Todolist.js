import React from "react";
import "./../index.css";
import listdata from "../listdata";

function Todolist(props) {
  const completedsytle = {
    fontStyle: "italic",
    color : "#cdcdcd",
    textDecoration: "line-through",
    
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.listdata.completed}
        onChange={() => props.handleChange(props.listdata.id)}
      />
      <p style={props.listdata.completed ? completedsytle : null}>{props.listdata.text}</p>
    </div>
  );
}

export default Todolist;
