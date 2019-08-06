import React from "react";

const inlineBlockStyle = {
  display: 'inline-block'
};

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }

  handleChanges = e => {
    this.setState({
      item: e.target.value
    });
  }

  submitItem = e => {
    e.preventDefault();
    this.props.addTask(this.state.item);
    this.setState({
      item: ''
    })
  }

  clearTask = e => {
    e.preventDefault();
    this.props.clearCompleted();
  }

  render() {
    return (
      <>
        <form style={inlineBlockStyle} onSubmit={this.submitItem}>
          <input
            type="text"
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
          />
          <button className="btnAdd">Add Todo</button>
        </form>
        <button className="btnClear" onClick={this.clearTask}>Clear Completed</button>
      </>
    )
  }
}

export default TodoForm;
