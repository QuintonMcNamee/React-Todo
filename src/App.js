import React from 'react';
import "./App.css";

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasksData = [
  {
    task: "Make coffee",
    id: Date.now(),
    completed: false
  },
  {
    task: "Study training kit",
    id: Date.now(),
    completed: false
  },
  {
    task: "Listen to lecture",
    id: Date.now(),
    completed: false
  },
  {
    task: "Go for walk",
    id: Date.now(),
    completed: false
  },
  {
    task: "Shower",
    id: Date.now(),
    completed: false
  },
  {
    task: "Do project",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: tasksData
    }
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    });
  };

  lineThroughFunc = () => {
    alert('hi');
    this.className = 'completedStyle';
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList tasks={this.state.tasks} lineThroughFunc={this.lineThroughFunc}/>
          <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
        </div>
      </div>
    );
  }
}

export default App;
