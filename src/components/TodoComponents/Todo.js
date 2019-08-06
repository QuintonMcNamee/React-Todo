import React from "react";

const Todo = props => {
  return (
    <div>
      <span
        className={`${props.item.completed ? 'listItemTrue' : 'listItemFalse'}`}
        onClick={() => props.toggleTask(props.item.id)}
      >
        {props.item.task}
      </span>

    </div>
  )
}

export default Todo;
