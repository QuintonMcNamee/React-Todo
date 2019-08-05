import React from "react";

const Todo = props => {
  return (
    <div>
      <span onClick={props.lineThroughFunc}>{props.task}</span>
    </div>
  )
}

export default Todo;
