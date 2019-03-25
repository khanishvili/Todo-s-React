import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    //const todos= this.props.todos;
    const todoListItems = todos.map(item => <li key={item}>{item}</li>);
    return <ul>{todoListItems}</ul>;
  }
}

export default TodoList;
