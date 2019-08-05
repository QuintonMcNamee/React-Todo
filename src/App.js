import React from 'react';
import "./App.css";

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasksData = [
  {
    task: "Make coffee",
    id: 1,
    completed: false
  },
  {
    task: "Study training kit",
    id: 2,
    completed: false
  },
  {
    task: "Listen to lecture",
    id: 3,
    completed: false
  },
  {
    task: "Go for walk",
    id: 4,
    completed: false
  },
  {
    task: "Shower",
    id: 5,
    completed: false
  },
  {
    task: "Do project",
    id: 6,
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

  toggleTask = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
          <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
        </div>
      </div>
    );
  }
}

export default App;
