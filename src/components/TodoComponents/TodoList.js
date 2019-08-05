// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.tasks.map(item => (
        <div className="listItemFlex">
        <Todo key={item.id} task={item.task} toggleTask={props.toggleTask} lineThroughFunc={props.lineThroughFunc} />
        </div>
      ))}
    </div>

  )
}

export default TodoList;
